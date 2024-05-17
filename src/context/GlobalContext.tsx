"use client"

import { createContext, useContext, useState, createRef } from "react"

type GlobalContextProps = {
  children: React.ReactNode
}

type GlobalContext = {
  scrollRef: React.RefObject<HTMLDivElement>
  navbarRef: React.RefObject<HTMLDivElement>
  showNavbar: boolean
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>
  fromLearnPage: boolean
  setFromLearnPage: React.Dispatch<React.SetStateAction<boolean>>
  isTopFullyExpanded: boolean
  setIsTopFullyExpanded: React.Dispatch<React.SetStateAction<boolean>>
}

const GlobalContext = createContext<GlobalContext | null>(null)

export function GlobalContextProvider({ children }: GlobalContextProps) {
  const scrollRef = createRef<HTMLDivElement>()
  const navbarRef = createRef<HTMLDivElement>()
  const [showNavbar, setShowNavbar] = useState(true)
  const [fromLearnPage, setFromLearnPage] = useState(false)
  const [isTopFullyExpanded, setIsTopFullyExpanded] = useState(true)

  return (
    <GlobalContext.Provider
      value={{
        scrollRef,
        navbarRef,
        showNavbar,
        setShowNavbar,
        fromLearnPage,
        setFromLearnPage,
        isTopFullyExpanded,
        setIsTopFullyExpanded,
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
