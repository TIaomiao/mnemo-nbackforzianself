import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(), // 这里的 UnoCSS 插件是项目美化样式的核心，必须开启
  ],
  // 这里的路径必须和你的仓库名 mnemo-nbackforzianself 一致
  base: '/mnemo-nbackforzianself/', 
})
