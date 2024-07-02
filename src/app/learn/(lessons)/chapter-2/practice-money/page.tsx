import ContentBox from "@/components/ContentBox"
import CustomImage from "@/components/CustomImage"
import CustomTextArea from "@/components/CustomTextArea"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"

export default async function page() {
  // Image data with random prices
  const imageData = [
    {
      src: "/img/chapter-2/practice-money/bicycle.png",
      alt: "bicycle",
      price: getRandomPrice(10000, 50000),
    },
    {
      src: "/img/chapter-2/practice-money/handbag.png",
      alt: "handbag",
      price: getRandomPrice(3000, 10000),
    },
    {
      src: "/img/chapter-2/practice-money/jeans.png",
      alt: "jeans",
      price: getRandomPrice(2000, 8000),
    },
    {
      src: "/img/chapter-2/practice-money/notebook.png",
      alt: "notebook",
      price: getRandomPrice(100, 1000),
    },
    {
      src: "/img/chapter-2/practice-money/shoes.png",
      alt: "shoes",
      price: getRandomPrice(3000, 15000),
    },
    {
      src: "/img/chapter-2/practice-money/umbrella.png",
      alt: "umbrella",
      price: getRandomPrice(500, 3000),
    },
    {
      src: "/img/chapter-2/practice-money/wallet.png",
      alt: "wallet",
      price: getRandomPrice(2000, 10000),
    },
    {
      src: "/img/chapter-2/practice-money/watch.png",
      alt: "watch",
      price: getRandomPrice(5000, 30000),
    },
    {
      src: "/img/chapter-2/practice-money/book.png",
      alt: "book",
      price: getRandomPrice(500, 2000),
    },
    {
      src: "/img/chapter-2/practice-money/fountain-pen.png",
      alt: "fountain pen",
      price: getRandomPrice(1000, 5000),
    },
    {
      src: "/img/chapter-2/practice-money/tshirt.png",
      alt: "tshirt",
      price: getRandomPrice(1000, 5000),
    },
    {
      src: "/img/chapter-2/practice-money/sleeping-hat.png",
      alt: "sleeping hat",
      price: getRandomPrice(500, 2000),
    },
    {
      src: "/img/chapter-2/practice-money/smartphone.png",
      alt: "smartphone",
      price: getRandomPrice(30000, 100000),
    },
    {
      src: "/img/chapter-2/practice-money/newspaper.png",
      alt: "newspaper",
      price: getRandomPrice(100, 500),
    },
  ]

  // Function to generate a random price within a given range, rounded to the nearest 50 yen
  function getRandomPrice(min: number, max: number) {
    const price = Math.floor(Math.random() * (max - min + 1)) + min
    return Math.round(price / 50) * 50
  }

  // Function to shuffle an array randomly
  function shuffleArray(array: any[]) {
    const shuffledArray = [...array] // Copy the original array
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1)) // Generate a random index
      ;[shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ] // Swap elements
    }
    return shuffledArray
  }

  // Shuffle the image data
  const shuffledImages = shuffleArray(imageData)

  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/practice/japanese-money"
      variant="xl"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-5xl font-semibold">
        Practice Money
      </h1>
      <div className="px-12 sm:px-16 md:px-24">
        <div className="mx-auto mt-12 grid grid-cols-[repeat(auto-fill,minmax(175px,_1fr))] gap-12">
          {shuffledImages.map((image, index) => (
            <div key={index} className="flex w-28 flex-col items-center">
              <div className="relative h-28 w-full">
                <CustomImage src={image.src} alt={image.alt} />
              </div>
              <Label className="mt-3 text-xl font-bold">¥{image.price}</Label>
            </div>
          ))}
        </div>
        <div className="mt-12 flex w-full justify-center">
          <div className="w-full max-w-[750px] space-y-9">
            <h2 className="text-center text-2xl font-bold">
              Answer the questions in{" "}
              <span className="font-japanese">ひらがな</span>.
            </h2>
            <div className="flex justify-center">
              <ol className="w-full list-decimal space-y-5 lg:mx-12">
                <div className="flex items-end font-japanese text-2xl">
                  <p className="w-full">
                    <Furigana
                      furigana={<span className="text-base">じてんしゃ</span>}
                    >
                      自転車
                    </Furigana>
                    はいくらですか。
                  </p>
                  <Input className="text-xl" />
                </div>
                <div className="flex items-end font-japanese text-2xl">
                  <p className="w-full">
                    この
                    <Furigana
                      furigana={<span className="text-base">かばん</span>}
                    >
                      鞄
                    </Furigana>
                    はいくらですか。
                  </p>
                  <Input className="text-xl" />
                </div>
                <div className="flex items-end font-japanese text-2xl">
                  <p className="w-full">ジーンズはいくらですか。</p>
                  <Input className="text-xl" />
                </div>
                <div className="flex items-end font-japanese text-2xl">
                  <p className="w-full">このノートはいくらですか。</p>
                  <Input className="text-xl" />
                </div>
                <div className="flex items-end font-japanese text-2xl">
                  <p className="w-full">
                    この
                    <Furigana
                      furigana={<span className="text-base">くつ</span>}
                    >
                      靴
                    </Furigana>
                    はいくらですか。
                  </p>
                  <Input className="text-xl" />
                </div>
                <div className="flex items-end font-japanese text-2xl">
                  <p className="w-full">
                    <Furigana
                      furigana={<span className="text-base">かさ</span>}
                    >
                      傘
                    </Furigana>
                    はいくらですか。
                  </p>
                  <Input className="text-xl" />
                </div>
              </ol>
            </div>

            <h2 className="!mt-16 text-center text-2xl font-bold">
              Conversation Example 1
            </h2>
            <ul className="mt-6 space-y-3">
              <li>
                <strong>Customer: </strong>
                <span className="font-japanese text-2xl">
                  すみません。このペンはいくらですか。
                </span>
              </li>
              <li>
                <strong>Shopkeeper: </strong>
                <span className="font-japanese text-2xl">三千七百円です。</span>
              </li>
              <li>
                <strong>Customer: </strong>
                <span className="font-japanese text-2xl">
                  えっと、その
                  <Furigana furigana={<span className="text-sm">かさ</span>}>
                    傘
                  </Furigana>
                  は？
                </span>
              </li>
              <li>
                <strong>Shopkeeper: </strong>
                <span className="font-japanese text-2xl">
                  二千三百五十円です。
                </span>
              </li>
              <li>
                <strong>Customer: </strong>
                <span className="font-japanese text-2xl">
                  じゃあ、その
                  <Furigana furigana={<span className="text-sm">かさ</span>}>
                    傘
                  </Furigana>
                  をください。
                </span>
              </li>
            </ul>

            <h2 className="!mt-16 text-center text-2xl font-bold">
              Conversation Example 2
            </h2>
            <p className="italic text-muted-foreground">
              Two students walk into a store together:
            </p>
            <ul className="!mt-6 space-y-3">
              <li>
                <strong>Student 1: </strong>
                <span className="font-japanese text-2xl">
                  すみません。このノートはいくらですか。
                </span>
              </li>
              <li>
                <strong>Shopkeeper: </strong>
                <span className="font-japanese text-2xl">七百円です。</span>
              </li>
              <li className="!mt-2">
                <strong>Student 2: </strong>
                <span className="font-japanese text-2xl">
                  <Romaji romaji="a little">ちょっと</Romaji>
                  <Furigana furigana={<span className="text-sm">たか</span>}>
                    高
                  </Furigana>
                  いですね。あのノートはいくらですか。
                </span>
              </li>
              <li className="!mt-0">
                <strong>Shopkeeper: </strong>
                <span className="font-japanese text-2xl">
                  あれは三百円です。
                </span>
              </li>
              <li>
                <strong>Student 1: </strong>
                <span className="font-japanese text-2xl">
                  じゃあ、あのノートをください。
                </span>
              </li>
              <li className="!mt-2">
                <strong>Student 2: </strong>
                <span className="font-japanese text-2xl">
                  <Romaji romaji="also">それと</Romaji>
                  、その
                  <Furigana furigana={<span className="text-sm">とけい</span>}>
                    時計
                  </Furigana>
                  はいくらですか。
                </span>
              </li>
              <li className="!mt-0">
                <strong>Shopkeeper: </strong>
                <span className="font-japanese text-2xl">二千八百円です。</span>
              </li>
              <li className="!mt-2">
                <strong>Student 1: </strong>
                <span className="font-japanese text-2xl">
                  じゃあ、その
                  <Furigana furigana={<span className="text-sm">とけい</span>}>
                    時計
                  </Furigana>
                  もください。
                </span>
              </li>
            </ul>

            <h2 className="!mt-16 text-center text-2xl font-bold">
              Try it yourself!
            </h2>
            <p className="">
              Create a conversation using the phrases you've learned. Challenge
              yourself to use more advanced grammar such as{" "}
              <span className="font-japanese not-italic">
                も, が, じゃない,
              </span>{" "}
              etc. as well as sentence-ending particles like{" "}
              <span className="font-japanese not-italic">ね</span> and{" "}
              <span className="font-japanese not-italic">よ</span>.
            </p>
            <p className="!mt-3 text-base italic text-muted-foreground">
              *Remember to use the{" "}
              <Link href={"/learn/chapter-2/grammar-notes"}>
                <span className="font-bold underline underline-offset-2">
                  Grammar Notes
                </span>
              </Link>{" "}
              posted at the beginning of the chapter as a reference!
            </p>
            <CustomTextArea
              spacing={14}
              className="min-h-96 font-japanese text-xl"
            />
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
