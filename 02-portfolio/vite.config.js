import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
});


// // https://vitejs.dev/config/
// export default defineConfig({
//   base:'/personal-porfolio/',
//   plugins: [react()],
// })
