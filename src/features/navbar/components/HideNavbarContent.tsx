import { m, LazyMotion } from "framer-motion"
import loadMotionFeatures from "@/lib/framer-motion/loadMotionFeatures"
import NavbarContent from "./NavbarContent"

export default function HideNavbarContent() {
  return (
    // This animation will run when loadFeatures resolves.
    <LazyMotion features={loadMotionFeatures}>
      <m.nav
        initial={{
          translateY: -42,
          opacity: 0.25,
        }}
        whileHover={{
          translateY: 0,
          opacity: 1,
        }}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.1 }}
        className="fixed top-0 left-0 z-50 w-full h-[65px] bg-background text-foreground"
      >
        <NavbarContent />
      </m.nav>
    </LazyMotion>
  )
}
