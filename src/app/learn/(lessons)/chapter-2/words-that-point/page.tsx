import ContentBox from "@/components/ContentBox"
import CustomImage from "@/components/CustomImage"
import Furigana from "@/components/text/Furigana"
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default async function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/practice/words-that-point"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Words That Point
      </h1>
      <div className="space-y-9 px-12 sm:px-16 md:px-24">
        <p>
          In Japanese, there are specific words used to point to objects. These
          words help to clarify what you are referring to and are essential for
          everyday conversations. Let's explore these demonstratives in detail
          with examples of everyday situations where each would be applicable.
        </p>

        <h2 className="text-center text-2xl font-black italic">
          Demonstratives for Objects
        </h2>
        <p>
          These group of words can stand on their own—acting as full sentences.
        </p>
        <div className="!mt-6 space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-sky-400">
              これ
            </span>{" "}
            - <span className="font-bold text-sky-400">This one</span>{" "}
            <span className="text-xl italic">
              (near the <strong>speaker</strong>)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">これはペンです。</span>
              {"->"} This is a pen.
            </li>
            <li>
              <span className="font-bold">Situation: </span>When you are holding
              a pen and showing it to someone next to you.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">これ</span> when the
              object is close to you, the speaker.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-sky-400">
              それ
            </span>{" "}
            - <span className="font-bold text-sky-400">That one</span>{" "}
            <span className="text-xl italic">
              (near the <strong>listener</strong>)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">それはペンです。</span>
              {"->"} That is a pen.
            </li>
            <li>
              <span className="font-bold">Situation: </span>When the pen is near
              the person you are speaking to.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">それ</span> when the
              object is close to the listener.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-sky-400">
              あれ
            </span>{" "}
            -{" "}
            <span className="font-bold text-sky-400">
              That one (over there)
            </span>{" "}
            <span className="text-xl italic">
              (far from both speaker and listener)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">あれはペンです。</span>
              {"->"} That (over there) is a pen.
            </li>
            <li>
              <span className="font-bold">Situation: </span>When the pen is on a
              table across the room from both you and the listener.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">あれ</span> when the
              object is far from both you and the listener.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-yellow-500">
              どれ
            </span>{" "}
            - <span className="font-bold text-yellow-500">Which one?</span>{" "}
            <span className="text-xl italic">(used for questions)</span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">どれがペンですか。</span>
              <span className="text-base text-muted-foreground">
                (more on the が particle later){" "}
              </span>
              {"->"} Which one is the pen?
            </li>
            <li>
              <span className="font-bold">Situation: </span>When there are
              several items on a table, and you want to know which one is the
              pen.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">どれ</span> to ask about
              which object among several choices.
            </li>
          </ul>
        </div>
        <p className="text-base italic">
          *Question words like{" "}
          <span className="font-japanese not-italic">どれ</span>,{" "}
          <span className="font-japanese not-italic">どの</span>, and{" "}
          <span className="font-japanese not-italic">なに</span> cannot be
          followed by the particle{" "}
          <span className="font-japanese not-italic">は</span>. Instead, they
          are followed by <span className="font-japanese not-italic">が</span>.
          We'll cover this in more detail in the next lesson.
        </p>

        <h2 className="text-center text-2xl font-black italic">
          Demonstrative Adjectives
        </h2>
        <p>
          These group of words <span className="font-bold">modify nouns</span>{" "}
          and can <span className="font-bold italic">NOT</span> stand on their
          own.
        </p>
        <div className="space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-red-500">
              この
            </span>{" "}
            - <span className="font-bold text-red-500">This...</span>{" "}
            <span className="text-xl italic">
              (adjective, used with a noun)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">
                このペンは
                <Furigana furigana={<span className="text-sm">あお</span>}>
                  青
                </Furigana>
                いです。
              </span>
              {"->"} This pen is blue.
            </li>
            <li>
              <span className="font-bold">Situation: </span>When you are holding
              a blue pen and describing it.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">この</span> to specify an
              object close to you along with its noun.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-red-500">
              その
            </span>{" "}
            - <span className="font-bold text-red-500">That...</span>{" "}
            <span className="text-xl italic">
              (adjective, used with a noun)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">
                そのペンは
                <Furigana furigana={<span className="text-sm">あお</span>}>
                  青
                </Furigana>
                いです。
              </span>
              {"->"} That pen is blue.
            </li>
            <li>
              <span className="font-bold">Situation: </span>When the blue pen is
              near the listener, and you are describing it.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">その</span> to specify an
              object close to the listener along with its noun.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-red-500">
              あの
            </span>{" "}
            -{" "}
            <span className="font-bold text-red-500">That... (over there)</span>{" "}
            <span className="text-xl italic">
              (adjective, used with a noun)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">
                あのペンは
                <Furigana furigana={<span className="text-sm">あお</span>}>
                  青
                </Furigana>
                いです。
              </span>
              {"->"} That pen (over there) is blue.
            </li>
            <li>
              <span className="font-bold">Situation: </span>When the blue pen is
              across the room from both you and the listener.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">あの</span> to specify an
              object far from both you and the listener along with its noun.
            </li>
          </ul>
        </div>

        <div className="space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-yellow-500">
              どの
            </span>{" "}
            - <span className="font-bold text-yellow-500">Which...</span>{" "}
            <span className="text-xl italic">
              (adjective, used with a noun, for questions)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">
                どのペンが
                <Furigana furigana={<span className="text-sm">あお</span>}>
                  青
                </Furigana>
                いですか。
              </span>
              {"->"} Which pen is blue?
            </li>
            <li>
              <span className="font-bold">Situation: </span>When there are
              several pens, and you want to know which one is blue.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">どの</span> to ask about
              which specific object among several choices.
            </li>
          </ul>
        </div>

        <p className="text-center text-base italic">
          **Just a reminder that Japanese doesn't destinguish singular from
          plural!**
        </p>

        <div>
          <h2 className="text-2xl font-bold">Recap:</h2>
          <p className="mt-2">
            Use <span className="font-japanese text-xl font-medium">これ</span>,{" "}
            <span className="font-japanese text-xl font-medium">それ</span>,{" "}
            <span className="font-japanese text-xl font-medium">あれ</span>, and{" "}
            <span className="font-japanese text-xl font-medium">どれ</span> for
            standalone topics/subjects and{" "}
            <span className="font-japanese text-xl font-medium">この</span>,{" "}
            <span className="font-japanese text-xl font-medium">その</span>,{" "}
            <span className="font-japanese text-xl font-medium">あの</span>, and{" "}
            <span className="font-japanese text-xl font-medium">どの</span> for
            modifying nouns.
          </p>
        </div>
        <div className="flex justify-evenly font-japanese text-2xl font-medium">
          <div>
            <p>
              <span className="line-through">
                こ<span className="text-red-500">の</span>！
              </span>{" "}
            </p>
            <p>
              <span className="line-through">
                こ<span className="text-red-500">れ</span>ぺん
              </span>{" "}
            </p>
          </div>
          <div>
            <p>
              こ<span className="text-green-500">の</span>ペン{" "}
            </p>
            <p>
              こ<span className="text-green-500">れ</span>！{" "}
            </p>
          </div>
        </div>

        <div className="mx-6">
          <AspectRatio ratio={1.096 / 1}>
            <CustomImage
              src="/img/chapter-2/words-that-point-1/spiderman-words-that-point.jpg"
              alt="spiderman-pointing-meme"
            />
          </AspectRatio>
        </div>

        <h2 className="text-center text-2xl font-black italic">
          Demonstratives for Locations
        </h2>
        <div className="!mt-6 space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-orange-400">
              ここ
            </span>{" "}
            - <span className="font-bold text-orange-400">Here</span>{" "}
            <span className="text-xl italic">
              (near the <strong>speaker</strong>)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">
                ここはオフィスです。
              </span>
              {"->"} Here is the office.
            </li>
            <li>
              <span className="font-bold">Situation: </span>When you are inside
              the office.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">ここ</span> to indicate a
              place close to you, the speaker.
            </li>
          </ul>
        </div>

        <div className="!mt-6 space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-orange-400">
              そこ
            </span>{" "}
            - <span className="font-bold text-orange-400">There</span>{" "}
            <span className="text-xl italic">
              (near the <strong>listener</strong>)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">
                そこはオフィスです。
              </span>
              {"->"} There is the office.
            </li>
            <li>
              <span className="font-bold">Situation: </span>When the office is
              near the listener.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">そこ</span> to indicate a
              place close to the listener.
            </li>
          </ul>
        </div>

        <div className="!mt-6 space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-orange-400">
              あそこ
            </span>{" "}
            - <span className="font-bold text-orange-400">Over there</span>{" "}
            <span className="text-xl italic">
              (far from both speaker and listener)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">
                あそこはオフィスです。
              </span>
              {"->"} Over there is the office.
            </li>
            <li>
              <span className="font-bold">Situation: </span>When the office is
              far from both you and the listener.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">あそこ</span> to indicate
              a place far from both you and the listener.
            </li>
          </ul>
        </div>

        <div className="!mt-6 space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-yellow-500">
              どこ
            </span>{" "}
            - <span className="font-bold text-yellow-500">Where</span>{" "}
            <span className="text-xl italic">(used for questions)</span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">
                オフィスはどこですか。
              </span>
              {"->"} Where is the office?
            </li>
            <li>
              <span className="font-bold">Situation: </span>When you want to
              know the location of the classroom.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">どこ</span> to ask about
              the location of a place.
            </li>
          </ul>
        </div>

        <h2 className="text-center text-2xl font-black italic">
          Demonstratives for People and Directions
        </h2>

        <div className="!mt-6 space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-green-400">
              こちら
            </span>{" "}
            - <span className="font-bold text-green-400">This way/person</span>{" "}
            <span className="text-xl italic">
              (near the <strong>speaker</strong>)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">
                こちらは田中さんです。
              </span>
              {"->"} This is Mr. Tanaka.
            </li>
            <li>
              <span className="font-bold">Situation: </span>When introducing Mr.
              Tanaka who is near you.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">こちら</span> for polite
              introductions or indicating direction close to you.
            </li>
          </ul>
        </div>

        <div className="!mt-6 space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-green-400">
              そちら
            </span>{" "}
            - <span className="font-bold text-green-400">That way/person</span>{" "}
            <span className="text-xl italic">
              (near the <strong>listener</strong>)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">
                そちらは山田さんですか。
              </span>
              {"->"} Is that Mr. Yamada?
            </li>
            <li>
              <span className="font-bold">Situation: </span>When asking about
              Mr. Yamada who is near the listener.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">そちら</span> for polite
              introductions or indicating direction close to the listener.
            </li>
          </ul>
        </div>

        <div className="!mt-6 space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-green-400">
              あちら
            </span>{" "}
            -{" "}
            <span className="font-bold text-green-400">
              That way/person over there
            </span>{" "}
            <span className="text-xl italic">
              (far from both <strong>speaker</strong> and{" "}
              <strong>listener</strong>)
            </span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">
                あちらは
                <Furigana furigana={<span className="text-sm">ぶちょう</span>}>
                  部長
                </Furigana>
                です。
              </span>
              {"->"} That is the department manager over there.
            </li>
            <li>
              <span className="font-bold">Situation: </span>When referring to
              someone or something far from both you and the listener.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">あちら</span> for polite
              introductions or indicating direction far from both the speaker
              and the listener.
            </li>
          </ul>
        </div>

        <div className="!mt-6 space-y-3">
          <h3 className="text-2xl">
            <span className="font-japanese text-3xl font-semibold text-yellow-500">
              どちら
            </span>{" "}
            -{" "}
            <span className="font-bold text-yellow-500">Which way/person</span>{" "}
            <span className="text-xl italic">(used for questions)</span>
          </h3>
          <ul className="list-inside list-disc space-y-3">
            <li>
              <span className="font-bold">Example: </span>
              <span className="font-japanese text-xl">
                どちら
                <Furigana furigana={<span className="text-sm">さま</span>}>
                  様
                </Furigana>
                ですか。
              </span>
              {"->"} Who are you? (very polite)
            </li>
            <li>
              <span className="font-bold">Situation: </span>When asking politely
              about someone's identity or direction.
            </li>
            <li>
              <span className="font-bold">Explanation: </span>Use{" "}
              <span className="font-japanese text-xl">どちら</span> for polite
              questions about people or directions.
            </li>
          </ul>
        </div>

        <p>
          <span className="font-bold italic">Don't worry</span> if you think
          you'll struggle differentiating these words. You'll get plenty of
          practice as you continue learning new material.
        </p>
      </div>
    </ContentBox>
  )
}
