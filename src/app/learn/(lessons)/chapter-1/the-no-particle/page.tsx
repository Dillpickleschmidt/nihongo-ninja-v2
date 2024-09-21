import ContentBox from "@/features/content-box/ContentBox"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import { Input } from "@/components/ui/input"
import YouTubeVideo from "@/features/youtube/YouTube"

export default async function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/worksheet-1"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Mastering the <span className="font-japanese text-orange-500">の</span>{" "}
        Particle in Japanese
      </h1>
      <div className="space-y-3 px-16 md:px-24">
        <p>
          Today, we're gonna make our first step towards making longer and more
          complex sentences. Say hello to{" "}
          <span className="font-japanese text-xl font-bold">の</span>
          <span className="text-muted-foreground">(no)</span>—the particle which
          connects nouns.
        </p>
        <h2 className="py-3 text-center text-2xl font-bold">
          The Basics: Possession with{" "}
          <span className="font-japanese text-[1.6rem] text-orange-500">
            の
          </span>
        </h2>
        <p>
          The <span className="font-japanese">の</span> particle is used to
          connect two nouns, indicating possession or a close relationship. It's
          similar to the apostrophe-s ('s) in English.
        </p>
        <p>
          Example: <br />
          <span className="font-japanese">
            たけしさん<span className="text-orange-500">の</span>
          </span>
          <Furigana furigana={<span className="text-sm">でんわばんごう</span>}>
            電話番号
          </Furigana>{" "}
          (Takeshi-san no denwa bangou) <br />
          <span className="font-bold">Takeshi's phone number</span>
        </p>
        <p>Here's the structure:</p>
        <h3 className="py-3 text-center text-[1.75rem] font-medium">
          [Noun 1] +{" "}
          <span className="font-japanese text-[2rem] text-orange-500">の</span>{" "}
          + [Noun 2]
        </h3>
        <small>*Noun 1 is the owner, and Noun 2 is the posessive</small>
        <p>More Examples:</p>
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">
              わたしの{" "}
              <Furigana furigana={<span className="text-sm">ほん</span>}>
                本
              </Furigana>
            </span>{" "}
            - <span className="font-bold">My book</span>
          </li>
          <li>
            <span className="font-japanese text-xl">
              せんせいの{" "}
              <Furigana furigana={<span className="text-sm">くるま</span>}>
                車
              </Furigana>
            </span>{" "}
            - <span className="font-bold">Teacher's car</span>
          </li>
          <li>
            <span className="font-japanese text-xl">
              ともだちの{" "}
              <Furigana furigana={<span className="text-sm">とけい</span>}>
                時計
              </Furigana>
            </span>{" "}
            - <span className="font-bold">Friend's watch</span>
          </li>
        </ul>
        <h2 className="pb-3 pt-6 text-center text-2xl font-bold">
          More Practical Examples
        </h2>
        <p>
          Since you've recently learned family terms, countries, majors, and
          occupations, let's use these topics for more examples.
        </p>
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">
              <Furigana furigana={<span className="text-sm">さとう</span>}>
                佐藤
              </Furigana>
              さんのおかあさん -{" "}
            </span>
            <span className="font-bold">Satou's mother</span>
          </li>
          <li>
            <span className="font-japanese text-xl">
              おとうさんの
              <Furigana furigana={<span className="text-sm">くるま</span>}>
                車
              </Furigana>
            </span>{" "}
            - <span className="font-bold">Father's car</span>
          </li>
          <li>
            <span className="font-japanese text-xl">おかあさんのせんこう</span>{" "}
            - <span className="font-bold">Mother's major</span>
          </li>
          <li>
            <span className="font-japanese text-xl">
              おにいさんの
              <Furigana
                furigana={<span className="text-sm">こんぴゅーたー</span>}
              >
                コンピューター
              </Furigana>
            </span>{" "}
            - <span className="font-bold">Older brother's computer</span>
          </li>
          <li>
            <span className="font-japanese text-xl">
              いもうとの{" "}
              <Furigana furigana={<span className="text-sm">ほん</span>}>
                本
              </Furigana>
            </span>{" "}
            - <span className="font-bold">Younger sister's book</span>
          </li>
          <li>
            <span className="font-japanese text-xl">
              ともだちの
              <Furigana furigana={<span className="text-sm">けいたい</span>}>
                携帯
              </Furigana>
            </span>{" "}
            - <span className="font-bold">Friend's cellphone</span>
          </li>
        </ul>
        <p className="pb-2 pt-6 font-bold">
          You can connect more than just two nouns in a single sentence:
        </p>
        <ul className="ml-4 list-inside list-disc space-y-2">
          <li>
            <span className="font-japanese text-xl">
              <Furigana furigana={<span className="text-sm">あめりか</span>}>
                アメリカ
              </Furigana>
              <span className="text-orange-500">の</span>ともだち
              <span className="text-orange-500">の</span>
              <Furigana furigana={<span className="text-sm">かめら</span>}>
                カメラ
              </Furigana>
            </span>{" "}
            - <span className="font-bold">American friend's camera</span>
          </li>
          <li>
            <span className="font-japanese text-xl">
              <Furigana furigana={<span className="text-sm">にほんご</span>}>
                日本語
              </Furigana>
              <span className="text-orange-500">の</span>{" "}
              <Furigana furigana={<span className="text-sm">せんせい</span>}>
                先生
              </Furigana>
            </span>{" "}
            <span className="font-japanese text-xl">
              <span className="text-orange-500">の</span>
              <Furigana furigana={<span className="text-sm">とけい</span>}>
                時計
              </Furigana>
            </span>{" "}
            - <span className="font-bold">Japanese teacher's watch</span>
          </li>
          <li>
            <span className="font-japanese text-xl">
              <Furigana furigana={<span className="text-sm">ふらんす</span>}>
                フランス
              </Furigana>
              <span className="text-orange-500">の</span>
              <Furigana furigana={<span className="text-sm">がくせい</span>}>
                学生
              </Furigana>
              <span className="text-orange-500">の</span>
              <Furigana furigana={<span className="text-sm">のーと</span>}>
                ノート
              </Furigana>
            </span>{" "}
            - <span className="font-bold">French student's notebook</span>
          </li>
        </ul>
        <p className="pt-6">And that's it!</p>
        <p>
          In the future, you'll encounter a couple more uses for the{" "}
          <span className="font-japanese text-xl">の</span> particle, but you
          can worry about them once you reach the later chapters. For now, try
          to link nouns together to show possession.
        </p>
        <h2 className="pb-3 pt-6 text-center text-2xl font-bold">
          Activity: Who Owns What?
        </h2>
        <p>
          Let's play a quick game to reinforce what we've learned. Connect the
          following pictures using the{" "}
          <span className="font-japanese text-xl">の</span> particle.
        </p>
        <h3 className="pt-6 text-center font-japanese text-2xl font-medium">
          <Romaji
            romaji={
              <span className="font-inter text-muted-foreground">Who</span>
            }
          >
            <Furigana furigana={<span className="text-base">だれ</span>}>
              誰
            </Furigana>
          </Romaji>
          の
          <Furigana furigana={<span className="text-base">ほん</span>}>
            本
          </Furigana>
          ですか。
        </h3>
        <div className="flex items-center justify-center pb-6">
          <div className="h-48 w-48 rounded-md bg-card"></div>
          <div className="mx-12 text-4xl">+</div>
          <div className="h-48 w-48 rounded-md bg-card"></div>
        </div>
        <div className="flex justify-center pb-6">
          <div>
            <Input placeholder="" className="bg-card text-lg" />
          </div>
        </div>

        <h3 className="pt-6 text-center font-japanese text-2xl font-medium">
          <Furigana furigana={<span className="text-base">だれ</span>}>
            誰
          </Furigana>
          の
          <Furigana
            furigana={<span className="text-base">こんぴゅーたー</span>}
          >
            コンピューター
          </Furigana>
          ですか。
        </h3>
        <div className="flex items-center justify-center pb-6 pt-3">
          <div className="h-48 w-48 rounded-md bg-card"></div>
          <div className="mx-12 text-4xl">+</div>
          <div className="h-48 w-48 rounded-md bg-card"></div>
        </div>
        <div className="flex justify-center pb-6">
          <div>
            <Input placeholder="" className="bg-card text-lg" />
          </div>
        </div>

        <h2 className="pb-3 pt-6 text-2xl font-bold">Summary</h2>
        <p>
          By now, you should feel more comfortable using{" "}
          <span className="font-japanese">の</span> to show possession and make
          your sentences richer in detail. If not, don't worry because you'll
          practice creating more sentences in the next lesson.
        </p>
      </div>
    </ContentBox>
  )
}
