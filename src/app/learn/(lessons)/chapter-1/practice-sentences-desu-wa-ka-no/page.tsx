import ContentBox from "@/components/ContentBox"
import CustomTextArea from "@/components/CustomTextArea"
import PortraitIcon from "@/components/PortraitIcon"
import Furigana from "@/components/text/Furigana"
import Romaji from "@/components/text/Romaji"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      showProgressBar={false}
      nextPageLink="/learn/chapter-1/anou-etto"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Practice Creating Sentences With{" "}
        <span className="font-japanese font-bold">です</span>,{" "}
        <span className="font-japanese font-bold">は</span>,{" "}
        <span className="font-japanese font-bold">か</span>, and{" "}
        <span className="font-japanese font-bold">の</span>,{" "}
      </h1>

      <div className="mx-6 my-6">
        <div className="ml-[9.5rem] flex justify-around">
          <PortraitIcon src="/img/student.png" className="h-16 w-16" />
          <PortraitIcon src="/img/student.png" className="h-16 w-16" />
          <PortraitIcon src="/img/student.png" className="h-16 w-16" />
          <PortraitIcon src="/img/guru.png" className="h-16 w-16" />
        </div>
        <div className="mt-4 overflow-x-auto rounded-lg text-base shadow-md">
          <table className="min-w-full border-collapse">
            <thead className="bg-neutral-200 dark:bg-card-foreground">
              <tr>
                <th className="w-1/5 border border-primary/15 py-2 font-medium">
                  {" "}
                </th>
                <th className="w-1/5 border border-primary/15 py-2 font-japanese dark:border-gray-700">
                  <Romaji romaji={<span className="text-sm">Sato Taro</span>}>
                    佐藤太郎
                  </Romaji>
                </th>
                <th className="w-1/5 border border-primary/15 py-2 font-japanese dark:border-gray-700">
                  <Romaji romaji={<span className="text-sm">John Smith</span>}>
                    ジョン・スミス
                  </Romaji>
                </th>
                <th className="w-1/5 border border-primary/15 py-2 font-japanese dark:border-gray-700">
                  <Romaji romaji={<span className="text-sm">Kim Min-su</span>}>
                    キム・ミンス
                  </Romaji>
                </th>
                <th className="w-1/5 border border-primary/15 py-2 font-japanese dark:border-gray-700">
                  <Romaji romaji={<span className="text-sm">Li Wei</span>}>
                    リ・ウェイ
                  </Romaji>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-card">
                <td className="border border-primary/15 px-4 py-2">
                  Nationality
                </td>
                <td className="border border-primary/15 px-4 py-2">Japanese</td>
                <td className="border border-primary/15 px-4 py-2">American</td>
                <td className="border border-primary/15 px-4 py-2">Korean</td>
                <td className="border border-primary/15 px-4 py-2">Chinese</td>
              </tr>
              <tr className="bg-card">
                <td className="border border-primary/15 px-4 py-2">
                  School Year
                </td>
                <td className="border border-primary/15 px-4 py-2">2nd Year</td>
                <td className="border border-primary/15 px-4 py-2">3rd Year</td>
                <td className="border border-primary/15 px-4 py-2">1st Year</td>
                <td className="border border-primary/15 px-4 py-2">4th Year</td>
              </tr>
              <tr className="bg-card">
                <td className="border border-primary/15 px-4 py-2">School</td>
                <td className="border border-primary/15 px-4 py-2">
                  <Romaji
                    romaji={<span className="text-sm">Kyoto University</span>}
                  >
                    きょうとだいがく
                  </Romaji>
                </td>
                <td className="border border-primary/15 px-4 py-2">
                  <Romaji
                    romaji={<span className="text-sm">Harvard University</span>}
                  >
                    ハーバードだいがく
                  </Romaji>
                </td>
                <td className="border border-primary/15 px-4 py-2">
                  <Romaji
                    romaji={<span className="text-sm">Meisei University</span>}
                  >
                    めいせいだいがく
                  </Romaji>
                </td>
                <td className="border border-primary/15 px-4 py-2">
                  <Romaji
                    romaji={
                      <span className="text-sm">Stanford University</span>
                    }
                  >
                    スタンフォードだいがく
                  </Romaji>
                </td>
              </tr>
              <tr className="bg-card">
                <td className="border border-primary/15 px-4 py-2">Major</td>
                <td className="border border-primary/15 px-4 py-2">けいざい</td>
                <td className="border border-primary/15 px-4 py-2">れきし</td>
                <td className="border border-primary/15 px-4 py-2">
                  <Furigana
                    furigana={<span className="text-sm">こんぴゅーたー</span>}
                  >
                    コンピューター
                  </Furigana>
                </td>
                <td className="border border-primary/15 px-4 py-2">
                  せいぶつがく
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="space-y-6 px-16 md:px-24">
        <small>
          *Both Japanese and Koreans place the family name before the given
          name.
        </small>
        <div>
          <h3 className="pt-2 text-center text-2xl font-bold">Nationality</h3>
          <p className="mt-2 text-center">
            For each student, create a sentence describing their nationality.
          </p>
        </div>
        <p className="text-xl">
          <span className="mr-2 font-bold">Example: </span>{" "}
          <span className="text-center font-japanese">おにいさん</span> {"->"}{" "}
          <span className="font-japanese">おにいさんはにほんじんです。</span>
        </p>
        <div className="flex">
          <h4 className="mt-4 w-48 font-japanese text-2xl">さとうさん:</h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div className="flex">
          <h4 className="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span className="text-base">すみす</span>}>
              スミス
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div className="flex">
          <h4 className="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span className="text-base">きむ</span>}>
              キム
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div className="flex">
          <h4 className="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span className="text-base">うぇい</span>}>
              ウェイ
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div>
          <h3 className="pt-2 text-center text-2xl font-bold">School Year</h3>
          <p className="mt-2 text-center">
            For each student, create a sentence describing their school year.
          </p>
        </div>
        <p className="text-xl">
          <span className="mr-2 font-bold">Example: </span>{" "}
          <span className="text-center font-japanese">おにいさん</span> {"->"}{" "}
          <span className="font-japanese">おにいさんはにねんせいです。</span>
        </p>
        <div className="flex">
          <h4 className="mt-4 w-48 font-japanese text-2xl">さとうさん:</h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div className="flex">
          <h4 className="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span className="text-base">すみす</span>}>
              スミス
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div className="flex">
          <h4 className="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span className="text-base">きむ</span>}>
              キム
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div className="flex">
          <h4 className="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span className="text-base">うぇい</span>}>
              ウェイ
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div>
          <h3 className="pt-2 text-center text-2xl font-bold">School</h3>
          <p className="mt-2 text-center">
            For each student, create a sentence describing them in relation to
            their school. Write in hiragana{" "}
            <span className="text-muted-foreground">
              (or katakana if you already know it)
            </span>
            .
          </p>
        </div>
        <p className="text-xl">
          <span className="mr-2 font-bold">Example: </span>{" "}
          <span className="text-center font-japanese">おにいさん</span> {"->"}{" "}
          <span className="font-japanese">
            おにいさんは
            <Furigana furigana={<span className="text-sm">ばーじにあ</span>}>
              バージニア
            </Furigana>
            だいがくのがくせいです。
          </span>{" "}
          {"->"}{" "}
          <span className="text-lg">
            He's a University of Virginia student.
          </span>
        </p>
        <div className="flex">
          <h4 className="mt-4 w-48 font-japanese text-2xl">さとうさん:</h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div className="flex">
          <h4 className="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span className="text-base">すみす</span>}>
              スミス
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div className="flex">
          <h4 className="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span className="text-base">きむ</span>}>
              キム
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div className="flex">
          <h4 className="mt-4 w-48 font-japanese text-2xl">
            <Furigana furigana={<span className="text-base">うぇい</span>}>
              ウェイ
            </Furigana>
            さん:
          </h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div>
          <h3 className="pt-2 text-center text-2xl font-bold">Questions</h3>
          <p className="mt-2 text-center">
            Answer the following questions using full sentences in Japanese
            (include more than just yes/no in your responses).
          </p>
        </div>
        <div>
          <span className="mr-2 font-bold">Example: </span>{" "}
          <span className="text-center font-japanese">
            <strong>Q:</strong>{" "}
            さとうさんはスタンフォードだいがくのがくせいですか。
          </span>
          <br />
          {"->"}{" "}
          <span className="font-japanese">
            <strong>A:</strong>{" "}
            いいえ、さとうさんはきょうとだいがくのがくせいです。
          </span>
        </div>
        <ol className="list-decimal space-y-4 font-japanese text-xl">
          <li>
            さとうさんの　せんこうは　なんですか。
            <div className="flex justify-end py-4">
              <CustomTextArea
                className="ml-12 h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            <Furigana furigana={<span className="text-sm">すみす</span>}>
              スミス
            </Furigana>
            さんは　
            <Furigana
              furigana={<span className="text-sm">すたんふぉーど</span>}
            >
              スタンフォード
            </Furigana>
            だいがくの　がくせいですか。
            <div className="flex justify-end py-4">
              <CustomTextArea
                className="ml-12 h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            <Furigana furigana={<span className="text-sm">きむ</span>}>
              キム
            </Furigana>
            さんの　せんこうは　なんですか。
            <div className="flex justify-end py-4">
              <CustomTextArea
                className="ml-12 h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            <Furigana furigana={<span className="text-sm">うぇい</span>}>
              ウェイ
            </Furigana>
            さんは　スタンフォードだいがくの　がくせいですか。
            <div className="flex justify-end py-4">
              <CustomTextArea
                className="ml-12 h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            さとうさんは　なんねんせいですか。
            <div className="flex justify-end py-4">
              <CustomTextArea
                className="ml-12 h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            <Furigana furigana={<span className="text-sm">すみす</span>}>
              スミス
            </Furigana>
            さんの　せんこうは　れきしですか。
            <div className="flex justify-end py-4">
              <CustomTextArea
                className="ml-12 h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
          <li>
            <Furigana furigana={<span className="text-sm">きむ</span>}>
              キム
            </Furigana>
            さんは　めいせいだいがくの　がくせいですか。
            <div className="flex justify-end py-4">
              <CustomTextArea
                className="ml-12 h-28 w-full resize-none font-japanese text-xl"
                spacing={14}
              />
            </div>
          </li>
        </ol>
        <h2 className="mt-6 text-center text-2xl font-bold italic">
          Whew, that was a lot of writing. Congradulations on finishing! {"->"}{" "}
          <span className="font-japanese not-italic">
            おめでとうございます！
          </span>
        </h2>
        <p>
          Hopefully, you've now got a stronger grip on all the topics we've
          covered up to this point.
        </p>
      </div>
    </ContentBox>
  )
}
