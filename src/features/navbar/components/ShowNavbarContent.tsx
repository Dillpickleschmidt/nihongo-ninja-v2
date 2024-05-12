import NavbarContent from "./NavbarContent"

export default function ShowNavbarContent() {
  return (
    <nav className="sticky top-0 left-0 z-50 w-full h-[65px] bg-background text-foreground">
      <NavbarContent />
    </nav>
  )
}
