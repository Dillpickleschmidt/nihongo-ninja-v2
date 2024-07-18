import CustomImage from "@/components/CustomImage"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProfileIcon from "./ProfileIcon"
import {
  BookPlus,
  Gamepad,
  GraduationCap,
  Library,
  ScrollText,
  Volume2,
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function NavbarContent() {
  return (
    <nav>
      <ul className="mx-6 flex items-center justify-between overflow-x-auto py-3 scrollbar:hidden">
        <li className="flex h-full items-center [&>*]:mr-2">
          <Link href="/learn">
            <Button
              variant="outline"
              className="bg-red-400 font-bold text-black hover:bg-red-400/80 hover:text-black"
            >
              Home
            </Button>
          </Link>
          <Link href="/learn/vocab-practice">
            <Button
              variant="outline"
              className="ml-1 text-nowrap font-normal opacity-50 hover:opacity-85"
            >
              <GraduationCap size="18px" className="mr-2 text-red-500" />
              Vocab Practice
            </Button>
          </Link>
          <Link href="/learn/conjugation">
            <Button
              variant="outline"
              className="ml-1 text-nowrap font-normal opacity-50 hover:opacity-85"
            >
              <GraduationCap size="18px" className="mr-2 text-orange-500" />
              Conjugation
            </Button>
          </Link>
          <Link href="/learn/listening-material">
            <Button
              variant="outline"
              className="ml-1 text-nowrap font-normal opacity-50 hover:opacity-85"
            >
              <Volume2 size="18px" className="mr-2 text-yellow-500" />
              Listening Material
            </Button>
          </Link>
        </li>
        <li className="flex h-full w-full items-center">
          <Input
            className="dark:placeholder:text-background-secondary75 mx-2 w-full rounded-full bg-card px-8 py-2 text-right font-japanese"
            placeholder="AIと話します"
          />
        </li>
        <li className="flex h-full items-center [&>*]:ml-2">
          <a href="https://jpdb.io">
            <Button
              variant="outline"
              className="mr-1 text-nowrap font-normal opacity-50 hover:opacity-85"
            >
              Jpdb.io
              <BookPlus size="18px" className="ml-2 text-green-500" />
            </Button>
          </a>
          <Link href="">
            <Button
              variant="outline"
              className="mr-1 text-nowrap font-normal opacity-50 hover:opacity-85"
            >
              Games
              <Gamepad size="18px" className="ml-2 text-teal-500" />
            </Button>
          </Link>
          <Link href="/learn/grammar-notes">
            <Button
              variant="outline"
              className="mr-1 text-nowrap font-normal opacity-50 hover:opacity-85"
            >
              Grammar Notes
              <ScrollText size="18px" className="ml-2 text-sky-500" />
            </Button>
          </Link>
          <Link href="/learn/vocab-list">
            <Button
              variant="outline"
              className="mr-1 text-nowrap font-normal opacity-50 hover:opacity-85"
            >
              Vocab List
              <Library size="18px" className="ml-2 text-purple-500" />
            </Button>
          </Link>
          <div className="!mr-3">
            <ThemeToggle />
          </div>
          <ProfileIcon />
        </li>
      </ul>
    </nav>
  )
}
