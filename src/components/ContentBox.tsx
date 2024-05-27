"use client"

import { m, useScroll, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/utils/cn"
import { Button } from "./ui/button"

type ContentBoxProps = React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof dialogVariants> & {
    children: React.ReactNode
    nextPageLink: string
    nextButton?: React.ReactNode
    showProgressBar?: boolean
    backgroundImage?: string
    backgroundImageSize?: string
    backgroundImageOpacity?: number
    showAlertOnClose?: boolean
  }

export default function ContentBox({
  children,
  variant,
  color,
  className,
  nextPageLink,
  nextButton = <Button link={nextPageLink}>Next Lesson {"->"}</Button>,
  showProgressBar = true,
  backgroundImage,
  backgroundImageSize = "1200px",
  backgroundImageOpacity = 30,
  showAlertOnClose = false,
}: ContentBoxProps) {
  const contentScrollRef = useRef(null)
  const { scrollYProgress } = useScroll({
    container: contentScrollRef,
  })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 125,
    damping: 30,
    restDelta: 0.001,
  })

  // Scroll to the top of the page on component mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <div
        ref={contentScrollRef}
        className={cn(dialogVariants({ variant, color, className }))}
        style={{
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(50%,-50%)",
        }}
      >
        {/* If a background is provided, render this html */}
        {backgroundImage ? (
          <div className="relative">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundRepeat: "repeat",
                backgroundSize: backgroundImageSize, // Change this value to scale your background image
                // mixBlendMode: "multiply",
                backgroundBlendMode: "multiply",
                opacity: backgroundImageOpacity / 100, // Change this value to set the opacity of the background image
                zIndex: -1,
              }}
            />
            {showProgressBar && (
              <m.div
                style={{ scaleX: scaleX }}
                className="sticky z-50 top-[-1px] -mb-[0.1625rem] h-[0.1625rem] w-full origin-left bg-indigo-600 dark:bg-green-500"
              ></m.div>
            )}
            {children}
            <div className="mt-24 pb-16 mx-12 flex flex-row justify-end">
              {nextButton}
            </div>
          </div>
        ) : (
          // Otherwise, just render this html
          <div>
            {showProgressBar && (
              <m.div
                style={{ scaleX: scaleX }}
                className="sticky z-50 top-[-1px] -mb-[0.1625rem] h-[0.1625rem] w-full origin-left bg-indigo-600 dark:bg-green-500"
              ></m.div>
            )}
            {children}
            <div className="mt-24 pb-16 mx-12 flex flex-row justify-end">
              {nextButton}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

const dialogVariants = cva(
  "relative w-full h-full border-black rounded-none shadow-xl overflow-y-scroll scrollbar:hidden",
  {
    variants: {
      variant: {
        fullscreen: "w-full h-full rounded-none border-none",
        xl: "2xl:w-[1550px] 2xl:h-[95%] 2xl:rounded-[50px] 2xl:border-[4px]",
        lg: "xl:w-[1370px] w-full h-[80%] xl:rounded-[50px] xl:border-[4px] border-y-[4px]",
        reading:
          "lg:w-[815px] md:w-[98%] w-full md:h-[99%] md:rounded-[50px] md:border-[4px]",
        md: "md:w-[685px] w-full md:h-[930px] h-full md:rounded-[50px] md:border-[3px]",
        sm: "sm:w-[600px] w-full sm:h-[820px] h-full sm:rounded-[50px] sm:border-[3px]",
      },
      color: {
        default: "bg-background",
        light: "bg-background-secondary text-foreground-secondary",
      },
    },
    defaultVariants: {
      variant: "reading",
      color: "default",
    },
  }
)
