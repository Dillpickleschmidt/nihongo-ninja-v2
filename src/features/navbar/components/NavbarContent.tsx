import CustomImage from "@/components/CustomImage"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProfileIcon from "./ProfileIcon"

export default function NavbarContent() {
  return (
    <nav>
      <ul className="mx-6 flex items-center justify-between overflow-x-auto py-3 scrollbar:hidden">
        <li className="flex h-full items-center [&>*]:mr-2">
          <Link href="/learn">
            <Button
              variant="outline"
              className="bg-red-400 font-medium text-black hover:bg-red-400/80 hover:text-black"
            >
              Home
            </Button>
          </Link>
          <Link href="/learn/vocab-practice">
            <Button
              variant="outline"
              className="ml-1 text-nowrap font-normal opacity-75"
            >
              Vocab Practice
            </Button>
          </Link>
          <Link href="/learn/conjugation">
            <Button
              variant="outline"
              className="ml-1 text-nowrap font-normal opacity-75"
            >
              Conjugation
            </Button>
          </Link>
          <Link href="/learn/listening-practice">
            <Button
              variant="outline"
              className="ml-1 text-nowrap font-normal opacity-75"
            >
              Listening Practice
            </Button>
          </Link>
        </li>
        <li className="flex h-full items-center [&>*]:mr-2">
          <a href="https://jpdb.io">
            <Button
              variant="outline"
              className="mr-1 text-nowrap font-normal opacity-75"
            >
              Jpdb.io
            </Button>
          </a>
          <Link href="">
            <Button
              variant="outline"
              className="mr-1 text-nowrap font-normal opacity-75"
            >
              Games
            </Button>
          </Link>
          <Link href="/learn/grammar-notes">
            <Button
              variant="outline"
              className="mr-1 text-nowrap font-normal opacity-75"
            >
              Grammar Notes
            </Button>
          </Link>
          <Link href="/learn/vocab-list">
            <Button
              variant="outline"
              className="mr-1 text-nowrap font-normal opacity-75"
            >
              Vocab List
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
