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
        <div className="absolute z-10 w-full h-full pt-2 pb-[4.5rem] flex justify-center backdrop-blur-2xl dark:backdrop-brightness-[65%]">
          <div className="w-[45%] h-full bg-background text-center border-[4px] border-black rounded-[40px] shadow-xl overflow-y-scroll scrollbar:hidden">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}
