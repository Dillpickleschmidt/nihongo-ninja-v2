"use client"

import { useGlobalContext } from "@/context/GlobalContext"

type ScrollProgressWrapperProps = {
  children: React.ReactNode
}

export default function ScrollProgressWrapper({
  children,
}: ScrollProgressWrapperProps) {
  const { scrollRef } = useGlobalContext()

  return (
    <div
      ref={scrollRef}
      className="relative overflow-hidden z-40 bg-background/[100%] pb-12"
    >
      {children}
    </div>
  )
}
