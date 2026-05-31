// Shared copy for ver2 — identical wording to ver1 (content 100% preserved).

export const WARN =
  '화환 방치 시 과태료 최대 150만원 (도로법 제61조(도로의 점용 허가) 및 제75조(도로의 금지 행위))'

export const PRICE_ROWS = [
  { label: '수량 0개~10개', value: 2, suffix: '만원' as const },
  { label: '수량 10개~24개', value: 3, suffix: '만원' as const },
  { label: '수량 24개~48개', value: 5, suffix: '만원' as const },
]
// 4번째 행은 값이 텍스트('개별문의')라 컴포넌트에서 직접 렌더링

export const CASES = [
  { img: 'assets/before-izakaya.jpg', name: '이자카야 ‘우규’ 개업화환' },
  { img: 'assets/before-flowerlids.jpg', name: '삼겹전문점 ‘꽃뚜껑’ 개업화환' },
]
