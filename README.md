## tiny-monaco
A tiny monaco-editor only support JavaScript and TypeScript with code highlight and code completions.

## Install
`npm install tiny-monaco`

`pnpm install tiny-monaco`

`yarn install tiny-monaco`

## Usage
```javascript
import { createEditor } from 'tiny-monaco';

const editor = createEditor(
    document.querySelector('#app'),
    {/** options */}
)
```

# Troubleshooting

If you're using vite to build your project, make sure to add the following code to your `vite.config.js` file.
```javascript
import { defineConfig } from 'vite'

export default defineConfig({
    optimizeDeps: {
        exclude: ['tiny-monaco']
    }
})
```
