"use client"

import { useTopWindowContext } from "../context/LayoutContextProvider"

type ScrollProgressWrapperProps = {
  children: React.ReactNode
}

export default function ScrollProgressWrapper({
  children,
}: ScrollProgressWrapperProps) {
  const { scrollRef } = useTopWindowContext()

  return (
    <div
      ref={scrollRef}
      className="relative overflow-hidden z-40 bg-background/[100%] pb-12"
    >
      {children}
    </div>
  )
}
