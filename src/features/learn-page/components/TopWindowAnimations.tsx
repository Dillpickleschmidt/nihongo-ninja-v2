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
  useMotionValueEvent,
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

  const [opacityState, setOpacityState] = useState(1)

  // Set the scrollRefStateObject to the scrollRef
  useEffect(() => {
    if (scrollRef.current) {
      setScrollRefStateObject(scrollRef)
    }
  }, [scrollRef])

  // When the element is 2px (y value) in view, the value is true
  const isInView = useInView(scrollRefStateObject, { margin: "-1px 0px" })

  // Show the navbar when the element is in view
  useEffect(() => {
    if (!fromLearnPage) {
      setIsTopFullyExpanded(!isInView)
      setShowNavbar(isInView)
    }
  }, [isInView])

  const [scope, animate] = useAnimate()

  const pageMountAnimation = async () => {
    if (scope.current && fromLearnPage) {
      console.log("Running animation")
      await animate(
        scope.current,
        { height: "94vh", opacity: 1 },
        { duration: 0.5, ease: easeInOut },
      )
      await animate(
        scope.current,
        { height: "100vh" },
        { duration: 1, ease: easeInOut },
      )
      setFromLearnPage(false)
      console.log("Animation complete")
    }
  }

  // Run the 'open' animation when the page mounts
  useEffect(() => {
    pageMountAnimation()
  }, [])

  // Track the scroll position of the scrollRefStateObject
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start 75%", "start 64px"],
    layoutEffect: false,
  })

  // Apply a curve to the opacity value and flip it
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0], {
    ease: anticipate,
  })

  const handleScroll = () => {
    useMotionValueEvent(opacity, "change", (latestValue) => {
      setOpacityState(latestValue)
      // console.log("Page scroll: ", latestValue)
    })

    return opacityState
  }

  return (
    <>
      {fromLearnPage ? (
        <div
          ref={scope}
          style={{ opacity: handleScroll() }}
          className="relative w-full bg-background"
        >
          <TopWindowWrapper>{children}</TopWindowWrapper>
        </div>
      ) : (
        <div
          style={{ opacity: handleScroll() }}
          className="relative h-screen w-full bg-background"
        >
          <TopWindowWrapper>{children}</TopWindowWrapper>
        </div>
      )}
    </>
  )
}
