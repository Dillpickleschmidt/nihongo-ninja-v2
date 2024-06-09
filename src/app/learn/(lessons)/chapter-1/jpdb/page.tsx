import ContentBox from "@/components/ContentBox"

export default function page() {
  return (
    <ContentBox
      variant="fullscreen"
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/people-descriptors-misc"
    >
      Hello world
    </ContentBox>
  )
}
