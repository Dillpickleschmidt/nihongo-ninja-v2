import ContentBox from "@/components/ContentBox"
import CustomImage from "@/components/CustomImage"
import PortraitIcon from "@/components/PortraitIcon"
import HiraganaChart from "@/features/charts/HiraganaChart"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/hiragana-quiz-1"
    >
      <div className="w-full flex justify-center">
        <div className="relative mt-24 h-64 w-64">
          <CustomImage src="/img/chapter-1/あ.png" alt="あ image" />
        </div>
      </div>
      <h1 className="mt-12 text-6xl font-bold leading-[3.5rem] mx-24 text-center">
        Hiragana: The <span className="text-sky-400">ABC</span>s of Japanese
      </h1>
      <h2 className="text-3xl text-center font-bold mb-4 mt-12">
        What is Hiragana?
      </h2>
      <div className="sm:px-24 px-16 space-y-9">
        <p>
          Hiragana is one of the three main scripts used in Japanese writing,
          along with Katakana and Kanji, often referred to as the foundational
          writing system in Japanese. It's primarily used for{" "}
          <strong>native</strong> Japanese words and{" "}
          <strong>grammatical elements</strong> that connect words into
          sentences. Each Hiragana character represents a distinct sound, and
          these characters can be combined to form words.
        </p>
        <p>
          There are a total of <strong>46</strong> Hiragana characters. It
          sounds like a lot, but don't worry! They all include the same 5 vowels
          that you've already seen.
        </p>
        <div className="font-japanese font-semibold w-full flex justify-center text-3xl">
          <ul className="w-full flex justify-evenly">
            <li>あ a</li>
            <li>い i</li>
            <li>う u</li>
            <li>え e</li>
            <li>お o</li>
          </ul>
        </div>
        <p>
          Remember this pattern! 'a, i, u, e, o'. If you memorize that, the rest
          will come more easily.
        </p>
        <p>
          Next, we just add a consonant to each of these. Adding 'k' will give
          us five new characters:
        </p>
        <div className="font-japanese font-medium w-full flex justify-center text-2xl">
          <ul>
            <li>
              か ka -{" "}
              <span className="text-xl">
                <em>
                  <span className="font-extrabold">ca</span>r
                </em>
              </span>
            </li>
            <li>
              き ki -{" "}
              <span className="text-xl">
                <em>
                  <span className="font-extrabold">ke</span>y
                </em>
              </span>
            </li>
            <li>
              く ku -{" "}
              <span className="text-xl">
                <em>
                  <span className="font-extrabold">cou</span>pon
                </em>
              </span>
            </li>
            <li>
              け ke -{" "}
              <span className="text-xl">
                <em>
                  <span className="font-extrabold">ke</span>pt
                </em>
              </span>
            </li>
            <li>
              こ ko -{" "}
              <span className="text-xl">
                <em>
                  <span className="font-extrabold">co</span>rner
                </em>
              </span>
            </li>
          </ul>
        </div>
        <p>
          Here's a chart containing all 46 Hiragana characters with their
          pronunciations.
        </p>
        <div className="mt-12 flex flex-col items-center">
          <HiraganaChart />
        </div>
        <div className="py-2 [&>*]:my-6">
          <div className="mr-24 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
            <PortraitIcon src="/img/student.png" />
            <p>
              But wait, <span className="font-japanese">し</span> sounds like
              'she' instead of 'see'! And what about{" "}
              <span className="font-japanese">ん？</span>
            </p>
          </div>
          <div className="ml-24 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
            <PortraitIcon src="/img/guru.png" className="float-end" />
            <p>
              Excellent observation, young apprentice. Some characters do veer{" "}
              <em>slightly</em> off the pattern, but they're nothing that you
              haven't pronounced before in English.
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-row justify-center">
          <ul
            className="h-32 flex flex-col justify-center pr-4 leading-7 pl-2 text-2xl font-bold text-center
              ![&>*]:py-0"
          >
            <li className="font-japanese">ん</li>
          </ul>
          <p>
            <span className="font-extrabold">Sensei:</span> Now, let's talk
            about one of the most distinctive Hiragana characters you'll
            encounter—"<span className="font-japanese text-xl">ん</span>" (n).
            Unlike the na-ni-nu-ne-no sounds, this "n" is added at the end of a
            syllable and is the only time a Japanese syllable ends with a
            consonant. To pronounce it, lift the back of your tongue to the roof
            of your mouth and produce a sound similar to "un."
          </p>
        </div>
        <div className="mt-4 flex flex-row justify-center">
          <ul
            className="h-14 flex flex-col justify-center pr-4 leading-7 pl-2 text-2xl font-bold text-center
              ![&>*]:py-0"
          >
            <li className="font-japanese">を</li>
          </ul>
          <p>
            <span className="font-extrabold">Sensei:</span> And lastly, we have
            "<span className="font-japanese text-xl">を</span>". This character
            is technically pronounced "wo," but you'll more often hear it
            pronounced as "o".
          </p>
        </div>
        <p>
          You've may have also noticed that not all the rows are completely
          filled. Japanese doesn't have characters for 'yi', 'ye', 'wi', etc.
          That just means fewer characters for you to memorize!
        </p>
        <p>
          <span className="font-extrabold">Student:</span> Sensei, The pattern
          seems simple, but the characters themselves are all squiggly and
          weird! And 46 of them?{" "}
          <span className="text-xl font-medium">
            How the heck am I supposed to learn these?
          </span>
        </p>
        <p>
          <span className="font-extrabold">Sensei:</span> Ah, worried wombat, do
          not be intimidated by their appearance. The ✨internet✨ holds many
          treasures to aid you in your journey. One such treasure is:
        </p>
        <h2 className="text-center text-3xl">
          <a
            className="text-sky-400 underline"
            href="https://files.tofugu.com/articles/japanese/2022-07-05-learn-hiragana-book-pdf/tofugu-learn-hiragana-book.pdf"
            target="_blank"
          >
            Tofugu's Learn Hiragana PDF
          </a>
        </h2>
        <p>
          This guide is a rarity—it's so well-made that we felt compelled to
          send you here first{" "}
          <span className="text-xs">(no need to reinvent the wheel)</span>. It
          is very effective at helping you quickly memorize every Hiragana
          character, and you can master Hiragana within days if not hours. Best
          of all, it's free for all learners—no login/signup required. Go check
          it out!
        </p>
        <p>
          <span className="font-extrabold">Student:</span> I'll definitely look
          into that. What should I do after I've explored all the characters?
        </p>
        <p>
          <span className="font-extrabold">Sensei:</span> Once you've made your
          way through all the characters,{" "}
          <span className="text-xl font-semibold">come back</span> so we can
          properly greet each other in Japanese! Remember, you don't need to
          master every hiragana character in one go, we'll provide the romaji
          (the pronunciations) with the hiragana for the remainder of this
          chapter,{" "}
          <span className="font-medium">
            but we'll be ditching them in the next one.
          </span>
        </p>
        <div className="mt-4 w-full flex justify-center">
          <PortraitIcon
            src="/img/chapter-1/shocked-child.png"
            className="border-none w-16 h-16 bg-inherit"
          />
        </div>
        <div className="!-mb-6">
          <p className="text-base">
            <span className="font-bold">A note from sensei: </span>
            <em>
              Learning Hiragana is like building the foundation of a house. It
              takes time and practice, but everything you learn after this will
              rely on this fundamental knowledge. So, take your time, practice
              regularly, and most importantly, enjoy the process, young
              grasshopper.
            </em>
          </p>
          <div className="mt-4 w-full flex justify-center">
            <PortraitIcon src="/img/guru.png" className="border-none" />
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
