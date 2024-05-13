"use client"
import { useEffect, useState } from "react"
import { useGlobalContext } from "@/context/GlobalContext"
import {
  useScroll,
  useTransform,
  anticipate,
  useAnimate,
  easeInOut,
} from "framer-motion"

type TopWindowSizerProps = {
  children: React.ReactNode
}

export default function TopWindowSizer({ children }: TopWindowSizerProps) {
  const { showContentBox, setShowContentBox, scrollRef } = useGlobalContext()
  const [ref, setRef] = useState<React.RefObject<HTMLDivElement>>(scrollRef)
  const [startTracking, setStartTracking] = useState(false)

  useEffect(() => {
    setRef(scrollRef)
  }, [scrollRef])

  const { scrollYProgress: opacityValue } = useScroll({
    target: ref,
    offset: ["start 75%", "start start"],
    layoutEffect: false,
  })

  const { scrollYProgress: navBarTransformValue } = useScroll({
    target: ref,
    offset: ["start 75%", "start 50%"],
    layoutEffect: false,
  })

  const opacity = useTransform(opacityValue, [0, 1], [1, 0], {
    ease: anticipate,
  })

  const [scope, animate] = useAnimate()

  const pageMountAnimation = async () => {
    if (showContentBox && scope.current) {
      await animate(
        scope.current,
        { height: "94vh", opacity: 1 },
        { duration: 0.5, ease: easeInOut }
      )
      setTimeout(async () => {
        await animate(
          scope.current,
          { height: "100vh" },
          { duration: 1, ease: easeInOut }
        )
      }, 500)
      setStartTracking(true)
    }
  }

  useEffect(() => {
    pageMountAnimation()
  }, [showContentBox])

  useEffect(() => {
    const handleScroll = async () => {
      if (showContentBox && scope.current && startTracking) {
        await animate(
          scope.current,
          { opacity: opacity.get() },
          { duration: 0 }
        )
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [showContentBox, opacityValue, startTracking])

  return (
    <div>
      {showContentBox ? (
        <div ref={scope} className="relative w-full bg-background">
          <div className="fixed h-full w-full">{children}</div>
        </div>
      ) : (
        <div className="relative h-[380px] w-full bg-background">
          {children}
        </div>
      )}
    </div>
  )
}
