# 화환·화분 수거 서비스 — 인터랙티브 모바일 랜딩

개업 후 방치되는 화환·화분을 폐기물 전문가가 **신청 2일 내 100% 수거**하는 서비스의 모바일 랜딩 페이지입니다.
[Figma 디자인](https://www.figma.com/design/Wevw8AmgqEqVvWsSOnqGQG/?node-id=1-3)을 기반으로 React로 구현했으며, 디자인 일치도 98%+를 목표로 했습니다.

## 기술 스택

- **React 18 + TypeScript + Vite**
- 순수 CSS (디자인 토큰 + 섹션별 모듈, Tailwind 미사용)
- 폰트: `esamanru`(디스플레이) · `Pretendard`(본문)

## 특징

- **반응형 프레임** — 모바일 풀폭, PC 접속 시 최대 **460px** 중앙 정렬 (easysite 패턴)
- **다양하고 화려한 인터랙션** (web_design_system 인터랙션 카탈로그 차용)
  - 스크롤 진입 reveal — 단어별 스태거 / 라이즈 / 클립 / 좌→우 와이프
  - 숫자 카운트업 — 가격(2·3·5만원), 과태료, 100% (spring/expo easing)
  - 히어로 배경 패럴랙스
  - 상단 스크롤 진행 바 (lime→orange 그라데이션)
  - 상단 경고 바 마퀴
  - 플로팅 CTA — 히어로 이후 슬라이드업, 신청 카드 노출 시 자동 숨김
  - 버튼 shine sweep + material ripple + press scale
  - 이미지 hover zoom, 사례 카드 hover lift
- **접근성** — `prefers-reduced-motion` 대응, 시맨틱 마크업, focus-visible
- **성능** — 이미지 최적화로 에셋 ~10MB → ~0.9MB (sharp, mozjpeg)

## 실행

```bash
npm install
npm run dev        # 개발 서버 (http://localhost:5173)
npm run build      # 프로덕션 빌드 → dist/
npm run preview    # 빌드 결과 미리보기
npm run typecheck  # 타입 체크
```

## 구조

```
index.html
src/
  main.tsx / App.tsx
  index.css                 디자인 토큰 · 프레임 · 인터랙션 유틸 · 키프레임
  sections/                 Hero · Problem · Solution (+ 각 .css)
  components/               Reveal · Words · CountUp · CTAButton · ScrollProgress · FloatingCTA
  lib/                      useInView · easing
public/
  assets/                   Figma 추출 에셋 (최적화 완료)
  favicon.svg
scripts/
  optimize-images.mjs       에셋 최적화 (1회성)
```

## 디자인 토큰

| 토큰 | 값 |
|------|-----|
| lime | `#d5ff03` |
| orange | `#ff6600` |
| red | `#de2927` |
| ink | `#222` / `#333` / `#555` |
| 프레임 최대폭 | `460px` |
