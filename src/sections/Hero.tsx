import { useEffect, useRef } from 'react'
import { Words } from '../components/Words'
import { Reveal } from '../components/Reveal'
import { CountUp } from '../components/CountUp'
import { CTAButton } from '../components/CTAButton'
import { asset } from '../lib/asset'
import './hero.css'

const WARN_TEXT =
  '화환 방치 시 과태료 최대 150만원 (도로법 제61조(도로의 점용 허가) 및 제75조(도로의 금지 행위))'

const PRICES = [
  { label: '수량 0개~10개', value: 2 },
  { label: '수량 10개~24개', value: 3 },
  { label: '수량 24개~48개', value: 5 },
]

export function Hero() {
  const bgRef = useRef<HTMLDivElement>(null)

  // Subtle parallax on the hero background.
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      if (raf) return
      raf = requestAnimationFrame(() => {
        raf = 0
        const y = window.scrollY
        if (bgRef.current && y < 760) {
          // 약한 패럴랙스. .hero__bg 가 위아래 여유(-8%)를 가지므로 박스를 항상 덮음
          bgRef.current.style.transform = `translate3d(0, ${y * 0.08}px, 0) scale(1.05)`
        }
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="hero">
      {/* 배경 이미지 + 오버레이를 하나의 박스로 클립 → parallax 이동 시에도
          이미지가 어두운 영역 밖으로 새지 않음 */}
      <div className="hero__media" aria-hidden="true">
        <div
          className="hero__bg"
          ref={bgRef}
          style={{ backgroundImage: `url(${asset('assets/hero-bg.jpg')})` }}
        />
        <div className="hero__overlay" />
      </div>

      {/* 상단 경고 바 (마퀴) */}
      <div className="hero__warn">
        <div className="hero__warn-track">
          <span className="hero__warn-text">{WARN_TEXT}</span>
          <span className="hero__warn-dot" aria-hidden="true" />
          <span className="hero__warn-text" aria-hidden="true">
            {WARN_TEXT}
          </span>
          <span className="hero__warn-dot" aria-hidden="true" />
        </div>
      </div>

      {/* 타이틀 */}
      <div className="hero__title">
        <Words
          className="hero__title-main"
          stagger={72}
          startDelay={140}
          lines={[[{ t: '개업 후 방치되는' }], [{ t: '화환·화분' }]]}
        />
        <Words
          className="hero__title-sub"
          stagger={62}
          startDelay={720}
          lines={[[{ t: '신속하고 빠르게 수거', c: 'tx-lime' }]]}
        />
      </div>

      {/* 영수증 카드 */}
      <Reveal variant="up" delay={920} duration={840} className="hero__receipt-wrap">
        <div className="receipt receipt--hero">
          <img src={asset('assets/receipt1.png')} alt="" className="receipt__paper" />

          <div className="receipt__head">
            <img src={asset('assets/icon-flower-18.svg')} alt="" className="receipt__flower" />
            <span className="receipt__title">화환·화분수거</span>
          </div>
          <p className="receipt__sub">신청 당일 ~ 2일 내 수거 100% 완료!</p>

          <div className="receipt__rows">
            {PRICES.map((p) => (
              <div className="receipt__row" key={p.label}>
                <span className="receipt__row-label">{p.label}</span>
                <span className="receipt__row-value">
                  <CountUp to={p.value} duration={1100} />
                  만원
                </span>
              </div>
            ))}
            <div className="receipt__row">
              <span className="receipt__row-label">48개 이상 및 화분</span>
              <span className="receipt__row-value receipt__row-value--alt">개별문의</span>
            </div>
          </div>

          <div className="receipt__cta">
            <CTAButton variant="orange" className="receipt__btn" ariaLabel="간편 수거신청">
              <img src={asset('assets/icon-sms-1.svg')} alt="" className="receipt__btn-icon" />
              간편 수거신청
            </CTAButton>
            <p className="receipt__note">수거 장소, 수량을 기재하여 문의주세요!</p>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
