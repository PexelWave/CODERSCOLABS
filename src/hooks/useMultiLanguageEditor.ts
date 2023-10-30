"use client"

import { EditorContext } from "@/contexts/MultiLanguageEditorProvider"
import { useContext } from "react"

export const useMultiLanguageEditor = () => {
    const state = useContext(EditorContext)
    if (state === undefined) {
        throw new Error("useEditor must be used within an EditorProvider")
    }
    return state
}