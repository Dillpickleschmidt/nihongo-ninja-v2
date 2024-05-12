"use client"

import { useNavbarContext } from "./context/NavbarContext"
import ShowNavbarContent from "./components/ShowNavbarContent"
import HideNavbarContent from "./components/HideNavbarContent"

export default function Navbar() {
  const { showNavbar, setShowNavbar } = useNavbarContext()
  return <>{showNavbar ? <ShowNavbarContent /> : <HideNavbarContent />}</>
}
