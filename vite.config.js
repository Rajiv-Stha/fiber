import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'




// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['chunk-JNW3SU2Y.js?v=8aba547d']
  }
})
