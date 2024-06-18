import ContentBox from "@/components/ContentBox"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      variant="lg"
      showProgressBar={false}
      nextPageLink="/learn/chapter-1/my-kikitori-conversation-1"
    >
      <div className="inset-0 -mb-20">
        <YouTubeVideo
          videoId="deU37CExm0w"
          title="kikusasaizu-1-1"
          credit="Nihongo Kikusasaizu"
        />
      </div>
    </ContentBox>
  )
}
