import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Configuración de plugins de desarrollo y build
export default defineConfig({
  plugins: [react(), tailwindcss()],
})