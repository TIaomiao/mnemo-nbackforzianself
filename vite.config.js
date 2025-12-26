import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(), 
  ],
  // 必须确保 base 路径和你现在的仓库名完全一致
  base: '/mnemo-nbackforzianself/', 
})
