import ContentBox from "@/components/ContentBox"
import PictureQuizWrapper from "@/features/picture-quiz/PictureQuizWrapper"
import React from "react"

export default function page() {
  return (
    <ContentBox
      variant="md"
      nextButton={false}
      nextPageLink="common-phrases"
      showProgressBar={false}
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
    >
      <PictureQuizWrapper />
    </ContentBox>
  )
}
