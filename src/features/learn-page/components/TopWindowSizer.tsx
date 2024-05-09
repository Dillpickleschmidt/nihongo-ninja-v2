/*
This component changes the top window height based on the top window context variable.

It also changes the positioning style of the top window based on the showContentBox
state (either fixed or relative).
This allows a wipe scroll effect for the top window when the user scrolls if the
showContentBox state is true, and a normal scroll effect if the showContentBox state
is false.
*/

"use client"
import { useTopWindowContext } from "../context/TopWindowContextProvider"
import { twMerge } from "tailwind-merge"

export default function TopWindowSizer({
  children,
}: {
  children: React.ReactNode
}) {
  const { showContentBox, setShowContentBox } = useTopWindowContext()

  return (
    <>
      {showContentBox ? (
        <div // Other page elements offset below this div
          className="relative h-screen w-full bg-background"
        >
          <div // This div is fixed to the top of the viewport
            className="fixed h-full w-full"
          >
            {children}
          </div>
        </div>
      ) : (
        <div // Else: use normal positioning
          className="relative h-[380px] w-full mt-16 bg-background"
        >
          {children}
        </div>
      )}
    </>
  )
}
