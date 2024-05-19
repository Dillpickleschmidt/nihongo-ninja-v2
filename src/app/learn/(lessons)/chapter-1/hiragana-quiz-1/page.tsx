import KanaQuiz from "@/features/kana-quiz/KanaQuiz"
import { mainKana } from "@/features/kana-quiz/data/kana-data"

export default function page() {
  return (
    <KanaQuiz
      kana={mainKana}
      nextLesson="/learn/chapter-1/lesson-4"
      title="Hiragana Quiz 1"
    />
  )
}
