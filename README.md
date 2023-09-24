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