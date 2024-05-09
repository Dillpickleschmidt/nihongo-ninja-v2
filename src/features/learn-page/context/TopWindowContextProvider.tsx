"use client"

import { createContext, useContext, useState } from "react"

type TopWindowContextProps = {
  children: React.ReactNode
}

type TopWindowContext = {
  height: string
  setHeight: React.Dispatch<React.SetStateAction<string>>
  showContentBox: boolean
  setShowContentBox: React.Dispatch<React.SetStateAction<boolean>>
}

export const TopWindowContext = createContext<TopWindowContext | null>(null)

export function TopWindowContextProvider({ children }: TopWindowContextProps) {
  const [height, setHeight] = useState("380px")
  const [showContentBox, setShowContentBox] = useState(false)

  return (
    <TopWindowContext.Provider
      value={{ height, setHeight, showContentBox, setShowContentBox }}
    >
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
