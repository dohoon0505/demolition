import { useEffect, useState } from 'react'
import { asset } from '../lib/asset'

const iconSms = asset('assets/icon-sms-2.svg')

/**
 * Sticky bottom call-to-action that slides up after the hero scrolls away
 * and smooth-scrolls to the final application card. It hides itself once the
 * real application card is on screen so the two never overlap.
 */
export function FloatingCTA() {
  const [scrolled, setScrolled] = useState(false)
  const [applyVisible, setApplyVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 440)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()

    const apply = document.getElementById('apply')
    let io: IntersectionObserver | undefined
    if (apply && typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver(
        (entries) => setApplyVisible(entries[0]?.isIntersecting ?? false),
        { threshold: 0.2 },
      )
      io.observe(apply)
    }
    return () => {
      window.removeEventListener('scroll', onScroll)
      io?.disconnect()
    }
  }, [])

  const goToApply = () => {
    document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }

  const show = scrolled && !applyVisible

  return (
    <div className={`floating-cta ${show ? 'is-show' : ''}`}>
      <button type="button" className="floating-cta__btn btn-shine" onClick={goToApply}>
        <img src={iconSms} alt="" className="floating-cta__icon" />
        간편 수거신청 바로가기
      </button>
    </div>
  )
}
