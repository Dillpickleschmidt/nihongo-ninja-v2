import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NavbarContent() {
  return (
    <nav>
      <ul className="mx-6 flex items-center justify-between py-3">
        <li className="flex h-full items-center [&>*]:mr-2">
          <Button variant="outline">
            <Link href="/learn">Home</Link>
          </Button>
          <ThemeToggle />
        </li>
        <li>
          <Button variant="outline">Sign In</Button>
        </li>
      </ul>
    </nav>
  )
}
