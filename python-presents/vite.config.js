// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')
import { viteStaticCopy } from 'vite-plugin-static-copy';

module.exports = defineConfig({
  base: "/PythonPresents/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        nested: resolve(__dirname, 'presents/module1/lesson1/index.html')
      }
    },
  },
  plugins: [
      viteStaticCopy({
        targets: [
          {
            src: 'presents/module1/lesson1/code',
            dest: 'presents/module1/lesson1'
          }
      ]
    })
  ]
})