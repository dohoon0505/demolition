import { type ReactNode, type PointerEvent, useRef } from 'react'

type Props = {
  children: ReactNode
  className?: string
  variant?: 'orange' | 'white' | 'lime' | 'green' | 'dark' | 'coral'
  onClick?: () => void
  ariaLabel?: string
}

/**
 * Primary call-to-action button with three flourishes:
 *  - a periodic auto "shine" sweep (CSS),
 *  - a press scale-down (CSS :active),
 *  - a material-style ripple spawned at the pointer (JS).
 */
export function CTAButton({ children, className = '', variant = 'orange', onClick, ariaLabel }: Props) {
  const ref = useRef<HTMLButtonElement>(null)

  const spawnRipple = (e: PointerEvent<HTMLButtonElement>) => {
    const btn = ref.current
    if (!btn) return
    const rect = btn.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const ripple = document.createElement('span')
    ripple.className = 'ripple'
    ripple.style.width = ripple.style.height = `${size}px`
    ripple.style.left = `${e.clientX - rect.left - size / 2}px`
    ripple.style.top = `${e.clientY - rect.top - size / 2}px`
    ripple.addEventListener('animationend', () => ripple.remove())
    btn.appendChild(ripple)
  }

  return (
    <button
      ref={ref}
      type="button"
      aria-label={ariaLabel}
      className={`cta-btn cta-btn--${variant} btn-shine ${className}`.trim()}
      onPointerDown={spawnRipple}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
