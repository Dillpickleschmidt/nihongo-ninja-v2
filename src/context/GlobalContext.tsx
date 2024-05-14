"use client"

import { createContext, useContext, useState, createRef } from "react"

type GlobalContextProps = {
  children: React.ReactNode
}

type GlobalContext = {
  scrollRef: React.RefObject<HTMLDivElement>
  navbarRef: React.RefObject<HTMLDivElement>
  showContentBox: boolean
  setShowContentBox: React.Dispatch<React.SetStateAction<boolean>>
  showNavbar: boolean
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>
  fromLearnPage: boolean
  setFromLearnPage: React.Dispatch<React.SetStateAction<boolean>>
}

const GlobalContext = createContext<GlobalContext | null>(null)

export function GlobalContextProvider({ children }: GlobalContextProps) {
  const scrollRef = createRef<HTMLDivElement>()
  const navbarRef = createRef<HTMLDivElement>()
  const [showNavbar, setShowNavbar] = useState(true)
  const [showContentBox, setShowContentBox] = useState(false)
  const [fromLearnPage, setFromLearnPage] = useState(false)

  return (
    <GlobalContext.Provider
      value={{
        scrollRef,
        navbarRef,
        showContentBox,
        setShowContentBox,
        showNavbar,
        setShowNavbar,
        fromLearnPage,
        setFromLearnPage,
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
