import ContentBox from "@/components/ContentBox"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/dare"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        New Subjects With The{" "}
        <span className="font-japanese text-green-500">が</span> Particle
      </h1>
      <div className="space-y-6 px-16 md:px-24"></div>
    </ContentBox>
  )
}
