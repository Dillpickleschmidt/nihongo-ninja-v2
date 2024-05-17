import NavbarContent from "./NavbarContent"
import OffsetContentObserver from "./OffsetContentObserver"

export default function ShowNavbarPositioning() {
  return (
    <>
      <div className="fixed top-0 left-0 z-50 w-full h-[65px] bg-background/[99.9%] text-foreground">
        <NavbarContent />
      </div>
      {/* Push other elements below */}
      <OffsetContentObserver />
    </>
  )
}
