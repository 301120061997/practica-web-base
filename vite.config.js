import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  server: {
    host: true,
    port: 5173,
    // Necesario en Codespaces: la vista previa llega con una dirección *.app.github.dev
    allowedHosts: true,
  },
})
