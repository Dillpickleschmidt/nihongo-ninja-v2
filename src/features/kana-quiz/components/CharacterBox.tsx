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
      className={`relative text-3xl h-48 flex justify-center bg-card shadow-lg shadow-[#645947] rounded-[12px] ${className}`}
    >
      <div className="font-japanese mt-6 text-5xl">{character}</div>
      <div className={`absolute bottom-0 mb-6 ${inputTextColor}`}>
        <input
          type="text"
          className={`h-14 w-28 bg-[#191919] bg-opacity-0 border-2 ${innerBorderColor} border-dashed rounded-xl text-center`}
          value={userInput}
          onChange={(e) => onInputChange(e.target.value)}
          disabled={disabled}
        />
      </div>
    </div>
  )
}
