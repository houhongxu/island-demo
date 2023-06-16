import { defineConfig } from 'islandjs'

export default defineConfig({
  title: '我的博客',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '指南', link: '/guide/1' },
    ],
  },
})
