import ContentBox from "@/features/content-box/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import CustomImage from "@/components/CustomImage"
import Romaji from "@/components/text/Romaji"

export default function JapaneseWordOrderLesson() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-3/next-lesson"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        The Flexibility of Japanese Word Order
      </h1>
      <div className="space-y-6 px-12 sm:px-16 md:px-24">
        <p>
          One of the most fascinating aspects of Japanese is its flexible word
          order. Unlike English, where the order of words is crucial for
          conveying meaning, Japanese allows for much more freedom in how you
          arrange your sentence. This flexibility can be both liberating and
          confusing for learners. Let's dive into how Japanese word order works
          and how you can use it effectively.
        </p>

        {/* <YouTubeVideo
          videoId="VIDEO_ID_HERE"
          title="Japanese Basic Sentence Structure"
          credit="Japanese Ammo with Misa"
        /> */}

        <h2 className="text-2xl font-bold">The Basics</h2>
        <p>
          In Japanese, the only strict rule about word order is that the verb
          typically comes at the end of the sentence. Beyond that, you have a
          lot of freedom in how you arrange the other elements. This is of
          course is made possible by particles, those small but mighty
          grammatical markers that show the function of each word in the
          sentence.
        </p>

        <h2 className="text-2xl font-bold">Topic-Comment Structure</h2>
        <YouTubeVideo
          videoId="U2q5GsB0swQ"
          title="Basic Sentence Structure in Japanese"
          credit="Kaname Naito"
        />
        <p>
          Japanese sentences often follow a topic-comment structure. This means
          you introduce what you're talking about (the topic), and then provide
          information about it (the comment).
        </p>
        <p className="text-center font-japanese text-2xl">
          コーヒーはおいしいです。
        </p>
        <p className="!mt-3 text-center">(As for coffee, it's delicious.)</p>
        <p>
          In this sentence, <span className="font-bold italic">coffee</span> is
          the topic, and{" "}
          <span className="font-bold italic">it's delicious</span> is the
          comment.
        </p>

        <h2 className="text-2xl font-bold">Word Order Patterns</h2>
        <p>
          While word order is flexible, some patterns are more common and
          natural-sounding than others. Here are a few general guidelines:
        </p>
        <ol className="list-decimal space-y-4 pl-6">
          <li>
            <span className="font-semibold">Topic</span> (+
            <span className="font-japanese">は</span>) often comes{" "}
            <strong>first</strong>.
          </li>
          <li>
            <span className="font-semibold">Time expressions</span> often come{" "}
            <strong>early</strong> in the sentence.
          </li>
          <li>
            <span className="font-semibold">Place expressions</span>{" "}
            <strong>often follow</strong> time expressions.
          </li>
          <li>
            <span className="font-semibold">The object</span> (+
            <span className="font-japanese">を</span>) usually comes{" "}
            <span className="font-semibold">before the verb</span>
          </li>
          <li>
            <span className="font-semibold">The verb</span> always comes{" "}
            <strong>last</strong>.
          </li>
        </ol>

        <h3 className="text-xl font-semibold">Example:</h3>
        <p className="font-japanese text-xl">
          私は明日東京でラーメンを食べます。
        </p>
        <p className="!mt-2">(I will eat ramen in Tokyo tomorrow.)</p>

        <p>You could rearrange this to:</p>
        <p className="font-japanese text-xl">
          昨日明日で私はラーメンを食べます。
        </p>
        <p className="!mt-2">(Tomorrow in Tokyo, I will eat ramen.)</p>

        <p>
          Both are grammatically correct, but the emphasis changes slightly.
        </p>

        <h2 className="text-2xl font-bold">Emphasis and New Information</h2>
        <p>
          In Japanese, important or new information tends to be placed closer to
          the end of the sentence, just before the verb. This is different from
          English, where we often emphasize important information by putting it
          at the beginning of a sentence.
        </p>

        <h2 className="text-2xl font-bold">Omission</h2>
        <div>
          <p>
            In conversational Japanese, it's common to omit parts of the
            sentence that are clear from context. This includes subjects,
            objects, and even particles sometimes. For example, instead of
            saying:
          </p>
          <p className="mt-2">
            <span className="font-japanese text-xl">
              私はコーヒーが
              <Furigana furigana={<span className="text-sm">す</span>}>
                好
              </Furigana>
              きです
            </span>
            <span className="text-base">(I like coffee)</span>, you might simply
            say
          </p>
          <p className="mt-2">
            <span className="font-japanese text-xl">コーヒーが好きです</span>{" "}
            <span className="text-base">([I] like coffee)</span>.
          </p>
        </div>

        <h2 className="!mt-12 text-center text-3xl font-bold">Practice</h2>
        <p>Try rearranging these sentences to create different nuances:</p>
        <ol className="list-decimal pl-6">
          <li>
            <p className="font-japanese text-xl">私は毎朝図書館で読みます。</p>
            <p>(I read at the library every morning.)</p>
          </li>
          <li>
            <p className="font-japanese text-xl">
              田中さんは
              <span className="text-center">
                <Romaji romaji="every week">
                  毎
                  <Furigana furigana={<span className="text-sm">しゅう</span>}>
                    週
                  </Furigana>
                </Romaji>
              </span>
              日曜日の
              <Furigana furigana={<span className="text-sm">よる</span>}>
                夜
              </Furigana>
              にアメリカンアイドルを見ます。
            </p>
            <p>(Mr. Tanaka watches American Idol every Sunday evening.)</p>
          </li>
        </ol>
        <p>
          Remember, while these rearrangements are grammatically correct, some
          might sound more natural than others to native speakers.
        </p>

        <YouTubeVideo
          videoId="ed4rmIY4mL0"
          title="【N5】Genki 1 Lesson 3 Grammar Made Clear | ます CONJUGATION SIMPLIFIED"
          credit="ToKini Andy"
          startTime={3091}
          timestamps={[
            { label: "Word Order", time: 3091 },
            { label: "More about は", time: 3360 },
          ]}
        />

        <h2 className="text-2xl font-bold">Conclusion</h2>
        <p>
          Japanese word order flexibility allows for nuanced expression, but it
          can take time to develop an ear for what sounds most natural. Keep
          practicing, listening to native speakers, and don't be afraid to
          experiment with word order in your own Japanese sentences!
        </p>

        <p className="text-base italic">
          If you want to <strong>deeply</strong> delve into Japanese word order,{" "}
          <a
            href="https://8020japanese.com/japanese-word-order/?utm_source=ms_wordorder&utm_medium=email&utm_campaign=making_sense_of_japanese_word_order&utm_term="
            className="font-bold text-sky-400 underline"
          >
            this article
          </a>{" "}
          will likely satisfy your curiosity.
        </p>
      </div>
    </ContentBox>
  )
}
