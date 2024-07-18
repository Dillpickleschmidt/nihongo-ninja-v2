import BackgroundImage from "@/features/content-box/components/BackgroundImage"
import VocabList from "@/features/vocab-list/VocabList"

export default function page() {
  return (
    <>
      <BackgroundImage
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={5}
      />
      <div className="px-12 pb-28 sm:px-16 md:px-24">
        <VocabList />
      </div>
    </>
  )
}
