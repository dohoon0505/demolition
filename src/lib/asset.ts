// Resolve a public/ asset against Vite's base URL so paths work both at the
// dev root ("/") and under the GitHub Pages subpath ("/demolition/").
// Usage: asset('assets/hero-bg.jpg')  ->  `${BASE_URL}assets/hero-bg.jpg`
export const asset = (path: string): string =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
