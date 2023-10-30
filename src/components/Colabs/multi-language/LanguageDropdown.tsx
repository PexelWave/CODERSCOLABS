"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectLabel,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectSeparator,
  SelectValue,
} from "@/components/ui/select";
import { languageOptions } from "@/constants/languageOptions";
import { useMultiLanguageEditor } from "@/hooks/useMultiLanguageEditor";
import { ACTIONS } from "@/contexts/MultiLanguageEditorProvider";

const LanguageDropdown = () => {
  const { state, dispatch } = useMultiLanguageEditor();
  return (
    <Select onValueChange={e => dispatch({ type: ACTIONS.SET_LANGUAGE, payload: e})}>
      <SelectTrigger>
        {state.language ? state.language : "Choosse Language"}
      </SelectTrigger>
      <SelectGroup>
        <SelectContent className="h-[300px]">
          <SelectLabel>Current Language</SelectLabel>
          <SelectValue>{state.language}</SelectValue>
          <SelectSeparator />
          <SelectLabel>Alailable Language</SelectLabel>
          {languageOptions.map((lang) => (
            <SelectItem key={lang.id} value={lang.value}>
              {lang.name}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectGroup>
    </Select>
  );
};

export default LanguageDropdown;
