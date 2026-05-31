import { Reveal } from '../components/Reveal'
import { CountUp } from '../components/CountUp'
import { asset } from '../lib/asset'
import './problem.css'

export function Problem() {
  return (
    <section className="problem" aria-label="문제 제기">
      {/* 1. 축하받아서 너무 감사하지만 */}
      <div className="problem__intro">
        <div className="problem__heading">
          <Reveal as="p" variant="up" className="ph-line" delay={0}>
            개업을 <span className="tx-lime">축하</span>받아서
          </Reveal>
          <Reveal as="p" variant="up" className="ph-line tx-dim" delay={130}>
            너무 감사하지만..
          </Reveal>
        </div>

        {/* 비용 카드 */}
        <Reveal variant="pop" className="cost-card" threshold={0.35}>
          <p className="cost-card__line">
            <span className="fw-light">화환 5개를 </span>
            <span className="fw-medium">직접 처리</span>
            <span className="fw-light">하는 경우,</span>
            <br />
            <span className="fw-medium">분해하는 과정</span>
            <span className="fw-light">에만 </span>
            <span className="fw-bold tx-red">
              <CountUp to={2} duration={1000} />
              시간 소요
            </span>
          </p>
          <span className="cost-card__divider" aria-hidden="true" />
          <p className="cost-card__line">
            <span className="fw-light">종량제봉투+대형폐기물 스티커 합산</span>
            <br />
            <span className="fw-bold">화환 1개</span>
            <span className="fw-light"> 당 약 </span>
            <span className="fw-bold tx-red">
              <CountUp to={5} duration={1000} />
              천 원 소요
            </span>
          </p>
        </Reveal>

        <div className="problem__heading">
          <Reveal as="p" variant="up" className="ph-line" delay={0}>
            처리하기가
          </Reveal>
          <Reveal as="p" variant="up" className="ph-line" delay={120}>
            매우 <span className="tx-red">곤란</span>합니다.
          </Reveal>
        </div>
      </div>

      {/* 2. 방치 이미지 */}
      <Reveal variant="clip" className="problem__photo problem__photo--neglect" duration={900}>
        <img src={asset('assets/neglect.jpg')} alt="처리하지 못해 방치된 개업 화환" className="problem__photo-img" />
      </Reveal>

      {/* 3. 그대로 방치해두면 */}
      <div className="problem__heading">
        <Reveal as="p" variant="up" className="ph-line" delay={0}>
          처리가 곤란하여
        </Reveal>
        <Reveal as="p" variant="up" className="ph-line" delay={120}>
          그대로 <span className="tx-red">방치</span>해두면
        </Reveal>
      </div>

      {/* 4. 불법 적치물 이미지 */}
      <Reveal variant="clip" className="problem__photo problem__photo--fine" duration={900}>
        <img src={asset('assets/fine.png')} alt="불법 적치물이 된 화환" className="problem__photo-img" />
      </Reveal>

      {/* 5. 불법 적치물이 됩니다 */}
      <Reveal as="p" variant="pop" className="problem__verdict" threshold={0.5}>
        <span className="tx-red">불법 적치물</span>
        <span>이 됩니다</span>
      </Reveal>
    </section>
  )
}
