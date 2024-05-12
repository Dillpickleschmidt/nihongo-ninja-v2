import { ThemeToggle } from "@/components/theme/theme-toggle"
import { Button } from "@/components/ui/button"

export default function NavbarContent() {
  return (
    <ul className="flex items-center justify-between py-3 mx-auto">
      <li></li>
      <li className="space-x-6 h-full flex items-center">
        <ThemeToggle />
        <Button>Sign In</Button>
      </li>
    </ul>
  )
}
