// customTheme.ts
export const customTheme = {
  base: 'vs', // You can use 'vs' as the base theme and extend it
  inherit: true, // Inherit rules from the base theme
  rules: [
    { token: 'custom-keyword', foreground: 'FF5733', fontStyle: 'bold' },
    { token: 'custom-comment', foreground: '008000', fontStyle: 'italic' },
  ],
  colors: {
    'editor.foreground': '#333333',
    'editor.background': '#FFFFFF',
  },
};
