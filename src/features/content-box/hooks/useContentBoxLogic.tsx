"use client"
import { useRef, useState, useEffect } from "react"
import { useMotionValueEvent, useScroll, useSpring } from "framer-motion"
import { useGlobalContext } from "@/context/GlobalContext"
import { addVocabToDeck } from "@/features/jpdb/actions/actions"
import { toast } from "sonner"
import { getUser } from "@/lib/supabase/databaseFunctions"
import { LoadingSpinner } from "@/components/ui/loading-spinner"

export function useContentBoxLogic(
  jpdbDeckName?: string,
  jpdbVocab?: number[][],
) {
  const contentScrollRef = useRef<HTMLDivElement>(null)
  const [bottomReached, setBottomReached] = useState(false)
  const { scrollYProgress } = useScroll({ container: contentScrollRef })
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 125,
    damping: 30,
    restDelta: 0.001,
  })
  const { isHiddenContentVisible } = useGlobalContext()

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

  useEffect(() => {
    if (isHiddenContentVisible) return

    function handleGlobalScroll(event: WheelEvent) {
      if (contentScrollRef.current) {
        event.preventDefault()
        contentScrollRef.current.scrollTop += event.deltaY
      }
    }

    window.addEventListener("wheel", handleGlobalScroll, { passive: false })

    return () => {
      window.removeEventListener("wheel", handleGlobalScroll)
    }
  }, [isHiddenContentVisible])

  return {
    contentScrollRef,
    bottomReached,
    scaleX,
    isHiddenContentVisible,
    handleGlobalScroll: (event: WheelEvent) => {
      if (contentScrollRef.current) {
        event.preventDefault()
        contentScrollRef.current.scrollTop += event.deltaY
      }
    },
  }
}
