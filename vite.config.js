import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(), // 开启 UnoCSS 插件，解决之前 image_bd7a0d.jpg 里的报错
  ],
  // 必须确保 base 路径和你现在的仓库名 mnemo-nbackforzianself 一致
  base: '/mnemo-nbackforzianself/', 
})
