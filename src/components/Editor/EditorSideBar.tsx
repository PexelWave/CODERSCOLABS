import { BiCodeAlt } from "react-icons/bi"
import LanguageSelector from "./LanguageSelector"

type Props = {}

const EditorSideBar = (props: Props) => {
  return (
    <aside className="w-fit max-w-[50%] h-screen p-2 bg-slate-900">
        <LanguageSelector />
    </aside>
  )
}

export default EditorSideBar