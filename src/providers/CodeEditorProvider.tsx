"use client";
import React, { useReducer, createContext, useContext } from "react";
import { Extension } from "@uiw/react-codemirror";
import { tokyoNightStorm } from "@uiw/codemirror-theme-tokyo-night-storm";
import { LanguageName } from "@uiw/codemirror-extensions-langs";

export enum ACTION_TYPES {
  SET_CODE,
  SET_LANGUAGE,
  SET_THEME,
  SET_FONT_SIZE,
}

interface CodeEditorState {
  code: string;
  language: LanguageName;
  theme: Extension;
  fontSize: number;
}

interface Action {
  type: ACTION_TYPES;
  payload: string | number | Extension ;
}

const initialState: CodeEditorState = {
  code: "console.log('Hello World')",
  language: 'python',
  theme: tokyoNightStorm,
  fontSize: 14,
};

type ContextType = {
  state: CodeEditorState;
  dispatch: (action: Action) => void;
};

export const CodeEditorContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: CodeEditorState, action: Action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.SET_CODE: {
      if (typeof payload === "string") return { ...state, code: payload };
    }
    case ACTION_TYPES.SET_LANGUAGE: {
      if (typeof payload === "string") return { ...state, language: payload as LanguageName };
    }
    case ACTION_TYPES.SET_THEME: {
      if (typeof payload === "object") {
        return { ...state, theme: payload as Extension };
      }
    }
    case ACTION_TYPES.SET_FONT_SIZE: {
      if (typeof payload === "number") {
        return { ...state, fontSize: payload };
      }
    }
    default: {
      return state;
    }
  }
  return state;
};

const CodeEditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = { state, dispatch };
  return (
    <CodeEditorContext.Provider value={value}>
      {children}
    </CodeEditorContext.Provider>
  );
};

export const useCodeEditor = () => {
  const codeEditor = useContext(CodeEditorContext);

  if (codeEditor === undefined)
    throw new Error("usecodeEditor must be used in a codeEditorContext");

  return codeEditor;
};

export default CodeEditorProvider;
