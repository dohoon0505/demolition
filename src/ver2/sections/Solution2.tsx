import { Reveal } from '../../components/Reveal'
import { CountUp } from '../../components/CountUp'
import { asset } from '../../lib/asset'
import { PricingCard } from '../components/PricingCard'
import { CASES } from '../content2'
import './solution2.css'

export function Solution2() {
  return (
    <section className="v2-solution" aria-label="해결책">
      <div className="v2-sol__head">
        <Reveal as="span" variant="up" className="v2-eyebrow v2-eyebrow--center">
          Solution
        </Reveal>
        <Reveal variant="pop" className="v2-sol__badge">
          수거 신청 2일 내 <CountUp to={100} duration={1200} />% 수거
        </Reveal>
        <div className="v2-sol__title">
          <Reveal as="p" variant="up" className="v2-sol__title-line" delay={80}>
            폐기물 <span className="v2-sol__hl">전문가</span>에게
          </Reveal>
          <Reveal as="p" variant="up" className="v2-sol__title-line" delay={170}>
            <span className="v2-sol__hl">수거</span>를 맡겨주세요!
          </Reveal>
        </div>
      </div>

      <div className="v2-sol__cases">
        {CASES.map((c, i) => (
          <Reveal variant="up" delay={i * 110} className="v2-case" key={c.name}>
            <div className="v2-case__photo">
              <img src={asset(c.img)} alt={c.name} />
            </div>
            <div className="v2-case__foot">
              <span className="v2-case__name">{c.name}</span>
              <span className="v2-case__tag">화환 수거 전</span>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal variant="up" className="v2-sol__price-wrap" threshold={0.12}>
        <PricingCard buttonLabel="간편 수거신청(문자발송)" id="v2-apply">
          <p className="v2-price__free">타 업체보다 비용이 높을 경우 전액 무료</p>
        </PricingCard>
      </Reveal>

      <Reveal as="p" variant="fade" className="v2-sol__disclaimer" delay={100}>
        수거 신청 이후 직접 처리 하거나 타 업체를 이용하신 경우, 신청을 취소 해주셔야 출장 비용이 청구되지
        않습니다.
      </Reveal>
    </section>
  )
}
