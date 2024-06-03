import React from "react"

type CharacterBoxProps = {
  character: string
  userInput: string
  onInputChange: (newUserInput: string) => void
  disabled: boolean
  className: string
  inputTextColor?: string
  innerBorderColor?: string
}

// Boxes with a characters in them
export default function CharacterBox({
  character,
  userInput,
  onInputChange,
  disabled,
  className,
  inputTextColor = "text-red-400",
  innerBorderColor = "border-[#aaaaaa]",
}: CharacterBoxProps) {
  return (
    <div
      className={`relative flex h-48 justify-center rounded-[12px] bg-card text-3xl shadow-lg shadow-[#645947] ${className}`}
    >
      <div className="mt-6 font-japanese text-5xl">{character}</div>
      <div className={`absolute bottom-0 mb-6 ${inputTextColor}`}>
        <input
          type="text"
          className={`h-14 w-28 border-2 bg-[#191919] bg-opacity-0 ${innerBorderColor} rounded-xl border-dashed text-center`}
          value={userInput}
          onChange={(e) => onInputChange(e.target.value)}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
