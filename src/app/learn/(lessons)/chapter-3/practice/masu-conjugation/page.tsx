import ConjugationPractice from "@/features/conjugation-practice/ConjugationPractice"
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
          <ConjugationPractice />
        </div>
      </div>
    </ContentBox>
  )
}
