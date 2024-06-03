"use client"

import { useEffect } from "react"
import CustomImage from "@/components/CustomImage"
import data from "@/data/chapter-0/greetings-quiz.json"
import { presentPictureQuestion } from "./picture-quiz"
import { usePictureQuizContext } from "../context/PictureQuizContext"

export default function PictureQuizContent() {
  const { correctEntry, setCorrectEntry, setHasUserAnswered } =
    usePictureQuizContext()

  useEffect(() => {
    setCorrectEntry(presentPictureQuestion(data))
    setHasUserAnswered(false)
  }, [setCorrectEntry, setHasUserAnswered])

  if (!correctEntry) {
    return null
  }

  return (
    <>
      <div className="relative h-[350px] w-[550px] overflow-hidden rounded-[40px] border-[3px] border-black shadow-lg dark:border-transparent">
        <CustomImage
          src={correctEntry.image}
          alt="quiz image"
          width={correctEntry.dimensions.width}
          height={correctEntry.dimensions.height}
          sizes="550px"
          priority
        />
      </div>
      <h2 className="mx-12 text-center text-xl">{correctEntry.prompt}</h2>
    </>
  )
}
