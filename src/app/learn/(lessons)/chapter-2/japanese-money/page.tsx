import ContentBox from "@/components/ContentBox"
import CustomImage from "@/components/CustomImage"
import Furigana from "@/components/text/Furigana"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import YouTubeVideo from "@/features/youtube/YouTube"

export default async function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/practice-money"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-5xl font-semibold">
        Japanese Money
      </h1>
      <div className="space-y-9 px-12 sm:px-16 md:px-24">
        <h2 className="!mt-6 text-center text-3xl font-bold">
          Introduction to Japanese Currency
        </h2>
        <div>
          <YouTubeVideo
            videoId="Qpp-q_LIPK0"
            title="Japan - How to #17 - Japanese Money"
            credit="TheJapanChannelDcom"
          />
        </div>
        <p className="!mt-3">
          In Japan, the currency used is the Japanese <strong>Yen</strong>{" "}
          <span className="text-base text-muted-foreground">
            (pronounced <strong>En</strong> in Japanese)
          </span>
          , abbreviated as <strong>¥</strong> or sometimes <strong>JPY</strong>.
          The symbol <span className="font-japanese font-semibold">円</span> (
          <span className="font-japanese">えん</span>) is also commonly used.
        </p>

        {/* Coins */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <div className="w-full max-w-40">
              <AspectRatio ratio={1 / 1}>
                <CustomImage
                  src="/img/chapter-2/japanese-money/1-yen-coin.png"
                  alt="One-yen-coin"
                />
              </AspectRatio>
            </div>
            <p className="mt-3 text-xl font-bold">¥1</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-40">
              <AspectRatio ratio={1 / 1}>
                <CustomImage
                  src="/img/chapter-2/japanese-money/5-yen-coin.png"
                  alt="One-yen-coin"
                />
              </AspectRatio>
            </div>
            <p className="mt-3 text-xl font-bold">¥5</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-40">
              <AspectRatio ratio={1 / 1}>
                <CustomImage
                  src="/img/chapter-2/japanese-money/10-yen-coin.png"
                  alt="One-yen-coin"
                />
              </AspectRatio>
            </div>
            <p className="mt-3 text-xl font-bold">¥10</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-40">
              <AspectRatio ratio={1 / 1}>
                <CustomImage
                  src="/img/chapter-2/japanese-money/50-yen-coin.png"
                  alt="One-yen-coin"
                />
              </AspectRatio>
            </div>
            <p className="mt-3 text-xl font-bold">¥50</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-40">
              <AspectRatio ratio={1 / 1}>
                <CustomImage
                  src="/img/chapter-2/japanese-money/100-yen-coin.png"
                  alt="One-yen-coin"
                />
              </AspectRatio>
            </div>
            <p className="mt-3 text-xl font-bold">¥100</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-full max-w-40">
              <AspectRatio ratio={1 / 1}>
                <CustomImage
                  src="/img/chapter-2/japanese-money/500-yen-coin.png"
                  alt="One-yen-coin"
                />
              </AspectRatio>
            </div>
            <p className="mt-3 text-xl font-bold">¥500</p>
          </div>
        </div>

        {/* Bills */}
        <div className="mx-3 flex flex-col items-center space-y-3 lg:mx-16">
          <div className="!mt-6 w-full">
            <AspectRatio ratio={2.13 / 1}>
              <CustomImage
                src="/img/chapter-2/japanese-money/one-thousand-japanese-yen.jpg"
                alt="One-thousand-japanese-yen"
                className="overflow-hidden rounded-lg"
              />
            </AspectRatio>
          </div>

          <div className="!mt-12 w-full">
            <AspectRatio ratio={2.13 / 1}>
              <CustomImage
                src="/img/chapter-2/japanese-money/five-thousand-japanese-yen.jpg"
                alt="Five-thousand-japanese-yen"
                className="overflow-hidden rounded-lg"
              />
            </AspectRatio>
          </div>

          <div className="!mt-12 w-full">
            <AspectRatio ratio={2.13 / 1}>
              <CustomImage
                src="/img/chapter-2/japanese-money/ten-thousand-japanese-yen.jpg"
                alt="Ten-thousand-japanese-yen"
                className="overflow-hidden rounded-lg"
              />
            </AspectRatio>
          </div>
        </div>

        <div>
          <p>
            When writing prices, Japanese people tend to use either the{" "}
            <span className="font-japanese font-semibold">¥</span> (placed in
            front), or <span className="font-japanese font-semibold">円</span>{" "}
            (placed at the end). When spoken, however, they always use{" "}
            <span className="font-semibold">
              <Furigana furigana={<span className="text-sm">えん</span>}>
                円
              </Furigana>
            </span>
            , similar to how we say [price] followed by the word{" "}
            <strong>dollars</strong> or <strong>cents</strong> in the United
            States.
          </p>
          <p className="mt-6">
            While they often use double-width characters in writing, they more
            frequently use the single-width characters for prices, though it
            varies ([０] vs. [0]).
          </p>
          <div className="mt-3 flex justify-center text-xl">
            <ul className="list-disc space-y-2">
              <li>¥1,000</li>
              <li>1000円</li>
            </ul>
          </div>
          <p className="mt-3">
            In Japan, kanji numbers are rarely used on price tags in everyday
            commercial settings, instead opting for arabic numerals. Kanji
            numbers might be seen in more traditional settings, such as on signs
            in older shops, in calligraphy, or in cultural contexts, but these
            are not the norm for modern price tags.
          </p>
        </div>

        <h2 className="text-center text-3xl font-bold">
          Common Phrases in Japanese Shops
        </h2>
        <div className="space-y-3">
          <p>
            The first thing you might here when you walk into a Japanese shop
            is:
          </p>
          <h3 className="!mt-6 text-xl font-bold">
            <span className="font-japanese text-2xl">いらっしゃいませ</span> -
            Welcome to our store
          </h3>
          <ul className="ml-6 list-disc">
            <li>
              This is a standard greeting you will hear upon entering many
              stores in Japan.
            </li>
          </ul>

          <h3 className="!mt-6 text-xl font-bold">
            <span className="font-japanese text-2xl">いくらですか</span> - How
            much is it?
          </h3>
          <ul className="ml-6 list-disc">
            <li>Use this when you want to ask the price of an item.</li>
            <li>
              <strong>Example: </strong>
              <span className="font-japanese text-xl">
                すみません、この
                <Furigana furigana={<span className="text-sm">とけい</span>}>
                  時計
                </Furigana>
                はいくらですか。
              </span>
            </li>
          </ul>

          <h3 className="!mt-6 text-xl font-bold">
            <span className="font-japanese text-2xl">これをください</span> -
            I'll take this, please.
          </h3>
          <ul className="ml-6 list-disc">
            <li>Use this when you have decided to purchase an item.</li>
          </ul>

          <h3 className="!mt-6 text-xl font-bold">
            <span className="font-japanese text-2xl">
              クレジットカードは
              <Furigana furigana={<span className="text-sm">つか</span>}>
                使
              </Furigana>
              えますか
            </span>{" "}
            - Can I use a credit card?
          </h3>
          <ul className="ml-6 list-disc">
            <li>
              Use this to inquire if the store accepts credit card payments.
            </li>
          </ul>
        </div>
        <p>
          In the next lesson, we'll practice reading and asking the price of
          items with practical examples.
        </p>
      </div>
    </ContentBox>
  )
}
