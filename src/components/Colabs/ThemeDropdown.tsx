"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useEditor } from "@/hooks/useMultiLanguageEditor"
import { ACTIONS } from "@/contexts/MultiLanguageEditorProvider"

export default function EditorThemeDropdown() {
  const { state, dispatch } = useEditor()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant='ghost'>{state.theme}
          <span className="sr-only">Set Theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => dispatch({type: ACTIONS.SET_THEME, payload: "vs-light"})}>
          Visual Studio Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => dispatch({type: ACTIONS.SET_THEME, payload: "vs-dark"})}>
        Visual Studio Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
