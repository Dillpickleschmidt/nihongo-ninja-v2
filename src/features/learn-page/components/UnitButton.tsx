"use client"
import { Button } from "@/components/ui/button"
import { useTopWindowContext } from "../context/TopWindowContextProvider"
import UnitButtonContents from "./UnitButtonContents"

type UnitButtonProps = {
  children: React.ReactNode
  id: string
  type?: "lesson" | "quiz" | "preview" | "vocab-list" | "learn-vocab"
}

export default function UnitButton({ children, id, type }: UnitButtonProps) {
  const { showContentBox, setShowContentBox } = useTopWindowContext()

  return (
    <Button
      variant="outline"
      className="font-normal overflow-x-scroll overflow-y-hidden scrollbar:hidden justify-between"
      onClick={() => {
        setShowContentBox(true)
      }}
    >
      <UnitButtonContents id={id} type={type}>
        {children}
      </UnitButtonContents>
    </Button>
  )
}
