// One-off asset optimizer. Run with: node scripts/optimize-images.mjs
// (sharp is installed transiently with `npm install --no-save sharp`.)
import sharp from 'sharp'
import { statSync, unlinkSync, existsSync } from 'node:fs'

const dir = 'public/assets'
const kb = (n) => Math.round(n / 1024) + 'KB'

// Photos → resized mozjpeg. (png sources deleted afterward.)
const toJpeg = [
  { src: 'before-izakaya.png', out: 'before-izakaya.jpg', width: 1000 },
  { src: 'before-flowerlids.png', out: 'before-flowerlids.jpg', width: 1000 },
  { src: 'neglect.png', out: 'neglect.jpg', width: 1080 },
]
// Overwrite in place (keep filename referenced by CSS).
const inPlace = [{ src: 'hero-bg.jpg', width: 1000, quality: 80 }]

for (const j of toJpeg) {
  const before = statSync(`${dir}/${j.src}`).size
  const info = await sharp(`${dir}/${j.src}`)
    .resize({ width: j.width, withoutEnlargement: true })
    .jpeg({ quality: 82, mozjpeg: true })
    .toFile(`${dir}/${j.out}`)
  unlinkSync(`${dir}/${j.src}`)
  console.log(`${j.src} (${kb(before)}) → ${j.out} ${info.width}x${info.height} (${kb(info.size)})`)
}

for (const j of inPlace) {
  const before = statSync(`${dir}/${j.src}`).size
  const buf = await sharp(`${dir}/${j.src}`)
    .resize({ width: j.width, withoutEnlargement: true })
    .jpeg({ quality: j.quality, mozjpeg: true })
    .toBuffer()
  const { writeFileSync } = await import('node:fs')
  writeFileSync(`${dir}/${j.src}`, buf)
  console.log(`${j.src} (${kb(before)}) → ${j.src} (${kb(buf.length)})`)
}

console.log('done')
