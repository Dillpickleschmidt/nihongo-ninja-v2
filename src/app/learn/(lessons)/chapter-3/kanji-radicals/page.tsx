import Romaji from "@/components/text/Romaji"
import ContentBox from "@/features/content-box/ContentBox"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/janai"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Breaking Down Kanji
      </h1>
      <div className="space-y-6 px-12 sm:px-16 md:px-24">
        <p>
          2,136 kanji is a <strong>lot</strong> better than 50,000 kanji. But
          what if I told you we can do better? How about:
        </p>
        <h2 className="!mt-3 text-center text-3xl font-bold">443 Kanji</h2>
        <p className="font-bold">Seems impossible? Well, read on.</p>

        <div>
          <YouTubeVideo
            videoId="DRbVBwzc6Ww"
            title="The Anatomy of a Japanese Kanji"
            credit="ToKini Andy"
          />
        </div>

        <h2 className="text-center text-3xl font-bold">Kanji Radicals</h2>

        <p>
          Kanji radicals are the building blocks of kanji characters. Think of
          them as the roots or foundational elements that provide meaning and
          structure to kanji. Each kanji is made up of one or more radicals, and
          each radical can give us clues about the kanji's meaning and
          pronunciation.
        </p>

        <div>
          <p className="font-bold">1. Semantic Clues</p>
          <ul className="ml-9 mt-3 list-disc space-y-2">
            <li>
              Radicals often indicate the general meaning of a kanji. For
              example, the radical{" "}
              <span className="font-japanese text-xl">水</span> means{" "}
              <strong>water</strong> and appears in kanji related to liquids,
              like <span className="font-japanese text-xl">泉</span> meaning{" "}
              <strong>spring</strong> or <strong>fountain</strong>.
            </li>
          </ul>
        </div>
        <div>
          <p className="font-bold">2. Structural Understanding</p>
          <ul className="ml-9 mt-3 list-disc space-y-2">
            <li>
              Knowing radicals helps break down complex kanji into manageable
              parts. This makes it easier to memorize and write kanji correctly.
              For example, the kanji{" "}
              <span className="font-japanese text-xl">働</span> meaning{" "}
              <strong>work</strong> can be broken down into the radicals{" "}
              <span className="font-japanese text-xl">亻</span> meaning{" "}
              <strong>person</strong> and{" "}
              <span className="font-japanese text-xl">動</span> meaning{" "}
              <strong>move</strong>.
            </li>
          </ul>
          <div className="mt-4 flex justify-center text-4xl">
            <div className="flex">
              <div className="text-center">
                <Romaji romaji="person">亻</Romaji>
              </div>
              <div className="mx-4">+</div>
              <div className="text-center">
                <Romaji romaji="move">動</Romaji>
              </div>
              <div className="mx-4">{"->"}</div>
              <div className="text-center">
                <Romaji romaji="work">働</Romaji>
              </div>
            </div>
          </div>
          {/* <p className="mt-2 text-base italic text-muted-foreground">
            *Remember that the kanji for person (人) is one of the few
            kanji/radicals that can look very different depending on the font
            and usage.
          </p> */}
          <p className="mt-2 text-base italic text-muted-foreground">
            *<span className="font-japanese text-lg not-italic">動</span> (move){" "}
            is not a radical, but it is a kanji that can be broken down into
            other radicals.
          </p>
        </div>

        <p>
          By learning radicals, you can make educated guesses about unfamiliar
          kanji, making the learning process more efficient.
        </p>

        <div>
          <h3 className="text-xl font-bold">Types of Kanji Radicals</h3>
          <p className="mt-3">
            Kanji radicals are categorized based on their position within a
            kanji:
          </p>
        </div>

        <ol className="ml-6 mt-3 list-decimal space-y-2 font-semibold">
          <li>
            Left-hand Radicals - Hen (
            <span className="font-japanese text-xl font-light">編</span>)
            <ul className="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals positioned on the left side of a kanji.</li>
              <li>
                <span className="text-base font-semibold">Example: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  亻
                </span>{" "}
                - person,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  扌
                </span>{" "}
                - left-hand
              </li>
              <li>
                <span className="text-base font-semibold">Appear in: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  何
                </span>{" "}
                - what,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  指
                </span>{" "}
                - finger
              </li>
            </ul>
          </li>
          <li>
            Right-hand Radicals - Tsukuri (
            <span className="font-japanese text-xl font-light">旁</span>)
            <ul className="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals found on the right side of a kanji.</li>
              <li>
                <span className="text-base font-semibold">Example: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  刂
                </span>{" "}
                - knife,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  ⻏
                </span>{" "}
                - small village
              </li>
              <li>
                <span className="text-base font-semibold">Appear in: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  別
                </span>{" "}
                - separate,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  都
                </span>{" "}
                - metropolis
              </li>
            </ul>
          </li>
          <li>
            Crown Radicals - Kanmuri (
            <span className="font-japanese text-xl font-light">冠</span>)
            <ul className="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals placed on top of kanji.</li>
              <li>
                <span className="text-base font-semibold">Example: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  宀
                </span>{" "}
                - roof with a chimney,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  ⺌
                </span>{" "}
                - rays of light
              </li>
              <li>
                <span className="text-base font-semibold">Appear in: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  家
                </span>{" "}
                - house,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  堂
                </span>{" "}
                - assembly hall
              </li>
            </ul>
          </li>
          <li>
            Legs or Feet Radicals - Ashi (
            <span className="font-japanese text-xl font-light">脚</span>)
            <ul className="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals situated at the bottom of kanji.</li>
              <li>
                <span className="text-base font-semibold">Example: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  儿
                </span>{" "}
                - legs,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  灬
                </span>{" "}
                - fire sparks
              </li>
              <li>
                <span className="text-base font-semibold">Appear in: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  兄
                </span>{" "}
                - older brother,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  黒
                </span>{" "}
                - black
              </li>
            </ul>
          </li>
          <li>
            Enclosure Radicals - Kamae (
            <span className="font-japanese text-xl font-light">編</span>)
            <ul className="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals that enclose kanji on at least two sides.</li>
              <li>
                <span className="text-base font-semibold">Example: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  門
                </span>{" "}
                - gate,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  冂
                </span>{" "}
                - upside-down box
              </li>
              <li>
                <span className="text-base font-semibold">Appear in: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  聞
                </span>{" "}
                - hear,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  高
                </span>{" "}
                - tall, high, expensive
              </li>
            </ul>
          </li>
          <li>
            Hang-off Radicals - Tare (
            <span className="font-japanese text-xl font-light">垂れ</span>)
            <ul className="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals that hang over the top and left side of kanji.</li>
              <li>
                <span className="text-base font-semibold">Example: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  广
                </span>{" "}
                - house on a cliff,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  尸
                </span>{" "}
                - corpse with a flag
              </li>
              <li>
                <span className="text-base font-semibold">Appear in: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  度
                </span>{" "}
                - degrees,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  屋
                </span>{" "}
                - roof
              </li>
            </ul>
          </li>
          <li>
            Left-to-Bottom Enclosure Radicals: - Nyou (
            <span className="font-japanese text-xl font-light">繞</span>)
            <ul className="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>Radicals that wrap around the left and bottom of kanji.</li>
              <li>
                <span className="text-base font-semibold">Example: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  ⻌
                </span>{" "}
                - road,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  龰
                </span>{" "}
                - running shoes
              </li>
              <li>
                <span className="text-base font-semibold">Appear in: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  運
                </span>{" "}
                - carry,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  足
                </span>{" "}
                - foot
              </li>
            </ul>
          </li>
          <li>
            Whole Kanji Radicals:
            <ul className="ml-9 mt-3 list-disc space-y-1 font-normal">
              <li>
                Entire kanji that <strong>also</strong> serve as radicals{" "}
                <span className="text-base">
                  (the majority fall into this category)
                </span>
                . These can be located anywhere within a kanji.
              </li>
              <li>
                <span className="text-base font-semibold">Example: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  大
                </span>{" "}
                - large, big, great, etc...{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  木
                </span>{" "}
                - tree, shrub, timber, etc...
              </li>
              <li>
                <span className="text-base font-semibold">Appear in: </span>
                <span className="ml-2 font-japanese text-2xl font-medium">
                  太
                </span>{" "}
                - plump,{" "}
                <span className="ml-2 font-japanese text-2xl font-medium">
                  森
                </span>{" "}
                - forest
              </li>
            </ul>
          </li>
        </ol>

        <p className="text-base italic text-muted-foreground">
          *There's no need to memorize the positions, they're just nice to know
          for general reference purposes.
        </p>

        <p>
          There are 214 <strong>official</strong> radicals, and James Heisig{" "}
          <span className="text-base text-muted-foreground">
            (author of the book <em>Remembering The Kanji</em>)
          </span>{" "}
          popularized the use of 229 additional <strong>unoffical</strong>{" "}
          radicals he calls <em>primitives</em>, totaling 443 essential kanji
          parts you'll need to know to put together almost any kanji word.
        </p>

        <p className="text-base italic text-muted-foreground">
          *You'll encounter both the official and RTK radicals in{" "}
          <strong>jpdb.io</strong>, with some added tweaks that further improve
          RTK's primatives.
        </p>

        <p>
          So yeah, technically, there's still over 2,000 kanji to learn if you
          want to match Japanese adults. But after learning these 443 radicals,
          the remaining kanji will come <strong>much</strong> more easily.
        </p>
      </div>
    </ContentBox>
  )
}
