"use client";
import { useEffect, useState } from "react";
import { useFrontEndEditor } from "@/hooks/useFrontEndEditor";
import { cn } from "@/lib/utils";

type HTMLPreviewProps = {
  className?: string
}
export function HTMLPreview({className}: HTMLPreviewProps) {
  const [srcDoc, setSrcDoc] = useState<string>("");
  let { state } = useFrontEndEditor();
  let { htmlCode, cssCode, jsCode } = state;
  const code = `
  <!Doctype html>
  <html lang="eng">
    <head>
      <style>${cssCode}</style>
    </head>
    <body>
      ${htmlCode}
      <script>${jsCode}</script>
    </body>
  </html>
  `
  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(code);
    }, 500);
    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);
  return (
    
      <iframe
      className={cn("border-0 w-full h-full", className)}
      srcDoc={srcDoc}
      title="HTML Preview"
      sandbox="allow-scripts"
      width="40%"
    ></iframe>
    
  );
}


