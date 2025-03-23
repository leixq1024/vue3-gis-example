import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  server: {
    proxy: {
      '/tdt': {
        target: 'http://t0.tianditu.gov.cn',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/tdt/, '')
      }
    }
  }
})
