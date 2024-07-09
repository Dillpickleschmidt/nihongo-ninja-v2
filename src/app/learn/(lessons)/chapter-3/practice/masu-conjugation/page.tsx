import HomePage from "@/features/conjugation-practice/components/HomePage"
import ConjugationPractice from "@/features/conjugation-practice/ConjugationPage"
import { ConjugationPracticeContextProvider } from "@/features/conjugation-practice/context/ConjugationPracticeContext"
import ContentBox from "@/features/content-box/ContentBox"

export default function Page() {
  return (
    <ContentBox
      variant="md"
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={2}
      nextPageLink=""
      showProgressBar={false}
      nextButton=""
    >
      <div className="flex w-full flex-col items-center pt-16">
        <div className="flex w-full max-w-2xl flex-col items-center space-y-6">
          {/* <ConjugationPracticeContextProvider>
            <ConjugationPractice />
          </ConjugationPracticeContextProvider> */}
          <HomePage />
        </div>
      </div>
    </ContentBox>
  )
}
