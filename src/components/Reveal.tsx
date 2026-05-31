import { createElement, type CSSProperties, type ElementType, type ReactNode } from 'react'
import { useInView } from '../lib/useInView'

export type RevealVariant =
  | 'up'
  | 'down'
  | 'left'
  | 'right'
  | 'fade'
  | 'scale'
  | 'blur'
  | 'zoom'
  | 'clip'
  | 'wipe'
  | 'pop'

type Props = {
  children?: ReactNode
  variant?: RevealVariant
  /** ms delay before the reveal transition starts */
  delay?: number
  /** ms transition duration override */
  duration?: number
  as?: ElementType
  className?: string
  once?: boolean
  threshold?: number
  style?: CSSProperties
}

/**
 * Wraps content and plays an enter animation when it scrolls into view.
 * Animation is pure CSS (see index.css `.reveal--*`); this just toggles `is-in`.
 */
export function Reveal({
  children,
  variant = 'up',
  delay = 0,
  duration,
  as = 'div',
  className = '',
  once = true,
  threshold,
  style,
}: Props) {
  const { ref, inView } = useInView<HTMLElement>({ once, threshold })
  const css = {
    '--rv-delay': `${delay}ms`,
    ...(duration ? { '--rv-dur': `${duration}ms` } : {}),
    ...style,
  } as CSSProperties

  return createElement(
    as,
    {
      ref,
      className: `reveal reveal--${variant} ${inView ? 'is-in' : ''} ${className}`.trim(),
      style: css,
    },
    children,
  )
}
