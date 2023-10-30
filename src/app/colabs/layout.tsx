import EditorProvider from "@/contexts/MultiLanguageEditorProvider";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return <>{props.children}</>;
};

export default layout;
