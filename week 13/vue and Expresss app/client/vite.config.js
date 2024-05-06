import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      //request to http://localhost:5173 to go to https://localhost: 3000/wyr
      '/wyr': 'http://localhost:3000/'
    }
  }
})
