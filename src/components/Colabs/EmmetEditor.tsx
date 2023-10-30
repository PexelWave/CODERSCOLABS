"use client";

import React from "react";
import { useMonaco } from "@monaco-editor/react";
import ControlledEditor from "@monaco-editor/react";
import { useMultiLanguageEditor } from "@/hooks/useMultiLanguageEditor";
import { useTheme } from "next-themes";

function EmmetEditor() {
  const monaco = useMonaco();


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

export default EmmetEditor;
