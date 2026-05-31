// Shared easing functions + motion helpers.
// springEase is borrowed from web_design_system's number-counter/spring-overshoot demo.

export const easeOutExpo = (t: number): number => (t >= 1 ? 1 : 1 - Math.pow(2, -10 * t))

export const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3)

export const easeInOutCubic = (t: number): number =>
  t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2

// Damped spring with a touch of overshoot — great for count-ups & pops.
export function springEase(t: number): number {
  const w = 4.5 * Math.PI
  return 1 - Math.exp(-6 * t) * Math.cos(w * t)
}

export const clamp01 = (v: number): number => Math.max(0, Math.min(1, v))

export const prefersReducedMotion = (): boolean =>
  typeof window !== 'undefined' &&
  typeof window.matchMedia === 'function' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
