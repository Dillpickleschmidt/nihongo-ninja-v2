"use client"
import {
  useConjugationPracticeContext,
  ConjugationPracticeContextType,
} from "@/features/conjugation-practice/context/ConjugationPracticeContext"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

type GenericToggleProps = {
  optionCategory: keyof ConjugationPracticeContextType
  optionType: string
  label: string
}

const toggleMappings: {
  [key in keyof ConjugationPracticeContextType]?: keyof ConjugationPracticeContextType
} = {
  showVerbTypes: "setShowVerbTypes",
  showVerbTenses: "setShowVerbTenses",
  showVerbAffirmativeNegative: "setShowVerbAffirmativeNegative",
  showVerbPlainPolite: "setShowVerbPlainPolite",
  showAdjectiveTypes: "setShowAdjectiveTypes",
  showAdjectiveTenses: "setShowAdjectiveTenses",
  showAdjectiveAffirmativeNegative: "setShowAdjectiveAffirmativeNegative",
  showAdjectivePlainPolite: "setShowAdjectivePlainPolite",
}

export default function GenericToggle({
  optionCategory,
  optionType,
  label,
}: GenericToggleProps) {
  const context = useConjugationPracticeContext()

  const toggleOption = () => {
    const setOption = context[
      toggleMappings[optionCategory] as keyof typeof context
    ] as React.Dispatch<React.SetStateAction<Record<string, boolean>>>
    setOption((prev) => ({
      ...prev,
      [optionType]: !prev[optionType],
    }))
  }

  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id={`toggle${optionType}`}
        onClick={toggleOption}
        checked={
          (context[optionCategory] as Record<string, boolean>)[optionType]
        }
      />
      <Label
        htmlFor={`toggle${optionType}`}
        className="text-base font-normal hover:cursor-pointer"
      >
        {label}
      </Label>
    </div>
  )
}
