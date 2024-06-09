"use client"
import { cn } from "@/utils/cn"
import { useState } from "react"

type SelectTextProps = {
  answer: string
  a?: string
  b?: string
  c?: string
  d?: string
  className?: string
}

export default function SelectText({
  answer,
  a,
  b,
  c,
  d,
  className,
}: SelectTextProps) {
  const options = { a, b, c, d }
  const [clicked, setClicked] = useState<{ [key: string]: boolean }>({})
  const [correct, setCorrect] = useState<{ [key: string]: boolean }>({})

  const handleClick = (option: string) => {
    setClicked((prev) => ({ ...prev, [option]: true }))
    if (options[option as keyof typeof options] === answer) {
      setCorrect((prev) => ({ ...prev, [option]: true }))
    }
  }

  const getTextColorClass = (option: string) => {
    if (correct[option]) {
      return "dark:bg-green-500 bg-[#00F064] bg-opacity-[90%] rounded-md font-medium text-black"
    } else if (clicked[option]) {
      return "dark:text-red-500 text-[#FF0000] rounded-md font-medium"
    } else {
      return ""
    }
  }

  const renderOption = (option: string, text?: string) => {
    if (!text) return null
    return (
      <p>
        <span
          className={`${getTextColorClass(
            option,
          )} inline-block origin-left cursor-pointer px-3 py-[.0625rem] text-xl duration-100 ease-out hover:scale-[107%]`}
          onClick={() => handleClick(option)}
        >
          {`${option}) `}
          <span className={cn("font-japanese text-[1.55rem]", className)}>
            {text}
          </span>
        </span>
      </p>
    )
  }

  return (
    <div className="!space-y-3 pl-7">
      {renderOption("a", a)}
      {renderOption("b", b)}
      {renderOption("c", c)}
      {renderOption("d", d)}
    </div>
  )
}
