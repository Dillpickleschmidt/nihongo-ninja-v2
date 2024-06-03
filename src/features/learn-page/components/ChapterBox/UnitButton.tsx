"use client"
import { Button } from "@/components/ui/button"
import { useGlobalContext } from "@/context/GlobalContext"
import UnitButtonContents from "./UnitButtonContents"
import Link from "next/link"

type UnitButtonProps = {
  children: React.ReactNode
  id: string
  type?:
    | "lesson"
    | "quiz"
    | "culture-note"
    | "vocab-list"
    | "practice"
    | "game"
    | "video"
    | "audio"
    | "grammar-notes"
    | "reading"
  link?: string
  disabled?: boolean
}

export default function UnitButton({
  children,
  id,
  type,
  link,
  disabled,
}: UnitButtonProps) {
  const { setShowNavbar, setFromLearnPage } = useGlobalContext()

  return (
    <div className="!p-0 hover:scale-[98.5%] ease-in-out duration-75">
      <Link href={link ? link : ""}>
        <Button
          variant="outline"
          className="relative w-full h-full whitespace-nowrap font-normal overflow-x-scroll overflow-y-hidden scrollbar:hidden justify-between py-[.75rem] px-6 text-sm"
          onClick={() => {
            setFromLearnPage(true)
            setShowNavbar(false)
          }}
          disabled={disabled}
        >
          <UnitButtonContents id={id} type={type}>
            {children}
          </UnitButtonContents>
        </Button>
      </Link>
    </div>
  )
}
