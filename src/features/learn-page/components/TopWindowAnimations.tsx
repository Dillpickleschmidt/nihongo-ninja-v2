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
import TopWindowWrapper from "./TopWindowWrapper"

type TopWindowAnimationsProps = {
  children: React.ReactNode
}

export default function TopWindowAnimations({
  children,
}: TopWindowAnimationsProps) {
  const {
    setShowNavbar,
    scrollRef,
    fromLearnPage,
    setFromLearnPage,
    setIsTopFullyExpanded,
  } = useGlobalContext()

  const [scrollRefStateObject, setScrollRefStateObject] =
    useState<React.RefObject<HTMLDivElement>>(scrollRef)

  // Set the scrollRefStateObject to the scrollRef
  useEffect(() => {
    setScrollRefStateObject(scrollRef)
  }, [scrollRef])

  // Track the scroll position of the scrollRefStateObject
  const { scrollYProgress: opacityValue } = useScroll({
    target: scrollRefStateObject,
    offset: ["start 75%", "start 64px"],
    layoutEffect: false,
  })

  // When the element is 2px (y value) in view, the value is true
  const isInView = useInView(scrollRefStateObject, { margin: "-1px 0px" })

  // Show the navbar when the element is in view
  useEffect(() => {
    if (!fromLearnPage) {
      setIsTopFullyExpanded(!isInView)
      setShowNavbar(isInView)
    }
  }, [isInView])

  // Apply a curve to the opacity value and flip it
  const opacity = useTransform(opacityValue, [0, 1], [1, 0], {
    ease: anticipate,
  })

  const [scope, animate] = useAnimate()

  const pageMountAnimation = async () => {
    console.log("Running animation")
    if (scope.current && fromLearnPage) {
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
      setFromLearnPage(false)
      console.log("Animation complete")
    }
  }

  // Run the 'open' animation when the page mounts
  useEffect(() => {
    pageMountAnimation()
  }, [])

  // Change opacity of the content box when scrolling
  useEffect(() => {
    let isInitialRender = true

    const handleScroll = async () => {
      // This is to prevent the animation from running on the first render (fix flickering issue)
      if (isInitialRender) {
        isInitialRender = false
        return
      }
      if (scope.current) {
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
  }, [opacityValue])

  return (
    <>
      {fromLearnPage ? (
        <div ref={scope} className="relative w-full bg-background">
          <TopWindowWrapper>{children}</TopWindowWrapper>
        </div>
      ) : (
        <div className="relative w-full h-screen bg-background">
          <TopWindowWrapper>{children}</TopWindowWrapper>
        </div>
      )}
    </>
  )
}
