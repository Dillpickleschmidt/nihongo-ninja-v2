"use client"

import { LazyMotion, easeInOut, useAnimate } from "framer-motion"
import loadMotionFeatures from "@/lib/framer-motion/loadMotionFeatures"
import NavbarContent from "./NavbarContent"
import { useEffect } from "react"
import { useGlobalContext } from "@/context/GlobalContext"

export default function HideNavbarContent() {
  const { showNavbar } = useGlobalContext()
  const [scope, animate] = useAnimate()

  async function handleMouseExit() {
    await animate(
      scope.current,
      { y: -42, opacity: 0.25 },
      { duration: 0.1, ease: easeInOut }
    )
  }
  async function handleMouseOver() {
    await animate(
      scope.current,
      { y: 0, opacity: 1 },
      { duration: 0.1, ease: easeInOut }
    )
  }

  async function pageMountAnimation() {
    await animate(
      scope.current,
      { y: -7, opacity: 0.98 },
      { duration: 0.5, ease: easeInOut }
    )
    setTimeout(async () => {
      await animate(
        scope.current,
        { y: -42, opacity: 0.25 },
        { duration: 1, ease: easeInOut }
      )
    }, 500)
  }

  enum AnimationType {
    pageMount,
    mouseOver,
    mouseExit,
  }

  type AnimationTypeString = keyof typeof AnimationType

  function switchAnimationType(animationType: AnimationTypeString) {
    switch (animationType) {
      case "pageMount":
        pageMountAnimation()
        break
      case "mouseOver":
        handleMouseOver()
        break
      case "mouseExit":
        handleMouseExit()
        break
    }
  }

  async function handleAnimate(animationType: AnimationTypeString) {
    if (!showNavbar) {
      switchAnimationType(animationType)
    }
  }

  useEffect(() => {
    handleAnimate("pageMount")
  }, [])

  return (
    // This animation will run when loadFeatures resolves.
    <LazyMotion features={loadMotionFeatures}>
      <div
        ref={scope}
        onMouseEnter={() => {
          handleAnimate("mouseOver")
        }}
        onMouseLeave={() => handleAnimate("mouseExit")}
        className="fixed top-0 left-0 z-50 w-full h-[65px] bg-background text-foreground"
      >
        <NavbarContent />
      </div>
    </LazyMotion>
  )
}
