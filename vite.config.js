import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(), 
  ],
  // 必须对应你的仓库名，且两头都有斜杠
  base: '/mnemo-nbackforzianself/', 
})
