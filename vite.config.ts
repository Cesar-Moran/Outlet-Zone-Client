import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://outletzone-server.onrender.com/', // o tu nueva URL en Render
        changeOrigin: true,
        secure: false,      
        ws: true,
      },
    },
  },
})
