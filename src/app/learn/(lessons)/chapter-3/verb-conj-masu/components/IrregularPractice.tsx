"use client"
import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"

const verbs = ["聞く", "起きる", "寝る", "する", "来る", "帰る", "勉強する"]

export default function IrregularPractice() {
  const [randomizedVerbs, setRandomizedVerbs] = useState<string[]>([])

  useEffect(() => {
    // Randomize the verb order
    setRandomizedVerbs([...verbs].sort(() => Math.random() - 0.5))
  }, [])

  return (
    <div className="flex flex-col items-center text-2xl">
      {randomizedVerbs.map((verb, index) => (
        <div key={index} className="mb-4 flex items-center">
          <div className="w-28 font-japanese">{verb}</div>
          <div className="mr-4">{"->"}</div>
          <div className="w-40">
            <Input className="font-japanese text-xl" />
          </div>
        </div>
      ))}
    </div>
  )
}
