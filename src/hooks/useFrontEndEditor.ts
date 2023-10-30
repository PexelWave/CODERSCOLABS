"use client"

import { FrontEndEditorContext } from "@/contexts/FrontEndEditorProvider"
import { useContext } from "react"

export const useFrontEndEditor = () => {
    const state = useContext(FrontEndEditorContext)
    if (state === undefined) {
        throw new Error("useFrontEndEditor must be used within an FrontEndEditorProvider")
    }
    return state
}