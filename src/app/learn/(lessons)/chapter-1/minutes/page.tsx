import ContentBox from "@/features/content-box/ContentBox"
import MinutesChart1 from "@/features/charts/MinutesChart1"
import MinutesChart2 from "@/features/charts/MinutesChart2"

export default function page() {
  return (
    <ContentBox
      variant="xl"
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/practice/minutes"
      showProgressBar={false}
    >
      <h1 className="mb-8 px-20 pt-20 text-center text-4xl font-medium">
        Counting Minutes - <span className="font-japanese">ぷん・ふん</span>
      </h1>
      <div className="w-full justify-center lg:flex lg:gap-3">
        <div className="my-3 flex justify-center">
          <MinutesChart1 />
        </div>
        <div className="my-3 flex justify-center">
          <MinutesChart2 />
        </div>
      </div>
      <div className="flex w-full justify-center">
        <div className="w-full max-w-[1000px] space-y-6 px-16 md:px-24">
          <h2 className="mt-12 text-center text-2xl font-bold">
            Japanese uses <span className="font-japanese">ぷん・ふん</span> for
            counting minutes.
          </h2>
          <div className="flex justify-center">
            <ul className="list-inside list-disc space-y-2">
              <li>
                Five past twelve {"->"}{" "}
                <span className="font-japanese text-xl">じゅうにじごふん</span>
              </li>
              <li>
                4:20 {"->"}{" "}
                <span className="font-japanese text-xl">よじにじっぷん</span>
              </li>
              <li>
                7:37 {"->"}{" "}
                <span className="font-japanese text-xl">
                  しちじさんじゅうななふん
                </span>
              </li>
              <li>
                10:15 {"->"}{" "}
                <span className="font-japanese text-xl">
                  じゅうじじゅうごふん
                </span>
              </li>
            </ul>
          </div>
          <h3 className="!mt-9 text-center font-bold">
            You'll just have to memorize which minutes from 1-10 use ぷん and
            which use ふん.
          </h3>
          <p className="text-center italic">You'll get better with practice!</p>
        </div>
      </div>
    </ContentBox>
  )
}
