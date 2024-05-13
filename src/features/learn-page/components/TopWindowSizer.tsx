"use client"
import { useEffect, useState } from "react"
import { useGlobalContext } from "@/context/GlobalContext"
import {
  useScroll,
  useTransform,
  anticipate,
  useAnimate,
  easeInOut,
  useInView,
} from "framer-motion"

type TopWindowSizerProps = {
  children: React.ReactNode
}

export default function TopWindowSizer({ children }: TopWindowSizerProps) {
  const {
    showContentBox,
    setShowContentBox,
    setShowNavbar,
    scrollRef,
    navbarRef,
  } = useGlobalContext()
  const [scrollRefStateObject, setScrollRefStateObject] =
    useState<React.RefObject<HTMLDivElement>>(scrollRef)

  useEffect(() => {
    setScrollRefStateObject(scrollRef)
  }, [scrollRef])

  const { scrollYProgress: opacityValue } = useScroll({
    target: scrollRefStateObject,
    offset: ["start 75%", "start start"],
    layoutEffect: false,
  })

  // When the element is 2px (y value) in view, the value is true
  const isInView = useInView(scrollRefStateObject, { margin: "-2px 0px" })

  useEffect(() => {
    console.log("Element is in view: ", isInView)
    setShowNavbar(isInView)
  }, [isInView])

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
      await animate(
        scope.current,
        { height: "100vh" },
        { duration: 1, ease: easeInOut }
      )
    }
  }

  useEffect(() => {
    pageMountAnimation()
  }, [showContentBox])

  useEffect(() => {
    let isInitialRender = true

    const handleScroll = async () => {
      // This is to prevent the animation from running on the first render (fix flickering issue)
      if (isInitialRender) {
        isInitialRender = false
        return
      }

      if (showContentBox && scope.current) {
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
  }, [showContentBox, opacityValue])

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
