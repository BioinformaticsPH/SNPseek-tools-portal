import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// base: '/dev/' targets the temporary staging path served by Nginx at /dev/.
// Change to '/' when promoting to production root.
export default defineConfig({
  base: '/dev/',
  plugins: [
    tailwindcss(),
    react(),
  ],
})
