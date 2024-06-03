"use client"

import { useGlobalContext } from "@/context/GlobalContext"

export default function OffsetContentObserver() {
  const { isTopFullyExpanded } = useGlobalContext()
  return (
    <>
      {/* Check if switch enabled from TopWindowAnimations.tsx */}
      {isTopFullyExpanded && (
        <div className="h-[65px] w-full bg-background"></div>
      )}
    </>
  )
}
