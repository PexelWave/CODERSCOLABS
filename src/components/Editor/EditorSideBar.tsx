import { BiCodeAlt } from "react-icons/bi"
import LanguageSelector from "./LanguageSelector"

type Props = {}

const EditorSideBar = (props: Props) => {
  return (
    <aside className="w-full md:w-fit md:max-w-[50%] md:h-screen p-2 bg-slate-900">
        <LanguageSelector />
    </aside>
  )
}

export default EditorSideBar