import ContentBox from "@/features/content-box/ContentBox"
import CustomImage from "@/components/CustomImage"
import Furigana from "@/components/text/Furigana"
import { Input } from "@/components/ui/input"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={3}
      showProgressBar={false}
      nextPageLink="/learn/chapter-1/self-introductions"
    >
      <h1 className="px-20 pb-12 pt-24 text-center text-4xl font-bold">
        <span className="text-orange-400">X</span>
        <span className="font-japanese">は</span>
        <span className="text-emerald-400">Y</span>
        <span className="font-japanese">です</span> Practice Sentences
      </h1>
      <div className="space-y-9 px-16 md:px-24">
        <h3 className="pt-6 text-2xl font-semibold">
          Complete the sentences below by filling in the <u>topic</u> of the
          sentence
        </h3>
        <div className="text-xl">
          <span className="font-bold">Example:</span>{" "}
          <span className="font-japanese">たかし</span> +{" "}
          <span className="font-japanese">だいがくせいです</span> 👇{" "}
          <div className="ml-24 font-japanese">
            <span className="text-orange-400 underline underline-offset-4">
              たかしさん
            </span>
            は
            <span className="text-emerald-400 underline underline-offset-4">
              だいがくせい
            </span>
            です。
          </div>
        </div>
        <div className="w-full font-japanese">
          <div className="flex w-full justify-center">
            <div className="w-full max-w-[450px]">
              <div className="relative w-full overflow-hidden rounded-md pb-[68.42%]">
                <CustomImage src="/img/chapter-1/doctor.jpg" alt="doctor" />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end text-3xl">
            <Input className="mr-2 mt-3 w-[19rem] bg-card !py-1 text-end text-3xl"></Input>
            <div>
              <Furigana furigana={<span>いしゃ</span>}>医者</Furigana>です。
            </div>
          </div>
          <p className="text-end font-inter text-sm">
            *Remember to include the proper honorific! (さん・せんせい)
          </p>
        </div>
        <div className="w-full font-japanese">
          <div className="flex w-full justify-center">
            <div className="w-full max-w-[450px]">
              <div className="relative w-full overflow-hidden rounded-md pb-[68.42%]">
                <CustomImage
                  src="/img/chapter-1/office-worker.jpg"
                  alt="office-worker"
                />
              </div>
            </div>
          </div>
          <div className="mt-6 flex items-center justify-end text-3xl">
            <Input className="mr-2 mt-3 w-[13rem] bg-card !py-1 text-end text-3xl"></Input>
            <div>
              <Furigana furigana={<span>かいしゃいん</span>}>会社員</Furigana>
              です。
            </div>
          </div>
        </div>
        <h3 className="pt-6 text-2xl font-semibold">
          Write the complete sentences for the following using{" "}
          <span className="font-extrabold">X</span>
          <span className="font-japanese">は</span>
          <span className="font-extrabold">Y</span>
          <span className="font-japanese">です</span> structure.
        </h3>
        <div className="flex w-full flex-col items-center">
          <p className="text-xl">
            Mr.{" "}
            <span className="font-japanese">
              <Furigana furigana={<span className="text-sm">よしひろ</span>}>
                義弘
              </Furigana>
            </span>{" "}
            is a lawyer.
          </p>
          <div className="mt-3 flex items-end text-3xl">
            <Input className="mr-1 w-[26rem] bg-card !py-1 font-japanese text-3xl"></Input>
            。
          </div>
          <p className="mt-12 text-xl">
            <Furigana furigana={<span className="text-sm">ゆうと</span>}>
              悠斗
            </Furigana>{" "}
            is a graduate student.
          </p>
          <div className="mt-3 flex items-end text-3xl">
            <Input className="mr-1 w-[31.5rem] bg-card !py-1 font-japanese text-3xl"></Input>
            。
          </div>
          <p className="mt-12 text-xl">
            <span className="text-lg text-muted-foreground">(My)</span> major is
            economics.
          </p>
          <div className="mt-3 flex items-end text-3xl">
            <Input className="mr-1 w-[22.25rem] bg-card !py-1 font-japanese text-3xl"></Input>
            。
          </div>
          <p className="mt-12 text-xl">Grandpa is 60 years old.</p>
          <div className="mt-3 flex items-end text-3xl">
            <Input className="mr-1 w-[29.5rem] bg-card !py-1 font-japanese text-3xl"></Input>
            。
          </div>
        </div>
        <h3 className="pt-12 text-2xl font-semibold">
          Write something about{" "}
          <span className="font-extrabold underline underline-offset-2">
            yourself!
          </span>{" "}
          🫵
        </h3>
        <div className="flex items-end pb-24 font-japanese text-3xl">
          <div>
            <Furigana furigana={<span>わたし</span>}>私</Furigana>は
          </div>
          <Input className="-mb-1 mr-1 w-[22rem] bg-card !py-1 text-3xl"></Input>
          。
        </div>
      </div>
    </ContentBox>
  )
}
