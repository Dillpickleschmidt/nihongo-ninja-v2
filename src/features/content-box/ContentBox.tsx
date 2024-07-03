"use client"

import { m, useMotionValueEvent, useScroll, useSpring } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { VariantProps, cva } from "class-variance-authority"
import { cn } from "@/utils/cn"
import { Button } from "@/components/ui/button"
import { useGlobalContext } from "@/context/GlobalContext"
import { addVocabToDeck } from "@/features/jpdb/actions/actions"
import { toast } from "sonner"
import { getUser } from "@/lib/supabase/databaseFunctions"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

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
    fixedElements?: React.ReactNode
    jpdbDeckName?: string
    jpdbVocab?: number[][]
  }

export default function ContentBox({
  children,
  variant,
  color,
  className,
  nextPageLink,
  nextButton = (
    <div className="mx-12 flex flex-row justify-end pb-16 pt-24">
      <Button link={nextPageLink}>Next Lesson {"->"}</Button>
    </div>
  ),
  showProgressBar = true,
  backgroundImage,
  backgroundImageSize = "1200px",
  backgroundImageOpacity = 30,
  showAlertOnClose = false,
  fixedElements,
  jpdbDeckName,
  jpdbVocab,
}: ContentBoxProps) {
  // Ref for the content scroll box
  const contentScrollRef = useRef<HTMLDivElement>(null)
  // State for checking if the bottom of the content box has been reached
  const [bottomReached, setBottomReached] = useState(false)
  // Framer motion scroll progress
  const { scrollYProgress } = useScroll({
    container: contentScrollRef,
  })
  // Framer motion spring for the progress bar
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 125,
    damping: 30,
    restDelta: 0.001,
  })
  const { isHiddenContentVisible } = useGlobalContext()
  // const [touchStartY, setTouchStartY] = useState<number | null>(null)

  // Do this on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  async function onToastClick(jpdbDeckName: string, jpdbVocab: number[][]) {
    toast.dismiss()
    toast(`Adding vocab to jpdb.io`, {
      duration: Infinity,
      description: `→ ${jpdbDeckName}...`,
      icon: <LoadingSpinner size={24} className="text-orange-400" />,
    })
    try {
      const response = await addVocabToDeck(jpdbDeckName, jpdbVocab)
      const skippedVocabLength = response.skippedVocabLength
      const newVocabLength = response.newVocabLength
      toast.dismiss() // Dismiss the previous toast messages
      if (response.skippedVocabLength === 0) {
        toast.success(
          `Successfully added ${response.newVocabLength} vocab to jpdb.`,
          {
            description: `${jpdbDeckName}`,
            duration: 5000,
          },
        )
      } else {
        toast.success(
          `Successfully added ${newVocabLength} new vocab to jpdb`,
          {
            description: `${jpdbDeckName} → added ${skippedVocabLength} new vocab, skipped ${skippedVocabLength} existing vocab.`,
            duration: 5000,
          },
        )
      }
    } catch {
      toast.dismiss()
      toast.error("Failed to add vocab to jpdb.")
    }
  }

  // Add to jpdb when bottom is reached
  useMotionValueEvent(scrollYProgress, "change", async (latest) => {
    if (latest >= 0.95 && !bottomReached && jpdbDeckName && jpdbVocab) {
      setBottomReached(true)
      try {
        const user = await getUser()
        if (user) {
          toast(`Add ${jpdbVocab.length} vocab to jpdb.io?`, {
            description: `Recommended!`,
            duration: Infinity,
            action: {
              label: "Add",
              onClick: () => onToastClick(jpdbDeckName, jpdbVocab),
            },
          })
        }
      } catch {
        console.error("No user signed in. Can't add vocab to jpdb.")
      }
    }
  })

  // Global scroll event listener for scrolling the content box
  useEffect(() => {
    if (isHiddenContentVisible) return

    function handleGlobalScroll(event: WheelEvent) {
      if (contentScrollRef.current) {
        event.preventDefault()
        contentScrollRef.current.scrollTop += event.deltaY
      }
    }

    // function handleTouchStart(event: TouchEvent) {
    //   if (event.touches.length > 0) {
    //     setTouchStartY(event.touches[0].clientY)
    //   }
    // }

    // function handleTouchMove(event: TouchEvent) {
    //   if (
    //     contentScrollRef.current &&
    //     touchStartY !== null &&
    //     event.touches[0].clientY > touchStartY
    //   ) {
    //     contentScrollRef.current.scrollTop +=
    //       event.touches[0].clientY - touchStartY
    //     setTouchStartY(event.touches[0].clientY) // Update touchStartY to current touch position
    //   }
    // }

    window.addEventListener("wheel", handleGlobalScroll, { passive: false })
    // window.addEventListener("touchstart", handleTouchStart, { passive: true })
    // window.addEventListener("touchmove", handleTouchMove, { passive: true })

    return () => {
      window.removeEventListener("wheel", handleGlobalScroll)
      // window.removeEventListener("touchstart", handleTouchStart)
      // window.removeEventListener("touchmove", handleTouchMove)
    }
  }, [
    isHiddenContentVisible,
    // touchStartY
  ])

  return (
    <div>
      <div
        className={cn(dialogVariants({ variant, color, className }))}
        style={{
          position: "absolute",
          top: "50%",
          right: "50%",
          transform: "translate(50%,-50%)",
        }}
      >
        <div
          ref={contentScrollRef}
          className={`h-full w-full ${!isHiddenContentVisible ? "overflow-y-scroll" : "overflow-hidden"} scrollbar:hidden`}
        >
          <div className="relative min-h-full">
            {backgroundImage && (
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${backgroundImage})`,
                  backgroundRepeat: "repeat",
                  backgroundSize: backgroundImageSize,
                  backgroundBlendMode: "multiply",
                  opacity: backgroundImageOpacity / 100,
                  zIndex: -1,
                }}
              />
            )}
            {showProgressBar && (
              <m.div
                style={{ scaleX: scaleX }}
                className="sticky top-[-1px] z-50 -mb-[0.1625rem] h-[0.1625rem] w-full origin-left bg-indigo-600 dark:bg-green-500"
              ></m.div>
            )}
            {children}
            {nextButton}
          </div>
        </div>
        <div className="fixed left-0 top-0 z-50">{fixedElements}</div>
      </div>
    </div>
  )
}

const dialogVariants = cva(
  "relative w-full h-full border-black rounded-none shadow-xl overflow-hidden",
  {
    variants: {
      variant: {
        fullscreen: "w-full h-full rounded-none border-none",
        xl: "2xl:w-[1550px] 2xl:h-[95%] 2xl:rounded-[50px] 2xl:border-[4px]",
        lg: "xl:w-[1370px] w-full xl:h-[80%] xl:rounded-[50px] xl:border-[4px] xl:border-y-[4px]",
        reading:
          "lg:w-[815px] md:w-[98%] w-full md:h-[99%] 2xl:rounded-[50px] md:rounded-[30px] md:border-[4px]",
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
  },
)
