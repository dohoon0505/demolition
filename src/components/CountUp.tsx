import { useEffect, useRef, useState } from 'react'
import { useInView } from '../lib/useInView'
import { easeOutExpo, springEase, prefersReducedMotion } from '../lib/easing'

type Props = {
  to: number
  from?: number
  duration?: number
  decimals?: number
  separator?: string
  prefix?: string
  suffix?: string
  className?: string
  easing?: 'expo' | 'spring'
  threshold?: number
}

function format(value: number, decimals: number, separator: string): string {
  const fixed = value.toFixed(decimals)
  const [intPart, decPart] = fixed.split('.')
  const grouped = intPart.replace(/\B(?=(\d{3})+(?!\d))/g, separator)
  return decPart ? `${grouped}.${decPart}` : grouped
}

/**
 * Counts a number up from `from` to `to` once it scrolls into view.
 * Uses tabular-nums so the width doesn't jitter while animating.
 */
export function CountUp({
  to,
  from = 0,
  duration = 1500,
  decimals = 0,
  separator = ',',
  prefix = '',
  suffix = '',
  className = '',
  easing = 'expo',
  threshold = 0.6,
}: Props) {
  const { ref, inView } = useInView<HTMLSpanElement>({ once: true, threshold })
  const [value, setValue] = useState(from)
  const done = useRef(false)

  useEffect(() => {
    if (!inView || done.current) return
    if (prefersReducedMotion()) {
      setValue(to)
      done.current = true
      return
    }
    const ease = easing === 'spring' ? springEase : easeOutExpo
    let raf = 0
    let start = 0
    const step = (ts: number) => {
      if (!start) start = ts
      const p = Math.min(1, (ts - start) / duration)
      setValue(from + (to - from) * ease(p))
      if (p < 1) {
        raf = requestAnimationFrame(step)
      } else {
        setValue(to)
        done.current = true
      }
    }
    raf = requestAnimationFrame(step)
    return () => cancelAnimationFrame(raf)
  }, [inView, to, from, duration, easing])

  return (
    <span ref={ref} className={`countup ${className}`.trim()}>
      {prefix}
      {format(value, decimals, separator)}
      {suffix}
    </span>
  )
}
