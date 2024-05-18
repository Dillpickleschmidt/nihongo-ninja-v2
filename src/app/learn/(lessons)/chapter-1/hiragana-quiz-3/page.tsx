import KanaQuiz from "@/features/kana-quiz/KanaQuiz"
import { yoon } from "@/features/kana-quiz/data/kana-data"

export default function page() {
  return <KanaQuiz kana={yoon} nextLesson="/learn/chapter-1/lesson-6" />
}
