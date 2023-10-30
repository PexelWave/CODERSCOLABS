"use client";

import { useEffect, useRef, useState } from "react";
  import ControlledEditor  from '@monaco-editor/react';
 
import * as monaco from 'monaco-editor'
import { emmetHTML, emmetCSS, emmetJSX, expandAbbreviation, registerCustomSnippets } from 'emmet-monaco-es'
import { useEditor } from "@/hooks/useMultiLanguageEditor";
import { ACTIONS } from "@/contexts/MultiLanguageEditorProvider";

const rTabs = (str: string) => str.trim().replace(/^ {4}/gm, "");
const exampleCode = {
  javascript: rTabs(`
    // This is comment to code
    const sample = "Say something now";
    console.log(sample);
  `),
  html: rTabs(`
    <h1 class="title">Hi, Cool Man</h1>
    <p class="description">I'm Boba</p>
  `)
};

// `emmetHTML` , `emmetCSS` and `emmetJSX` are used the same way
const dispose = emmetHTML(
    // monaco-editor it self. If not provided, will use window.monaco instead.
    // This could make the plugin support both ESM and AMD loaded monaco-editor
    monaco,
    // languages needs to support html markup emmet, should be lower case.
    ['html', 'php'],
  )
  
  // run it if you want to dispose emmetHTML.
  // NOTE: all languages specified will be disposed.
  dispose()
  
  // internal expand API, if you want to extend functionality with emmet
  // check out the emmet repo https://github.com/emmetio/emmet for how to use it
  expandAbbreviation('a', { type: 'markup', syntax: 'html' }) // <a href=""></a>
  expandAbbreviation('fz14', { type: 'stylesheet', syntax: 'css' }) // font-size: 14px;
  
  // register custom snippets
  registerCustomSnippets('html', {
    ull: 'ul>li[id=${1} class=${2}]*2{ Will work with html, pug, haml and slim }',
    oll: '<ol><li id=${1} class=${2}> Will only work in html </ol>',
    ran: '{ Wrap plain text in curly braces }',
  })



const CodeEditor = () => {
  const {state, dispatch} = useEditor()

  return (
    <div className="md:w-1/2">
      <ControlledEditor
        height="90vh"
        language="html"
        theme='vs-dark'
        value={state.code}
        options={{
          fontSize: 16,
          fontFamily: "fira",
          folding: true,
          lightbulb:{enabled: true},
          hover: {above: true}
        }}
      />
    </div>
  );
};

export default CodeEditor;
