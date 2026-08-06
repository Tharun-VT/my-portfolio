import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// base is set for GitHub Pages deployment at /my-portfolio/
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react(), tailwindcss()],
})
