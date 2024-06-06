"use client"

import { useState } from "react"
import { useVocabCardContext } from "@/features/vocab-card/context/VocabCardContext"
import { ButtonWithVideo } from "./ButtonWithVideo"
import type { VocabEntry } from "@/types/vocab"

type VocabVideoProps = {
  index: number
}

export default function VocabVideo({ index }: VocabVideoProps) {
  const data = useVocabCardContext()
  const entry: VocabEntry | undefined = data[index]

  // Check if entry or videos array is null or empty
  if (!entry || !entry.videos || entry.videos.length === 0) {
    return null
  }

  // Get the first video
  const src: string = entry.videos[0].src ?? ""
  const title: string = entry.videos[0].title ?? ""

  const [showVideo, setShowVideo] = useState<number | null>(null)
  const [loadingStates, setLoadingStates] = useState<boolean[]>(
    data.map(() => true),
  )

  const handleShow = (index: number) => {
    setShowVideo((prev) => {
      console.log("show " + index)
      return prev === index ? null : index
    })
  }

  const handleHide = () => {
    setShowVideo(() => {
      console.log("hide " + null)
      return null
    })
  }

  const handleLoaded = (index: number) => {
    setLoadingStates((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = false
      return newStates
    })
  }

  return (
    <div
      className={`${index === showVideo && "relative bg-background pb-[56.25%]"}`}
    >
      <ButtonWithVideo
        index={index}
        src={src}
        title={title}
        showVideo={showVideo}
        loadingStates={loadingStates}
        handleShow={handleShow}
        handleHide={handleHide}
        handleLoaded={handleLoaded}
      />
    </div>
  )
}
