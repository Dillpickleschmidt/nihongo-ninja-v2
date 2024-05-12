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
        <div className="absolute z-10 w-full h-full mt-[22px] pt-2 pb-8 flex justify-center backdrop-blur-2xl dark:backdrop-brightness-[65%]">
          <div className="relative w-[45%] h-full bg-background border-[4px] border-black rounded-[50px] shadow-xl overflow-y-scroll scrollbar:hidden">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
