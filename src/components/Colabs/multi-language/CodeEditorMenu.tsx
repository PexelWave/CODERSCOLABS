"use client";
import React from "react";
import { Separator } from "../../ui/separator";
import { Button } from "../../ui/button";
import { ACTIONS } from "@/contexts/MultiLanguageEditorProvider";
import { useMultiLanguageEditor } from "@/hooks/useMultiLanguageEditor";
import LanguageDropdown from "./LanguageDropdown";
import { Input } from "@/components/ui/input";
import { FaPlay, FaShare, FaSave } from "react-icons/fa";


const CodeEditorMenu = () => {
  const { state, dispatch } = useMultiLanguageEditor();
  return (
    <header className="bg-slate-100 dark:bg-slate-900">
      <div className="container flex items-center justify-between py-2">
        <div className="flex items-center gap-2">
          <Input value="untitled filename"/>
            <LanguageDropdown />
            <Input
              type="number"
              className="w-[80px]"
              value={state.fontSize}
              min={12}
              max={40}
              step={0.5}
              onChange={(e) =>
                dispatch({
                  type: ACTIONS.SET_FONTSIZE,
                  payload: e.target.value,
                })
              }
            />
        </div>
        <Separator orientation="vertical" />
        <div>
          <Button className="text-slate-500" variant="ghost" size="sm">
            <FaSave className="text-slate-500 text-sm" size={20} />
          </Button>
          <Button className="text-slate-500" variant="ghost" size="sm">
            <FaShare className="text-secondary text-sm" size={20} />
          </Button>
          <Button className="text-slate-500" variant="ghost" size="sm">
            <FaPlay className="text-primary text-sm" size={20} />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default CodeEditorMenu;
