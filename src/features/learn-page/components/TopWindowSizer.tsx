"use client"
import { useTopWindowContext } from "../context/TopWindowContextProvider"
import { twMerge } from "tailwind-merge"

export default function TopWindowSizer({
  children,
}: {
  children: React.ReactNode
}) {
  const { height, setHeight } = useTopWindowContext()

  return (
    <div
      className={`relative w-full mt-16 bg-background`}
      // Tailwind CSS doesn't naturally support dynamic class names directly within the template
      // strings because Tailwind's classes are purged based on static analysis at build time.
      // Hence, use style instead of className to apply dynamic styles.
      style={{
        height: height,
      }}
    >
      {children}
    </div>
  )
}
