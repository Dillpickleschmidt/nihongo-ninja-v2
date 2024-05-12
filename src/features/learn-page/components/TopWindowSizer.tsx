/*
This component changes the top window height based on the top window context variable.

It also changes the positioning style of the top window based on the showContentBox
state (either fixed or relative).
This allows a wipe scroll effect for the top window when the user scrolls if the
showContentBox state is true, and a normal scroll effect if the showContentBox state
is false.
*/

"use client"
import { useEffect, useRef, useState } from "react"
import { useTopWindowContext } from "../context/LayoutContextProvider"
import {
  m,
  LazyMotion,
  useScroll,
  useTransform,
  MotionValue,
  anticipate,
} from "framer-motion"
import loadMotionFeatures from "@/lib/framer-motion/loadMotionFeatures"

type TopWindowSizerProps = {
  children: React.ReactNode
}

export default function TopWindowSizer({ children }: TopWindowSizerProps) {
  const { showContentBox, setShowContentBox, scrollRef } = useTopWindowContext()
  const [ref, setRef] = useState<React.RefObject<HTMLDivElement>>()
  const [opacityState, setOpacityState] = useState<MotionValue<number>>()

  useEffect(() => {
    setRef(scrollRef)
  }, [scrollRef])

  const { scrollYProgress: opacityValue } = useScroll({
    target: ref,
    offset: ["start 75%", "start start"],
  })

  const opacity = useTransform(opacityValue, [0, 1], [1, 0], {
    ease: anticipate,
  })

  const { scrollYProgress: navBarTransformValue } = useScroll({
    target: ref,
    offset: ["start 75%", "start 50%"],
  })

  useEffect(() => {
    setOpacityState(opacity)
  }, [opacity])

  return (
    <>
      {showContentBox ? (
        <LazyMotion features={loadMotionFeatures} strict>
          <m.div // Other page elements offset below this div
            initial={{ height: 380, opacity: 1 }}
            animate={{ height: [0, "94vh", "100vh"] }}
            transition={{
              type: "tween",
              ease: "easeInOut",
              duration: 4,
              times: [0, 0.125, 1],
            }}
            style={{ opacity: opacityState }}
            className="relative w-full bg-background"
          >
            <div // This div is fixed to the top of the viewport
              className="fixed h-full w-full"
            >
              {children}
            </div>
          </m.div>
        </LazyMotion>
      ) : (
        <div // Else: use normal positioning
          className="relative h-[380px] w-full bg-background"
        >
          {children}
        </div>
      )}
    </>
  )
}
