"use client"

import { useRef } from "react"
import { useTopWindowContext } from "../context/LayoutContextProvider"
import { m, LazyMotion, useScroll, useSpring } from "framer-motion"
import loadMotionFeatures from "@/lib/framer-motion/loadMotionFeatures"

export default function TopWindowContentWrapper({
  children,
}: {
  children: React.ReactNode
}) {
  const { showContentBox, setShowContentBox } = useTopWindowContext()
  const scrollRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    container: scrollRef,
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 125,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <div>
      {showContentBox && (
        <LazyMotion features={loadMotionFeatures} strict>
          <div className="absolute z-10 w-full h-full py-1 flex justify-center backdrop-blur-2xl dark:backdrop-brightness-[65%]">
            <div
              ref={scrollRef}
              className="relative w-[45%] h-full bg-background border-[4px] border-black rounded-[50px] shadow-xl overflow-y-scroll scrollbar:hidden"
            >
              <m.div
                style={{ scaleX: scaleX }}
                className="sticky top-0 h-1 w-full origin-left bg-green-400"
              ></m.div>
              {children}
            </div>
          </div>
        </LazyMotion>
      )}
    </div>
  )
}
