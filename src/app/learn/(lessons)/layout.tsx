"use client"

import { useRef, useEffect, useState } from "react"
import HiddenContent from "@/features/learn-page/HiddenContent"
import { useGlobalContext } from "@/context/GlobalContext"
import { Button } from "@/components/ui/button"
import CustomImage from "@/components/CustomImage"
import { ChevronDown, ChevronUp } from "lucide-react"
import {
  useScroll,
  useTransform,
  useAnimate,
  anticipate,
  useMotionValueEvent,
} from "framer-motion"

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const mainContentRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const { isHiddenContentVisible, setHiddenContentVisible, setShowNavbar } =
    useGlobalContext()

  const [hiddenContentRef, animate] = useAnimate()

  const [opacityState, setOpacityState] = useState(1)

  const { scrollYProgress } = useScroll({
    target: hiddenContentRef,
    // start-end instead of start center bc translateY -50%
    // start-0.6 instead of start-start bc translateY -50%
    offset: ["start end", "start 0.6"],
    layoutEffect: false,
  })

  // Apply a curve to the opacity value and flip it
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0], {
    ease: anticipate,
  })

  const useHandleScroll = () => {
    useMotionValueEvent(opacity, "change", (latestValue) => {
      setOpacityState(latestValue)
      console.log("Page scroll: ", latestValue)
    })

    return opacityState
  }

  const opacityValue = useHandleScroll()

  useEffect(() => {
    setShowNavbar(false)
  }, [])

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (
        isHiddenContentVisible &&
        scrollRef.current &&
        scrollRef.current.scrollTop <= 0 &&
        event.deltaY < 0
      ) {
        event.preventDefault()
        handleAnimate(isHiddenContentVisible)
        setHiddenContentVisible(false)
      }
    }

    const handleTouchMove = (event: TouchEvent) => {
      if (
        isHiddenContentVisible &&
        scrollRef.current &&
        scrollRef.current.scrollTop <= 0 &&
        event.touches[0].clientY > 0
      ) {
        event.preventDefault()
        handleAnimate(isHiddenContentVisible)
        setHiddenContentVisible(false)
      }
    }

    window.addEventListener("wheel", handleScroll, { passive: false })
    window.addEventListener("touchmove", handleTouchMove, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleScroll)
      window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [isHiddenContentVisible, setHiddenContentVisible])

  async function handleClick() {
    setHiddenContentVisible(!isHiddenContentVisible)
    await handleAnimate(isHiddenContentVisible)
  }

  async function handleAnimate(isHiddenContentVisible: boolean) {
    if (isHiddenContentVisible) {
      await animate(
        hiddenContentRef.current,
        { translateY: "0%" },
        { ease: "linear", duration: 0.1 },
      )
    } else {
      await animate(
        hiddenContentRef.current,
        { translateY: "-50%" },
        { ease: "linear", duration: 0.5 },
      )
    }
  }

  return (
    <div
      ref={scrollRef}
      className={`relative min-h-screen overflow-x-hidden ${!isHiddenContentVisible ? "scrollbar:hidden" : "overflow-y-auto"} scrollbar:w-2.5 scrollbar-track:bg-transparent scrollbar-thumb:bg-neutral-400 hover:scrollbar-thumb:bg-[#999999] dark:scrollbar-thumb:bg-neutral-500`}
    >
      <div
        ref={mainContentRef}
        style={{ opacity: opacityValue }}
        className="sticky inset-0 h-screen w-screen"
      >
        <CustomImage
          src="/img/japanese-gate.png"
          alt="Japanese gate homescreen image"
          priority={true}
        />
        <div className="absolute inset-0 backdrop-blur-2xl dark:backdrop-brightness-[65%]" />
        {children}
      </div>
      <div
        ref={hiddenContentRef}
        className={`absolute left-0 h-screen w-screen bg-background duration-300 ease-in-out`}
      >
        <HiddenContent />
      </div>
      <Button
        variant="outline"
        onClick={() => handleClick()}
        className="fixed bottom-4 left-1/2 z-50 -translate-x-1/2 rounded-full"
      >
        {isHiddenContentVisible ? (
          <ChevronDown size={20} />
        ) : (
          <ChevronUp size={20} />
        )}
      </Button>
    </div>
  )
}
