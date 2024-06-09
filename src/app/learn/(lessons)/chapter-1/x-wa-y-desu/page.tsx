import ContentBox from "@/components/ContentBox"
import CustomImage from "@/components/CustomImage"
import PortraitIcon from "@/components/PortraitIcon"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/occupations-majors"
    >
      <h1 className="mt-32 px-20 pb-12 text-center text-4xl font-semibold leading-[2.875rem]">
        <span className="text-orange-400">X</span>
        <span className="font-japanese">は</span>
        <span className="text-emerald-400">Y</span>
        <span className="font-japanese">です</span>
        —Your{" "}
        <span className="font-bold">
          <em>first</em>
        </span>{" "}
        introduction to Japanese grammar
      </h1>
      <div className="space-y-6 px-16 md:px-24">
        <div className="flex w-full items-center">
          <div className="mx-4 flex flex-col items-center">
            <h3 className="text-center font-semibold">
              です (desu): The Polite Copula
            </h3>
            <h2 className="py-0 text-center text-2xl font-bold">
              &quot;It&apos;s a state of being, man...&quot;
            </h2>
            <iframe
              src="https://giphy.com/embed/IHnROpQICe4kE"
              width="240"
              height="182"
              className="giphy-embed mt-2"
              allowFullScreen
            />
          </div>
          <div className="flex justify-center pt-4 text-2xl">
            <ul className="space-y-4 font-semibold">
              <li className="text-orange-400">📙 This is a book.</li>
              <li className="text-sky-400">🧑‍🎓 I am a stuent</li>
              <li className="text-emerald-500">👥 We are friends</li>
            </ul>
          </div>
        </div>
        <div>
          <p className="text">
            In <span className="font-bold">English</span>, when we want to make
            a statement about something, we:
          </p>
          <ul className="space-y-2 px-6 pt-4 text-base">
            <li>
              <span className="mr-2 font-semibold">{"1."}</span>Explicity state
              which thing we're referring to (this/that, I/you, etc.).
            </li>
            <li>
              <span className="mr-2 font-semibold">{"2."}</span>Then, we use one
              of the several conjugations of the word <strong>to be</strong>.
            </li>
            <li>
              <span className="mr-2 font-semibold">{"3."}</span>Sometimes, we
              follow it up with a strange article that changes if the next word
              starts with a vowel (a/an).
            </li>
            <li>
              <span className="mr-2 font-semibold">{"4."}</span>And{" "}
              <em>finally</em>, the object we are making a statement about.
            </li>
          </ul>
          <h3 className="pt-4 text-center text-2xl font-bold">
            <em>That's a mess!</em>
          </h3>
        </div>
        <div className="flex w-full items-center justify-center">
          <div className="w-1/2">
            <h3 className="text-xl font-bold text-orange-400">
              The Simplicity of Japanese
            </h3>
            <p className="pt-2">
              Japanese, on the other hand, makes things{" "}
              <span>
                <em>much</em>
              </span>{" "}
              easier:
            </p>
          </div>
          <div className="flex w-1/2 justify-center">
            <ul className="space-y-4 text-2xl font-semibold">
              <li>
                📙{" "}
                <span className="font-japanese text-orange-400">
                  ほん<span className="underline underline-offset-4">です</span>
                  。
                </span>
              </li>
              <li>
                🧑‍🎓{" "}
                <span className="font-japanese text-sky-400">
                  がくせい
                  <span className="underline underline-offset-4">です</span>。
                </span>
              </li>
              <li>
                👥{" "}
                <span className="font-japanese text-emerald-500">
                  ともだち
                  <span className="underline underline-offset-4">です</span>。
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <h3 className="text-center text-2xl font-bold">
            <em>Yes! Consistency!</em>
          </h3>
          <p className="text-center text-sm">And it gets even better.</p>
        </div>
        <div>
          <h3 className="text-xl font-bold">
            More on <span className="font-japanese">です</span> (desu)
          </h3>
          <p className="pt-2">
            In English, we can roughly translate{" "}
            <span className="font-japanese">です</span> as{" "}
            <strong>to be</strong>, but it's not quite the same. In Japanese,{" "}
            <span className="font-japanese">です</span> adds a polite touch to
            the sentence without changing its meaning.
          </p>
        </div>
        <h3 className="text-center text-2xl font-bold">
          Sometimes, we can just drop です altogether and still have a complete
          sentence! 😀
        </h3>
        <div className="font-japanese text-5xl font-semibold">
          <div className="flex w-full items-center">
            <div className="flex w-1/2 items-center">
              <h4 className="text-orange-400">ほん。</h4>
              <h4 className="whitespace-nowrap pr-4 font-inter text-4xl text-muted-foreground">
                {"->"}
              </h4>
            </div>
            <div className="flex w-1/2">
              <div className="relative mt-6 w-full overflow-hidden rounded-md pb-[68.42%]">
                {/* <CustomImage src="/img/chapter-1/student.jpeg" alt="student" /> */}
              </div>
            </div>
          </div>
          <div className="flex w-full items-center">
            <div className="flex w-1/2 items-center">
              <h4 className="text-sky-500">がくせい。</h4>
              <h4 className="whitespace-nowrap pr-4 font-inter text-4xl text-muted-foreground">
                {"->"}
              </h4>
            </div>
            <div className="flex w-1/2">
              <div className="relative mt-6 w-full overflow-hidden rounded-md pb-[68.42%]">
                <CustomImage src="/img/chapter-1/student.jpeg" alt="student" />
              </div>
            </div>
          </div>
          <div className="flex w-full items-center">
            <div className="flex w-1/2 items-center">
              <h4 className="text-emerald-500">ともだち。</h4>
              <h4 className="whitespace-nowrap pr-4 font-inter text-4xl text-muted-foreground">
                {"->"}
              </h4>
            </div>
            <div className="w-1/2">
              <div className="relative mt-6 w-full overflow-hidden rounded-md pb-[68.42%]">
                <CustomImage src="/img/chapter-1/friends.jpeg" alt="friends" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <p>
            So, if we were to say "that's a mess!" in a Japanese lexicon, it
            would simply be:
          </p>
          <h3 className="text-center text-3xl font-bold">
            <em>Mess!</em>
          </h3>
        </div>
        <p className="pt-3">
          But if you ever listen to a Japanese conversation, you'll notice{" "}
          <span className="font-japanese">です</span> is used in almost every
          sentence. That's because it softens the tone, adding politeness to
          speech, which is highly valued in Japanese culture.
        </p>
        <div>
          <h3 className="pt-3 text-xl font-bold">Understood Context</h3>
          <p className="pt-2">
            You'll notice that none of these sentences have a topic like{" "}
            <span className="font-semibold underline underline-offset-[3px]">
              I
            </span>
            ,{" "}
            <span className="font-semibold underline underline-offset-[3px]">
              this
            </span>
            , or{" "}
            <span className="font-semibold underline underline-offset-[3px]">
              it
            </span>
            . The context often makes it clear who or what the speaker is
            referring to. For instance,{" "}
            <span className="font-japanese">ともだちです</span> could mean{" "}
            <span className="font-semibold underline underline-offset-[3px]">
              I
            </span>{" "}
            am a friend,{" "}
            <span className="font-semibold underline underline-offset-[3px]">
              You
            </span>{" "}
            are a friend,{" "}
            <span className="font-semibold underline underline-offset-[3px]">
              They
            </span>{" "}
            are friends, etc., depending on the context.
          </p>
          <div className="mt-2">
            <small className="text-base">
              <em>
                *<span className="font-japanese">です</span> can refer to either
                one or a group of things.
              </em>
            </small>
          </div>
        </div>
        <div>
          <h2 className="pt-3 text-2xl font-bold">Example Sentences</h2>
          <div className="mt-6 flex w-full justify-center">
            <ul className="space-y-2">
              <li>
                <span className="font-japanese">
                  <span className="text-red-400">いちねんせい</span>です
                </span>{" "}
                - I am a{" "}
                <span className="text-red-400">first-year student</span>.
              </li>
              <li>
                <span className="font-japanese">
                  <span className="text-sky-400">[name]</span>です
                </span>{" "}
                - I am <span className="text-sky-400">[name]</span>
              </li>
              <li>
                <span className="font-japanese">
                  <span className="text-yellow-400">にじ</span>です
                </span>{" "}
                - It is <span className="text-yellow-400">two o'clock</span>.
              </li>
              <li>
                <span className="font-japanese">
                  <span className="text-indigo-400">けいざい</span>です
                </span>{" "}
                - (My major) is{" "}
                <span className="text-indigo-400">economics</span>.
              </li>
              <li>
                <span className="font-japanese">
                  <span className="text-emerald-400">ほん</span>です
                </span>{" "}
                - These are{" "}
                <span className="font-japanese text-emerald-400">books</span>. /
                This is a{" "}
                <span className="font-japanese text-emerald-400">book</span>. /
                +more...
              </li>
            </ul>
          </div>
        </div>
        <div className="mr-48 min-h-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p className="mt-1">
            But <span className="font-japanese">せんせい</span>, what if the
            topic isn't clear?
          </p>
        </div>
        <div className="ml-40 min-h-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" className="float-end" />
          <p className="mt-1">
            Ah, young grasshopper, that's where particles come in.
          </p>
        </div>
        <div className="w-full border-b border-card-foreground pb-3"></div>
        <h2 className="pt-6 text-center text-3xl font-black">
          The Role of Particles in Japanese
        </h2>
        {/* <div> */}
        <p>
          Particles are tiny words, often just a syllable or two, that play a
          crucial role in Japanese sentences. They are like the grammatical glue
          holding sentences together, clarifying the roles of the words around
          them.
        </p>
        {/* <p className="pt-4 text-center font-semibold">
            You don't need to know all these just yet, but here's what some of
            them look like:
          </p>
        </div>
        <div className="pb-6"></div> */}
        <h2 className="text-center text-3xl font-black">
          The <span className="font-japanese">は</span> Particle
        </h2>
        <p>
          One of the most important particles is{" "}
          <span className="font-japanese text-xl">は</span> (wa). This particle
          indicates the topic of the sentence.
        </p>
        <div className="flex w-full justify-center">
          <ul className="space-y-4 text-center text-2xl font-semibold">
            <li>
              📙 -{" "}
              <span className="font-japanese">
                <span className="text-orange-400">これ</span>
                <span className="underline underline-offset-2">は</span>
                <span className="text-emerald-500">ほん</span>
                です。
              </span>
            </li>
            <li>
              <span className="text-orange-400">This</span> is a{" "}
              <span className="text-emerald-500">book</span>.
            </li>
            <p className="text-center text-sm font-normal">
              Yes, this particle is actually pronounced{" "}
              <span className="font-bold">wa</span> and not{" "}
              <span className="font-bold">ha</span>.
            </p>
          </ul>
        </div>
        <p>
          Here, <span className="font-japanese">これは</span> (kore wa) uses the{" "}
          <span className="font-japanese">は</span> particle to mark{" "}
          <span className="font-semibold">this</span> as the topic.{" "}
          <span className="font-japanese">は</span> itself doesn't have any
          meaning, but it helps to clarify the topic of the sentence. You can
          think of it like an arrow pointing to the topic of the sentence.
        </p>
        <div className="w-full space-y-4 rounded-2xl bg-primary/10 py-10 text-center font-semibold">
          <p>
            As for <span className="text-orange-400">this</span>, it is a{" "}
            <span className="text-emerald-500">book</span>.
          </p>
          <h3 className="text-center text-4xl font-bold">
            <em>
              As for <span className="text-orange-400">X</span>, it is{" "}
              <span className="text-emerald-500">Y</span>.
            </em>
          </h3>
          <h3 className="pb-2 pt-3 text-center text-[2.875rem]">
            <span className="text-orange-400">X</span>
            <span className="font-japanese">は</span>
            <span className="text-emerald-500">Y</span>
            <span className="font-japanese">です。</span>
          </h3>
        </div>
        <h2 className="text-2xl font-bold">Example Sentences</h2>
        <p>
          Japanese speakers often omit the topic and <span>は</span> particle
          when it's obvious from context. For example:
        </p>
        <div>
          <h4 className="pb-2 text-xl font-semibold">In English</h4>
          <div className="mx-6 space-y-2">
            <p>
              <span className="mr-2">A:</span>Hey, how was your trip to Tokyo?
            </p>
            <p>
              <span className="mr-2">B:</span>It was awesome! The food was super
              tasty.
            </p>
            {/* <p>
              <span className="mr-2">A:</span>Nice! Did you check out any
              temples?
            </p>
            <p>
              <span className="mr-2">B:</span>Yeah, I went to Sensoji Temple. It
              was gorgeous!
            </p> */}
          </div>
        </div>
        <div className="text-xl">
          <h4 className="pb-2 text-xl font-semibold">In Japanese</h4>
          <div className="mx-6 space-y-2">
            <p>
              <span className="mr-2 text-lg">A:</span>
              <Romaji
                romaji={
                  <>
                    <span className="text-yellow-400">hey</span>,
                  </>
                }
              >
                <span className="text-yellow-400">ねえ</span>
              </Romaji>
              、
              <Romaji
                romaji={
                  <>
                    <span className="text-sky-300">as for</span>{" "}
                    <span className="text-orange-400">Tokyo</span>
                  </>
                }
                className="mr-1"
              >
                <span className="flex items-end justify-center">
                  <span className="text-orange-400">
                    <Furigana
                      furigana={
                        <span className="text-xs font-normal">とうきょう</span>
                      }
                    >
                      東京
                    </Furigana>
                  </span>

                  <span className="font-bold text-sky-400">は</span>
                </span>
              </Romaji>
              <Romaji
                romaji={
                  <>
                    <span className="text-emerald-400">how</span>{" "}
                  </>
                }
              >
                <span className="text-emerald-400">どう</span>
              </Romaji>
              <Romaji
                romaji={
                  <>
                    <span className="text-red-400">was it</span> ?
                  </>
                }
              >
                <span className="text-red-400">だった</span>？
              </Romaji>
            </p>
            <li className="mx-6 text-base">
              Here,{" "}
              <span className="font-japanese">
                <span className="text-orange-400">東京</span>
                <span className="text-sky-300">は</span>
              </span>{" "}
              sets Tokyo as the topic of the conversation.
            </li>
            <p>
              <span className="mr-2 text-lg">B:</span>
              <Romaji
                romaji={
                  <span className="mr-2">
                    <span className="text-muted-foreground">(It)</span>{" "}
                    <span className="text-red-400">was</span>{" "}
                    <span className="text-emerald-400">awesome</span>!
                  </span>
                }
              >
                <span className="text-emerald-400">
                  <Furigana
                    furigana={
                      <span className="text-xs font-medium">さいこう</span>
                    }
                  >
                    最高
                  </Furigana>
                </span>
                <span className="text-red-400">だった</span>よ！
              </Romaji>
              <Romaji
                romaji={
                  <>
                    <span className="text-sky-300">As for</span>{" "}
                    <span className="text-muted-foreground">the </span>
                    <span className="text-orange-400">food</span>
                  </>
                }
              >
                <span className="flex items-end justify-center">
                  <span className="text-orange-400">
                    <Furigana
                      furigana={
                        <span className="text-xs font-medium">たべもの</span>
                      }
                    >
                      食べ物
                    </Furigana>
                  </span>
                  <span className="font-bold text-sky-400">は</span>
                </span>
              </Romaji>
              <Romaji
                romaji={
                  <>
                    <span className="text-muted-foreground">(it)</span>
                    <span className="text-emerald-400"> was</span>{" "}
                    <span className="text-indigo-400">really</span>{" "}
                    <span className="text-emerald-400">delicious</span>.
                  </>
                }
              >
                <span className="text-indigo-400">すごく</span>
                <span className="text-emerald-400">おいしかった</span>。
              </Romaji>
            </p>
            <li className="mx-6 text-base">
              Here, the topic of Tokyo has already been introduced, so we can
              drop{" "}
              <span className="font-japanese">
                <span className="text-orange-400">東京</span>は
              </span>
              .
            </li>
            <li className="mx-6 text-base">
              Food is a new topic, so we use{" "}
              <span className="font-japanese text-sky-300">は</span> paired with
              the topic,{" "}
              <span className="font-japanese text-orange-400">食べ物</span>.
            </li>
            {/* <p>
              <span className="mr-2 text-lg">A:</span>
              <Romaji
                romaji={
                  <>
                    <span className="text-emerald-400">Nice</span>!
                  </>
                }
              >
                <span className="text-emerald-400">いいね</span>
              </Romaji>
              ！
              <Romaji
                romaji={
                  <>
                    <span className="text-sky-300">To</span>{" "}
                    <span className="text-muted-foreground">a </span>
                    <span className="mr-2 text-orange-400">temple</span>
                  </>
                }
              >
                <div className="flex justify-center">
                  <span className="text-orange-400">お寺</span>
                  <span className="font-bold text-sky-400">に</span>
                </div>
              </Romaji>
              <Romaji
                romaji={
                  <>
                    <span className="mr-1 text-pink-400">did you go</span>?
                  </>
                }
              >
                <span className="text-pink-400">行った</span>？
              </Romaji>
            </p>
            <li className="mx-6 text-base">
              We'll learn about the <span className="text-sky-300">に</span>{" "}
              particle a future lesson.
            </li>
            <p>
              <span className="mr-2 text-lg">B:</span>
              <Romaji
                romaji={
                  <>
                    <span className="text-yellow-400">Yeah</span>,
                  </>
                }
              >
                <span className="text-yellow-400">うん</span>、
              </Romaji>
              <Romaji
                romaji={
                  <>
                    <span className="text-pink-400">I went</span>{" "}
                    <span className="text-sky-300">to</span>{" "}
                    <span className="text-orange-400">Sensōji temple</span>.
                  </>
                }
              >
                <span className="text-orange-400">浅草寺</span>
                <span className="font-bold text-sky-400">に</span>
                <span className="text-pink-400">行った</span>よ。
              </Romaji>
              <Romaji
                romaji={
                  <>
                    <span className="text-emerald-400">It was beautiful</span>!
                  </>
                }
              >
                <span className="text-emerald-400">きれいだった</span>！
              </Romaji>
            </p> */}
          </div>
        </div>
        <h2 className="text-2xl font-bold">Summary</h2>
        <ul className="ml-6 mt-2 list-disc space-y-4">
          <li className="">
            <span className="font-japanese font-extrabold">です - </span>Roughly
            translated as <strong>to be</strong>, it adds politeness to a
            sentence without changing its meaning, suitable for use in most
            polite/formal situations.
          </li>
          <li>
            <span className="font-extrabold">Particles - </span>Small elements
            that grammatically structure sentences—they help to clarify the role
            of the words around them.
          </li>
          <li>
            <span className="font-japanese font-extrabold">は - </span>Indicates
            a new topic.
          </li>
          <li>
            <span className="font-extrabold">Dropping the topic - </span>
            Japanese speakers often omit the topic and{" "}
            <span className="font-japanese">は</span> particle when it's obvious
            from context, or when the topic has already been introduced.
          </li>
        </ul>
      </div>
    </ContentBox>
  )
}
