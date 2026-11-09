import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages publica el sitio en https://<usuario>.github.io/<repositorio>/,
  // así que todas las rutas de archivos (JS, CSS, favicon) deben empezar con ese prefijo.
  base: '/supermercado-diego-cruz-PFY2202/',
  plugins: [
    react(),
    tailwindcss()
  ],
})