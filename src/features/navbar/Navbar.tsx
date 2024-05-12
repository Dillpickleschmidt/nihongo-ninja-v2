"use client"

import { transform } from "next/dist/build/swc"
import { ThemeToggle } from "../../components/theme/theme-toggle"
import { Button } from "../../components/ui/button"
import { useNavbarContext } from "./context/NavbarContext"
import { useState } from "react"

export default function Navbar() {
  const { showNavbar, setShowNavbar } = useNavbarContext()
  const [isHovered, setIsHovered] = useState(false)
  return (
    <>
      {/* {!showNavbar && (
        <div
          className="fixed top-0 left-0 z-40 w-full h-[26px] backdrop-blur-2xl"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        ></div>
      )} */}
      <nav
        className="top-0 left-0 z-50 w-full h-[65px] text-foreground bg-background drop-shadow-md"
        style={
          showNavbar
            ? { position: "sticky" }
            : {
                position: "fixed",
                transform: isHovered ? "translateY(0)" : "translateY(-42px)",
              }
        }
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <ul className="flex items-center justify-between py-3 mx-auto">
          <li></li>
          <li className="space-x-6 h-full flex items-center">
            <ThemeToggle />
            <Button>Sign In</Button>
          </li>
        </ul>
      </nav>
    </>
  )
}
