import ContentBox from "@/features/content-box/ContentBox"
import Kikusasaizu from "@/features/kikusasaizu/Kikusasaizu"

export default function page() {
  return (
    <ContentBox
      variant="lg"
      showProgressBar={false}
      nextPageLink="/learn/chapter-3/my-kikitori-campus-interview-2"
    >
      <div className="inset-0 -mb-20 p-12">
        <Kikusasaizu src="https://h5p.cee.sfu.ca/h5p/embed/1978" />
      </div>
    </ContentBox>
  )
}
