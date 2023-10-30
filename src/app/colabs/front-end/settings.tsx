"use client";
import { useState } from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { Settings } from 'lucide-react'
import { useFrontEndEditor } from "@/hooks/useFrontEndEditor";
import { ACTION_TYPE } from "@/contexts/FrontEndEditorProvider";
import { Button } from "@/components/ui/button";

export default function FrontEndEditorSettings() {
  const {state, dispatch} = useFrontEndEditor()
  return (
    <Sheet>
      <SheetTrigger asChild className="">
        <Button variant='ghost' size='icon'><Settings size={20} className="text-secondary" /></Button>
      </SheetTrigger>
      <SheetContent side="left" className="overflow-y-scroll custom-scrollbar">
        <SheetHeader className="mb-6">
          <SheetTitle className="flex items-center gap-6">
            Editor Settings
          </SheetTitle>
          <SheetDescription className="text-start">
            Customize your workspace
          </SheetDescription>
        </SheetHeader>
        <div className="flex flex-col gap-8">
        <small>Font Size <Input
            type="number"
            className="w-[80px]"
            value={state.fontSize}
            min={12}
            max={40}
            step={0.5}
            onChange={(e) =>
              dispatch({
                type: ACTION_TYPE.SET_FONT_SIZE,
                payload: e.target.value,
              })
            }
          /></small>
          <small>Enable Mini Map 
            <Input className="h-10 w-10" type="checkbox" />
          </small>
        </div>
      </SheetContent>
    </Sheet>
  );
}
