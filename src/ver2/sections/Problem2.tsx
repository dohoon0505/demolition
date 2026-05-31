import { Reveal } from '../../components/Reveal'
import { CountUp } from '../../components/CountUp'
import { asset } from '../../lib/asset'
import './problem2.css'

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 7v5l3.4 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}
function WonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M7.5 9 10 15l2-3.8 2 3.8 2.5-6M7 11h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function Problem2() {
  return (
    <section className="v2-problem" aria-label="문제 제기">
      <Reveal as="span" variant="up" className="v2-eyebrow v2-eyebrow--center">
        Why
      </Reveal>

      <div className="v2-prob__intro">
        <Reveal as="p" variant="up" className="v2-prob__intro-1" delay={80}>
          개업을 <span className="v2-green-t">축하</span>받아서
        </Reveal>
        <Reveal as="p" variant="up" className="v2-prob__intro-2" delay={180}>
          너무 감사하지만..
        </Reveal>
      </div>

      <div className="v2-cost">
        <Reveal variant="up" className="v2-cost__card v2-card">
          <span className="v2-cost__ico">
            <ClockIcon />
          </span>
          <p className="v2-cost__txt">
            화환 5개를 <b>직접 처리</b>하는 경우, 분해하는 과정에만{' '}
            <em className="v2-cost__hl">
              <CountUp to={2} duration={1000} />시간 소요
            </em>
          </p>
        </Reveal>
        <Reveal variant="up" delay={110} className="v2-cost__card v2-card">
          <span className="v2-cost__ico">
            <WonIcon />
          </span>
          <p className="v2-cost__txt">
            종량제봉투+대형폐기물 스티커 합산 <b>화환 1개</b> 당 약{' '}
            <em className="v2-cost__hl">
              <CountUp to={5} duration={1000} />천 원 소요
            </em>
          </p>
        </Reveal>
      </div>

      <div className="v2-prob__statement">
        <Reveal as="p" variant="up" className="v2-prob__h">
          처리하기가
        </Reveal>
        <Reveal as="p" variant="up" className="v2-prob__h" delay={100}>
          매우 <span className="v2-accent-t">곤란</span>합니다.
        </Reveal>
      </div>

      <Reveal variant="clip" className="v2-prob__photo" duration={900}>
        <img src={asset('assets/neglect.jpg')} alt="처리하지 못해 방치된 개업 화환" />
      </Reveal>

      <div className="v2-prob__statement">
        <Reveal as="p" variant="up" className="v2-prob__h">
          처리가 곤란하여
        </Reveal>
        <Reveal as="p" variant="up" className="v2-prob__h" delay={100}>
          그대로 <span className="v2-accent-t">방치</span>해두면
        </Reveal>
      </div>

      {/* 과태료 notice (penalty) */}
      <Reveal variant="pop" className="v2-penalty">
        <span className="v2-penalty__label">과태료</span>
        <p className="v2-penalty__amount">
          최대 <CountUp to={150} duration={1300} />만원
        </p>
        <p className="v2-penalty__law">도로법 제61조(도로의 점용 허가) 및 제75조(도로의 금지 행위)</p>
      </Reveal>

      <Reveal as="p" variant="up" className="v2-prob__verdict">
        <span className="v2-accent-t">불법 적치물</span>이 됩니다
      </Reveal>
    </section>
  )
}
