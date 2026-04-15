import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import utwm from 'unplugin-tailwindcss-mangle/vite';
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default defineConfig({
  base:"/",
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@components": path.resolve(__dirname, "src/components"),
      "@context": path.resolve(__dirname, "src/context"),
      "@locales": path.resolve(__dirname, "src/locales"),
      "@utils": path.resolve(__dirname, "src/utils"),
      "@lib": path.resolve(__dirname, "src/lib"),
    },
  },
  plugins: [react(), 
    tailwindcss(),
    utwm()
  ],
  define: {
    "process.env":{}
  },
  preview: {
    allowedHosts: ['']
  }
})
