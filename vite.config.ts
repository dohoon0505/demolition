import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages serves this project repo from a subpath, so the production
// build is based at /demolition/. Dev server stays at root for convenience.
// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  base: command === 'build' ? '/demolition/' : '/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
}))
