"use client"

import { usePathname } from "next/navigation"
import {
  createContext,
  useContext,
  useState,
  createRef,
  useEffect,
} from "react"

type GlobalContextProps = {
  children: React.ReactNode
}

type GlobalContext = {
  scrollRef: React.RefObject<HTMLDivElement>
  navbarRef: React.RefObject<HTMLDivElement>
  showNavbar: boolean
  setShowNavbar: React.Dispatch<React.SetStateAction<boolean>>
  isHiddenContentVisible: boolean
  setHiddenContentVisible: React.Dispatch<React.SetStateAction<boolean>>
}

const GlobalContext = createContext<GlobalContext | null>(null)

export function GlobalContextProvider({ children }: GlobalContextProps) {
  const scrollRef = createRef<HTMLDivElement>()
  const navbarRef = createRef<HTMLDivElement>()
  const [showNavbar, setShowNavbar] = useState(true)
  const [isHiddenContentVisible, setHiddenContentVisible] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const specificPaths = ["/learn"]
    // If the current path is in the specificPaths array
    if (specificPaths.includes(pathname)) {
      // Reset state on path change
      setShowNavbar(true)
    }
  }, [pathname])

  return (
    <GlobalContext.Provider
      value={{
        scrollRef,
        navbarRef,
        showNavbar,
        setShowNavbar,
        isHiddenContentVisible,
        setHiddenContentVisible,
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
      "useGlobalContext must be used within a useNavbarContextProvider",
    )
  }
  return context
}
