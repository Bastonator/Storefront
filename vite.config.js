import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/search': 'http://51.20.76.251',
    }
  },

  plugins: [react()],
})
