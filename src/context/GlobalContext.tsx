"use client"

import { createContext, useContext, useState, createRef } from "react"

type GlobalContextProps = {
  children: React.ReactNode
}

type GlobalContext = {
  scrollRef: React.RefObject<HTMLDivElement>
  showContentBox: boolean
  setShowContentBox: React.Dispatch<React.SetStateAction<boolean>>
  showNavbar: boolean
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>
}

export const GlobalContext = createContext<GlobalContext | null>(null)

export function GlobalContextProvider({ children }: GlobalContextProps) {
  const scrollRef = createRef<HTMLDivElement>()
  const [showNavbar, setShowNavbar] = useState(true)
  const [showContentBox, setShowContentBox] = useState(false)

  return (
    <GlobalContext.Provider
      value={{
        scrollRef,
        showContentBox,
        setShowContentBox,
        showNavbar,
        setShowNavbar,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error(
      "useNavbarContext must be used within a useNavbarContextProvider"
    )
  }
  return context
}
