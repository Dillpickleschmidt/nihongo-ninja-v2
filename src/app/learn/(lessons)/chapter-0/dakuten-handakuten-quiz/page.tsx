import KanaQuiz from "@/features/kana-quiz/KanaQuiz"
import { tenten } from "@/features/kana-quiz/data/kana-data"

export default function page() {
  return (
    <KanaQuiz
      kana={tenten}
      nextLesson="/learn/chapter-1/contracted-sounds"
      title="Hiragana Quiz 2"
    />
  )
}
