import KanaQuiz from "@/features/kana-quiz/KanaQuiz"
import { allKana } from "@/features/kana-quiz/data/kana-data"

export default function page() {
  return <KanaQuiz kana={allKana} nextLesson="/learn/chapter-1/lesson-7" />
}
