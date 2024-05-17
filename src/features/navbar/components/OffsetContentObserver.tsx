"use client"

import { useGlobalContext } from "@/context/GlobalContext"

export default function OffsetContentObserver() {
  const { isTopFullyExpanded } = useGlobalContext()
  return (
    <>
      {/* Check if switch enabled from TopWindowAnimations.tsx */}
      {isTopFullyExpanded && (
        <div className="w-full h-[65px] bg-background"></div>
      )}
    </>
  )
}
