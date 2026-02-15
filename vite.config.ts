import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      "@assets":"/src/context",
      "@components":"/src/components",
      "@context":"/src/context",
    }
  },
  plugins: [react(),tailwindcss()],
})
