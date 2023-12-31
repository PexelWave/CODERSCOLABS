import CodeEditorProvider from "@/providers/CodeEditorProvider";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "CODE COLABS | Front End Colabs",
  description:
    "Practice your HTML, CSS, and Javascript in our frontend colabs. No installation required!",
  creator: "PEXEL WAVE",
  keywords: [
    "HTML",
    "CSS",
    "Javascript",
    "Frontend Development",
    "Coding",
    "Programming",
  ],
};

type Props = {
  children: React.ReactNode;
};

const layout = (props: Props) => {
  return <CodeEditorProvider>{props.children}</CodeEditorProvider>;
};

export default layout;
