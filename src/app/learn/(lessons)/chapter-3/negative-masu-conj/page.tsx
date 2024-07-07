import Romaji from "@/components/text/Romaji"
import ContentBox from "@/features/content-box/ContentBox"
import NegativeMasuPractice from "./components/NegativeMasuPractice"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/janai"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        <strong>Negative</strong> <span className="font-japanese">ます</span>{" "}
        Form
      </h1>
      <div className="space-y-6 px-12 sm:px-16 md:px-24">
        <p>
          Now that you know how to make{" "}
          <span className="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          stems with godan, ichidan, and irregular verbs, you can easily make
          the negative forms. All you have to do is add{" "}
          <span className="font-japanese text-xl font-semibold text-indigo-400">
            ません
          </span>{" "}
          to the stem.
        </p>
        <h4 className="text-center text-2xl font-bold">Examples</h4>
        <p className="!mt-4 text-center text-xl">
          <span className="font-japanese text-2xl">
            <Romaji romaji="To drink">飲む</Romaji>
          </span>
          <span className="mx-4">{"->"}</span>
          <span className="font-japanese text-2xl">飲み</span>
          <span className="mx-4">{"->"}</span>
          <span className="font-japanese text-2xl">
            <Romaji romaji="(I) don't drink">
              飲み<span className="font-semibold text-indigo-400">ません</span>
            </Romaji>
          </span>
        </p>
        <p className="!mt-4 text-center text-xl">
          <span className="font-japanese text-2xl">
            <Romaji romaji="To drink">食べる</Romaji>
          </span>
          <span className="mx-4">{"->"}</span>
          <span className="font-japanese text-2xl">食べ</span>
          <span className="mx-4">{"->"}</span>
          <span className="font-japanese text-2xl">
            <Romaji romaji="(I) don't eat">
              食べ<span className="font-semibold text-indigo-400">ません</span>
            </Romaji>
          </span>
        </p>

        <h2 className="!mt-12 text-center text-3xl font-bold">Practice</h2>
        <p className="!mt-4">
          Conjugate the following verbs into their negative{" "}
          <span className="font-japanese text-xl font-semibold">ます</span> form{" "}
          <span className="font-bold">using kanji</span>.
        </p>
        <p className="!mt-1 text-base italic text-muted-foreground">
          *From this lesson onwards, we'll expect you to write using kanji just
          as Japanese people would unless we specify otherwise.
        </p>
        <NegativeMasuPractice />
      </div>
    </ContentBox>
  )
}
