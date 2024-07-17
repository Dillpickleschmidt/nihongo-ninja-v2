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
            <Button variant="outline">Home</Button>
          </Link>
          <ThemeToggle />
          <Link href="/learn/vocab-practice">
            <Button
              size="sm"
              className="ml-1 border-black bg-red-400/75 text-xs font-medium text-black hover:bg-red-400/65"
            >
              Vocab Practice
            </Button>
          </Link>
          <Link href="/learn/conjugation">
            <Button
              size="sm"
              className="ml-1 border-black bg-orange-400/75 text-xs font-medium text-black hover:bg-orange-400/65"
            >
              Conjugation
            </Button>
          </Link>
          <Link href="/learn/listening-practice">
            <Button
              size="sm"
              className="ml-1 border-black bg-yellow-400/75 text-xs font-medium text-black hover:bg-yellow-400/65"
            >
              Listening Practice
            </Button>
          </Link>
        </li>
        <li className="flex h-full items-center [&>*]:mr-2">
          <a href="https://jpdb.io">
            <Button
              size="sm"
              className="ml-1 border-black bg-green-500/75 text-xs font-medium text-black hover:bg-green-500/65"
            >
              Jpdb.io
            </Button>
          </a>
          <Link href="">
            <Button
              size="sm"
              className="ml-1 border-black bg-sky-400/75 text-xs font-medium text-black hover:bg-sky-400/65"
            >
              Games
            </Button>
          </Link>
        </li>
        <li className="flex h-full items-center [&>*]:mr-2">
          <Link href="/learn/grammar-notes">
            <Button
              size="sm"
              className="hover:indigo-400/65 ml-1 border-black bg-indigo-400/75 text-xs font-medium text-black"
            >
              Grammar Notes
            </Button>
          </Link>
          <Link href="/learn/vocab-list">
            <Button
              size="sm"
              className="mr-1 border-black bg-purple-400/75 text-xs font-medium text-black hover:bg-purple-400/65"
            >
              Vocab List
            </Button>
          </Link>
          <ProfileIcon />
        </li>
      </ul>
    </nav>
  )
}
