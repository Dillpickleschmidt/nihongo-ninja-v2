"use client"

import { createContext, useContext, useState } from "react"

type TopWindowContextProps = {
  children: React.ReactNode
}

type TopWindowContext = {
  showContentBox: boolean
  setShowContentBox: React.Dispatch<React.SetStateAction<boolean>>
}

export const TopWindowContext = createContext<TopWindowContext | null>(null)

export function TopWindowContextProvider({ children }: TopWindowContextProps) {
  const [showContentBox, setShowContentBox] = useState(false)

  return (
    <TopWindowContext.Provider value={{ showContentBox, setShowContentBox }}>
      {children}
    </TopWindowContext.Provider>
  )
}

export function useTopWindowContext() {
  const context = useContext(TopWindowContext)
  if (!context) {
    throw new Error(
      "useTopWindowContext must be used within a TopWindowContextProvider"
    )
  }
  return context
}
