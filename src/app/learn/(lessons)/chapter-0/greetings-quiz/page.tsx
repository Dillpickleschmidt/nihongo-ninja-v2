import ContentBox from "@/features/content-box/ContentBox"
import PictureQuizWrapper from "@/features/picture-quiz/PictureQuizWrapper"

export default function page() {
  return (
    <ContentBox
      variant="md"
      nextButton={false}
      nextPageLink="common-expressions"
      showProgressBar={false}
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
    >
      <PictureQuizWrapper />
    </ContentBox>
  )
}
