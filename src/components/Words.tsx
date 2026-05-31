import { type CSSProperties } from 'react'
import { useInView } from '../lib/useInView'

export type WordSeg = {
  /** text of the segment (may contain spaces → split into words) */
  t: string
  /** optional color/utility class applied to each word of this segment */
  c?: string
}

type Props = {
  /** array of lines; each line is an array of colored segments */
  lines: WordSeg[][]
  className?: string
  /** ms between consecutive words */
  stagger?: number
  /** ms delay before the first word */
  startDelay?: number
  variant?: 'up' | 'blur' | 'rise'
  threshold?: number
  once?: boolean
  style?: CSSProperties
}

/**
 * Word-by-word staggered reveal for headlines — homage to web_design_system's
 * scroll-text-reveal "word-fade" / "line-slide" patterns, adapted to an
 * on-enter trigger so it feels alive without hijacking the scroll.
 * Supports inline colored segments (e.g. a red or lime emphasis word).
 */
export function Words({
  lines,
  className = '',
  stagger = 52,
  startDelay = 0,
  variant = 'up',
  threshold = 0.32,
  once = true,
  style,
}: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>({ threshold, once })
  let idx = 0

  return (
    <span
      ref={ref}
      className={`words words--${variant} ${inView ? 'is-in' : ''} ${className}`.trim()}
      style={style}
    >
      {lines.map((line, li) => (
        <span className="words__line" key={li}>
          {line.map((seg, si) => {
            const ws = seg.t.split(' ')
            return ws.map((w, wi) => {
              const delay = startDelay + idx++ * stagger
              return (
                <span className="words__wrap" key={`${li}-${si}-${wi}`}>
                  <span
                    className={`words__w ${seg.c ?? ''}`.trim()}
                    style={{ transitionDelay: `${delay}ms` }}
                  >
                    {w}
                  </span>
                  {wi < ws.length - 1 ? ' ' : ''}
                </span>
              )
            })
          })}
        </span>
      ))}
    </span>
  )
}
