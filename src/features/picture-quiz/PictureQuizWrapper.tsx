import PictureQuiz from "./PictureQuiz"
import { PictureQuizContextProvider } from "./context/PictureQuizContext"

export default function PictureQuizWrapper() {
  return (
    <PictureQuizContextProvider>
      <PictureQuiz />
    </PictureQuizContextProvider>
  )
}
