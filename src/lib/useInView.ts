import { useEffect, useRef, useState } from 'react'

type Options = {
  threshold?: number
  rootMargin?: string
  /** Reveal once and stop observing (default). Set false to toggle in/out. */
  once?: boolean
}

/**
 * Tracks whether an element has scrolled into the viewport.
 * Returns a ref to attach and the current visibility boolean.
 */
export function useInView<T extends HTMLElement = HTMLElement>(options: Options = {}) {
  const { threshold = 0, rootMargin = '0px 0px -12% 0px', once = true } = options
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // SSR / very old browsers: just show it.
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setInView(true)
            if (once) io.unobserve(entry.target)
          } else if (!once) {
            setInView(false)
          }
        }
      },
      { threshold, rootMargin },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold, rootMargin, once])

  return { ref, inView }
}
