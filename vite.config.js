import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  base: '/pinkoi/',
  plugins: [react()],
  assetsInclude: ['**/*.png'],
})

