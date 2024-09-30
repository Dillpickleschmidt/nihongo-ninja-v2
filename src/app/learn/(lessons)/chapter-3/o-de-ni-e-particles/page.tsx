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
        <span className="font-japanese text-sky-400">へ</span> Particles -{" "}
        <span className="text-nowrap">A High-Level</span> Overview
      </h1>
      <div className="space-y-6 px-12 sm:px-16 md:px-24">
        <p>
          Many language learners find Japanese sentence structure confusing and
          difficult to grasp. This is understandable, as:
        </p>
        <p className="mx-12 text-2xl">
          "The main thing that differentiates Japanese from most other languages
          is its use of particles"{" "}
          <span className="text-base text-muted-foreground">
            (80/20 Japanese)
          </span>
          .
        </p>
        <p>
          Let's start by looking at how English sentences work. In English, word
          order is crucial. We typically follow a Subject-Verb-Object (SVO)
          structure:
        </p>
        <p className="text-center">I eat sushi.</p>
        <ul>
          <li>
            <strong>I</strong> - the subject (who's doing the action)
          </li>
          <li>
            <strong>eat</strong> - the verb (the action itself)
          </li>
          <li>
            <strong>sushi</strong> - the object (what's being acted upon)
          </li>
        </ul>
        <p>
          The order of these words tells us who is doing what to whom. If we
          change the order to "Sushi eat I," the sentence no longer makes sense.
        </p>
        <div className="relative w-full">
          <p className="absolute font-bold text-red-500">Incorrect</p>
          <p className="text-center">
            <span className="line-through">Sushi eat I.</span>
          </p>
        </div>
        <p>
          Japanese, however, works differently. Instead of relying on word
          order, Japanese uses special markers called particles to show the role
          of each word in a sentence. These particles are short words (often 1-2
          characters) that attach to nouns and other elements to indicate their
          function.
        </p>
        <p>Let's look at the same sentence in Japanese:</p>
        <p className="text-center font-japanese text-xl">
          <Furigana furigana={<span className="text-xs">わたし</span>}>
            私
          </Furigana>
          は
          <Furigana furigana={<span className="text-xs">すし</span>}>
            寿司
          </Furigana>
          を
          <Furigana furigana={<span className="text-xs">た</span>}>食</Furigana>
          べます。
        </p>
        <ul>
          <li>
            <span className="font-japanese text-xl font-bold">私</span> - I
          </li>
          <li>
            <span className="font-japanese text-xl font-bold">は</span> - topic
            marker particle
          </li>
          <li>
            <span className="font-japanese text-xl font-bold">寿司</span> -
            sushi
          </li>
          <li>
            <span className="font-japanese text-xl font-bold">を</span> - object
            marker particle
          </li>
          <li>
            <span className="font-japanese text-xl font-bold">食べます</span> -
            eat
          </li>
        </ul>
        <p>
          This sentence has two particles:{" "}
          <span className="font-japanese text-xl font-bold">は</span>{" "}
          <span className="text-base">(which we've seen)</span> and our first
          new particle in this lesson,{" "}
          <span className="font-japanese text-xl font-bold">を</span>.
        </p>
        {/* <p>
          In Japanese, particles, <u>not word order</u>, determine the meaning
          of a sentence.
        </p> */}

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
              <span className="underline underline-offset-4">
                本<span className="font-bold text-red-500">を</span>
              </span>
              読みます。
            </span>{" "}
            - I read a book.
          </li>
          <li>
            <span className="font-japanese text-xl">
              <span className="underline underline-offset-4">
                水<span className="font-bold text-red-500">を</span>
              </span>
              飲みます。
            </span>{" "}
            - I drink water.
          </li>
          <li>
            <span className="font-japanese text-xl">
              <span className="underline underline-offset-4">
                日本語<span className="font-bold text-red-500">を</span>
              </span>
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
        <YouTubeVideo
          videoId="k2lJ87F10Co"
          title="The を Particle in Japanese"
          credit="ToKini Andy"
        />
        <p className="italic">
          While the <span className="font-japanese text-xl not-italic">を</span>{" "}
          particle is fairly straightforward, it's important to note that{" "}
          <span className="underline underline-offset-2">
            not all verbs can be used with a{" "}
            <span className="font-bold not-italic">
              noun+
              <span className="font-japanese text-xl">を</span>
            </span>
          </span>
          , instead, they may require a different particle. For more information
          on this, check out{" "}
          <a
            href="https://8020japanese.com/particle-wo/"
            target="_blank"
            className="font-semibold not-italic text-sky-400 underline"
          >
            this article by 80/20 Japanese on the を particle
          </a>
          .
        </p>

        <p>
          Now, let's return to word order. In English, saying "sushi eat I" or
          "sushi eat me" sounds like sushi has the capability to swallow you for
          breakfast, rediculous!
        </p>
        <p className="mx-12 text-2xl">
          Changing word order in English changes the object being acted upon by
          the verb.
        </p>
        <p>
          Japanese is different. No matter where the object is placed in a
          sentence, so long as <span className="font-japanese text-xl">を</span>{" "}
          is attached to the end of it, it's the object receiving action.
        </p>
        <p>
          Here's two gramatically correct ways of writing the same Japanese
          sentence:
        </p>
        <p className="text-center font-japanese text-xl">
          <Furigana furigana={<span className="text-xs">わたし</span>}>
            私
          </Furigana>
          は
          <Furigana furigana={<span className="text-xs">すし</span>}>
            寿司
          </Furigana>
          を
          <Furigana furigana={<span className="text-xs">た</span>}>食</Furigana>
          べます。
        </p>
        <p className="text-center font-japanese text-xl">
          <Furigana furigana={<span className="text-xs">すし</span>}>
            寿司
          </Furigana>
          を
          <Furigana furigana={<span className="text-xs">わたし</span>}>
            私
          </Furigana>
          は
          <Furigana furigana={<span className="text-xs">た</span>}>食</Furigana>
          べます。
        </p>
        <ul className="list-inside list-disc">
          <li>
            Because <span className="font-japanese text-xl">寿司</span> is
            paired with <span className="font-japanese text-xl">を</span>, we
            know it's the object being acted upon.
          </li>
          <li>
            Because <span className="font-japanese text-xl">私</span> is paired
            with <span className="font-japanese text-xl">は</span>, we know it's
            the topic of the sentence.
          </li>
        </ul>
        <p className="text-sm italic text-muted-foreground">
          Note: While both are gramatically accurate, the first one sounds more
          natural for reasons described in the next lesson.
        </p>

        <h3 className="font-bold italic">A Note on Particle Placement:</h3>
        <p className="mx-12 text-2xl font-semibold">
          Particles are always attached to the{" "}
          <span className="font-black">end</span> of words.
        </p>
        <p>
          Always ensure the correct particle is paired to the end of the correct
          word. Often, particles are attached to the end of nouns.
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
          incorrectly attached to{" "}
          <span className="font-japanese text-xl">ゆっくり</span>{" "}
          <span className="text-base text-muted-foreground">(slowly)</span>{" "}
          instead of <span className="font-japanese text-xl">本</span> in the
          first example. That's like saying "I read{" "}
          <span className="font-bold underline">slowlys</span>" as opposed to "I
          read <span className="font-bold underline">books</span>" since{" "}
          <span className="font-japanese text-xl">を</span> is incorrectly
          paired with <span className="font-japanese text-xl">ゆっくり</span>{" "}
          instead of <span className="font-japanese text-xl">本</span>. The same
          rule applies for all other particles.
        </p>

        <p className="font-bold">
          Now that you have a general idea of how particles function, let's
          learn a few more.
        </p>

        <h2 className="!mt-8 text-2xl font-bold">
          2. <span className="font-japanese">で</span> - The Utilization
          Particle
        </h2>
        <p>
          The <span className="font-japanese text-xl">で</span> particle has
          multiple uses, primarily indicating the means by which an action is
          performed or the location where an action takes place.
        </p>
        <ol className="list-inside list-decimal space-y-4">
          <li className="space-y-2">
            <strong>Means or method:</strong> Place{" "}
            <span className="font-japanese text-xl">で</span> after the noun
            that describes how the action is done.
            <p className="ml-6">
              <span className="font-japanese text-xl">
                ペン<span className="font-bold text-orange-400">で</span>
                書きます。
              </span>{" "}
              - I write with a pen.
            </p>
          </li>
          <li className="space-y-2">
            <strong>Location of action:</strong> Place{" "}
            <span className="font-japanese text-xl">で</span> after the noun
            that indicates where the action occurs.
            <p className="ml-6">
              <span className="font-japanese text-xl">
                図書館<span className="font-bold text-orange-400">で</span>
                勉強します。
              </span>{" "}
              - I study at the library.
            </p>
          </li>
          <li className="space-y-2">
            <strong>Reason or cause:</strong>{" "}
            <span className="font-japanese text-xl">で</span> can also indicate
            the reason for something.
            <p className="ml-6">
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
            </p>
          </li>
        </ol>

        <YouTubeVideo
          videoId="a4Ia0ha5l7Q"
          title="The で Particle in Japanese"
          credit="ToKini Andy"
        />

        <h2 className="text-2xl font-bold">
          3. <span className="font-japanese">に</span> - Direction, Time, and
          More
        </h2>
        <p></p>
        <ol className="list-inside list-decimal space-y-6">
          <li className="space-y-2">
            <strong>Direction:</strong> The{" "}
            <span className="font-japanese text-xl">に</span> and{" "}
            <span className="font-japanese text-xl">へ</span> particles are
            often used interchangeably to indicate direction or destination.
            <p>
              Place <span className="font-japanese text-xl">に</span> or{" "}
              <span className="font-japanese text-xl">へ</span> after the noun
              that represents the destination or direction of movement.
            </p>
            <ul className="ml-6 space-y-2">
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
                  毎日、ここ
                  <span className="font-bold text-green-500">に</span>
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
              point of arrival, while へ focuses more on the direction of
              movement. But in most cases, the choice between に and へ is a
              matter of personal preference or style.
            </p>
          </li>

          <li className="space-y-2">
            <strong>Specific point in time:</strong> Place{" "}
            <span className="font-japanese text-xl">に</span> after the noun
            that represents the specific time.
            <p className="ml-6">
              <span className="font-japanese text-xl">
                七時<span className="font-bold text-green-500">に</span>
                起きます。
              </span>
              - I wake up at 7 o'clock.
            </p>
            <p className="ml-6">
              <span className="font-japanese text-xl">
                一時半<span className="font-bold text-green-500">に</span>
                昼ご飯を食べます。
              </span>
              - I'll eat lunch at 1:30.
            </p>
          </li>
          {/* <li className="space-y-2">
            <strong>Location of existence:</strong> Use{" "}
            <span className="font-japanese text-xl">に</span> to indicate where
            something or someone exists (with verbs like{" "}
            <span className="font-japanese">いる</span> and{" "}
            <span className="font-japanese">ある</span>{" "}
            <span className="text-base text-muted-foreground">
              more on them later
            </span>
            ).
            <p className="ml-6">
              <span className="font-japanese text-xl">
                カフェ<span className="font-bold text-green-500">に</span>
                コーヒー<span className="font-bold text-indigo-400">が</span>
                <Romaji romaji="there exists">あります</Romaji>。
              </span>{" "}
              - There's coffee at the cafe.
            </p>
          </li> */}
          <p>
            There's one complication that trips up beginners when describing
            time, and that's that{" "}
            <span className="font-japanese text-xl">に</span> is only needed
            when describing a <strong>specific</strong> time, whereas times
            relavent to the present don't use{" "}
            <span className="font-japanese text-xl">に</span>. Take this
            example:
          </p>
          <div className="flex w-full items-center">
            <p className="w-1/4 font-bold text-red-500">Incorrect</p>
            <p className="w-3/4">
              <span className="font-japanese text-xl line-through">
                明日<span className="font-bold text-green-500">に</span>
                お父さんはヘリで仕事に行きます。
              </span>
            </p>
          </div>
          <div className="flex w-full items-center">
            <p className="w-1/4 font-bold">Correct</p>
            <p className="w-3/4">
              <span className="font-japanese text-xl">
                明日、お父さんはヘリで仕事に行きます。
              </span>
              {"->"} Tomorrow, dad will go to work by hellicopter.
            </p>
          </div>
          <div className="flex w-full items-center">
            <p className="w-1/4 font-bold">Also correct</p>
            <p className="w-3/4">
              <span className="font-japanese text-xl">
                お父さんは明日ヘリで仕事に行きます。
              </span>
              {"->"} Dad will go to work by hellicopter tomorrow.
            </p>
          </div>
          <p>
            Tomorrow is entirely dependent on the present. Tomorrow would mean
            different days if I said it yesterday, in 1080 B.C., etc.
          </p>
          <p>
            Here's a hack. In English, when describing specific times, we always
            use prepositions - words like{" "}
            <span className="font-bold italic">on</span>{" "}
            <span className="text-base">(on the 25th of April)</span>,{" "}
            <span className="font-bold italic">at</span>{" "}
            <span className="text-base">(at 12:00)</span>,{" "}
            <span className="font-bold italic">in</span>{" "}
            <span className="text-base">(bad things happened in 2020)</span>.
            It's the same for Japanese with{" "}
            <span className="font-japanese text-xl font-semibold">に</span>.
          </p>
          <p>
            We wouldn't say "Dad will go to work by hellicopter on tomorrow."
          </p>
          <p>
            But there are more grey areas that you'll certainly come across,
            like "Saturday." —This Saturday? Next Saturday? Actually, you'll
            still want to use <span className="font-japanese text-xl">に</span>{" "}
            for that:
          </p>
          <p>
            <span className="font-japanese text-xl">
              <Romaji romaji="next week">
                <Furigana
                  furigana={<span className="text-xs">らいしゅう</span>}
                >
                  来週
                </Furigana>
                の
              </Romaji>
              <span className="ml-2">
                <Romaji romaji="saturday" className="mr-4">
                  <Furigana
                    furigana={<span className="text-xs">どようび</span>}
                  >
                    土曜日
                  </Furigana>
                  に
                </Romaji>
              </span>
              <Romaji romaji="pool">プール</Romaji>に行きます。
            </span>
            {"->"} I'll go to the pool next Saturday.
          </p>
          <p className="!mt-2 text-base italic text-muted-foreground">
            *Literally: "On the Saturday of next week, I'll go to the pool."
          </p>
          <p>
            <span className="font-japanese text-xl">
              <span className="ml-2">
                <Romaji romaji="saturday" className="mr-4">
                  <Furigana
                    furigana={<span className="text-xs">どようび</span>}
                  >
                    土曜日
                  </Furigana>
                  に
                </Romaji>
              </span>
              <Romaji romaji="pool">プール</Romaji>に行きます。
            </span>
            {"->"} I'll go to the pool Saturday.
          </p>
          <p className="!mt-2 text-base italic text-muted-foreground">
            *Like in English, we understand they're specifically talking about
            the upcoming Saturday unless we know otherwise from context.
          </p>
          <p>
            What about chaining together times? "On a Wednesday on the 25th of
            August at 12:45p.m." {"->"}{" "}
            <span className="font-japanese text-xl">
              八月水曜日午後12時45分に
            </span>{" "}
            😧
          </p>
          <p>
            For these situations and more, we recommend you read{" "}
            <a
              href="https://8020japanese.com/time-expressions/"
              target="_blank"
              className="text-sky-400 underline"
            >
              this fantastic article from 80/20 Japanese
            </a>{" "}
            explaining when <span className="font-japanese text-xl">に</span> is
            (and isn't) needed.
          </p>
        </ol>
        <p className="text-base italic text-muted-foreground">
          *There are even more uses of{" "}
          <span className="font-japanese text-lg not-italic">に</span> but we'll
          cover them in later chapters.
        </p>

        <YouTubeVideo
          videoId="dExn1AygbpQ"
          title="The に and へ Particles in Japanese"
          credit="ToKini Andy"
        />

        <p>
          But wait, you said で can be the location of action, and に・へ can
          indicate direction or destination, what's the difference?
        </p>
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

        {/* <h3 className="!mt-9 text-xl font-semibold">
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
        </p> */}
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
