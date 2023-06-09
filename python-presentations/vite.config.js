// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')
import { viteStaticCopy } from 'vite-plugin-static-copy';

module.exports = defineConfig({
  base: "/PythonPresentations/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        lesson1_1: resolve(__dirname, 'presentations/module1/lesson1/index.html'),
        lesson1_2: resolve(__dirname, 'presentations/module1/lesson2/index.html'),
        lesson1_3_4: resolve(__dirname, 'presentations/module1/lesson3-4/index.html'),
        lesson1_5: resolve(__dirname, 'presentations/module1/lesson5/index.html'),
        lesson1_6: resolve(__dirname, 'presentations/module1/lesson6/index.html'),
        lesson1_7: resolve(__dirname, 'presentations/module1/lesson7/index.html'),
        lesson1_8: resolve(__dirname, 'presentations/module1/lesson8/index.html'),
        lesson1_9_10: resolve(__dirname, 'presentations/module1/lesson9-10/index.html'),
        lesson1_11: resolve(__dirname, 'presentations/module1/lesson11/index.html'),
        lesson1_12_13: resolve(__dirname, 'presentations/module1/lesson12-13/index.html'),
        lesson1_14_15: resolve(__dirname, 'presentations/module1/lesson14-15/index.html'),
        lesson1_16: resolve(__dirname, 'presentations/module1/lesson16/index.html'),
      }
    },
  },
})

