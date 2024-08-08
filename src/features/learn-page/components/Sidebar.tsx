"use client"
import { Button } from "@/components/ui/button"
import {
  BookPlus,
  Gamepad,
  GraduationCap,
  Library,
  Menu,
  ScrollText,
  Volume2,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className="fixed top-0 z-40 ml-10 mt-24 block md:ml-24 lg:hidden">
        <Button
          variant="ghost"
          className="border-0 px-2 py-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size="30px" className="" />
        </Button>
      </div>
      {isOpen && (
        <div className="fixed top-0 z-30 block h-full w-80 bg-background lg:hidden">
          <div className="flex w-full flex-col items-center space-y-3 pt-48">
            <Link href="/learn/grammar-notes">
              <Button
                size="lg"
                variant="outline"
                className="w-64 text-nowrap px-6 py-3 text-base font-normal"
              >
                <ScrollText size="22px" className="mr-3 text-red-500" />
                <span className="opacity-75">Grammar Notes</span>
              </Button>
            </Link>
            <Link href="/learn/vocab-list">
              <Button
                size="lg"
                variant="outline"
                className="w-64 text-nowrap px-6 py-3 text-base font-normal"
              >
                <Library size="22px" className="mr-3 text-sky-400" />
                <span className="opacity-75">Vocab List</span>
              </Button>
            </Link>
            <Link href="/learn/vocab-practice">
              <Button
                size="lg"
                variant="outline"
                className="w-64 text-nowrap px-6 py-3 text-base font-normal"
              >
                <GraduationCap size="22px" className="mr-3 text-orange-500" />
                <span className="opacity-75">Vocab Practice</span>
              </Button>
            </Link>
            <Link href="/learn/conjugation">
              <Button
                size="lg"
                variant="outline"
                className="w-64 text-nowrap px-6 py-3 text-base font-normal"
              >
                <GraduationCap size="22px" className="mr-3 text-teal-400" />
                <span className="opacity-75">Conjugation</span>
              </Button>
            </Link>
            <a href="https://jpdb.io">
              <Button
                size="lg"
                variant="outline"
                className="w-64 text-nowrap px-6 py-3 text-base font-normal"
              >
                <BookPlus size="22px" className="mr-3 text-yellow-400" />
                <span className="opacity-75">
                  Jpdb.io <span className="ml-1 text-sm">(Kanji)</span>
                </span>
              </Button>
            </a>
            <Link href="/learn/listening-material">
              <Button
                size="lg"
                variant="outline"
                className="w-64 text-nowrap px-6 py-3 text-base font-normal"
              >
                <Volume2 size="22px" className="mr-3 text-purple-400" />
                <span className="opacity-75">Listening Material</span>
              </Button>
            </Link>
            <Link href="">
              <Button
                size="lg"
                variant="outline"
                className="w-64 text-nowrap px-6 py-3 text-base font-normal"
              >
                <Gamepad size="22px" className="mr-3 text-green-500" />
                <span className="opacity-75">Games</span>
              </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
