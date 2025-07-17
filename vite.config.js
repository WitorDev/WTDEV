import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["react-scroll"],
  },
  plugins: [react(), tailwindcss()],
  build: {
    // rollupOptions: {
    //   external: ['react-scroll']
    // },
    commonjsOptions: {
      include: [/react-scroll/, /node_modules/],
    },
  }

})