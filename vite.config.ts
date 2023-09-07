import * as path from 'node:path'
import { defineConfig } from 'vite'
import lightningcss from 'vite-plugin-lightningcss'

export default defineConfig({
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
  resolve: {
    alias: [
      {
        find: /monaco\-editor$/,
        replacement: 'monaco-editor/esm/vs/editor/editor.api.js',
      },
    ],
  },
  plugins: [
    lightningcss({
      browserslist: '>= 0.25%',
      minify: true,
    }),
  ],
})
