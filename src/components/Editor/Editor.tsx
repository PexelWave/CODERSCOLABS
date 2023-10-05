"use client";

import React, { ChangeEvent } from "react";
import { EditorView } from "@uiw/react-codemirror";
import { EditorState } from "@uiw/react-codemirror";
import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { TbEdit } from "react-icons/tb";
import { BiLogoJavascript } from "react-icons/bi";

import { BsFillPlayFill } from "react-icons/bs";

import { Button } from "../ui/button";


const myTheme = createTheme({
  theme: "light",
  settings: {
    background: "#020817",
    backgroundImage: "",
    foreground: "#75baff",
    caret: "#7AC943",
    selection: "#036dd626",
    selectionMatch: "#036dd626",
    lineHighlight: "#8a91991a",
    gutterBackground: "#020817",
    gutterForeground: "#8a919966",
  },
  styles: [
    { tag: t.comment, color: "#787b8099" },
    { tag: t.variableName, color: "lavender" },
    { tag: [t.string, t.special(t.brace)], color: "#7AC943" },
    { tag: t.number, color: "orangered" },
    { tag: t.bool, color: "deepskyblue" },
    { tag: t.null, color: "#0080ff" },
    { tag: t.keyword, color: "#0080ff" },
    { tag: t.operator, color: "#5c6166" },
    { tag: t.className, color: "#ffbb00" },
    { tag: t.definition(t.typeName), color: "#5c6166" },
    { tag: t.typeName, color: "#5c6166" },
    { tag: t.angleBracket, color: "##3FA9F5" },
    { tag: t.tagName, color: "#5c6166" },
    { tag: t.attributeName, color: "#5c6166" },
  ],
});

const state = EditorState.create({
  doc: "my source code",
  extensions: [githubDark, javascript({ jsx: true })],
});

const view = new EditorView({
  parent: document.querySelector("#editor")!,
  state,
});

const today = () => {
  const date = new Date();
  return date.toDateString();
};

function Editor() {
  const [value, setValue] = React.useState(
    `
    const myName = "Perfect Nkosi";
    let age = 150; // I'm old as f#ck!😂😂😂
    let isCool = true;
    
    const getYearOfBirth = () => new Date().getFullyear() - age;
    
    class Person {
      constructor()
    }`
  );
  const onChange = React.useCallback((val: any, viewUpdate: any) => {
    console.log("val:", val);
    setValue(val);
  }, []);

  return (
    <main>
      <div className="bg-slate-950 dark:bg-accent flex items-center justify-between p-2">
        <DialogModal />
        <Button>
          <BsFillPlayFill size={25} /> Run
        </Button>
      </div>

      {/* CODE MIRROR */}
      <CodeMirror
        className="text-2xl"
        value={value}
        height="100%"
        theme={myTheme}
        extensions={[javascript({ jsx: true })]}
        onChange={onChange}
      />
    </main>
  );
}

function DialogModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          <BiLogoJavascript />
          {state.doc} <TbEdit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Playground Name</DialogTitle>
          <DialogDescription>
            Make changes to your Playground name. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Playground name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button type="button">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}


export default Editor;
