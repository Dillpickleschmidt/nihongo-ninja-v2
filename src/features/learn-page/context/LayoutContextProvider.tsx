"use client"

import { MotionValue, useScroll } from "framer-motion"
import { createContext, useContext, useState, createRef } from "react"

type TopWindowContextProps = {
  children: React.ReactNode
}

type TopWindowContext = {
  showContentBox: boolean
  setShowContentBox: React.Dispatch<React.SetStateAction<boolean>>
  scrollRef: React.RefObject<HTMLDivElement>
}

export const TopWindowContext = createContext<TopWindowContext | null>(null)

export function TopWindowContextProvider({ children }: TopWindowContextProps) {
  const [showContentBox, setShowContentBox] = useState(false)
  const scrollRef = createRef<HTMLDivElement>()

  return (
    <TopWindowContext.Provider
      value={{ showContentBox, setShowContentBox, scrollRef }}
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
