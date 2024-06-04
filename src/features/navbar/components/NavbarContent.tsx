import CustomImage from "@/components/CustomImage"
import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProfileIcon from "./ProfileIcon"

export default function NavbarContent() {
  return (
    <nav>
      <ul className="mx-6 flex items-center justify-between py-3">
        <li className="flex h-full items-center [&>*]:mr-2">
          <Link href="/learn">
            <Button variant="outline">Home</Button>
          </Link>
          <ThemeToggle />
        </li>
        <li className="flex h-full items-center [&>*]:mr-2">
          <Link href="/auth">
            <Button variant="outline">Sign In</Button>
          </Link>
          <ProfileIcon />
        </li>
      </ul>
    </nav>
  )
}
