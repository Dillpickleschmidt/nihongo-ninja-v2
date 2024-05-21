"use client"

import { createContext, useContext } from "react"
import { VocabCardProps } from "@/types/vocab"

type VocabCardContextProps = VocabCardProps & {
  children: React.ReactNode
}

const VocabCardContext = createContext<VocabCardProps | null>(null)

export function VocabCardContextProvider({
  children,
  data,
}: VocabCardContextProps) {
  return (
    <VocabCardContext.Provider value={{ data }}>
      {children}
    </VocabCardContext.Provider>
  )
}

export function useVocabCardContext() {
  const context = useContext(VocabCardContext)
  if (!context) {
    throw new Error(
      "useVocabCardContext must be used within a useVocabCardContextProvider"
    )
  }
  return context
}
