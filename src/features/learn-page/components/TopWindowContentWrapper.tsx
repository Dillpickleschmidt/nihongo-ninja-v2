"use client"

import { useRef } from "react"
import { useGlobalContext } from "@/context/GlobalContext"
import { m, LazyMotion, useScroll, useSpring } from "framer-motion"
import loadMotionFeatures from "@/lib/framer-motion/loadMotionFeatures"

function ScrollableContent({ children }: { children: React.ReactNode }) {
  const localScrollRef = useRef(null)
  const { scrollYProgress } = useScroll({ container: localScrollRef })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 125,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div
      ref={localScrollRef}
      className="relative w-[45%] h-full bg-background border-[4px] border-black rounded-[50px] shadow-xl overflow-y-scroll scrollbar:hidden"
    >
      <m.div
        style={{ scaleX: scaleX }}
        className="sticky top-0 h-1 w-full origin-left bg-green-400"
      ></m.div>
      {children}
    </div>
  )
}

export default function TopWindowContentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const { showContentBox } = useGlobalContext()

  return (
    <div>
      {showContentBox && (
        <div className="absolute z-10 w-full h-full py-1 flex justify-center backdrop-blur-2xl dark:backdrop-brightness-[65%]">
          <LazyMotion features={loadMotionFeatures} strict>
            <ScrollableContent>{children}</ScrollableContent>
          </LazyMotion>
        </div>
      )}
    </div>
  )
}
