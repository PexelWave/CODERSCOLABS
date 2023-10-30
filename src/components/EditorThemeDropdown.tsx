"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { themeOptions } from "@/constants/themeOptions";
import { useCodeEditor, ACTION_TYPES } from "@/providers/CodeEditorProvider";

export default function EditorThemeDropDown() {
  const { dispatch } = useCodeEditor();

  const lightThemes = themeOptions.filter((theme) => theme.type === "light");
  const darkThemes = themeOptions.filter((theme) => theme.type === "dark");

  return (
    <Select
      onValueChange={(value) => {
        const selectedTheme = themeOptions.filter(
          (theme) => theme.value === value
        );
        dispatch({
          type: ACTION_TYPES.SET_THEME,
          payload: selectedTheme[0].extension,
        });
      }}
    >
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent className="h-[60dvh]">
        <SelectGroup>
          <SelectLabel>Light Themes</SelectLabel>
          {lightThemes.map((theme) => (
            <SelectItem key={theme.value} value={theme.value}>
              {theme.label}
            </SelectItem>
          ))}
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>Dark Themes</SelectLabel>
          {darkThemes.map((theme) => (
            <SelectItem key={theme.value} value={theme.value}>
              {theme.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
