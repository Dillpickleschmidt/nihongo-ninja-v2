"use client"

import { createContext, useContext } from "react"
import type { VocabEntry } from "@/types/vocab"

type VocabCardContextProps = {
  children: React.ReactNode
  data: VocabEntry[]
}

const VocabCardContext = createContext<VocabEntry[] | null>(null)

export function VocabCardContextProvider({
  children,
  data,
}: VocabCardContextProps) {
  return (
    <VocabCardContext.Provider value={data}>
      {children}
    </VocabCardContext.Provider>
  )
}

export function useVocabCardContext() {
  const context = useContext(VocabCardContext)
  if (!context) {
    throw new Error(
      "useVocabCardContext must be used within a VocabCardContextProvider",
    )
  }
  return context
}
