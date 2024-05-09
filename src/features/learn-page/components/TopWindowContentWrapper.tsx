"use client"

import { useTopWindowContext } from "../context/TopWindowContextProvider"

export default function TopWindowContentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const { showContentBox, setShowContentBox } = useTopWindowContext()

  return (
    <div>
      {showContentBox && (
        <div className="absolute z-10 w-full h-full flex justify-center">
          <div className="w-96 h-full bg-background text-center">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
