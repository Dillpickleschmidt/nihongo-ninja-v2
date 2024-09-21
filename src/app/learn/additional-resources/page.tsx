import BackgroundImage from "@/features/content-box/components/BackgroundImage"
import Link from "next/link"

export default function page() {
  return (
    <>
      <BackgroundImage
        backgroundImage="/img/dust-splatter-1.png"
        backgroundImageSize="1215px"
        backgroundImageOpacity={5}
      />
      <div className="min-h-screen px-12 pb-28 sm:px-16 md:px-24">
        {/* <ListeningMaterial /> */}
        <ol className="mt-24 list-decimal space-y-6 text-2xl">
          <li>
            <Link
              href="/learn/additional-resources/kanji-practice-sheet"
              className="font-japanese text-sky-400 hover:cursor-pointer"
            >
              漢字練習シート
            </Link>
          </li>
        </ol>
      </div>
    </>
  )
}
