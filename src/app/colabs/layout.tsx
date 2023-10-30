import CodeEditorProvider from "@/providers/CodeEditorProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return <CodeEditorProvider>{props.children}</CodeEditorProvider>;
};

export default layout;
