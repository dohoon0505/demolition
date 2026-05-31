import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project repo from a subpath, so the production
// build is based at /demolition/. Dev server stays at root for convenience.
// Multi-page: ver1 at "/", ver2 (alt design) at "/ver2/".
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/demolition/' : '/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        ver2: 'ver2/index.html',
      },
    },
  },
}))
