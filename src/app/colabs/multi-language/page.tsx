import React from 'react'
import ControlledEditor from "@monaco-editor/react";
import CodeEditorMenu from '@/components/Colabs/multi-language/CodeEditorMenu'
import EditorProvider from '@/contexts/MultiLanguageEditorProvider'
import { useMultiLanguageEditor } from '@/hooks/useMultiLanguageEditor'
import { useTheme } from 'next-themes'

type Props = {}

const page = (props: Props) => {
  return (
    <EditorProvider>
      <main>
      <CodeEditorMenu />
      <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3">
        <EmmetEditor />
        </div>
      </div>
    </main>
    </EditorProvider>
  )
}

function EmmetEditor() {
  const { state, dispatch } = useMultiLanguageEditor();
  const { theme } = useTheme();

  return (
    <ControlledEditor
      height="80vh"
      language={state.language}
      theme={theme === "dark" ? "vs-dark" : "vs-light"}
      value={state.code}
      // onChange={(e) => dispatch({ type: ACTIONS.SET_CODE, payload: e! })}
      options={{
        fontSize: state.fontSize,
        wordWrap: "on",
        foldingMaximumRegions: 20,
        automaticLayout: true,
        minimap: {
          enabled: true,
        },
        "semanticHighlighting.enabled": true,
      }}
    />
  );
}

export default page