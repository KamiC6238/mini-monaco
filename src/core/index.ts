import * as monaco from 'monaco-editor/esm/vs/editor/editor.api.js'

import 'monaco-editor/esm/vs/language/typescript/monaco.contribution'
import 'monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution'
import 'monaco-editor/esm/vs/basic-languages/typescript/typescript.contribution'
import 'monaco-editor/esm/vs/editor/contrib/suggest/browser/suggestController.js'

import EditorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker'
import TsWorker from 'monaco-editor/esm/vs/language/typescript/ts.worker?worker'

type MonacoEditorOptions = monaco.editor.IStandaloneEditorConstructionOptions

window.MonacoEnvironment = {
  getWorker(_, label) {
    if (label === 'javascript' || label === 'typescript')
      return new TsWorker()

    return new EditorWorker()
  },
}

const defaultEditorOptions: MonacoEditorOptions = {
  language: 'javascript',
  theme: 'vs-dark',
  automaticLayout: true,
  minimap: {
    enabled: false,
  },
}

export default function createEditor(element: HTMLElement, options?: MonacoEditorOptions) {
  return monaco.editor.create(element, {
    ...defaultEditorOptions,
    ...(options ?? {}),
  })
}
