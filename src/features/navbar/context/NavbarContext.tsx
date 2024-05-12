"use client"

import { createContext, useContext, useState } from "react"

type NavbarContextProps = {
  children: React.ReactNode
}

type NavbarContext = {
  showNavbar: boolean
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>
}

export const NavbarContext = createContext<NavbarContext | null>(null)

export function NavbarContextProvider({ children }: NavbarContextProps) {
  const [showNavbar, setShowNavbar] = useState(true)

  return (
    <NavbarContext.Provider value={{ showNavbar, setShowNavbar }}>
      {children}
    </NavbarContext.Provider>
  )
}

export function useNavbarContext() {
  const context = useContext(NavbarContext)
  if (!context) {
    throw new Error(
      "useNavbarContext must be used within a useNavbarContextProvider"
    )
  }
  return context
}
