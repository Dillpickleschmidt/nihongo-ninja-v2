"use client"
import { Button } from "@/components/ui/button"
import { useGlobalContext } from "@/context/GlobalContext"
import UnitButtonContents from "./UnitButtonContents"
import Link from "next/link"

type UnitButtonProps = {
  children: React.ReactNode
  id: string
  type?: "lesson" | "quiz" | "preview" | "vocab-list" | "learn-vocab"
  link?: string
}

export default function UnitButton({
  children,
  id,
  type,
  link,
}: UnitButtonProps) {
  const { setShowNavbar, setFromLearnPage } = useGlobalContext()

  return (
    <div className="!p-0 hover:scale-[98.5%] ease-in-out duration-75">
      <Link href={link ? link : ""}>
        <Button
          variant="outline"
          className="w-full h-full font-normal overflow-x-scroll overflow-y-hidden scrollbar:hidden justify-between py-[.75rem] px-6 text-sm"
          onClick={() => {
            setFromLearnPage(true)
            setShowNavbar(false)
          }}
        >
          <UnitButtonContents id={id} type={type}>
            {children}
          </UnitButtonContents>
        </Button>
      </Link>
    </div>
  )
}
