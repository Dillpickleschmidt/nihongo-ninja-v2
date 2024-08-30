import { Button } from "@/components/ui/button"
import { ChapterBoxes } from "./ChapterBoxes"
import Link from "next/link"
import {
  BookPlus,
  Gamepad,
  GraduationCap,
  Library,
  ScrollText,
  Volume2,
} from "lucide-react"
import Sidebar from "./components/Sidebar"

export default function HiddenContent() {
  return (
    <div className="relative w-full overflow-hidden">
      <Sidebar />
      <div className="mt-16 flex w-full justify-evenly pb-24">
        <div className="relative flex lg:w-[27.5%]">
          {/* Large screens */}
          <div className="fixed hidden flex-col space-y-6 pl-12 pt-16 lg:flex xl:pl-24">
            <a href="https://jpdb.io">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-nowrap py-3 text-sm font-normal lg:px-6 xl:w-56 xl:text-base 2xl:w-72"
              >
                <BookPlus size="22px" className="mr-3 text-amber-400" />
                <span className="opacity-75">
                  Jpdb.io <span className="ml-1 text-sm">(Kanji)</span>
                </span>
              </Button>
            </a>
            <Link href="/learn/grammar-notes">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-nowrap py-3 text-sm font-normal lg:px-6 xl:w-56 xl:text-base 2xl:w-72"
              >
                <ScrollText size="22px" className="mr-3 text-red-500" />
                <span className="opacity-75">Grammar Notes</span>
              </Button>
            </Link>
            <Link href="/learn/vocab-list">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-nowrap py-3 text-sm font-normal lg:px-6 xl:w-56 xl:text-base 2xl:w-72"
              >
                <Library size="22px" className="mr-3 text-sky-400" />
                <span className="opacity-75">Vocab List</span>
              </Button>
            </Link>
            <Link href="/learn/vocab-practice">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-nowrap py-3 text-sm font-normal lg:px-6 xl:w-56 xl:text-base 2xl:w-72"
              >
                <GraduationCap size="22px" className="mr-3 text-orange-500" />
                <span className="opacity-75">Vocab Practice</span>
              </Button>
            </Link>
            <Link href="/learn/conjugation">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-nowrap py-3 text-sm font-normal lg:px-6 xl:w-56 xl:text-base 2xl:w-72"
              >
                <GraduationCap size="22px" className="mr-3 text-teal-400" />
                <span className="opacity-75">Conjugation</span>
              </Button>
            </Link>
            <Link href="/learn/listening-material">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-nowrap py-3 text-sm font-normal lg:px-6 xl:w-56 xl:text-base 2xl:w-72"
              >
                <Volume2 size="22px" className="mr-3 text-purple-400" />
                <span className="opacity-75">Listening Material</span>
              </Button>
            </Link>
            <Link href="">
              <Button
                size="lg"
                variant="outline"
                className="w-full text-nowrap py-3 text-sm font-normal lg:px-6 xl:w-56 xl:text-base 2xl:w-72"
                disabled
              >
                <Gamepad size="22px" className="mr-3 text-green-500" />
                <span className="opacity-75">Games</span>
              </Button>
            </Link>
          </div>
        </div>
        <div className="w-[75%] sm:w-[67%] xl:w-[60%]">
          <div className="my-6 flex min-h-28 w-full items-center justify-center rounded-md border bg-card px-8 py-4 text-muted-foreground">
            No fixed curriculum—Nihongo Ninja aims to be your go-to hub for
            Japanese learning. We've scoured the internet to curate the best
            learning materials, bringing them together in one place for free.
          </div>
          <ChapterBoxes />
        </div>
        <div className="flex h-full items-center justify-center lg:w-[12.5%]">
          <div className="fixed top-[22.5%] h-[700px] w-0.5 bg-muted-foreground opacity-50" />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="flex min-h-48 w-[78%] flex-col justify-center rounded-t-lg bg-card pb-4 text-base font-extralight text-muted-foreground sm:w-[70%] xl:w-[63%]">
          <p className="p-6 lg:px-24">
            Disclaimer: Content on this site is supplementary and not approved
            by any textbook publishers/authors. Nihongo Ninja is not affiliated
            with linked YouTube channels or websites.
          </p>
          <div className="mt-4 flex items-center justify-evenly px-4 lg:px-12">
            <div className="w-48 text-center">
              <Link href="/faq" className="text-lg font-normal">
                FAQ
              </Link>
            </div>
            <div className="w-48 text-center">
              <Link href="/about" className="text-lg font-normal">
                About
              </Link>
            </div>
            <div className="w-48 text-center">© 2024 Nihongo Ninja</div>
          </div>
        </div>
      </div>
    </div>
  )
}
