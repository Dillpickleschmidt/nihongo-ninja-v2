import ContentBox from "@/features/content-box/ContentBox"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox
      variant="lg"
      showProgressBar={false}
      nextPageLink="/learn/chapter-1/the-no-particle"
    >
      <div className="inset-0 -mb-20">
        <YouTubeVideo
          videoId="pl2WCXMlCBk"
          title="kikusasaizu-1-2"
          credit="Nihongo Kikusasaizu"
        />
      </div>
    </ContentBox>
  )
}
