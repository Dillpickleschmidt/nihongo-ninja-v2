"use client"

import { ThemeToggle } from "./theme/theme-toggle"
import { Button } from "./ui/button"

export default function Navbar() {
  return (
    <>
      <nav className="fixed top-0 left-0 z-50 w-full h-[65px] text-white bg-[#191919] drop-shadow-md">
        <ul className="flex items-center justify-between py-3 mx-auto">
          <li></li>
          <ThemeToggle />
          <Button>Sign In</Button>
        </ul>
      </nav>
    </>
  )
}
