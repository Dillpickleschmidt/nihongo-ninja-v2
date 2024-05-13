"use client"

import { useGlobalContext } from "@/context/GlobalContext"
import ShowNavbarContent from "./components/ShowNavbarContent"
import HideNavbarContent from "./components/HideNavbarContent"

export default function Navbar() {
  const { showContentBox } = useGlobalContext()
  return <>{showContentBox ? <HideNavbarContent /> : <ShowNavbarContent />}</>
}
