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
      <div className="mx-6 flex items-center justify-between overflow-x-auto py-3 scrollbar:hidden">
        <Link href="/learn">
          <Button
            variant="outline"
            className="bg-red-400 font-bold text-black hover:bg-red-400/80 hover:text-black"
          >
            Home
          </Button>
        </Link>
        <Input
          className="dark:placeholder:text-background-secondary75 mx-2 w-full max-w-[600px] rounded-full bg-card px-8 py-2 text-right font-japanese"
          placeholder="AIと話します"
          disabled
        />
        <div className="flex">
          <div className="!mr-3">
            <ThemeToggle />
          </div>
          <ProfileIcon />
        </div>
      </div>
    </nav>
  )
}
