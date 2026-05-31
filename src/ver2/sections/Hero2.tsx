import { Reveal } from '../../components/Reveal'
import { asset } from '../../lib/asset'
import { PricingCard } from '../components/PricingCard'
import { WARN } from '../content2'
import './hero2.css'

export function Hero2() {
  return (
    <section className="v2-hero">
      {/* 상단 경고 notice */}
      <div className="v2-notice">
        <span className="v2-notice__tag">주의</span>
        <span className="v2-notice__text">{WARN}</span>
      </div>

      <div className="v2-hero__intro">
        <Reveal as="span" variant="up" className="v2-eyebrow" delay={60}>
          Wreath · Pot Pick-up Service
        </Reveal>
        <div className="v2-hero__title">
          <Reveal as="p" variant="up" className="v2-hero__t1" delay={140}>
            개업 후 방치되는
          </Reveal>
          <Reveal as="p" variant="up" className="v2-hero__t2" delay={240}>
            화환<span className="v2-hero__dot">·</span>화분
          </Reveal>
          <Reveal as="p" variant="up" className="v2-hero__t3" delay={360}>
            신속하고 빠르게 <span className="v2-green-t">수거</span>
          </Reveal>
        </div>
      </div>

      <Reveal variant="up" className="v2-hero__photo" delay={220} duration={900}>
        <img src={asset('assets/hero-bg.jpg')} alt="개업 축하 화환·화분" />
      </Reveal>

      <Reveal variant="up" className="v2-hero__price-wrap" threshold={0.12}>
        <PricingCard buttonLabel="간편 수거신청">
          <p className="v2-price__note">수거 장소, 수량을 기재하여 문의주세요!</p>
        </PricingCard>
      </Reveal>
    </section>
  )
}
