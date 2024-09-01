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
    | "writing"
    | "culture-note"
    | "vocab"
    | "practice"
    | "conjugation-practice"
    | "game"
    | "video"
    | "audio"
    | "grammar-notes"
    | "reading"
    | "vocab-list"
    | "vocab-test"
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
  const { setShowNavbar, setHiddenContentVisible } = useGlobalContext()

  return (
    <div className="!p-0 duration-75 ease-in-out hover:scale-[98.5%]">
      <Link href={link ? link : ""}>
        <Button
          variant="outline"
          className="relative h-full w-full justify-between overflow-y-hidden overflow-x-scroll whitespace-nowrap px-6 py-[.75rem] text-sm font-normal scrollbar:hidden"
          onClick={() => {
            setHiddenContentVisible(false)
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
