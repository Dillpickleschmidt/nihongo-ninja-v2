import ContentBox from "@/features/content-box/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import SelectText from "@/components/text/MultipleChoiceText"
import CustomTextArea from "@/components/CustomTextArea"
import Romaji from "@/components/text/Romaji"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-3/word-order"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        <span className="font-japanese text-red-500">を</span>,{" "}
        <span className="font-japanese text-orange-400">で</span>,{" "}
        <span className="font-japanese text-green-500">に</span>,{" "}
        <span className="font-japanese text-sky-400">へ</span> Particles
      </h1>
      <div className="space-y-6 px-12 sm:px-16 md:px-24">
        <p>
          If you've been studying Japanese for a while, or if you're just
          starting out, you've probably found yourself scratching your head over
          particles. Don't worry—you're not alone. These tiny words can be
          incredibly confusing for learners, often seeming like arbitrary
          sprinkles of hiragana that follow no rhyme or reason.
        </p>
        <p>
          But here's the good news: particles aren't as complicated as they
          seem. In fact, once you understand their core purpose, you'll find
          that they're actually quite logical. Today, we're going to demystify
          four important particles that you'll use constantly in everyday
          Japanese: <span className="font-japanese text-xl">を</span> (o),{" "}
          <span className="font-japanese text-xl">で</span> (de),{" "}
          <span className="font-japanese text-xl">に</span> (ni), and{" "}
          <span className="font-japanese text-xl">へ</span> (e).
        </p>
        <h2 className="text-2xl font-bold">A Quick Refresher on Particles</h2>
        <p>
          Before we dive into our new particles, let's quickly remind ourselves
          what particles do:
        </p>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            Particles are small words that <strong>follow nouns</strong> and
            indicate their grammatical function in a sentence.
          </li>
          <li>
            They tell us the role of the word or phrase that comes{" "}
            <strong>before</strong> them.
          </li>
          <li>
            In Japanese, particles, <u>not word order</u>, determine the meaning
            of a sentence.
          </li>
        </ol>
        <p>
          Keeping these points in mind will help you understand our new
          particles more easily. Think of particles as the helpful signposts in
          Japanese sentences, guiding you to understand who's doing what, where,
          and how.
        </p>

        <h2 className="text-2xl font-bold">
          1. <span className="font-japanese">を</span> - The Direct Object
          Particle
        </h2>
        <p>
          The <span className="font-japanese text-xl">を</span> particle marks
          the direct object of an action verb. It indicates what or who is
          receiving the action.
        </p>
        <p>
          <strong>Usage:</strong> Place{" "}
          <span className="font-japanese text-xl">を</span> directly after the
          noun that is the object of the action.
        </p>
        <p>
          <strong>Examples:</strong>
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">
              本<span className="font-bold text-red-500">を</span>読みます。
            </span>{" "}
            - I read a book.
          </li>
          <li>
            <span className="font-japanese text-xl">
              水<span className="font-bold text-red-500">を</span>飲みます。
            </span>{" "}
            - I drink water.
          </li>
          <li>
            <span className="font-japanese text-xl">
              日本語<span className="font-bold text-red-500">を</span>
              勉強します。
            </span>{" "}
            - I study Japanese.
          </li>
        </ul>
        <p className="text-sm italic text-muted-foreground">
          Note: While written as を, this particle is pronounced as "o" in
          modern Japanese.
        </p>
        <p className="!mt-0 text-sm italic text-muted-foreground">
          Also, for some ungodly reason, the particle{" "}
          <span className="font-japanese">を</span> is written as "wo" in
          romaji. Don't ask me why.
        </p>

        <p className="text-center italic">
          ToKini Andy has a lot of good content on these particles.
        </p>

        <YouTubeVideo
          videoId="k2lJ87F10Co"
          title="The を Particle in Japanese"
          credit="ToKini Andy"
        />

        <h3 className="font-bold italic">A Note on Particle Placement:</h3>
        <p className="!mt-4">
          *Even though the <span className="font-japanese text-xl">を</span>{" "}
          particle is used with verbs, particles are connected to{" "}
          <strong>nouns</strong>, specifically the <strong>end</strong> of
          nouns. This is important because the noun might not always come
          immediately before the verb (more on Japanese word order after this
          lesson).
        </p>

        <p className="text-base italic text-muted-foreground">
          <span className="font-japanese not-italic">ゆっくり</span> {"->"}{" "}
          slowly
        </p>
        <div className="!mt-2 flex w-full items-center">
          <p className="w-1/4 font-bold text-red-500">Incorrect</p>
          <p className="w-3/4">
            <span className="font-japanese text-xl line-through">
              私は本ゆっくり
              <span className="font-bold text-red-500">を</span>読みます。
            </span>
          </p>
        </div>
        <div className="flex w-full items-center">
          <p className="w-1/4 font-bold">Correct</p>
          <p className="w-3/4">
            <span className="font-japanese text-xl">
              私は本<span className="font-bold text-red-500">を</span>
              ゆっくり読みます。
            </span>
            {"->"} I read books slowly.
          </p>
        </div>
        <p>
          Notice how <span className="font-japanese text-xl">を</span> is
          attached to <span className="font-japanese text-xl">ゆっくり</span>{" "}
          <span className="text-base text-muted-foreground">(slowly)</span>{" "}
          instead of <span className="font-japanese text-xl">本</span> in the
          first example. That's like saying "I read{" "}
          <span className="font-bold underline">slowlys</span>" as opposed to "I
          read <span className="font-bold underline">books</span>" since{" "}
          <span className="font-japanese text-xl">を</span> is incorrectly
          paired with <span className="font-japanese text-xl">ゆっくり</span>{" "}
          instead of <span className="font-japanese text-xl">本</span>. The same
          rule applies for all other particles. Always think of pairing
          particles to the <u>end of nouns</u>, <strong>not</strong> beginning
          of verbs.
        </p>
        <h3 className="mx-6 text-center text-2xl font-semibold">
          Always think of pairing particles to the end of nouns.
        </h3>

        <h2 className="!mt-8 text-2xl font-bold">
          2. <span className="font-japanese">で</span> - The Utilization
          Particle
        </h2>
        <p>
          The <span className="font-japanese text-xl">で</span> particle has
          multiple uses, primarily indicating the means by which an action is
          performed or the location where an action takes place.
        </p>
        <h3 className="text-xl font-semibold">Usage:</h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            <strong>Means or method:</strong> Place{" "}
            <span className="font-japanese text-xl">で</span> after the noun
            that describes how the action is done.
          </li>
          <li>
            <strong>Location of action:</strong> Place{" "}
            <span className="font-japanese text-xl">で</span> after the noun
            that indicates where the action occurs.
          </li>
          <li>
            <strong>Reason or cause:</strong>{" "}
            <span className="font-japanese text-xl">で</span> can also indicate
            the reason for something.
          </li>
        </ol>
        <p>
          <strong>Examples:</strong>
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">
              ペン<span className="font-bold text-orange-400">で</span>
              書きます。
            </span>{" "}
            - I write with a pen.
          </li>
          <li>
            <span className="font-japanese text-xl">
              図書館<span className="font-bold text-orange-400">で</span>
              勉強します。
            </span>{" "}
            - I study at the library.
          </li>
          <li>
            <span className="font-japanese text-xl">
              <Romaji romaji="work">
                <Furigana furigana={<span className="text-sm">しごと</span>}>
                  仕事
                </Furigana>
              </Romaji>
              <span className="font-bold text-orange-400">で</span>
              <Romaji romaji="(I) will be delayed">
                <Furigana furigana={<span className="text-sm">おく</span>}>
                  遅
                </Furigana>
                れます。
              </Romaji>
            </span>{" "}
            - I'll be late due to work.
          </li>
        </ul>

        <YouTubeVideo
          videoId="a4Ia0ha5l7Q"
          title="The で Particle in Japanese"
          credit="ToKini Andy"
        />

        <h2 className="text-2xl font-bold">
          3. <span className="font-japanese">に</span> and{" "}
          <span className="font-japanese">へ</span> - Directional Particles
        </h2>
        <p>
          The <span className="font-japanese text-xl">に</span> and{" "}
          <span className="font-japanese text-xl">へ</span> particles are often
          used interchangeably to indicate direction or destination. However,{" "}
          <span className="font-japanese text-xl">に</span> has several
          additional functions.
        </p>
        <h3 className="text-xl font-semibold">
          Usage of <span className="font-japanese">に</span> and{" "}
          <span className="font-japanese">へ</span> for direction:
        </h3>
        <p>
          Place <span className="font-japanese text-xl">に</span> or{" "}
          <span className="font-japanese text-xl">へ</span> after the noun that
          represents the destination or direction of movement.
        </p>
        <p>
          <strong>Examples (showing interchangeability):</strong>
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">
              学校<span className="font-bold text-green-500">に</span>
              行きます。
            </span>
            /{" "}
            <span className="font-japanese text-xl">
              学校<span className="font-bold text-sky-400">へ</span>
              行きます。
            </span>{" "}
            - I go to school.
          </li>
          <li>
            <span className="font-japanese text-xl">
              毎日、ここ<span className="font-bold text-green-500">に</span>
              来ます。
            </span>
            /{" "}
            <span className="font-japanese text-xl">
              毎日、ここ<span className="font-bold text-sky-400">へ</span>
              来ます。
            </span>{" "}
            - I come here every day.
          </li>
        </ul>
        <p className="text-sm italic text-muted-foreground">
          Note: While often interchangeable, に tends to emphasize the final
          point of arrival, while へ focuses more on the direction of movement.
          In many cases, the choice between に and へ is a matter of personal
          preference or style.
        </p>

        <h3 className="text-xl font-semibold">
          Additional uses of <span className="font-japanese">に</span>:
        </h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            <strong>Specific point in time:</strong> Place{" "}
            <span className="font-japanese text-xl">に</span> after the noun
            that represents the specific time.
          </li>
          <li>
            <strong>Indirect object:</strong> Place{" "}
            <span className="font-japanese text-xl">に</span> after the noun
            that receives the indirect action.
          </li>
          <li>
            <strong>Location of existence:</strong> Use{" "}
            <span className="font-japanese text-xl">に</span> to indicate where
            something or someone exists (with verbs like{" "}
            <span className="font-japanese">いる</span> and{" "}
            <span className="font-japanese">ある</span>{" "}
            <span className="text-base text-muted-foreground">
              more on them later
            </span>
            ).
          </li>
        </ol>
        <p>
          <strong>Examples:</strong>
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">
              7時<span className="font-bold text-green-500">に</span>
              起きます。
            </span>{" "}
            - I wake up at 7 o'clock.
          </li>
          <li>
            <span className="font-japanese text-xl">
              友達<span className="font-bold text-green-500">に</span>
              <Romaji romaji="present">プレゼント</Romaji>を
              <Romaji romaji="give">あげます</Romaji>。
            </span>{" "}
            - I give a present to my friend.
          </li>
          <li>
            <span className="font-japanese text-xl">
              カフェ<span className="font-bold text-green-500">に</span>
              コーヒーが<Romaji romaji="there is">あります</Romaji>。
            </span>{" "}
            - There's coffee at the cafe.
          </li>
        </ul>

        <YouTubeVideo
          videoId="dExn1AygbpQ"
          title="The に and へ Particles in Japanese"
          credit="ToKini Andy"
        />

        <h2 className="text-2xl font-bold">Key Differences</h2>
        <h3 className="text-xl font-semibold">
          Understanding <span className="font-japanese">で</span> as
          "Utilization":
        </h3>
        <p>
          A helpful way to distinguish between{" "}
          <span className="font-japanese text-xl font-semibold text-green-500">
            に
          </span>
          ・
          <span className="font-japanese text-xl font-semibold text-sky-400">
            へ
          </span>{" "}
          and{" "}
          <span className="font-japanese text-xl font-semibold text-orange-400">
            で
          </span>{" "}
          for locations is to think about whether you're{" "}
          <strong>"utilizing"</strong> the place to perform an action. If you
          can rephrase the sentence as <strong>"I utilize A to do B,"</strong>{" "}
          then{" "}
          <span className="font-japanese text-xl font-semibold text-orange-400">
            で
          </span>{" "}
          is likely the correct particle to use.
        </p>
        <p>
          <strong>Examples:</strong>
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">
              図書館<span className="font-bold text-orange-400">で</span>
              勉強します。
            </span>{" "}
            - I study at the library.
            <br />
            Think: "I utilize the library for studying."
          </li>
          <li>
            <span className="font-japanese text-xl">
              レストラン<span className="font-bold text-orange-400">で</span>
              食べます。
            </span>{" "}
            - I eat at the restaurant.
            <br />
            Think: "I utilize the restaurant for eating."
          </li>
        </ul>
        <p>
          In contrast, when using{" "}
          <span className="font-japanese text-xl font-semibold text-green-500">
            に
          </span>{" "}
          or{" "}
          <span className="font-japanese text-xl font-semibold text-sky-400">
            へ
          </span>
          , you're typically indicating a destination or the end point of
          movement, not a place being utilized for an action:
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">
              図書館<span className="font-bold text-green-500">に</span>
              行きます。
            </span>{" "}
            - I go to the library.
            <br />
            (You can't say "I utilize the library for going.")
          </li>
          <li>
            <span className="font-japanese text-xl">
              レストラン<span className="font-bold text-sky-400">へ</span>
              <Furigana furigana={<span className="text-sm">む</span>}>
                向
              </Furigana>
              かいます。
            </span>{" "}
            - I head towards the restaurant.
            <br />
            (You can't say "I utilize the restaurant for heading.")
          </li>
        </ul>
        <p className="!mt-3 text-base italic text-muted-foreground">
          *You can use{" "}
          <span className="font-japanese font-semibold not-italic">に・へ</span>{" "}
          interchangably in these two sentences.
        </p>

        <h3 className="!mt-9 text-xl font-semibold">
          <span className="font-japanese">に</span> vs.{" "}
          <span className="font-japanese">で</span> {"->"} Existence vs. Action
          Locations (Chapter 4):
        </h3>
        <ul className="list-inside list-disc space-y-2">
          <li>
            Use <span className="font-japanese text-xl">に</span> to indicate{" "}
            where <strong>something or someone exists</strong> (with verbs like{" "}
            <span className="font-japanese">いる</span> and{" "}
            <span className="font-japanese">ある</span>).
          </li>
          <li>
            Use <span className="font-japanese text-xl">で</span> to indicate
            where an <strong>action</strong> takes place.
          </li>
        </ul>
        <p>
          <strong>Examples:</strong>
        </p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">
              <Romaji romaji="park">
                <Furigana furigana={<span className="text-sm">こうえん</span>}>
                  公園
                </Furigana>
              </Romaji>
              <span className="font-bold text-green-500">に</span>
              <Romaji romaji="I am">います</Romaji>。
            </span>{" "}
            - I am in the park. (stating existence)
          </li>
          <li>
            <span className="font-japanese text-xl">
              公園
              <span className="font-bold text-orange-400">で</span>
              <Romaji romaji="play">
                <Furigana furigana={<span className="text-sm">あそ</span>}>
                  遊
                </Furigana>
                びます
              </Romaji>
              。
            </span>{" "}
            - I play in the park. (location of action)
          </li>
        </ul>

        <p className="italic text-muted-foreground">
          *We'll look at this use of{" "}
          <span className="font-japanese text-xl font-semibold not-italic">
            に
          </span>{" "}
          and the words{" "}
          <span className="font-japanese text-xl font-semibold not-italic">
            いる・ある
          </span>{" "}
          in Chapter 4. For now, focus on the other uses of{" "}
          <span className="font-japanese text-xl not-italic">に</span> like{" "}
          <strong>direction</strong> and <strong>time</strong> for now.
        </p>
      </div>

      <div className="space-y-4 px-12 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h2 className="pt-12 text-center text-3xl font-bold">Practice</h2>
        <h3 className="text-center font-bold">
          Choose the sentences with the correct particles.
        </h3>

        <p>I drink coffee every day.</p>
        <SelectText
          answer="私は毎日コーヒーを飲みます。"
          a="私は毎日コーヒーを飲みます。"
          b="私は毎日コーヒーで飲みます。"
          c="私は毎日コーヒーに飲みます。"
          d="私は毎日コーヒーへ飲みます。"
          className="text-xl"
        />

        <p>I study at school</p>
        <SelectText
          answer="学校で勉強します。"
          a="学校を勉強します。"
          b="学校に勉強します。"
          c="学校へ勉強します。"
          d="学校で勉強します。"
          className="text-xl"
        />

        <p>I wake up at 7:00 every morning.</p>
        <SelectText
          answer="毎朝7時に起きます。"
          a="毎朝7時を起きます。"
          b="毎朝7時で起きます。"
          c="毎朝7時に起きます。"
          d="毎朝7時へ起きます。"
          className="text-xl"
        />

        <p>I will not study today.</p>
        <SelectText
          answer="今日、勉強しません。"
          a="今日、勉強します。"
          b="今日、勉強にしません。"
          c="今日、勉強しません。"
          d="今日、勉強をしません。"
          className="text-xl"
        />
      </div>

      <div className="mt-12 space-y-6 px-12 sm:px-16 md:px-24">
        <h3 className="text-center font-bold">
          Try creating sentences using 1 or more of these particles.
        </h3>
        <ol className="list-inside list-decimal space-y-2">
          <li>
            Describe eating sushi at a restaurant.
            <p className="text-sm italic text-muted-foreground">
              <span className="font-japanese text-base not-italic">
                レストラン
              </span>{" "}
              {"->"} restaurant
            </p>
            <p className="text-sm italic text-muted-foreground">
              <span className="font-japanese text-base not-italic">すし</span>{" "}
              {"->"} sushi
            </p>
            <div className="mx-6 mb-6 mt-4">
              <CustomTextArea
                className="h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            Talk about going to school at 8 AM.
            <div className="mx-6 mb-6 mt-4">
              <CustomTextArea
                className="h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            Tell your friend that you watch movies at home.
            <div className="mx-6 mb-6 mt-4">
              <CustomTextArea
                className="h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            Describe traveling towards the mountains.
            <p className="text-sm italic text-muted-foreground">
              <span className="font-japanese text-base not-italic">
                <Furigana furigana={<span className="text-xs">やま</span>}>
                  山
                </Furigana>
              </span>{" "}
              {"->"} mountain
            </p>
            <div className="mx-6 mb-6 mt-4">
              <CustomTextArea
                className="h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
        </ol>
      </div>
    </ContentBox>
  )
}
