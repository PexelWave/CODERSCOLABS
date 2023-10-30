"use client";
import { createContext, useReducer } from "react";

export enum ACTION_TYPE {
  SET_HTML_CODE,
  SET_CSS_CODE,
  SET_JS_CODE,
  SET_FONT_SIZE,
}

export interface FrontEndEditorState {
  htmlCode: string;
  cssCode: string;
  jsCode: string;
  fontSize: number;
}

interface Action {
  type: ACTION_TYPE;
  payload: string;
}

const initialState: FrontEndEditorState = {
  htmlCode: "",
  cssCode: "",
  jsCode: "",
  fontSize: 16,
} as FrontEndEditorState;

type ContextType = {
  state: FrontEndEditorState;
  dispatch: (action: Action) => void;
};

export const FrontEndEditorContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});

const reducer = (state: FrontEndEditorState, action: Action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_HTML_CODE: {
      return { ...state, htmlCode: action.payload };
    }
    case ACTION_TYPE.SET_CSS_CODE: {
      return { ...state, cssCode: action.payload };
    }
    case ACTION_TYPE.SET_JS_CODE: {
      return { ...state, jsCode: action.payload };
    }
    case ACTION_TYPE.SET_FONT_SIZE: {
      return { ...state, fontSize: state.fontSize > 40 ? 40 : parseInt(action.payload) };
    }
    default: {
      return state;
    }
  }
};

export const FrontEndEditorProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return (
    <FrontEndEditorContext.Provider value={value}>
      {children}
    </FrontEndEditorContext.Provider>
  );
};
