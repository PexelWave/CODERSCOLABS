import { editor } from 'monaco-editor';
import monaco from 'monaco-editor'

export const loadCustomTheme = () => {
    fetch('/themes/Monokai.json')
  .then(data => data.json())
  .then(data => {
    monaco.editor.defineTheme('monokai', data);
    monaco.editor.setTheme('monokai');
  })
    
};
