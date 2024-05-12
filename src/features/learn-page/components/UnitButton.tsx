"use client"
import { Button } from "@/components/ui/button"
import { useTopWindowContext } from "../context/TopWindowContextProvider"
import { useNavbarContext } from "@/features/navbar/context/NavbarContext"
import UnitButtonContents from "./UnitButtonContents"

type UnitButtonProps = {
  children: React.ReactNode
  id: string
  type?: "lesson" | "quiz" | "preview" | "vocab-list" | "learn-vocab"
}

export default function UnitButton({ children, id, type }: UnitButtonProps) {
  const { showContentBox, setShowContentBox } = useTopWindowContext()
  const { showNavbar, setShowNavbar } = useNavbarContext()

  return (
    <div className="!p-0 hover:scale-[98.5%] ease-in-out duration-75">
      <Button
        variant="outline"
        className="w-full h-full font-normal overflow-x-scroll overflow-y-hidden scrollbar:hidden justify-between py-3 px-7 text-base"
        onClick={() => {
          setShowContentBox(true)
          setShowNavbar(false)
          console.log("showNavbar", showNavbar)
        }}
      >
        <UnitButtonContents id={id} type={type}>
          {children}
        </UnitButtonContents>
      </Button>
    </div>
  )
}
