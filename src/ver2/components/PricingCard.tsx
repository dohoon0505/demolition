import { type ReactNode } from 'react'
import { CountUp } from '../../components/CountUp'
import { CTAButton } from '../../components/CTAButton'
import { PRICE_ROWS } from '../content2'

function Leaf() {
  return (
    <svg className="v2-price__leaf" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.5C7.2 6.4 5 10.4 5 14.2a7 7 0 0 0 14 0c0-3.8-2.2-7.8-7-11.7Z" />
    </svg>
  )
}

type Props = {
  buttonLabel: string
  id?: string
  children?: ReactNode
}

/** Clean pricing table card (ver2) — same price content, editorial styling. */
export function PricingCard({ buttonLabel, id, children }: Props) {
  return (
    <div className="v2-price v2-card" id={id}>
      <div className="v2-price__head">
        <span className="v2-price__badge">
          <Leaf />
        </span>
        <div>
          <p className="v2-price__title">화환·화분수거</p>
          <p className="v2-price__sub">
            신청 당일 ~ 2일 내 수거 <b>100%</b> 완료!
          </p>
        </div>
      </div>

      <div className="v2-price__rows">
        {PRICE_ROWS.map((r) => (
          <div className="v2-price__row" key={r.label}>
            <span className="v2-price__label">{r.label}</span>
            <span className="v2-price__dots" aria-hidden="true" />
            <span className="v2-price__value">
              <CountUp to={r.value} duration={1100} />
              {r.suffix}
            </span>
          </div>
        ))}
        <div className="v2-price__row">
          <span className="v2-price__label">48개 이상 및 화분</span>
          <span className="v2-price__dots" aria-hidden="true" />
          <span className="v2-price__value v2-price__value--alt">개별문의</span>
        </div>
      </div>

      <CTAButton variant="green" className="v2-price__btn" ariaLabel={buttonLabel}>
        <svg viewBox="0 0 20 16" className="v2-price__btn-ico" fill="none" aria-hidden="true">
          <rect x="1" y="1.5" width="18" height="13" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
          <path d="m2 3 8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {buttonLabel}
      </CTAButton>

      {children}
    </div>
  )
}
