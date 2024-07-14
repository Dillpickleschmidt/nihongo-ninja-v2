import { Button } from "@/components/ui/button"
import { ReviewSessionState } from "../hooks/useReviewSession"

type SummaryPageProps = {
  sessionState: ReviewSessionState
  onRestartSession: () => void
  onReturnToSettings: () => void
}

export default function SummaryPage({
  sessionState,
  onRestartSession,
  onReturnToSettings,
}: SummaryPageProps) {
  return (
    <div className="w-screen max-w-[900px] space-y-6 px-6 sm:px-8 md:px-12">
      <div className="w-full pt-24">
        <h1 className="text-center text-5xl font-semibold">
          Practice Session Complete!
        </h1>
        <div className="mt-2 text-center text-4xl">🎉</div>
      </div>
      <p className="text-center text-2xl">
        Your score: {sessionState.score} / {sessionState.questions.length}
      </p>
      <div className="space-y-4">
        {sessionState.questions.map((question, index) => (
          <div
            key={index}
            className="relative mx-2 mb-4 flex min-w-[500px] overflow-hidden rounded-lg bg-card shadow-md xl:mx-8"
          >
            <div className="flex-1 py-4 pl-4 pr-6">
              <p
                className={`${!question.correct ? "text-[#ff5757]" : ""} text-xl font-bold`}
              >
                Question {index + 1}:{" "}
                <span className="font-japanese">
                  {question.term.reading}
                  {question.term.word !== question.term.reading &&
                    ` (${question.term.word})`}
                </span>
              </p>
              <p className="text-sm italic text-card-foreground">
                Type: {question.type.join(", ")}
              </p>
              <p className="text-lg">
                Your answer:{" "}
                <span className="font-japanese">{question.givenAnswer}</span>
              </p>
              <p className="text-lg">
                Correct answer(s):{" "}
                <span className="font-japanese">
                  {question.answers.map((a) => a.reading).join(", ")}
                </span>
              </p>
              {!question.correct && (
                <p className="mt-1 text-sm text-red-500">Incorrect</p>
              )}
            </div>
            <div
              className={`absolute right-0 h-full ${!question.correct ? "w-4 bg-red-500" : "w-2 bg-emerald-500/50"}`}
            ></div>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-4">
        <Button onClick={onRestartSession} size="lg" className="bg-orange-500">
          Start New Session
        </Button>
        <Button onClick={onReturnToSettings} size="lg">
          Return to Settings
        </Button>
      </div>
    </div>
  )
}
