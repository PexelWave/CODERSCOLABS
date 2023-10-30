"use client";
import { HTMLPreview } from "@/components/Colabs/Results";
import ControlledEditor, { useMonaco } from "@monaco-editor/react";
import { useTheme } from "next-themes";
import React, { useState } from "react";
import { FaHtml5, FaCss3, FaJs, FaPlay, FaUpload, FaGlobe } from "react-icons/fa";
import { ACTION_TYPE } from "@/contexts/FrontEndEditorProvider";
import { useFrontEndEditor } from "@/hooks/useFrontEndEditor";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import FrontEndEditorSettings from "./settings";

type Props = {};

type FrontEndEditorTab = {
  icon: React.ReactNode;
  text: string;
};

const tabs: FrontEndEditorTab[] = [
  {
    icon: <FaHtml5 className="text-red-600" />,
    text: "html",
  },
  {
    icon: <FaCss3 className="text-blue-500" />,
    text: "css",
  },
  {
    icon: <FaJs className="text-yellow-500" />,
    text: "js",
  },
];

const page = (props: Props) => {
  const { state, dispatch } = useFrontEndEditor();
  const [activeEditor, setActiveEditor] = useState(0);
  const [previewOpen, setPreviewOpen] = useState(false);
  const HTMLEditor = (
    <Editor language="html" code={state.htmlCode} fontSize={state.fontSize} />
  );
  const CSSEditor = (
    <Editor language="css" code={state.cssCode} fontSize={state.fontSize} />
  );
  const JavascriptEditor = (
    <Editor
      language="javascript"
      code={state.jsCode}
      fontSize={state.fontSize}
    />
  );

  const Editors = [HTMLEditor, CSSEditor, JavascriptEditor];
  return (
    <main className="flex relative h-[90vh]">
      <section className="w-screen md:w-[60%] flex flex-col">
        <header className="flex items-end justify-between gap-2 h-[10vh] bg-slate-200 dark:bg-slate-900 px-2 md:px-6 pt-1">
          <div className="flex">
            {tabs.map(({ icon, text }, index) => (
              <Button
                key={text}
                variant="ghost"
                className={cn(
                  "flex items-center gap-2 rounded-none rounded-t-lg",
                  activeEditor === index ? "bg-slate-400 dark:bg-slate-950" : ""
                )}
                onClick={() => {
                  setPreviewOpen(false);
                  setActiveEditor(index);
                }}
              >
                {icon} <small className="uppercase">{text}</small>
              </Button>
            ))}
          </div>

          <div className="flex items-center">
            <Button variant="ghost" size="icon">
              <FaUpload />
            </Button>
            <FrontEndEditorSettings />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-primary"
              onClick={() => setPreviewOpen((prev) => !prev)}
            >
              <FaPlay />
            </Button>
          </div>
        </header>
        <div className="h-[80vh]">{Editors[activeEditor]}</div>
      </section>
      {/* Mobile Preview */}
      {previewOpen && (
        <HTMLPreview className="md:hidden absolute h-[80vh] w-screen top-[10vh] left-0" />
      )}

      {/* Desktop Preview */}
      <div className="w-[40%]">
      <header className="h-[10vh] px-2 flex items-center"><small className="flex items-center gap-2"><FaGlobe /> Preview</small></header>
      <HTMLPreview className="hidden md:block  h-full" />
      </div>
    </main>
  );
};

type EditorType = {
  language: string;
  code: string;
  fontSize: number;
};

const rTabs = (str: string) => str.trim().replace(/^ {4}/gm, "");

function Editor({ language, code, fontSize }: EditorType) {
  const { dispatch } = useFrontEndEditor();
  const { theme } = useTheme();

  const monaco = useMonaco();

  monaco?.editor.defineTheme("my-theme", {
    base: "vs-dark",
    inherit: true,
    rules: [],
    colors: {
      "editor.foreground": "#ffffff",
      "editor.background": "#020817",
      "editorCursor.foreground": "#7AC943",
      "editor.lineHighlightBackground": "#0F176A20",
      "editorLineNumber.foreground": "#A8A19A",
      "editor.selectionBackground": "#cccccc30",
      "editor.inactiveSelectionBackground": "#88000015",
    },
  });

  // monaco?.editor.setTheme("my-theme");

  return (
    <ControlledEditor
      language={language}
      theme={theme === "dark" ? "my-theme" : "vs-light"}
      value={code}
      onChange={(e) =>
        dispatch({
          type:
            language === "html"
              ? ACTION_TYPE.SET_HTML_CODE
              : language === "css"
              ? ACTION_TYPE.SET_CSS_CODE
              : ACTION_TYPE.SET_JS_CODE,
          payload: e!,
        })
      }
      options={{
        fontSize: fontSize,
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

export default page;
