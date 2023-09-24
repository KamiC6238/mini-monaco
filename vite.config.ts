import * as path from 'node:path'
import { defineConfig } from 'vite'
import lightningcss from 'vite-plugin-lightningcss'
import dts from 'vite-plugin-dts'
import libcss from 'vite-plugin-libcss'

export default defineConfig({
  base: './',
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      formats: ['es'],
      fileName: 'tiny-monaco',
    },
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules'))
            return 'tiny-monaco-main'
        },
      },
    },
  },
  plugins: [
    lightningcss({
      browserslist: '>= 0.25%',
      minify: true,
    }),
    dts(),
    libcss(),
  ],
})
