"use client";

import React from "react";
import ReactCodeMirror from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs"
import { color, colorView, colorTheme } from '@uiw/codemirror-extensions-color';
import EditorThemeDropDown from "./EditorThemeDropdown";
import { ACTION_TYPES, useCodeEditor } from "@/providers/CodeEditorProvider";
import { Input } from "./ui/input";
import EditorLanguageDropdown from "./EditorLanguageDropdown";

const CodeEditor = () => {
  const { state, dispatch } = useCodeEditor();
  const onChange = React.useCallback((val: string) => {
    dispatch({ type: ACTION_TYPES.SET_CODE, payload: val });
  }, []);
  return (
    <>
      <header className="flex">
        <EditorLanguageDropdown />
        <EditorThemeDropDown />
        <Input
          type="number"
          className="w-[80px]"
          value={state.fontSize}
          min={12}
          max={40}
          onChange={(e) =>
            dispatch({
              type: ACTION_TYPES.SET_FONT_SIZE,
              payload: parseInt(e.target.value),
            })
          }
        />
      </header>
      <section>
        <ReactCodeMirror
          style={{ fontSize: state.fontSize }}
          theme={state.theme}
          value={state.code}
          height="90dvh"
          extensions={[state.theme, loadLanguage(state.language)!, color]}
          onChange={onChange}
        />
      </section>
    </>
  );
};

export default CodeEditor;
