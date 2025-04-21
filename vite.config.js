import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/search': 'http://16.171.17.83',
    }
  },

  plugins: [react()],
})
