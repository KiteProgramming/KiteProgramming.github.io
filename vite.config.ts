import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Served from the domain root (kiteprogramming.github.io), so base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react()],
})
