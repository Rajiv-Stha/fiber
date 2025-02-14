import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



// https://vitejs.dev/config/
export default defineConfig({
  
  
  server: {
    host: true,  // This exposes the network
    port: 5173,  // Optional, specify a custom port if needed
  },
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['chunk-JNW3SU2Y.js?v=8aba547d']
  }
})
