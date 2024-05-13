"use client"

import { useGlobalContext } from "@/context/GlobalContext"
import ShowNavbarContent from "./components/ShowNavbarContent"
import HideNavbarContent from "./components/HideNavbarContent"

export default function Navbar() {
  const { showContentBox, navbarRef } = useGlobalContext()
  return (
    <div ref={navbarRef}>
      {showContentBox ? <HideNavbarContent /> : <ShowNavbarContent />}
    </div>
  )
}
