import ContentBox from "@/features/content-box/ContentBox"
import YouTubeVideo from "@/features/youtube/YouTube"
import GodanEndingChart from "./components/GodanEndingChart"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import IruEruExceptionsChart from "./components/IruEruExceptionsChart"
import IruEruPractice from "./components/IruEruPractice"
import IrregularPractice from "./components/IrregularPractice"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/janai"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Verb Conjugation -{" "}
        <span className="font-japanese text-emerald-500">ます</span> Form
      </h1>
      <div className="space-y-6 px-12 sm:px-16 md:px-24">
        <p>
          Today, you will learn the differences between godan (
          <span className="font-japanese text-xl font-medium">る</span>) and{" "}
          ichidan (<span className="font-japanese text-xl font-medium">う</span>
          ) verbs and will learn how to conjugate them to describe habitual
          actions and the future tense using the{" "}
          <span className="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          form.
        </p>
        <div>
          <YouTubeVideo
            videoId="ed4rmIY4mL0"
            title="【N5】Genki 1 Lesson 3 Grammar Made Clear | ます CONJUGATION SIMPLIFIED"
            credit="ToKini Andy"
          />
        </div>
        <h2 className="text-center text-3xl font-bold">
          The Two Types of Japanese Verbs
        </h2>
        <p>In Japanese, verbs are divided into two main categories.</p>
        <div className="!mt-6 flex justify-center text-3xl font-semibold">
          <p>Godan</p>
          <p className="mx-10 lg:mx-16">{"->"}</p>
          <p>Ichidan</p>
        </div>
        <h3 className="!mt-9 text-2xl font-bold">Godan Verbs</h3>
        <p className="!mt-4">
          Godan verbs are also known as <strong>U-verbs</strong> because they
          always end with an <span className="font-black">u</span> sound in
          their dictionary form.
        </p>
        <ul className="!mt-4 list-inside list-disc">
          <li>
            <span className="font-japanese text-xl">聞く</span>(kik<u>u</u>) -
            to listen/hear/ask
          </li>
          <li>
            <span className="font-japanese text-xl">読む</span> (yom<u>u</u>) -
            to read
          </li>
          <li>
            <span className="font-japanese text-xl">話す</span> (hanas<u>u</u>)
            - to speak
          </li>
        </ul>
        <p>
          Here are <strong>ALL</strong> the possible endings a godan verb (or
          any verb) might have <span className="">(just for reference)</span>:
        </p>
        <ul className="!mt-0 flex flex-wrap justify-center space-x-3 space-y-3 font-japanese text-4xl font-semibold lg:mx-16">
          <li className="!mt-3">う</li>
          <li>・</li>
          <li>く</li>
          <li>・</li>
          <li>ぐ</li>
          <li>・</li>
          <li>す</li>
          <li>・</li>
          <li>つ</li>
          <li>・</li>
          <li>ぬ</li>
          <li>・</li>
          <li>ぶ</li>
          <li>・</li>
          <li>む</li>
          <li>・</li>
          <li className="">
            <div className="flex items-start">
              る<span className="text-2xl">**</span>
            </div>
          </li>
        </ul>
        <h3 className="!mt-9 text-2xl font-bold">Ichidan Verbs</h3>
        <p className="!mt-4">
          Ichidan verbs are also called <strong>Ru-verbs</strong> because they
          end with either{" "}
          <span className="text-nowrap font-japanese text-xl font-medium">
            いる
          </span>{" "}
          (iru) or{" "}
          <span className="text-nowrap font-japanese text-xl font-medium">
            える
          </span>{" "}
          (eru) in their dictionary form.
        </p>
        <ul className="!mt-4 list-inside list-disc">
          <li>
            <span className="font-japanese text-xl">食べる</span> (tab<u>eru</u>
            ) - to eat
          </li>
          <li>
            <span className="font-japanese text-xl">見る</span> (m<u>iru</u>) -
            to see/look at/watch
          </li>
          <li>
            <span className="font-japanese text-xl">起きる</span> (ok<u>iru</u>)
            - to wake up/get up
          </li>
        </ul>
        <p>
          Ichidan verbs are often referred to as{" "}
          <span className="font-japanese font-medium">る</span> verbs in
          textbooks for English speakers learning Japanese, but that can be very
          confusing since <strong>u-verbs</strong> (godan) can also end in{" "}
          <span className="font-japanese font-medium">る</span>, such as the
          verb <span className="font-japanese font-medium">乗る</span> (noru) -
          to board.
        </p>
        <p>
          That's why we reccomend you{" "}
          <span className="font-bold italic">forget</span> about calling them{" "}
          <strong>ru-verbs</strong> and instead refer to them as either{" "}
          <strong>iru/eru-verbs</strong> or{" "}
          <span className="font-bold underline">ichidan</span> verbs, which is
          how Japanese kids learn to classify them.
        </p>
        <h4 className="text-xl italic">
          A case for <span className="font-bold">godan</span> &{" "}
          <span className="font-bold">ichidan</span> instead of{" "}
          <span className="font-bold">u</span> &{" "}
          <span className="font-bold">iru/eru</span>:
        </h4>
        <p>
          You'll notice iru/eru still end in an{" "}
          <span className="font-black">u</span> sound, so it might still get a
          bit confusing. Technically, ALL verbs end in an{" "}
          <span className="font-black">u</span> sound in their dictionary
          (unconjugated) form. The rule is, if it's a verb that ends in iru/eru,
          it's an ichidan verb, otherwise, it's a godan verb.
        </p>
        <h2 className="!mt-12 text-center text-3xl font-bold">
          The <span className="font-japanese text-emerald-500">ます</span> Form:
          Habitual Actions & Future Tense (Polite)
        </h2>
        <p className="!mt-9">
          The{" "}
          <span className="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          form is a polite way to express verbs in Japanese. It's versatile and
          has several important uses:
        </p>
        <ol className="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            <p>
              <strong>Habitual Actions: </strong>It can describe regular or
              habitual actions.
            </p>
            <p>
              <span className="text-base font-bold">Example: </span>
              <span className="font-japanese text-xl">
                <span className="text-center">
                  <Romaji romaji="Every day" className="mr-2">
                    <Furigana
                      furigana={<span className="text-sm">まいにち</span>}
                    >
                      毎日
                    </Furigana>
                  </Romaji>
                </span>
                日本語を勉強します。
              </span>
              {"->"} I study Japanese every day.
            </p>
            <p className="!mt-1 text-base italic text-muted-foreground">
              *This uses the{" "}
              <span className="font-japanese not-italic">を</span> particle
              which you'll learn shortly.
            </p>
          </li>
          <li>
            <p>
              <strong>Future Tense: </strong>It's also used to express future
              actions or intentions.
            </p>
            <p>
              <span className="text-base font-bold">Example: </span>
              <span className="font-japanese text-xl">
                <span className="text-center">
                  <Romaji romaji="Tomorrow" className="mr-2">
                    <Furigana
                      furigana={<span className="text-sm">あした</span>}
                    >
                      明日
                    </Furigana>
                  </Romaji>

                  <Romaji romaji="Tokyo">東京</Romaji>
                </span>
                に行きます。
              </span>
              {"->"} I will go to Tokyo tomorrow.
            </p>
            <p className="!mt-1 text-base italic text-muted-foreground">
              *This uses the{" "}
              <span className="font-japanese not-italic">に</span> particle
              which you'll learn shortly.
            </p>
          </li>
        </ol>
        <p>
          It's important to note that context often determines whether the{" "}
          <span className="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          form is referring to habitual actions or future tense.
        </p>
        <p>
          If I was to simply say{" "}
          <span className="font-japanese text-xl">東京に行きます</span>, it
          could mean either "I go to Tokyo" or "I will go to Tokyo", which is
          why it's sometimes good to say{" "}
          <span className="text-nowrap font-japanese text-xl">明日</span>{" "}
          (tomorrow) explicitly if the context isn't clear.
        </p>
        <p>
          To conjugate verbs into{" "}
          <span className="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          form, you create the{" "}
          <span className="font-bold underline underline-offset-[3px]">
            <span className="font-japanese">ます</span> verb stem
          </span>{" "}
          version of a verb, then add{" "}
          <span className="font-japanese text-xl font-bold text-emerald-500">
            ます
          </span>
          .
        </p>
        <div className="!mt-6 flex items-center justify-center text-3xl font-semibold">
          <div className="rounded-md border-2 border-dashed border-card-foreground bg-card px-5 py-3">
            <span className="font-japanese font-semibold">ます</span> verb stem
          </div>
          <p className="mx-4">+</p>
          <p>
            <span className="font-japanese text-4xl font-semibold text-emerald-500">
              ます
            </span>
          </p>
        </div>
        <p className="text-base italic text-muted-foreground">
          *We call it the "
          <span className="font-japanese not-italic">ます</span> verb stem"
          because you'll be reusing that stem in other verb conjugations later
          on.
        </p>
        <h3 className="!mt-9 text-2xl font-bold">
          Creating the{" "}
          <span className="font-japanese text-2xl text-emerald-500">ます</span>{" "}
          Form for Godan Verbs
        </h3>
        <ol className="!mt-4 ml-6 list-decimal space-y-2">
          <li>Identify the last syllable of the verb.</li>
          <li>Change it to its "i" counterpart.</li>
          <li>
            Add{" "}
            <span className="font-japanese text-xl font-semibold text-emerald-500">
              ます
            </span>
            .
          </li>
        </ol>
        <GodanEndingChart />
        <p className="text-base italic text-muted-foreground">
          *If you look at the hiragana character chart, you'll notice that
          you're simply shifting each character to the{" "}
          <strong>left by one</strong> (
          <span className="font-japanese not-italic">う</span> column to{" "}
          <span className="font-japanese not-italic">い</span> column).
        </p>
        <h4 className="text-center text-xl font-bold">Examples</h4>
        <div className="!mt-4 flex justify-center">
          <ul className="list-inside list-disc space-y-2">
            <li>
              <span className="font-japanese text-2xl">
                聞<span className="font-bold">く</span>
              </span>{" "}
              (kiku) {"->"}{" "}
              <span className="font-japanese text-2xl">
                聞<span className="font-bold">き</span>
                ます
              </span>{" "}
              (kikimasu)
            </li>
            <li>
              <span className="font-japanese text-2xl">
                読<span className="font-bold">む</span>
              </span>{" "}
              (yomu) {"->"}{" "}
              <span className="font-japanese text-2xl">
                読<span className="font-bold">み</span>
                ます
              </span>{" "}
              (yomimasu)
            </li>
            <li>
              <span className="font-japanese text-2xl">
                話<span className="font-bold">す</span>
              </span>{" "}
              (hanasu) {"->"}{" "}
              <span className="font-japanese text-2xl">
                話<span className="font-bold">し</span>
                ます
              </span>{" "}
              (hanashimasu)
            </li>
          </ul>
        </div>
        <p>
          <span className="font-japanese text-xl">聞く</span> (kiku) changes to{" "}
          <span className="font-japanese text-xl">聞き</span> (kiki), then{" "}
          <span className="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          gets added.
        </p>
        <p className="!mt-2 text-base italic text-muted-foreground">
          *Here,{" "}
          <strong>
            <span className="font-japanese not-italic">聞き</span> (kiki)
          </strong>{" "}
          is the{" "}
          <span className="font-japanese font-normal not-italic">ます</span>{" "}
          verb stem.
        </p>
        <h3 className="!mt-9 text-2xl font-bold">
          Creating the{" "}
          <span className="font-japanese text-2xl text-emerald-500">ます</span>{" "}
          Form for Ichidan Verbs
        </h3>
        <ol className="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            Remove the final{" "}
            <span className="font-japanese text-xl font-medium">る</span>.
          </li>
          <li>
            Add{" "}
            <span className="font-japanese text-xl font-semibold text-emerald-500">
              ます
            </span>
            .
          </li>
        </ol>
        <h4 className="text-center text-xl font-bold">Examples</h4>
        <div className="!mt-4 flex justify-center">
          <ul className="list-inside list-disc space-y-2">
            <li>
              <span className="font-japanese text-2xl">
                食べ
                <span className="font-bold underline underline-offset-[3px]">
                  る
                </span>
              </span>{" "}
              (taberu) {"->"}{" "}
              <span className="font-japanese text-2xl">食べます</span>{" "}
              (tabemasu)
            </li>
            <li>
              <span className="font-japanese text-2xl">
                見
                <span className="font-bold underline underline-offset-[3px]">
                  る
                </span>
              </span>{" "}
              (miru) {"->"}{" "}
              <span className="font-japanese text-2xl">見ます</span> (mimasu)
            </li>
            <li>
              <span className="font-japanese text-2xl">
                起き
                <span className="font-bold underline underline-offset-[3px]">
                  る
                </span>
              </span>{" "}
              (okiru) {"->"}{" "}
              <span className="font-japanese text-2xl">起きます</span> (okimasu)
            </li>
          </ul>
        </div>
        <p>
          <span className="font-japanese text-xl">食べる</span> (taberu) changes
          to <span className="font-japanese text-xl">食べ</span> (tabe), then{" "}
          <span className="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          gets added.
        </p>
        <p className="!mt-2 text-base italic text-muted-foreground">
          *Here,{" "}
          <strong>
            <span className="font-japanese not-italic">食べ</span> (tabe)
          </strong>{" "}
          is the{" "}
          <span className="font-japanese font-normal not-italic">ます</span>{" "}
          verb stem.
        </p>
        <h2 className="!mt-12 text-center text-3xl font-bold">Practice</h2>
        <p>
          Conjugate the following verbs into their{" "}
          <span className="font-japanese text-xl font-semibold">ます</span> form{" "}
          <span className="font-bold">using kanji</span>.
        </p>
        <IruEruPractice />
        <h2 className="!mt-12 text-center text-3xl font-bold">
          Irregular Verbs
        </h2>
        <p>
          In addition to Godan and Ichidan verbs, Japanese has a small group of
          irregular verbs which don't follow any standard conjugation rules{" "}
          <span className="text-base text-muted-foreground">
            (You just have to memorize them case-by-case)
          </span>
          . Let's look at the two most common irregular verbs and how they form
          the <span className="font-japanese text-xl font-medium">ます</span>{" "}
          (masu) form:
        </p>
        <div className="flex flex-col items-center">
          <h3 className="text-xl font-bold">
            <span className="font-japanese text-2xl">する</span> - to do
          </h3>
          <div className="mt-2">
            <div className="flex w-full items-center">
              <p className="w-32 font-bold text-red-500">Incorrect</p>
              <p>
                <span className="font-japanese text-xl line-through">
                  すります
                </span>
              </p>
            </div>
            <div className="flex w-full items-center">
              <p className="w-32 font-bold">Correct</p>
              <p>
                <span className="font-japanese text-xl">します</span>
              </p>
            </div>
          </div>

          <h3 className="mt-4 text-xl font-bold">
            <span className="font-japanese text-2xl">
              <Furigana furigana={<span className="text-base">く</span>}>
                来
              </Furigana>
              る
            </span>{" "}
            - to come
          </h3>
          <div className="mt-2">
            <div className="flex w-full items-center">
              <p className="w-32 font-bold text-red-500">Incorrect</p>
              <p>
                <span className="font-japanese text-xl line-through">
                  <Furigana furigana={<span className="text-base">く</span>}>
                    来
                  </Furigana>
                  ります
                </span>
              </p>
            </div>
            <div className="flex w-full items-center">
              <p className="w-32 font-bold">Correct</p>
              <p>
                <span className="font-japanese text-xl">
                  <Furigana furigana={<span className="text-base">き</span>}>
                    来
                  </Furigana>
                  ます
                </span>
              </p>
            </div>
          </div>
        </div>
        <h4 className="text-xl font-bold italic">
          Special Note on{" "}
          <span className="font-japanese text-[1.35rem] not-italic">する</span>
        </h4>
        <p className="!mt-4">
          <span className="font-japanese text-xl font-medium">する</span> is a
          particularly useful verb because it can be combined with many{" "}
          <strong>nouns</strong> to create new <strong>verbs</strong>. For
          example:
        </p>
        <div className="!mt-4 flex justify-center">
          <ul className="list-inside list-disc space-y-2">
            <li>
              <span className="font-japanese text-2xl">勉強する</span> (benkyō
              suru) - to study
            </li>
            <li>
              <span className="font-japanese text-2xl">練習する</span> (renshū
              suru) - to practice
            </li>
            <li>
              <span className="font-japanese text-2xl">掃除する</span> (sōji
              suru) - to clean
            </li>
          </ul>
        </div>
        <p>
          All of these compound verbs follow the same conjugation pattern as
          <span className="text-nowrap font-japanese text-xl font-medium">
            する
          </span>
          :
        </p>
        <div className="!mt-4 flex justify-center">
          <ul className="list-inside list-disc space-y-2">
            <li>
              <span className="font-japanese text-2xl">勉強します</span> (benkyō
              shimasu) - (I) study
            </li>
            <li>
              <span className="font-japanese text-2xl">練習します</span> (renshū
              shimasu) - (I) practice
            </li>
            <li>
              <span className="font-japanese text-2xl">掃除します</span> (sōji
              shimasu) - (I) clean
            </li>
          </ul>
        </div>
        <h4 className="!mt-9 text-center text-xl font-bold">
          Non-Ichidan iru/eru Verbs
        </h4>
        <p className="!mt-4">
          Some verbs aren't <em>techincally</em> considered irregular by many
          textbooks but they follow godan conjugation despite ending in iru/eru,
          so we'll just call them irregular verbs here. Fortunately, there's
          only about ten of them. Here's a complete list—we'll tell you whenever
          we introduce one to you{" "}
          <span className="text-base text-muted-foreground">
            (no need to memorize them now)
          </span>
          .
        </p>
        <IruEruExceptionsChart />
        <p className="text-sm text-muted-foreground">
          List credit: <strong>ToKini Andy</strong> (give his video a like!)
        </p>
        <p className="text-center text-xl font-bold">
          In every single case besides{" "}
          <span className="font-japanese text-[1.35rem]">る</span> endings, you
          can be sure it's a godan verb.
        </p>
        <p>
          If the verb ends in{" "}
          <span className="font-japanese text-xl font-semibold">る</span>, it
          can either be an ichidan verb or an irregular verb. You should assume
          it's an ichidan verb unless you know it's irregular.
        </p>
        <h2 className="!mt-12 text-center text-3xl font-bold">
          Practice (harder)
        </h2>
        <p>
          Conjugate the following verbs into their{" "}
          <span className="font-japanese text-xl font-semibold">ます</span> form{" "}
          <span className="font-bold">using kanji</span>.
        </p>
        <IrregularPractice />
        <h4 className="text-xl font-bold italic">
          Special Note on Present Tense
        </h4>
        <p>
          You may have read from textbooks or heard Japanese teachers describe{" "}
          <span className="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          as <strong>present tense</strong>. In this case, what they're actually
          describing is the habitual actions, which isn't really how most people
          think of present tense in English.
        </p>
        <p>
          If you want to say{" "}
          <span className="font-bold italic">
            I am reading <span className="text-base">(currently)</span>
          </span>{" "}
          in Japanese, you <span className="font-bold underline">wouldn't</span>{" "}
          use{" "}
          <span className="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          form. Instead, you would use the{" "}
          <span className="font-semibold text-orange-400">
            <span className="font-japanese text-xl">て</span>
            -form
          </span>
          , which we'll cover later in Chapter 5. For now, we'll just focus on
          using{" "}
          <span className="font-japanese text-xl font-semibold text-emerald-500">
            ます
          </span>{" "}
          form.
        </p>
        <div className="!mt-4 flex flex-col items-center">
          <div>
            <div className="flex w-full items-center">
              <p className="w-32 font-bold text-red-500">Incorrect</p>
              <p>
                <span className="font-japanese text-xl">読みます。</span>
                {"->"} I read (
                <span className="text-base text-muted-foreground">/reed/</span>{" "}
                habitually).
              </p>
            </div>
            <div className="flex w-full items-center">
              <p className="w-32 font-bold">Correct</p>
              <p>
                <span className="font-japanese text-xl">読んでいます。</span>
                {"->"} I am reading.
              </p>
            </div>
          </div>
        </div>
        <p>
          Remember, practice makes perfect! Keep using these forms in sentences
          and conversations, and they'll become second nature in no time.
        </p>
        <h3 className="text-center">
          <Romaji romaji="Do your best!">
            <span className="font-japanese text-2xl font-semibold">
              がんばってください！
            </span>
          </Romaji>
        </h3>
      </div>
    </ContentBox>
  )
}
