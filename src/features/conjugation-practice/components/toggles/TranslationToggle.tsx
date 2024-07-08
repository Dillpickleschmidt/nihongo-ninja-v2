"use client"
import { useConjugationPracticeContext } from "@/features/conjugation-practice/context/ConjugationPracticeContext"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"

export default function TranslationToggle() {
  const { showTranslation, setShowTranslation, setIsTranslationTransparent } =
    useConjugationPracticeContext()

  const toggleTranslation = () => {
    setShowTranslation(!showTranslation)
  }

  return (
    <>
      <div className="flex items-center space-x-2">
        <Checkbox
          id="toggleTranslation"
          onClick={toggleTranslation}
          checked={showTranslation}
        />
        <Label
          htmlFor="toggleTranslation"
          className="text-base font-normal hover:cursor-pointer"
        >
          Show English translations
        </Label>
      </div>
      {showTranslation && (
        <div className="ml-6">
          <RadioGroup
            defaultValue="always"
            onValueChange={(value) => {
              if (value === "always") {
                setIsTranslationTransparent(false)
              } else {
                setIsTranslationTransparent(true)
              }
            }}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="always" id="r1" />
              <Label
                htmlFor="r1"
                className="text-base font-normal hover:cursor-pointer"
              >
                always
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="only-after-answering" id="r2" />
              <Label
                htmlFor="r2"
                className="text-base font-normal hover:cursor-pointer"
              >
                only after answering
              </Label>
            </div>
          </RadioGroup>
        </div>
      )}
    </>
  )
}
