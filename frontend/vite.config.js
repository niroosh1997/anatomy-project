import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => ({
  plugins: [react()],
  // GitHub Pages serves this repo from /anatomy-project/, not the domain root.
  // Only applied to builds, so `npm run dev` stays at localhost:5173/ as before.
  base: command === 'build' ? '/anatomy-project/' : '/',
}))
