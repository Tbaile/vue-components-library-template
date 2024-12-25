import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), tailwindcss()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/main.ts'),
      name: 'TestingComponents',
      fileName: 'template-components-library',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
