import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import TimeChart from "@/features/charts/TimeChart"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox
      variant="xl"
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/practice/telling-time"
      showProgressBar={false}
    >
      <h1 className="mb-8 px-20 pt-20 text-center text-4xl font-medium leading-[3.25rem]">
        Telling Time
      </h1>
      <div className="w-full justify-center lg:flex">
        <div className="mx-12 flex justify-center">
          {/* Numbers List Box */}
          <div>
            <TimeChart />
          </div>
        </div>
        <div>
          <div className="space-y-12 px-16 pt-12 md:px-28 lg:pl-6 xl:pr-24">
            <h2 className="text-2xl font-bold">
              To say the time in Japanese, simply use the number hour followed
              by じ.
            </h2>
            <div className="!mt-6 flex justify-center">
              <ul className="list-inside list-disc space-y-2">
                <li>
                  4 o'clock is only pronounced{" "}
                  <span className="font-japanese text-xl font-semibold underline underline-offset-4">
                    よじ
                  </span>
                  , not{" "}
                  <span className="font-japanese text-xl font-semibold line-through">
                    よんじ
                  </span>{" "}
                  or{" "}
                  <span className="font-japanese text-xl font-semibold line-through">
                    しじ
                  </span>
                  .
                </li>
                <li>
                  7 o'clock is only pronounced{" "}
                  <span className="font-japanese text-xl font-semibold underline underline-offset-4">
                    しちじ
                  </span>
                  , not{" "}
                  <span className="font-japanese text-xl font-semibold line-through">
                    ななじ
                  </span>
                  .
                </li>
                <li>
                  9 o'clock is only pronounced{" "}
                  <span className="font-japanese text-xl font-semibold underline underline-offset-4">
                    くじ
                  </span>
                  , not{" "}
                  <span className="font-japanese text-xl font-semibold line-through">
                    きゅうじ
                  </span>
                  .
                </li>
              </ul>
            </div>
            <div className="lg:mx-28">
              <YouTubeVideo
                title="Talking about Time by Kaname Naito - Sep 28, 2023"
                videoId="LGmfMlnEGz4"
                credit="Kaname Naito"
                timestamps={[
                  { time: 0, label: "Introduction" },
                  { time: 20, label: "Hours" },
                  { time: 83, label: "Quarter-Past and Quarter-To" },
                  { time: 205, label: "a.m./p.m." },
                  { time: 232, label: "Times of Day" },
                  { time: 288, label: "Various Other Times" },
                  { time: 462, label: "Example Conversations" },
                  { time: 581, label: "Advanced Topics" },
                ]}
              />
            </div>
            <p className="!mt-6 text-base text-muted-foreground">
              Thanks again Kaname for your awesome free videos. :) Everyone go
              subscribe to his channel if you like his content!
            </p>
            <ul className="list-inside list-disc space-y-2">
              <li>
                The accent is typically right before{" "}
                <span className="font-japanese text-xl font-semibold">じ</span>,
                with{" "}
                <span className="font-japanese text-xl font-semibold">
                  さんじ
                </span>{" "}
                and{" "}
                <span className="font-japanese text-xl font-semibold">
                  じゅうじ
                </span>{" "}
                being exceptions.
              </li>
              <li>
                In the real world, time is almost always written in Kanji using
                a number kanji followed by{" "}
                <Furigana furigana={<span className="text-sm">じ</span>}>
                  時
                </Furigana>{" "}
                <span className="text-muted-foreground">
                  (the kanji for time)
                </span>
                .
              </li>
              <li className="ml-6">
                Ex:{" "}
                <Furigana furigana={<span className="text-sm">にじ</span>}>
                  二時
                </Furigana>{" "}
                {"->"} 2 o'clock.
              </li>
              <li className="pt-2">
                Japanese people typically use the 12-hour clock system in daily
                conversation, but the 24-hour clock system is often used in
                formal contexts such as train and bus schedules.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[1000px] space-y-6 px-16 md:px-24">
          <h2 className="!mt-12 text-center text-2xl font-bold">
            For half hours, use the word{" "}
            <span className="font-japanese">はん</span>{" "}
            <span className="text-muted-foreground">(half)</span>.
          </h2>
          <h3 className="text-xl font-bold">Examples:</h3>
          <ul className="ml-6 list-inside list-disc space-y-1">
            <li>
              <span className="font-japanese text-xl font-medium">
                いちじはん
              </span>{" "}
              - 1:30
            </li>
            <li>
              <span className="font-japanese text-xl font-medium">
                じゅうにじはん
              </span>{" "}
              - 12:30{" "}
            </li>
          </ul>
          <ul className="list-inside list-disc space-y-2">
            <li>はん is typically written with the kanji 半.</li>
          </ul>
          <h2 className="!mt-12 text-center text-2xl font-bold">
            Quarter Past and Quarter To
          </h2>
          <p>
            There isn't a direct equivalent in Japanese for{" "}
            <em>quarter past</em> and <em>quarter to</em>. You can specify the
            exact minutes <span className="text-base">(see later lesson)</span>,
            or you can say <em>a little before X</em> or{" "}
            <em>a little after X</em> using{" "}
            <span className="font-japanese text-xl font-bold">まえ</span> and{" "}
            <span className="font-japanese text-xl font-bold">すぎ</span>.
          </p>
          <h3 className="text-xl font-bold">Examples:</h3>
          <ul className="ml-6 list-inside list-disc space-y-1">
            <li>
              {" "}
              Quarter-to-10 {"->"}
              <span className="font-japanese text-xl font-medium">
                じゅうじ
                <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
                  ま
                </Furigana>
                え
              </span>
            </li>
            <li>
              {" "}
              Quarter-past-10 {"->"}
              <span className="font-japanese text-xl font-medium">
                じゅうじ
                <Furigana furigana={<span className="text-[0.5rem]">●</span>}>
                  す
                </Furigana>
                ぎ
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="w-full max-w-[1000px] space-y-6 px-16 md:px-24">
          <h2 className="!mt-12 text-center text-3xl font-bold">
            Times of Day
          </h2>
          <p>
            The basic way to say a.m. and p.m. in Japanese is using{" "}
            <span className="font-japanese text-xl font-bold">ごぜん</span> and
            <span className="font-japanese text-xl font-bold">ごご</span>, which
            you'll see written in kanji as{" "}
            <span className="font-japanese text-xl">午前</span> and{" "}
            <span className="font-japanese text-xl">午後</span>. These are
            placed <span className="font-bold">before</span> the time.
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              12:30 a.m. {"->"}{" "}
              <span className="font-japanese text-xl">
                <Romaji romaji="a.m.">ごぜん</Romaji>{" "}
                <Romaji romaji="twelve">じゅうに</Romaji>{" "}
                <Romaji romaji="half">はん</Romaji>
              </span>{" "}
              {"-> "}
              <span className="font-japanese font-medium">午前十二半</span>
            </li>
            <li>
              12:30 p.m. {"->"}{" "}
              <span className="font-japanese text-xl">
                <Romaji romaji="p.m.">ごご</Romaji>{" "}
                <Romaji romaji="twelve">じゅうに</Romaji>{" "}
                <Romaji romaji="half">はん</Romaji>
              </span>{" "}
              {"-> "}
              <span className="font-japanese font-medium">午前十二半</span>
            </li>
          </ul>
          <p>
            However, in conversational Japanese, speakers don't often use{" "}
            <span className="font-japanese">ごぜん・ごご</span> and instead
            prefer saying{" "}
            <span className="font-bold italic">in the morning</span> or{" "}
            <span className="font-bold italic">at night</span> when necessary.
          </p>
          <ul className="ml-6 list-inside list-disc space-y-1">
            <li>
              <span className="font-japanese text-xl">あさのくじ</span> - 9 in
              the morning
            </li>
            <li>
              <span className="font-japanese text-xl">よるのくじ</span> - 9 at
              night
            </li>
          </ul>
          <h4 className="text-center text-xl font-bold">
            Japanese people generally divide days into 4 groups:
          </h4>
          <div className="flex justify-center">
            <ul className="space-y-2 text-2xl">
              <li className="pt-3 font-japanese font-semibold">
                🌄{" "}
                <Furigana furigana={<span className="text-xs">●</span>}>
                  あ
                </Furigana>
                さ<span className="font-inter">{"-> "}</span>
                <span className="text-xl font-bold">
                  Sunrise - 10/11 a.m. (morning)
                </span>
              </li>
              <li className="pt-3 font-japanese font-semibold">
                🌤️ ひ
                <Furigana furigana={<span className="text-xs">●</span>}>
                  る
                </Furigana>
                <span className="font-inter">{"-> "}</span>
                <span className="text-xl font-bold">
                  10/11 a.m. - 2/3 p.m. (midday)
                </span>
              </li>
              <li className="pt-3 font-japanese font-semibold">
                🌇 ゆうがた<span className="font-inter">{"-> "}</span>
                <span className="text-xl font-bold">
                  3/4 p.m. - 7 p.m. (evening)
                </span>
              </li>
              <li className="pt-3 font-japanese font-semibold">
                🌒{" "}
                <Furigana furigana={<span className="text-xs">●</span>}>
                  よ
                </Furigana>
                る<span className="font-inter">{"-> "}</span>
                <span className="text-xl font-bold">
                  7 p.m. - Sunrise (night)
                </span>
              </li>
            </ul>
          </div>
          <p>
            *<span className="font-japanese text-xl">あさ</span> and{" "}
            <span className="font-japanese text-xl">よる</span> are generally
            the only two you'd specify when clarifying AM vs. PM.
          </p>
          <h2 className="!mt-12 text-center text-3xl font-bold">
            Asking The Time
          </h2>
          <h3 className="pt-12 font-japanese text-3xl font-medium">
            <Furigana furigana={<span className="text-base">いま</span>}>
              今
            </Furigana>{" "}
            -{" "}
            <span className="font-honk text-4xl">right now / current time</span>
          </h3>
          <p>
            If you want to ask somebody{" "}
            <span className="font-bold italic">what time is it?</span> in
            Japanese, use the expression
          </p>
          <h3 className="text-center font-japanese text-2xl font-semibold">
            <Romaji romaji="now">いま</Romaji>、
            <Romaji romaji="what">
              <Furigana furigana={<span className="text-[0.7rem]">●</span>}>
                な
              </Furigana>
              ん
            </Romaji>
            <Romaji romaji="time">じ</Romaji>
            <Romaji romaji="is it?">ですか</Romaji>。
          </h3>
          <div>
            <h3 className="mb-4 mt-8 text-xl font-semibold">
              Scenario 1: Asking for The Time
            </h3>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <span>Person A: </span>
                <span className="font-japanese text-xl font-medium">
                  いま なんじ ですか。
                </span>{" "}
                {"->"} What time is it?
              </li>
              <li>
                <span>Person B: </span>
                <span className="font-japanese text-xl font-medium">
                  じゅういちじ はん です。
                </span>{" "}
                {"->"} It's 11:30.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 mt-8 text-xl font-semibold">
              Scenario 2: Setting a Meeting Time
            </h3>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <span>A: </span>
                <span className="text-center font-japanese text-xl font-medium">
                  <Romaji romaji="meeting">かいぎ</Romaji> は なんじ ですか。
                </span>{" "}
                {"->"} What time is the meeting?
              </li>
              <li>
                <span>B: </span>
                <span className="font-japanese text-xl font-medium">
                  さんじ はん です。
                </span>{" "}
                {"->"} It's at 3:30.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 mt-8 text-xl font-semibold">
              Scenario 3: Scheduling an Appointment
            </h3>
            <ul className="list-inside list-disc space-y-2">
              <li>
                <span>A: </span>
                <span className="text-center font-japanese text-xl font-medium">
                  いしゃ の <Romaji romaji="appointment">よやく</Romaji> は
                  なんじ ですか。
                </span>
                {"->"} What time is the doctor's appointment?
              </li>
              <li>
                <span>B: </span>
                <span className="font-japanese text-xl font-medium">
                  ごぜん じゅうじ です。
                </span>{" "}
                {"->"} It's at 10 a.m.
              </li>
            </ul>
          </div>
          <h2 className="!mt-12 text-center text-3xl font-bold italic">
            <span className="not-italic">Bonus</span> - History of Japanese Time
          </h2>
          <div className="lg:px-16">
            <YouTubeVideo
              videoId="1BJmnEa6YGE"
              title="Traditional Japanese Time Was Very Different by Linfamy - Nov 21, 2022"
              credit="Linfamy"
            />
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
