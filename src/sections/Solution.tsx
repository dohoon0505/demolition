import { Reveal } from '../components/Reveal'
import { CountUp } from '../components/CountUp'
import { CTAButton } from '../components/CTAButton'
import { asset } from '../lib/asset'
import './solution.css'

const CASES = [
  { img: asset('assets/before-izakaya.jpg'), name: "이자카야 ‘우규’ 개업화환" },
  { img: asset('assets/before-flowerlids.jpg'), name: "삼겹전문점 ‘꽃뚜껑’ 개업화환" },
]

const PRICES = [
  { label: '수량 0개~10개', value: 2 },
  { label: '수량 10개~24개', value: 3 },
  { label: '수량 24개~48개', value: 5 },
]

export function Solution() {
  return (
    <section className="solution" aria-label="해결책">
      {/* 1. 헤드라인 */}
      <div className="sol__head">
        <Reveal variant="pop" className="sol__badge" threshold={0.4}>
          수거 신청 2일 내 <CountUp to={100} duration={1200} />% 수거
        </Reveal>
        <div className="sol__title">
          <Reveal as="p" variant="up" className="sol__title-line" delay={0}>
            <span className="fw-medium">폐기물 </span>
            <span className="fw-bold tx-lime">전문가</span>
            <span className="fw-medium">에게</span>
          </Reveal>
          <Reveal as="p" variant="up" className="sol__title-line" delay={130}>
            <span className="fw-bold tx-lime">수거</span>
            <span className="fw-medium">를 맡겨주세요!</span>
          </Reveal>
        </div>
      </div>

      {/* 2. Before 사례 카드 */}
      <div className="sol__cases">
        {CASES.map((c, i) => (
          <Reveal variant="up" delay={i * 110} className="case-card" key={c.name}>
            <div className="case-card__photo">
              <img src={c.img} alt={c.name} className="case-card__img" />
            </div>
            <div className="case-card__foot">
              <span className="case-card__name">{c.name}</span>
              <span className="case-card__tag">화환 수거 전</span>
            </div>
          </Reveal>
        ))}
      </div>

      {/* 3. 구분선 */}
      <Reveal variant="wipe" className="sol__divider" duration={900} />


      {/* 4. 영수증 + 신청 */}
      <div className="sol__apply-wrap" id="apply">
        <Reveal variant="up" className="receipt receipt--solution" threshold={0.25}>
          <img src={asset('assets/receipt2.png')} alt="" className="receipt__paper" />

          <div className="receipt__head receipt__head--sol">
            <div className="receipt__head-row">
              <img src={asset('assets/icon-flower-20.svg')} alt="" className="receipt__flower receipt__flower--lg" />
              <span className="receipt__title receipt__title--lg">화환·화분수거</span>
            </div>
            <p className="receipt__sub receipt__sub--sol">신청 당일 ~ 2일 내 수거 100% 완료!</p>
          </div>

          <div className="receipt__rows receipt__rows--sol">
            {PRICES.map((p) => (
              <div className="receipt__row" key={p.label}>
                <span className="receipt__row-label receipt__row-label--lg">{p.label}</span>
                <span className="receipt__row-value receipt__row-value--lg">
                  <CountUp to={p.value} duration={1100} />
                  만원
                </span>
              </div>
            ))}
            <div className="receipt__row">
              <span className="receipt__row-label receipt__row-label--lg">48개 이상 및 화분</span>
              <span className="receipt__row-value receipt__row-value--lg">개별문의</span>
            </div>
          </div>
        </Reveal>

        <div className="sol__apply">
          <CTAButton variant="white" className="sol__apply-btn" ariaLabel="간편 수거신청 문자발송">
            <img src={asset('assets/icon-sms-2.svg')} alt="" className="sol__apply-icon" />
            간편 수거신청(문자발송)
          </CTAButton>
          <Reveal as="p" variant="fade" className="sol__free" delay={120}>
            타 업체보다 비용이 높을 경우 전액 무료
          </Reveal>
          <p className="sol__disclaimer">
            수거 신청 이후 직접 처리 하거나 타 업체를 이용하신 경우, 신청을 취소 해주셔야 출장 비용이 청구되지 않습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
