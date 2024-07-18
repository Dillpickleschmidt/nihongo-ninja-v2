import ContentBox from "@/features/content-box/ContentBox"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox
      variant="lg"
      showProgressBar={false}
      nextPageLink="/learn/chapter-2/and-so-but"
    >
      <div className="inset-0 -mb-20">
        <YouTubeVideo
          videoId="r0io_xgmcSs"
          title="Aizuchi: The Noises Japanese Make"
          credit="Kaname Naito"
        />
      </div>
    </ContentBox>
  )
}
