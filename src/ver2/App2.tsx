import { useEffect, useState } from 'react'
import { Hero2 } from './sections/Hero2'
import { Problem2 } from './sections/Problem2'
import { Solution2 } from './sections/Solution2'

/** Thin reading-progress bar. */
function V2Progress() {
  const [p, setP] = useState(0)
  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const d = document.documentElement
      const max = d.scrollHeight - d.clientHeight
      setP(max > 0 ? Math.min(1, d.scrollTop / max) : 0)
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    update()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])
  return (
    <div className="v2-progress" aria-hidden="true">
      <div className="v2-progress__fill" style={{ transform: `scaleX(${p})` }} />
    </div>
  )
}

/** Sticky bottom CTA — appears after the hero, hides when the apply card shows. */
function V2FloatingCTA() {
  const [scrolled, setScrolled] = useState(false)
  const [applyVisible, setApplyVisible] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 480)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    const apply = document.getElementById('v2-apply')
    let io: IntersectionObserver | undefined
    if (apply && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver((e) => setApplyVisible(e[0]?.isIntersecting ?? false), {
        threshold: 0.2,
      })
      io.observe(apply)
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      io?.disconnect()
    }
  }, [])
  const go = () =>
    document.getElementById('v2-apply')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  return (
    <div className={`v2-fab ${scrolled && !applyVisible ? 'is-show' : ''}`}>
      <button type="button" className="v2-fab__btn btn-shine" onClick={go}>
        간편 수거신청 바로가기
      </button>
    </div>
  )
}

export default function App2() {
  return (
    <div className="v2-app">
      <V2Progress />
      <main className="v2-frame">
        <Hero2 />
        <Problem2 />
        <Solution2 />
        <footer className="v2-footer">
          <a className="v2-verswitch" href={import.meta.env.BASE_URL}>
            ← 기본(ver.1) 디자인 보기
          </a>
        </footer>
      </main>
      <V2FloatingCTA />
    </div>
  )
}
