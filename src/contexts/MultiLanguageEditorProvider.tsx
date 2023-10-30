"use client";
import { languageOptions } from "@/constants/languageOptions";
import React, { useReducer, createContext } from "react";

export interface EditorState {
  language: string;
  code: string;
  theme: string;
  fontSize: number;
}

export enum ACTIONS {
  SET_LANGUAGE,
  SET_CODE,
  SET_THEME,
  SET_FONTSIZE,
}

interface EditorAction {
  type: ACTIONS;
  payload: string;
}


const initialState: EditorState = {
  language: languageOptions[0].value,
  code: '',
  theme: "vs-dark",
  fontSize: 16,
};

type ContextType = {
  state: typeof initialState;
  dispatch: (action: EditorAction) => void;
};

export const EditorContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: EditorState, action: EditorAction) => {
  switch (action.type) {
    case ACTIONS.SET_LANGUAGE:
      return { ...state, language: action.payload };
    case ACTIONS.SET_CODE: {
      return { ...state, code: action.payload}
    }
    case ACTIONS.SET_THEME:
        return { ...state, theme: action.payload };
    case ACTIONS.SET_FONTSIZE:
        return { ...state, fontSize: action.payload };
    default:
      return state;
  }
};

const EditorProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = { state, dispatch };
  return (
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

export default EditorProvider
