"use client"

import { useGlobalContext } from "@/context/GlobalContext"
import ShowNavbarPositioning from "./components/ShowNavbarPositioning"
import HideNavbarPositioning from "./components/HideNavbarPositioning"

export default function Navbar() {
  const { showNavbar, navbarRef } = useGlobalContext()
  return (
    <div ref={navbarRef}>
      {showNavbar ? <ShowNavbarPositioning /> : <HideNavbarPositioning />}
    </div>
  )
}
