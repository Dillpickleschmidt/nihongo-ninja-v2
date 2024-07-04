import CustomImage from "@/components/CustomImage"
import PortraitIcon from "@/components/PortraitIcon"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import ContentBox from "@/features/content-box/ContentBox"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-3/kanji-radicals"
    >
      <div className="flex w-full justify-center">
        <div className="mt-16 w-96">
          <AspectRatio ratio={0.69 / 1}>
            <CustomImage
              src="/img/chapter-3/kanji/kanji-inverted.png"
              alt="kanji-image"
              sizes="400px"
            />
          </AspectRatio>
        </div>
      </div>
      <h1 className="mx-24 mt-12 text-center text-5xl font-bold leading-[4.0rem]">
        A whole new world—
        <span className="text-6xl text-indigo-400">Kanji</span>
      </h1>
      <div className="space-y-9 px-12 sm:px-16 md:px-24">
        <p className="mt-6 italic text-muted-foreground">
          *Note for <strong>Nihongo Ninja</strong> learners: If you've been
          following along step-by-step, you should have already started
          practicing kanji on <strong>jpdb.io</strong>. Even if you've been
          practicing, we'd still recommend reading through this lesson to get a
          better understanding of what kanji are and how they work.
        </p>
        <div className="mr-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>
            Wise せんせい, I've been seeing these kanji characters floating
            around. They look so complicated... I'm not sure where to even
            start.
          </p>
        </div>
        <div className="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/guru.png" className="float-end" />
          <p>
            Ah, young grasshopper, Kanji hold the wisdom of ancient times,
            predating even my generation. But fear not, for I shall guide you
            through their mysteries as my elders had done for me.
          </p>
        </div>

        <h2 className="mb-4 text-center text-3xl font-bold">What are Kanji?</h2>

        <div className="!mt-6">
          <YouTubeVideo
            videoId="RKWrWRFyfYo"
            title="Japanese Kanji 101 (and How I'd Learn Kanji Starting Over)"
            credit="ToKini Andy"
          />
        </div>

        <p className="!mt-4">
          Kanji are characters that originated in China and were brought to
          Japan over 1,500 years ago. Each Kanji is a logogram, meaning it
          represents a standalone meaning, as opposed to a sound like English
          characters.
        </p>
        <div className="flex justify-center text-2xl">
          <div>
            <p>
              <span className="font-japanese text-3xl">日</span> {"->"} sun
            </p>
            <p>
              <span className="font-japanese text-3xl">木</span> {"->"} tree
            </p>
            <p>
              <span className="font-japanese text-3xl">犬</span> {"->"} dog
            </p>
          </div>
        </div>

        <p>
          <span className="font-extrabold">Student:</span> How many Kanji are
          there, great sage?
        </p>
        <p>
          <span className="font-extrabold">Sensei:</span> There are about 50,000
          kanji characters in total, but don't panic! 🥴 The Japanese government
          has designated 2,136 kanji as "commonly used" (
          <span className="font-japanese">常用漢字</span> - jōyō kanji), and
          those are 99% of what you'll see in magazines and newspapers.
        </p>

        <div>
          <h3 className="text-xl font-bold">
            Here's a breakdown of what Japanese students are expected to know:
          </h3>
          <ul className="mt-3 list-inside list-disc space-y-2">
            <li>
              <strong>Elementary school: </strong>1,026 kanji (
              <span className="font-japanese">学年別漢字配当表</span> -
              gakunen-betsu kanji haitōhyō)
            </li>
            <li>
              <strong>Secondary school: </strong>Additional kanji to reach 2,136
              jōyō kanji
            </li>
            <li>
              <strong>University entrance exams: </strong>About 2,500 kanji
            </li>
          </ul>
        </div>

        <p>
          <span className="font-extrabold">Student:</span> How were Kanji
          created?
        </p>
        <div>
          <p>
            <span className="font-extrabold">Sensei:</span> Kanji can be divided
            into four types based on their formation:
          </p>
          <ol className="ml-9 mt-3 list-decimal space-y-2">
            <li>
              <strong>Pictograms: </strong>These kanji look like what they
              represent. Example: 木 (tree), 日 (sun), 山 (mountain)
            </li>
            <li>
              <strong>Simple ideograms: </strong>Abstract concepts represented
              by simple symbols. Example: 上 (up), 下 (down), 中 (middle)
            </li>
            <li>
              <strong>Compound ideograms: </strong>Two or more kanji combined to
              create a new meaning. Example: 林 (forest) is two 木 (tree)
              characters put together.
            </li>
            <li>
              <strong>Phonetic-ideographic characters: </strong>Combines an
              element that expresses meaning and an element that represents a
              sound.
            </li>
          </ol>
        </div>

        <p>
          <span className="font-extrabold">Student:</span> How do I{" "}
          <em>read</em> them?
        </p>
        <div>
          <p>
            <span className="font-extrabold">Sensei:</span> Well, since you
            asked, there are <em>technically</em> two ways to read kanji, but
            there's also a third option that's much easier to remember:
          </p>
          <ol className="ml-9 mt-3 list-decimal space-y-2">
            <li>
              <strong>On-yomi </strong>(
              <span className="font-japanese">音読み</span>): Chinese-derived
              readings
            </li>
            <li>
              <strong>Kun-yomi </strong>(
              <span className="font-japanese">訓読み</span>): Native Japanese
              readings
            </li>
          </ol>
          <p className="mt-3">
            For example, the kanji <span className="font-japanese">山</span>{" "}
            (mountain) can be read as:
          </p>
          <ul className="ml-9 mt-3 list-disc space-y-2">
            <li>
              On-yomi: <span className="font-japanese text-xl">サン</span>{" "}
              (san), <span className="font-japanese text-xl">セン</span> (sen)
            </li>
            <li>
              Kun-yomi: <span className="font-japanese text-xl">やま</span>{" "}
              (yama)
            </li>
          </ul>
          <p className="mt-3 text-base italic text-muted-foreground">
            *There are also <strong>name</strong> readings which are unique
            readings for peoples' names.
          </p>
          <p className="mt-3">
            In many cases, a single kanji will have <strong>multiple</strong>{" "}
            on-yomi and kun-yomi readings.
          </p>
          <p className="mt-3 text-base italic">
            You will see these whenver you look up a kanji in a dictionary.
          </p>
        </div>

        <div className="mr-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>
            Let me get this straight... Not only do I have to remember{" "}
            <strong>thousands</strong> of characters, but I also have to
            remember <strong>multiple readings</strong> for each character? 😨
          </p>
        </div>
        <div>
          <h3 className="text-center text-3xl font-bold italic">No!</h3>
          <p className="mt-4">
            In fact, we recommend you{" "}
            <span className="italic underline">
              forget about the on-yomi/kun-yomi readings
            </span>
            . Instead, focus on learning <strong>vocabulary</strong> and the{" "}
            English <strong>meanings</strong> of the kanji you come across,
            exactly as you've been doing on <strong>jpdb</strong>.
          </p>
          <p className="mt-4">
            <strong>Think about it like this: </strong>In English, there are at
            least a dozen (maybe more) ways to pronounce the letter{" "}
            <span className="font-black">a</span>:
            <ul className="ml-9 mt-3 list-disc space-y-2">
              <li>A = /æ/ - Apple, Fantastic, Back, Track, Exactly</li>
              <li> A = /e/ - Any, Many, Said, Says, Thames</li>
              <li>A = /ɒ/ - What, Watch, Want, Was, Wash, Yacht</li>
              <li>A = /eɪ/ - Able, Age, Page, Paper, Day, Date, Stay</li>
              <li>A = /eə/ - Air, Share, Care, Spare, Stare, Rare</li>
            </ul>
            <p className="mt-4 text-center italic">The list goes on...</p>
            <p className="mt-2">
              But do you memorize each pronunciation of{" "}
              <span className="font-black">a</span> in isolation?{" "}
              <strong>Absolutely not.</strong> You learn the <em>vocabulary</em>{" "}
              and pick up the different pronunciations of{" "}
              <span className="font-black">a</span> as you go along. We believe
              the same goes for kanji readings. Focus on vocabulary and the
              meanings of the kanji you're learning, and you'll naturally pick
              up the readings over time.
            </p>
          </p>
        </div>
      </div>
    </ContentBox>
  )
}
