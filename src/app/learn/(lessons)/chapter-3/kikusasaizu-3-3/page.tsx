import ContentBox from "@/features/content-box/ContentBox"
import Kikusasaizu from "@/features/kikusasaizu/Kikusasaizu"

export default function Page() {
  return (
    <ContentBox
      variant="lg"
      showProgressBar={false}
      nextPageLink="/learn/chapter-3/my-kikitori-do-you-want-to-go-to-tokyo"
    >
      <div className="inset-0 -mb-20 p-12">
        <Kikusasaizu src="https://h5p.cee.sfu.ca/h5p/embed/2332" />
      </div>
    </ContentBox>
  )
}
