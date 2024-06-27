import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import CheckboxQuestion from "@/features/checkbox-question/CheckboxQuestion"

export default function page() {
  const questions = [
    "あそこ",
    "傘[かさ]",
    "新聞[しんぶん]",
    "これ",
    "高い[たかい]",
    "野菜[やさい]",
    "おいしい",
    "誰[だれ]",
    "私の本[わたしのほん]",
    "高い本[たかいほん]",
  ]

  const correctQuestions = [
    "傘[かさ]",
    "新聞[しんぶん]",
    "野菜[やさい]",
    "私の本[わたしのほん]",
    "高い本[たかいほん]",
  ]

  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/kikusasaizu-2-1"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        <span className="font-japanese text-orange-400">じゃない</span>—The
        Negative Form in Japanese
      </h1>
      <div className="space-y-6 px-12 sm:px-16 md:px-24">
        <p>
          The{" "}
          <span className="font-japanese text-xl font-semibold text-orange-400">
            じゃない
          </span>{" "}
          construction in Japanese is used to negate statements, much like
          saying <span className="font-black">is not</span> in English. This
          lesson will explore its basic usage, variations, and some common
          conversational uses.
        </p>

        <div className="flex w-full flex-col items-center">
          <div className="w-[450px] rounded-lg border-2 border-orange-400 p-5">
            <div className="flex w-full">
              <p className="w-64 text-2xl">
                X{" "}
                <span className="font-japanese font-bold text-sky-400">は</span>{" "}
                Y <span className="font-japanese">です。</span>
              </p>
              <p className="mr-6 text-xl">{"->"}</p>
              <p className="text-xl">X is Y.</p>
            </div>
            <div className="flex w-full">
              <p className="w-64 text-2xl">
                X{" "}
                <span className="font-japanese font-bold text-sky-400">は</span>{" "}
                Y{" "}
                <span className="font-japanese font-semibold text-orange-400">
                  じゃないです。
                </span>
              </p>
              <p className="mr-6 text-xl">{"->"}</p>
              <p className="text-xl">
                X <span className="font-bold text-orange-400">is not</span> Y.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold">Basic Usage</h3>
        <p>
          The basic form of negating a noun sentence in Japanese involves
          replacing <span className="font-japanese text-xl">です</span> with{" "}
          <span className="font-japanese text-xl">じゃないです</span>.
        </p>
        <h4 className="!mt-4 text-xl font-bold italic">Example:</h4>
        <ul className="!mt-3 list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">これはペンです。</span>
            {"->"} This is a pen.
          </li>
          <li>
            <span className="font-japanese text-xl">
              これはペン
              <span className="font-semibold text-orange-400">
                じゃないです
              </span>
              。
            </span>
            {"->"} This <span className="font-bold">is not</span> a pen.
          </li>
        </ul>

        <h3 className="text-center text-2xl font-bold">
          Variations of Negation
        </h3>
        <p className="font-bold">
          There are three common ways to form negative sentences in Japanese:
        </p>
        <ol className="!mt-3 ml-3 list-inside list-decimal space-y-3">
          <li>
            <span className="font-japanese text-xl font-semibold">
              じゃないです
            </span>{" "}
            - Colloquial and commonly used in everyday conversation.
          </li>
          <li>
            <span className="font-japanese text-xl font-semibold">
              じゃありません
            </span>{" "}
            - Slightly more formal, appropriate for polite speech.{" "}
            <span className="font-japanese text-xl">じゃ</span> is a contraction
            of <span className="font-japanese text-xl">では</span> (de-wa).
          </li>
          <li>
            <span className="font-japanese text-xl font-semibold">
              ではありません
            </span>{" "}
            <span className="text-base text-muted-foreground">
              (de-wa-arimasen)
            </span>{" "}
            - Formal and appropriate for written language or very polite speech.
          </li>
        </ol>
        <p className="!mt-3 text-center text-base italic text-muted-foreground">
          *Notice 2 & 3 don't include{" "}
          <span className="font-japanese text-lg not-italic">です</span>.
        </p>
        <h4 className="!mt-2 text-xl font-bold italic">Examples:</h4>
        <div className="!mt-3 flex flex-wrap justify-center">
          <div className="space-y-2">
            <div className="flex items-end">
              <p className="mx-3">1.</p>
              <p className="w-80 font-japanese text-xl">
                <Furigana furigana={<span className="text-sm">たなか</span>}>
                  田中
                </Furigana>
                さんは
                <Furigana furigana={<span className="text-sm">がくせい</span>}>
                  学生
                </Furigana>
                じゃないです。
              </p>
              <p className="text-center font-semibold italic">Colloquial</p>
            </div>
            <div className="flex items-end">
              <p className="mx-3">2.</p>
              <p className="w-80 font-japanese text-xl">
                田中さんは 学生 じゃありません。
              </p>
              <p className="text-center font-semibold italic">Polite</p>
            </div>
            <div className="flex items-end">
              <p className="mx-3">3.</p>
              <p className="w-80 font-japanese text-xl">
                田中さんは 学生 じゃありません。
              </p>
              <p className="text-center font-semibold italic">Formal</p>
            </div>
          </div>
        </div>
        <h3 className="pt-6 text-2xl font-bold">
          Using <span className="text-orange-400">じゃない</span> to Confirm
        </h3>
        <p>
          In addition to negating statements,{" "}
          <span className="font-japanese text-xl font-bold text-orange-400">
            じゃない
          </span>{" "}
          can be used in conversations to ask someone else to confirm or clarify
          something, similar to to saying <strong>isn't it?</strong> in English.
        </p>
        <h4 className="font-medium italic">Example:</h4>
        <ul className="!mt-3 list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">
              これは田中さんの
              <Furigana furigana={<span className="text-sm">ほん</span>}>
                本
              </Furigana>
              じゃないですか。
            </span>
            {"->"} Isn't this Tanaka's book?
          </li>
        </ul>
        <p>
          Literally, it's just a simple negative statement with the{" "}
          <span className="font-japanese text-xl font-semibold text-red-500">
            か
          </span>{" "}
          particle to turn it into a question.
        </p>
        <p className="!mt-2 text-center font-semibold">
          It is not {"->"} Is it not?
        </p>
        <p className="!mt-4 font-semibold">A response might look like this:</p>
        <ul className="!mt-2 ml-6 list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">
              はい、田中さんの
              <Furigana furigana={<span className="text-sm">ほん</span>}>
                本
              </Furigana>
              です。
            </span>
            {"->"} Yes, that's Tanaka's book.
          </li>
          <li>
            <span className="font-japanese text-xl">
              いいえ、田中さんの
              <Furigana furigana={<span className="text-sm">ほん</span>}>
                本
              </Furigana>
              じゃないです。
            </span>
            {"->"} No, that's not Tanaka's book.
          </li>
        </ul>

        <h3 className="pt-6 text-2xl font-bold">
          Only Negates Nouns (and na-adjectives)
        </h3>
        <p>
          The{" "}
          <span className="font-japanese text-xl font-bold text-orange-400">
            じゃないです
          </span>{" "}
          form is used exclusively for nouns and na-adjectives{" "}
          <span className="text-base text-muted-foreground">
            (you'll learn about adjective conjugation in Chapter 5)
          </span>
          . It cannot be used to negate i-adjectives or verbs.
        </p>
        <p>
          You haven't practiced any adjectives yet, but soon you'll encounter
          the words{" "}
          <span className="font-japanese text-xl">
            <Furigana furigana={<span className="text-sm">たか</span>}>
              高
            </Furigana>
            い
          </span>{" "}
          (expensive) and{" "}
          <span className="font-japanese text-xl">おいしい</span> (delicious).
          These are adjectives and cannot be negated using{" "}
          <span className="font-japanese text-xl">じゃないです</span> and
          instead follow their own conjugation rules.
        </p>
        <div className="flex w-full items-center">
          <p className="w-1/4 font-medium text-red-500">Incorrect</p>
          <p className="w-3/4">
            <span className="font-japanese text-xl line-through">
              おいしいじゃないです。
            </span>
          </p>
        </div>
        <div className="!mt-1 flex w-full items-center">
          <p className="w-1/4 font-bold">Correct</p>
          <p className="w-3/4">
            <span className="font-japanese text-xl">
              おいし<span className="text-orange-400">くない</span>です。
            </span>
            {"->"} It's not delicious.
          </p>
        </div>

        <div className="flex w-full items-center">
          <p className="w-1/4 font-medium text-red-500">Incorrect</p>
          <p className="w-3/4">
            <span className="font-japanese text-xl line-through">
              <Furigana furigana={<span className="text-sm">たか</span>}>
                高
              </Furigana>
              いじゃないです。
            </span>
          </p>
        </div>
        <div className="!mt-1 flex w-full items-center">
          <p className="w-1/4 font-bold">Correct</p>
          <p className="w-3/4">
            <span className="font-japanese text-xl">
              <Furigana furigana={<span className="text-sm">たか</span>}>
                高
              </Furigana>
              <span className="text-orange-400">くない</span>です。
            </span>
            {"->"} It's not expensive.
          </p>
        </div>
        <p>
          You're not expected to learn adjective conjugations until Chapter 5.
          For now, focus on creating negative statements using nouns + the
          negative variations discussed here.
        </p>
      </div>

      <div className="space-y-4 px-12 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 className="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p className="text-center font-semibold">
          Check the words that{" "}
          <span className="font-bold underline underline-offset-2">can</span> be
          negated with{" "}
          <span className="font-japanese text-xl font-bold text-orange-400">
            じゃないです。
          </span>
        </p>
        <div className="flex flex-col items-center">
          <CheckboxQuestion
            questions={questions}
            correctQuestions={correctQuestions}
            horizontal
          />
        </div>
      </div>
    </ContentBox>
  )
}
