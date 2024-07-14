import ConjugationPractice from "@/features/conjugation-practice/ConjugationPractice"
import ContentBox from "@/features/content-box/ContentBox"

export default function Page() {
  return (
    <ContentBox
      variant="reading"
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={2}
      nextPageLink=""
      showProgressBar={false}
      nextButton=" "
    >
      <ConjugationPractice />
    </ContentBox>
  )
}
