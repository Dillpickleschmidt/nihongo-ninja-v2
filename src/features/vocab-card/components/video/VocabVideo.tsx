"use client"

import { useState } from "react"
import { useVocabCardContext } from "@/features/vocab-card/context/VocabCardContext"
import { ButtonWithVideo } from "./ButtonWithVideo"

type VocabVideoProps = {
  index: number
}

export default function VocabVideo({ index }: VocabVideoProps) {
  const { data } = useVocabCardContext()
  // converts object to array of key-value pairs
  const vocabEntries = Object.entries(data)
  // vocabEntries[index][1] = value = { english: [], kana: [], mnemonics: [], videos: [] }
  const entry = vocabEntries[index] ? vocabEntries[index][1] : null

  //[0] is the first video
  const src: string = entry?.videos?.[0]?.src ?? ""
  const title: string = entry?.videos?.[0]?.title ?? ""

  const [showVideo, setShowVideo] = useState<number | null>(null)
  const [loadingStates, setLoadingStates] = useState(
    vocabEntries.map(() => true)
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
      className={`${
        index === showVideo && "relative pb-[56.25%] bg-background"
      }`}
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
