import ContentBox from "@/features/content-box/ContentBox"
import CustomImage from "@/components/CustomImage"
import PortraitIcon from "@/components/PortraitIcon"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-0/hiragana"
    >
      <div className="relative -mt-2 h-48 w-full border-b border-black">
        <CustomImage
          src="/img/chapter-0/brushes.jpg"
          alt="japanese brushstrokes"
        />
      </div>
      <h2 className="mt-24 px-24 pb-14 text-5xl font-medium">
        Let's take a closer look at the Japanese writing systems.
      </h2>
      <div className="space-y-9 px-16 sm:px-24">
        <div className="mr-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>
            Wise Monk, I've heard that Japanese has more than one writing
            system. Is that really true?
          </p>
        </div>
        <div className="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" className="float-end" />
          <p>
            <span className="text-xl">Ah</span>, young grasshopper, your
            curiosity is like a blossoming sakura tree.{" "}
            <span className="font-semibold">Yes</span>, Japanese has{" "}
            <strong>three</strong> writing systems, and all three can be seen in
            a single sentence.
          </p>
        </div>
        <div>
          <p className="mb-2 text-center text-2xl font-semibold">
            <em>...Behold!</em>
          </p>
          <p className="text-center">
            <span className="font-japanese text-2xl">
              <span className="text-green-500 saturate-[25%]">テレビ</span>
              <span className="text-sky-500 saturate-50 dark:text-background-secondary dark:saturate-100">
                を
              </span>
              <span className="text-red-500">見</span>
              <span className="text-sky-500 saturate-50 dark:text-background-secondary dark:saturate-100">
                ます
              </span>
            </span>
            <span className="text-sm">(terebi o mimasu)</span> - I watch
            television
          </p>
          <ul className="mt-2 flex w-full justify-center space-x-6 pb-4">
            <li>
              <div className="inline-flex h-3 w-3 rounded-full bg-green-500 saturate-[25%]" />{" "}
              - Katakana
            </li>
            <li>
              <div className="inline-flex h-3 w-3 rounded-full bg-sky-500 saturate-50 dark:bg-background-secondary dark:saturate-100" />{" "}
              - Hiragana
            </li>
            <li>
              <div className="inline-flex h-3 w-3 rounded-full bg-red-500" /> -
              Kanji
            </li>
          </ul>
        </div>
        <div className="px-2 [&>*]:mt-4">
          <p>
            <span className="font-extrabold">Student:</span> <em>Three</em>{" "}
            writing systems? That sounds complicated, oh wise one.
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Fear not, for
            enlightenment comes with understanding. First, we have Hiragana,
            your loyal companion on this journey. They can represent all of the
            spoken Japanese sounds that you'll hear, and are often used for
            native Japanese words. They are built upon five pure vowel sounds:
          </p>
          <div className="text-center font-japanese text-2xl font-medium">
            <p>あ a</p>
            <p>い i</p>
            <p>う u</p>
            <p>え e</p>
            <p>お o</p>
          </div>
          <p className="mt-0">
            <span className="font-extrabold">Sensei:</span> Observe the gentle,
            rounded shapes of Hiragana characters, like the smooth stones of a
            Zen garden.
          </p>
          <div className="flex w-full justify-center">
            <div className="relative h-10 w-10">
              <CustomImage
                src="/img/chapter-0/stones-smooth.png"
                alt="smooth stones"
              />
            </div>
          </div>
          <p>
            <span className="font-extrabold">Student:</span> So, Hiragana is the
            foundation, great sage?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Indeed, young one.
            Think of Hiragana as the ABCs of your journey, but infused with the
            spirit of ancient wisdom.
          </p>
          <p>
            <span className="font-extrabold">Student:</span> And what of the
            other writing systems, venerable master?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Next, greet
            Katakana, the spirited twin of Hiragana. Katakana is the voice of
            foreign words, and it often shouts in TV commercials to make words
            shine brightly.
          </p>
          <div className="text-center font-japanese text-2xl font-medium">
            <p>ア a</p>
            <p>イ i</p>
            <p>ウ u</p>
            <p>エ e</p>
            <p>オ o</p>
          </div>
          <p className="mt-0">
            <span className="font-extrabold">Sensei:</span> Note the sharp,
            angular shapes of Katakana characters, like the edges of a finely
            crafted katana.
          </p>
          <div className="flex w-full justify-center">
            <div className="relative h-10 w-10 rounded-full">
              <CustomImage
                src="/img/chapter-0/katana-leafs.png"
                alt="kanata-sword-icon"
              />
            </div>
          </div>
          <p>
            <span className="font-extrabold">Student:</span> So, is Katakana
            just another set of characters with the same sounds as Hiragana, oh
            enlightened one?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Precisely. Katakana
            works exactly the same way as Hiragana, and the characters sound the
            same, too. Think of it like a funky new font!
          </p>
          <p>
            <span className="font-extrabold">Student:</span> And the final
            writing system, wise monk?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Lastly, we encounter
            Kanji, the ancient symbols that hold the wisdom of entire words or
            ideas. While native Japanese words can be written in just hiragana,
            in everyday usage, most words are actually written in kanji.
          </p>
          <p>
            <span className="font-extrabold">Student:</span> Why do Japanese
            people use kanji, oh enlightened one?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> These characters are
            inherited from our neighbors in China. For example, the word kanji
            is actually written as{" "}
            <span className="font-japanese text-xl">漢字</span> which literally
            means:
          </p>
          <div className="flex w-full items-end justify-center">
            <span className="mb-0.5 mr-1 font-japanese text-xl">漢</span> (Han
            Chinese){" "}
            <span className="mx-1 mb-0.5 font-japanese text-xl">字</span>{" "}
            (Characters)
          </div>
          <p>
            While China has simplified many, Japan has kept many of them
            unchanged, like a collection of preserved art pieces. Behold the
            pictorial depiction of the sun:
          </p>
          <p className="text-center font-japanese text-5xl">日</p>
          <p>
            <span className="font-extrabold">Student:</span> Uh huh... Well,
            they seem complex, wise teacher. How shall I conquer them?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Approach Kanji as a
            great pilgrimage. We shall unravel their mysteries one step at a
            time. With each character, you shall uncover a new layer of the
            universe's secrets. 🔭
          </p>
          <p>
            <span className="font-extrabold">Student:</span> Where shall I
            begin, master?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Begin with Hiragana,
            young grasshopper—their pronunciation and simple strokes. Mastering
            Hiragana is the first step to opening the gate to the vast world of
            Japanese knowledge.
          </p>
          <h2 className="!mt-12 mb-8 text-2xl font-bold">
            Bonus - <span className="font-normal">Romaji</span>
          </h2>
          <div className="mr-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/student.png" />
            <p>Sensei, I've seen Romaji used a lot. What exactly is it?</p>
          </div>
          <div className="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/guru.png" className="float-end" />
            <p>
              Romaji is the use of Latin alphabet letters to represent Japanese
              sounds. It serves as a bridge for those who are just beginning
              their journey in the Japanese language. For example, the word
              "こんにちは" can be written as "konnichiwa" in Romaji.
            </p>
          </div>
          <p className="!mt-12">
            <span className="font-extrabold">Student:</span> Is Romaji used
            often in Japan?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Romaji is primarily
            used for the benefit of learners and in contexts where Japanese
            characters might not be practical, such as on international signage
            or in technology settings. However, true mastery of Japanese
            involves moving beyond Romaji and immersing oneself in Hiragana,
            Katakana, and Kanji.
          </p>
          <p>
            <span className="font-extrabold">Student:</span> I see. So, Romaji
            is like training wheels?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Precisely, eager
            student. Romaji can help you get started, but to truly embrace the
            beauty and depth of the Japanese language, you must delve into its
            unique scripts. That is why we will only use Romaji during this
            first chapter.
          </p>
          <p>
            <span className="font-extrabold">Student:</span> Thanks, Sensei.
            I'll make sure to practice reading without relying too much on it.
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Wise decision, young
            one. Embrace the challenge and let each step bring you closer to
            fluency. Remember, the journey of learning a language is as
            important as the destination. Enjoy each moment.
          </p>
          <h2 className="!mt-12 mb-4 text-2xl font-bold">Summary</h2>
          <ul className="!mt-2 ml-6 list-disc space-y-4">
            <li className="">
              <span className="font-extrabold">Hiragana - </span>Smooth
              characters primarily used for native Japanese words and
              grammatical elements. It is the core of the Japanese writing
              system.
            </li>
            <li>
              <span className="font-extrabold">Katakana - </span>Angular
              characters that primarily represent loanwords/foreign words. It is
              the energetic sibling of Hiragana and is often used in
              commercials.
            </li>
            <li>
              <span className="font-extrabold">Kanji - </span>Ancient Chinese
              characters that represent entire words or ideas.
            </li>
            <li>
              <span className="font-extrabold">Bonus: Romaji - </span>
              Latin representation of Japanese words, primarily used for
              beginners and in contexts where Japanese characters are not
              practical.
            </li>
          </ul>
        </div>
      </div>
    </ContentBox>
  )
}
