import ContentBox from "@/components/ContentBox"
import CustomImage from "@/components/CustomImage"
import PortraitIcon from "@/components/PortraitIcon"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/lesson-3"
    >
      <div className="relative w-full h-48 -mt-2 border-b border-black">
        <CustomImage image="/img/chapter-1/brushes.jpg" />
      </div>
      <h2 className="pb-2 mt-24 text-5xl font-medium px-24">
        Let's take a closer look at the Japanese writing systems.
      </h2>
      <div className="sm:px-24 px-16 [&>*]:my-6">
        <div className="py-2 [&>*]:my-6">
          <div className="mr-24 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
            <PortraitIcon image="/img/student.png" />
            <p>
              Wise Monk, I've heard that Japanese has three writing systems. Is
              that really true?
            </p>
          </div>
          <div className="ml-24 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
            <PortraitIcon image="/img/guru.png" className="float-end" />
            <p>
              <span className="text-xl">Ah</span>, young grasshopper, your
              curiosity is like a blossoming sakura tree.{" "}
              <span className="font-semibold">Yes</span>, Japanese has three
              writing systems, and all three can be seen in a single sentence.
            </p>
          </div>
          <div>
            <p className="pt-2 mb-2 text-2xl font-semibold text-center">
              <em>...Behold!</em>
            </p>
            <p className="text-center">
              <span className="font-japanese text-2xl">テレビを見ます</span>
              <span className="text-sm">(terebi o mimasu)</span> - I watch
              television
            </p>
          </div>
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
          <div className="font-japanese font-medium text-center text-2xl !py-0">
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
          <div className="w-full flex justify-center">
            <div className="relative w-10 h-10">
              <CustomImage image="/img/chapter-1/stones-smooth.png" />
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
          <div className="font-japanese font-medium text-center text-2xl !py-0">
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
          <div className="w-full flex justify-center">
            <div className="relative w-10 h-10 rounded-full">
              <CustomImage image="/img/chapter-1/katana-leafs.png" />
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
            inherited from the distant lands of China. For example, the word
            kanji is actually written as 漢字 which literally means:
          </p>
          <div className="w-full flex justify-center">
            漢 (Han Chinese) 字 (Characters)
          </div>
          <p>
            <span className="font-extrabold">Sensei:</span> While China has
            simplified many, Japan has kept many of them unchanged, like a
            collection of preserved art pieces. Behold the pictorial depiction
            of the sun:
          </p>
          <p className="text-center text-5xl font-japanese">日</p>
          <p>
            <span className="font-extrabold">Student:</span> They seem complex,
            wise teacher. How shall I conquer them?
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
          <h2 className="text-2xl font-bold !mt-12 mb-4">Summary</h2>
          <ul className="!mt-2 list-disc space-y-4 ml-6">
            <li className="">
              <span className="font-extrabold">Hiragana - </span>Smooth
              characters primarily used for native Japanese words. It is the
              core of the Japanese writing system.
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
          </ul>
        </div>
      </div>
    </ContentBox>
  )
}
