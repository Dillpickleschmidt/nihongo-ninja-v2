import ContentBox from "@/features/content-box/ContentBox"
import Kikusasaizu from "@/features/kikusasaizu/Kikusasaizu"

export default function page() {
  return (
    <ContentBox
      variant="lg"
      showProgressBar={false}
      nextPageLink="/learn/chapter-3/chotto"
    >
      <div className="inset-0 -mb-20 p-12">
        <Kikusasaizu src="https://h5p.cee.sfu.ca/h5p/embed/2327" />
      </div>
    </ContentBox>
  )
}
