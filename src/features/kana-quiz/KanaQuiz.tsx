"use client"
import ContentBox from "@/components/ContentBox"
import { Button } from "@/components/ui/button"
import CharacterBox from "@/features/kana-quiz/components/CharacterBox"
import { useKanaQuiz } from "@/features/kana-quiz/hooks/useKanaQuiz"

// This program does the following:
// 1. Shuffle the kana
// 2. Map them to character boxes
// 3. Display the character boxes
// 4. When the user types in the character box, check if it matches the character

type KanaQuizProps = {
  kana: { hiragana: string; romaji: string[] }[]
  nextLesson: string
}

export default function KanaQuiz({ kana, nextLesson }: KanaQuizProps) {
  const {
    characterBoxes,
    showResults,
    numCorrect,
    handleInputChange,
    handleSubmit,
  } = useKanaQuiz(kana)
  // const scrollRef = useRef<HTMLDivElement>(null)

  // useEffect(() => {
  //   if (showResults && scrollRef.current) {
  //     scrollRef.current.scrollTo(0, 0)
  //   }
  // }, [showResults])

  return (
    <ContentBox
      variant="xl"
      color="light"
      backgroundImage="/img/wavy-pattern-1.jpg"
      backgroundImageSize="1200px"
      backgroundImageOpacity={30}
      nextButton={
        !showResults ? (
          <Button onClick={handleSubmit}>Submit</Button>
        ) : (
          <Button link={nextLesson}>Next Lesson {"->"}</Button>
        )
      }
      // showAlertOnClose={true}
      nextPageLink="/learn/chapter-1/lesson-4"
    >
      <div className="text-center text-foreground-secondary">
        {!showResults ? (
          <>
            <h1 className="pt-12 mb-4 text-5xl font-semibold">
              Hiragana Quiz 1
            </h1>
            <h2 className="text-xl">
              Type the english spelling of each character into their respective
              boxes.
            </h2>
            <h2 className="text-xl">Take it as many times as you like! 👍</h2>
          </>
        ) : (
          <>
            <h1 className="pt-12 mb-4 text-6xl font-semibold">
              {numCorrect / kana.length <= 0.5
                ? "YOU FAILED! 🤦"
                : numCorrect / kana.length <= 0.8
                ? "You're getting there! 😎"
                : "Nice job! 🥳"}
            </h1>
            <h2 className="text-xl">
              You got {numCorrect} out of {kana.length} correct.{" "}
              {numCorrect / kana.length <= 0.5
                ? "Review the terms and try again!"
                : numCorrect / kana.length <= 0.8
                ? "Try again and see if you can get 80%!"
                : "Keep it up!"}
            </h2>
          </>
        )}
      </div>
      <div className="container grid grid-cols-[repeat(auto-fill,minmax(145px,_1fr))] p-3 mx-auto mt-12 text-center gap-3 text-[#F8F5E9]">
        {characterBoxes.map((characterBox, index) => (
          <CharacterBox
            key={characterBox.hiragana}
            character={characterBox.hiragana}
            userInput={characterBox.userInput}
            onInputChange={(newUserInput) =>
              handleInputChange(index, newUserInput)
            }
            disabled={showResults}
            className={`${showResults && "shadow-none"} ${
              showResults &&
              characterBox.isCorrect &&
              "border-[3px] border-green-500"
            }`}
            inputTextColor={
              showResults && !characterBox.isCorrect
                ? "text-red-500"
                : showResults && characterBox.isCorrect
                ? "text-white"
                : undefined
            }
            innerBorderColor={
              showResults && !characterBox.isCorrect
                ? "border-red-500"
                : showResults && characterBox.isCorrect
                ? "border-green-500"
                : undefined
            }
          />
        ))}
      </div>
    </ContentBox>
  )
}
