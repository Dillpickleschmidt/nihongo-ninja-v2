import ContentBox from "@/features/content-box/ContentBox"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import { Input } from "@/components/ui/input"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/janai"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        How to say <span className="text-[2.6rem] font-bold italic">also</span>{" "}
        with <span className="font-japanese text-purple-400">も</span>
      </h1>
      <div className="space-y-6 px-12 sm:px-16 md:px-24">
        <p>
          The{" "}
          <span className="font-japanese text-xl font-semibold text-purple-400">
            も
          </span>{" "}
          (mo) particle in Japanese is used to indicate that something is
          similar or in addition to something else. It translates to{" "}
          <span className="font-bold italic">also</span>,{" "}
          <span className="font-bold italic">too</span>, or{" "}
          <span className="font-bold italic">as well</span> in English.
          Understanding where to place{" "}
          <span className="font-japanese text-xl font-semibold text-purple-400">
            も
          </span>{" "}
          in a sentence is crucial for conveying the correct meaning.
        </p>

        <div className="flex w-full flex-col items-center">
          <div className="rounded-lg border-2 border-orange-400 p-5">
            <div className="flex">
              <p className="mx-4 text-2xl">
                A{" "}
                <span className="font-japanese font-bold text-sky-400">は</span>{" "}
                X <span className="font-japanese">です。</span>
              </p>
              <p className="mx-4 text-xl">{"->"}</p>
              <p className="mx-4 w-28 text-xl">A is X.</p>
            </div>
            <div className="flex">
              <p className="mx-4 text-2xl">
                B{" "}
                <span className="font-japanese font-bold text-purple-400">
                  も
                </span>{" "}
                X <span className="font-japanese">です。</span>
              </p>
              <p className="mx-4 text-xl">{"->"}</p>
              <p className="mx-4 w-28 text-xl">
                B is <span className="font-medium text-purple-400">also</span>{" "}
                X.
              </p>
            </div>
          </div>
        </div>

        <h3 className="text-2xl font-bold">Basic Usage</h3>
        <ol className="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            <span className="">When adding similar information:</span>
            <ul className="list-inside list-disc">
              <li className="mt-2">
                A:{" "}
                <span className="font-japanese text-xl">
                  <Furigana furigana={<span className="text-xs">わたし</span>}>
                    私
                  </Furigana>
                  <span className="font-semibold text-sky-400">は</span>
                  <Furigana
                    furigana={<span className="text-xs">がくせい</span>}
                  >
                    学生
                  </Furigana>
                  です。
                </span>{" "}
                {"->"} I am a student.
              </li>
              <li className="mt-2">
                B:{" "}
                <span className="font-japanese text-xl">
                  <Furigana furigana={<span className="text-xs">わたし</span>}>
                    私
                  </Furigana>
                  <span className="font-semibold text-purple-400">も</span>
                  <Furigana
                    furigana={<span className="text-xs">がくせい</span>}
                  >
                    学生
                  </Furigana>
                  です。
                </span>
                {"->"} I am{" "}
                <span className="font-semibold text-purple-400">also</span> a
                student.
              </li>
            </ul>
          </li>
          <li>
            <span className="">When listing multiple similar items:</span>
            <ul className="list-inside list-disc">
              <li className="mt-2">
                <span className="font-japanese text-xl">
                  <Furigana furigana={<span className="text-sm">ねこ</span>}>
                    猫
                  </Furigana>
                  <span className="font-semibold text-purple-400">も</span>
                  <Furigana furigana={<span className="text-sm">いぬ</span>}>
                    犬
                  </Furigana>
                  <span className="font-semibold text-purple-400">も</span>
                  <Furigana furigana={<span className="text-sm">す</span>}>
                    好
                  </Furigana>
                  きです。
                </span>
                {"->"} <span className="text-muted-foreground">(I)</span> like{" "}
                <em>both</em> cats <em>and</em> dogs.
              </li>
            </ul>
          </li>
        </ol>

        <p className="text-center text-base italic">
          **The particle <span className="font-japanese not-italic">も</span>{" "}
          must be placed directly after the noun it is modifying.**
        </p>

        <h4 className="text-xl font-semibold italic">Example Sentences</h4>
        <ol className="!mt-3 list-inside list-decimal">
          <li>
            <ul className="ml-6 list-inside list-disc">
              <li>
                <span className="font-japanese text-xl">
                  <Furigana furigana={<span className="text-sm">たなか</span>}>
                    田中
                  </Furigana>
                  は
                  <Furigana
                    furigana={<span className="text-sm">にほんじん</span>}
                  >
                    日本人
                  </Furigana>
                  です。
                </span>{" "}
                {"->"} Takana is Japanese.
              </li>
              <li className="mt-1">
                <span className="font-japanese text-xl">
                  <Furigana furigana={<span className="text-sm">いしだ</span>}>
                    石田
                  </Furigana>
                  も
                  <Furigana
                    furigana={<span className="text-sm">にほんじん</span>}
                  >
                    日本人
                  </Furigana>
                  です。
                </span>
                {"->"} Ishida is also Japanese.
              </li>
            </ul>
          </li>
          <li>
            <ul className="ml-6 list-inside list-disc">
              <li>
                <span className="font-japanese text-xl">
                  これは
                  <Furigana furigana={<span className="text-sm">わたし</span>}>
                    私
                  </Furigana>
                  の
                  <Furigana furigana={<span className="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  です。
                </span>{" "}
                {"->"} This is my bag.
              </li>
              <li className="mt-1">
                <span className="font-japanese text-xl">
                  これも
                  <Furigana furigana={<span className="text-sm">わたし</span>}>
                    私
                  </Furigana>
                  の
                  <Furigana furigana={<span className="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  です。
                </span>{" "}
                {"->"} This is also my bag.
              </li>
            </ul>
          </li>

          <li>
            <ul className="ml-6 list-inside list-disc">
              <li>
                <span className="font-japanese text-xl">
                  この
                  <Furigana furigana={<span className="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  は
                  <Furigana furigana={<span className="text-sm">たなか</span>}>
                    田中
                  </Furigana>
                  さんの
                  <Furigana furigana={<span className="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  です。
                </span>{" "}
                {"->"} This bag is Tanaka's bag.
              </li>
              <li className="mt-1">
                <span className="font-japanese text-xl">
                  あの
                  <Furigana furigana={<span className="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  も
                  <Furigana furigana={<span className="text-sm">たなか</span>}>
                    田中
                  </Furigana>
                  さんの
                  <Furigana furigana={<span className="text-sm">かばん</span>}>
                    鞄
                  </Furigana>
                  です。
                </span>{" "}
                {"->"} That bag <span className="text-base">(over there)</span>{" "}
                is also Tanaka's bag.
              </li>
            </ul>
          </li>
        </ol>

        <h3 className="text-center text-2xl font-bold">
          Positioning{" "}
          <span className="font-japanese text-[1.6rem] font-bold text-purple-400">
            も
          </span>{" "}
          in Sentences
        </h3>
        <p>
          The position of{" "}
          <span className="font-japanese text-xl font-semibold text-purple-400">
            も
          </span>{" "}
          in a sentence can change its meaning. Compare the following sentences:
        </p>
        <ol className="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            <span className="font-japanese text-xl">
              <Furigana furigana={<span className="text-xs">わたし</span>}>
                私
              </Furigana>
              <span className="font-japanese font-semibold text-purple-400">
                も
              </span>
              <Furigana furigana={<span className="text-xs">せんこう</span>}>
                専攻
              </Furigana>
              <span className="font-japanese font-semibold text-sky-400">
                は
              </span>
              <Furigana furigana={<span className="text-xs">にほんご</span>}>
                日本語
              </Furigana>
              です。
            </span>
            {"->"} I'm also a Japanese major.{" "}
            <span className="text-base">
              (Implying other people are Japanese majors, and I am too.)
            </span>
          </li>
          <li>
            <span className="font-japanese text-xl">
              <Furigana furigana={<span className="text-xs">わたし</span>}>
                私
              </Furigana>
              <span className="font-japanese font-semibold text-sky-400">
                は
              </span>
              <Furigana furigana={<span className="text-xs">にほんご</span>}>
                日本語
              </Furigana>
              <span className="font-japanese font-semibold text-purple-400">
                も
              </span>
              <Furigana furigana={<span className="text-xs">せんこう</span>}>
                専攻
              </Furigana>
              です。
            </span>
            {"->"} As for me, I also have a Japanese major.{" "}
            <span className="text-base">
              (Implying I have other majors, and Japanese is one of them.)
            </span>
          </li>
        </ol>
        <p className="text-base italic text-muted-foreground">
          *Place <span className="font-japanese not-italic">も</span> after the
          noun there are more than one of.
        </p>
        <p>
          In the first sentence,{" "}
          <span className="font-japanese text-xl">も</span> is placed after 私
          (I), indicating that the speaker, like someone else, is a Japanese
          major. In the second sentence,{" "}
          <span className="font-japanese text-xl">も</span> is placed after{" "}
          <span className="font-japanese text-xl">日本語</span> (Japanese),
          indicating that the speaker has multiple majors, and Japanese is one
          of them.
        </p>

        <h3 className="text-center text-2xl font-bold">
          When not to use{" "}
          <span className="font-japanese text-[1.6rem] font-bold text-purple-400">
            も
          </span>
        </h3>
        <p>
          For questions using words like{" "}
          <Furigana furigana={<span className="text-sm">だれ</span>}>
            誰
          </Furigana>
          ,{" "}
          <Furigana furigana={<span className="text-sm">なに</span>}>
            何
          </Furigana>
          , <span className="font-japanese">どこ</span>, etc., using{" "}
          <span className="font-japanese font-semibold text-green-500">が</span>{" "}
          is more appropriate.{" "}
          <span className="font-japanese font-semibold text-purple-400">
            も
          </span>{" "}
          would imply something else entirely which we'll look at in a later
          chapter.
        </p>

        <div className="flex w-full flex-col items-center">
          <p className="mx-4 font-japanese text-2xl line-through">
            <Furigana furigana={<span className="text-base">だれ</span>}>
              誰
            </Furigana>
            <span className="font-bold text-purple-400">も</span>
            <Furigana furigana={<span className="text-base">き</span>}>
              来
            </Furigana>
            ますか。
          </p>
          <div className="flex items-end">
            <p className="mx-4 font-japanese text-2xl">
              <Furigana furigana={<span className="text-base">だれ</span>}>
                誰
              </Furigana>
              <span className="font-bold text-green-500">が</span>
              <Furigana furigana={<span className="text-base">き</span>}>
                来
              </Furigana>
              ますか。
            </p>
            <p className="mx-4 text-xl">{"->"}</p>
            <p className="mx-4 w-40 text-xl">Who is coming?</p>
          </div>
        </div>

        <div className="text-muted-foreground">
          <p>If you want to specifically say "who else", you'd use ほかに.</p>
          <ul className="mt-2 list-inside list-disc">
            <li>
              <span className="font-japanese text-xl">
                ほかに誰が来ますか。
              </span>
              {"->"} Who else is coming?
            </li>
          </ul>
          <p className="mt-2 text-base italic">
            *We'll cover that later—you're not expected to learn that at this
            stage.
          </p>
        </div>
      </div>

      <div className="space-y-4 px-12 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 className="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p>
          Someone asks if Tanaka likes dogs. You want to say "yes, and he also
          likes cats."
        </p>
        <p className="text-base text-muted-foreground">
          *<span className="font-japanese">猫</span> (ねこ) {"->"} cat
        </p>
        <SelectText
          answer="はい、田中さんは猫も好きです。"
          a="はい、田中さんも猫が好きです。"
          b="はい、田中さんも猫は好きです。"
          c="はい、田中さんは猫も好きです。"
          d="はい、田中さんは猫が好きです。"
          className="text-xl"
        />
        <p>Someone asks who is coming to the party.</p>
        <SelectText
          answer="誰が来ますか。"
          a="誰が来ますか。"
          b="誰も来ますか。"
          className="text-xl"
        />
        <p>
          Which sentence correctly states that both your brother and sister like
          shoes?
        </p>
        <SelectText
          answer="お兄さんも妹も靴が好きです。"
          a="お兄さんも妹も靴が好きです。"
          b="お兄さんも妹は靴が好きです。"
          c="お兄さんも妹も靴は好きです。"
          d="お兄さんも妹は靴は好きです。"
          className="text-xl"
        />
      </div>

      <div className="space-y-6 px-16 md:px-24">
        <h4 className="!mt-6 text-xl font-bold">
          Where can <span className="font-japanese">も</span> appear in a
          sentence? Fill in the blanks. If{" "}
          <span className="font-japanese">も</span> cannot be used, then write
          an X.
        </h4>
        <div className="flex justify-center font-japanese text-xl">
          <div className="space-y-4">
            <div className="flex items-end">
              <div>あれ</div>
              <Input className="mx-2 h-8 w-12 text-xl" />
              <div>
                <Furigana furigana={<span className="text-sm">たか</span>}>
                  高
                </Furigana>
                い
              </div>
              <Input className="mx-2 h-8 w-12 text-xl" />
              <div>です。</div>
            </div>
            <p className="!my-0 font-inter text-base text-muted-foreground">
              *<span className="font-japanese">高い</span> {"->"} expensive
            </p>
            <div className="flex items-end">
              <div>
                私は
                <Furigana
                  furigana={<span className="text-sm">かんこくじん</span>}
                >
                  韓国人
                </Furigana>
              </div>
              <Input className="mx-2 h-8 w-12 text-xl" />
              <div>です。</div>
            </div>
            <div className="flex items-end">
              <div>
                <Furigana furigana={<span className="text-sm">せんせい</span>}>
                  先生
                </Furigana>
              </div>
              <Input className="mx-2 h-8 w-12 text-xl" />
              <div>わかりません。</div>
            </div>
            <div className="flex items-end">
              <div>あそこ</div>
              <Input className="mx-2 h-8 w-12 text-xl" />
              <div>コンビニです。</div>
            </div>
            <p className="!my-0 font-inter text-base text-muted-foreground">
              *<span className="font-japanese">コンビニ</span> {"->"}{" "}
              convenience store
            </p>
            <div className="flex items-end">
              <div>
                <Furigana
                  furigana={<span className="text-sm">じてんしゃ</span>}
                >
                  自転車
                </Furigana>
              </div>
              <Input className="mx-2 h-8 w-12 text-xl" />
              <div>ください。</div>
            </div>
            <div className="flex items-end">
              <div>
                私の
                <Furigana
                  furigana={<span className="text-sm">しゅっしん</span>}
                >
                  出身
                </Furigana>
              </div>
              <Input className="mx-2 h-8 w-12 text-xl" />
              <div>
                <Furigana
                  furigana={<span className="text-sm">ちゅうごく</span>}
                >
                  中国
                </Furigana>
                です。
              </div>
            </div>
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
