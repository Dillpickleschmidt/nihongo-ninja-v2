"use client"

import { useState, useEffect } from "react"
import { useVocabCardContext } from "@/features/vocab-card/context/VocabCardContext"

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

  const [visibleIndex, setVisibleIndex] = useState<number | null>(0)
  const [loadingStates, setLoadingStates] = useState(
    vocabEntries.map(() => true)
  )

  const handleShow = (index: number) => {
    setVisibleIndex(index)
  }

  const handleHide = () => {
    setVisibleIndex(null)
  }

  const handleLoad = (index: number) => {
    setLoadingStates((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = false
      return newStates
    })
  }

  return (
    <div
      className={`absolute inset-0 overflow-hidden flex items-center justify-center transition-opacity duration-300 ${
        visibleIndex === index ? "opacity-100 visible" : "opacity-0 invisible"
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
          onLoad={() => handleLoad(index)}
          className="absolute top-0 left-0 w-full h-full"
        />
      </div>
    </div>
  )
}

// Save for later:
// <div className="flex space-x-2 mb-4">
//   {videos.map((video, index) => (
//     <button
//       key={index}
//       onClick={() => handleShow(index)}
//       className={`w-8 h-8 rounded-md p-2 ${
//         visibleIndex === index ? "bg-green-500" : "bg-gray-500"
//       } text-white hover:bg-green-700 flex justify-center items-center`}
//     >
//       {index + 1}
//     </button>
//   ))}
// </div>
