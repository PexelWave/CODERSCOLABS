import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ACTION_TYPES, useCodeEditor } from "@/providers/CodeEditorProvider";
import { langNames } from "@uiw/codemirror-extensions-langs";

const EditorLanguageDropdown = () => {
  const { dispatch } = useCodeEditor();
  return (
    <Select
      onValueChange={(value) => {
        dispatch({ type: ACTION_TYPES.SET_LANGUAGE, payload: value });
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select Language" />
      </SelectTrigger>
      <SelectContent className="h-[60dvh]">
        <SelectGroup>
          <SelectLabel>Supported Languages</SelectLabel>
          {langNames.map((lang) => (
            <SelectItem  key={lang} value={lang}>{lang}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default EditorLanguageDropdown;
