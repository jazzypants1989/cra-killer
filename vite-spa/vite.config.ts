import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  publicDir: "../rr6-cra/public",
  server: {
    port: 3000,
  },
  plugins: [react()]
})
