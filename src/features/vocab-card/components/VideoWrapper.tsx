"use client"

import { useState, useEffect } from "react"
import { useVocabCardContext } from "@/features/vocab-card/context/VocabCardContext"
import { Button } from "@/components/ui/button"

type VideoWrapperProps = {
  index: number
}

export default function VideoWrapper({ index }: VideoWrapperProps) {
  const { data } = useVocabCardContext()
  // converts object to array of key-value pairs
  const vocabEntries = Object.entries(data)
  // vocabEntries[index] = [key, value]
  // vocabEntries[index][1] = value
  // vocabEntries[index][1] = { english: [], kana: [], mnemonics: [], videos: [] }
  const entry = vocabEntries[index] ? vocabEntries[index][1] : null

  // get the first video source and title ([0] is the first video)
  // additional videos are not used here
  const src: string = entry?.videos?.[0]?.src ?? ""
  const title: string = entry?.videos?.[0]?.title ?? ""

  const [expandedVideo, setExpandedVideo] = useState<number | null>(null)
  const [loadingStates, setLoadingStates] = useState(
    vocabEntries.map(() => true)
  )

  const handleShow = (index: number) => {
    setExpandedVideo(index)
  }

  const handleHide = () => {
    setExpandedVideo(null)
  }

  const handleLoaded = (index: number) => {
    setLoadingStates((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = false
      return newStates
    })
  }

  return (
    <>
      <Button
        variant="ghost"
        onClick={() => handleShow(index)}
        className={`${
          expandedVideo !== index && "relative"
        } float-end mt-4 mr-4 w-48 h-28 rounded-2xl overflow-hidden`}
      >
        <div className="absolute inset-0 bg-background" />
        <VideoJSX
          src={src}
          title={title}
          expandedVideo={expandedVideo}
          handleLoaded={handleLoaded}
          index={index}
          loadingStates={loadingStates}
        />
      </Button>
      {/* Render the following if expanded */}
    </>
  )
}

type VideoJSXProps = {
  src: string
  title: string
  index: number
  expandedVideo: number | null
  loadingStates: boolean[]
  handleLoaded: (index: number) => void
}

function VideoJSX({
  src,
  title,
  index,
  expandedVideo,
  loadingStates,
  handleLoaded,
}: VideoJSXProps) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden flex items-center justify-center transition-opacity duration-300 ${
        expandedVideo === index ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      {loadingStates[index] && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 text-white pointer-events-none">
          Loading video...
        </div>
      )}
      {/* Ensure 16:9 aspect ratio (9/16 = 0.5625). Use absolute pos. in child to place within the padding */}
      <div className="relative w-full h-0 pb-[56.25%]">
        <iframe
          src={src}
          title={title}
          allow="autoplay; fullscreen"
          onLoad={() => handleLoaded(index)}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  )
}
