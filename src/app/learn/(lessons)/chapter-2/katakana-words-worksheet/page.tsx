import ContentBox from "@/components/ContentBox"
import CustomTextArea from "@/components/CustomTextArea"
import Furigana from "@/components/text/Furigana"
import { Input } from "@/components/ui/input"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      showProgressBar={false}
      nextPageLink="/learn/chapter-1/kikusasaizu-1-1"
    >
      <h1 className="px-20 pb-12 pt-28 text-center text-[2rem] font-medium leading-[2.875rem]">
        <span className="text-[2.65rem] font-medium">Get ready</span> to see
        your <span className="text-4xl font-bold">name</span>,{" "}
        <span className="text-4xl font-bold">hometown</span>, and{" "}
        <span className="text-4xl font-bold">school</span> in Katakana—{" "}
        <span className="text-4xl font-light">written like never before!</span>
      </h1>
      <div className="space-y-6 px-16 md:px-24">
        <div>
          <h2 className="text-center text-2xl font-bold">Your Name</h2>
          <p className="mt-2">
            Type your name in Katakana using the box below. Write your first
            name first. Use a middle dot "・" to separate the first and last
            names.
          </p>
        </div>
        <div className="flex justify-around">
          <p className="font-bold">Example:</p>
          <p>
            John Smith {"->"}{" "}
            <span className="font-japanese text-xl">ジョン・スミス</span>
          </p>
        </div>
        <div>
          <h3 className="font-bold">Pro Tips</h3>
          <ul className="list-inside list-disc space-y-3 text-base">
            <li>
              Press <span className="font-bold">F7</span> to switch text to
              katakana.
            </li>
            <li>
              The middle dot is located on the slash key{" "}
              <span className="font-black">/</span>.
            </li>
            <li>
              Some names have small characters that can be written automatically{" "}
              {"->"}{" "}
              <span className="whitespace-nowrap font-japanese text-xl">
                ジョン
              </span>{" "}
              is just <span className="font-black">j</span>+
              <span className="font-black">o</span>+
              <span className="font-black">n</span>.
            </li>
            <li>
              The name <span className="font-japanese text-xl">ディラン</span>{" "}
              (Dylan) is more difficult. <span className="font-black">d</span>+
              <span className="font-black">i</span> makes{" "}
              <span className="font-japanese text-xl">ヂ</span> instead of{" "}
              <span className="font-japanese text-xl">ディ</span>.
            </li>
            <li>
              Press <span className="font-black">x</span> before typing a
              character to make it small {"->"}{" "}
              <span className="font-black">d</span>+
              <span className="font-black">e</span>+
              <span className="font-black">x</span>+
              <span className="font-black">i</span> makes{" "}
              <span className="font-japanese text-xl">ディ</span>.
            </li>
            <li>
              For long vowels, press the hyphen key{" "}
              <span className="font-black">-</span> {"->"}{" "}
              <span className="font-black">m</span>+
              <span className="font-black">a</span>+
              <span className="font-black">-</span>+
              <span className="font-black">k</span>+
              <span className="font-black">u</span> makes{" "}
              <span className="font-japanese text-xl">マーク</span> (Mark).
            </li>
          </ul>
        </div>
        <div className="flex">
          <h4 className="mt-4 w-48 text-center font-japanese text-2xl">
            <Furigana furigana={<span className="text-base">なまえ</span>}>
              名前
            </Furigana>
          </h4>
          <CustomTextArea
            className="h-28 w-full resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>

        <div>
          <h2 className="text-center text-2xl font-bold">Your Hometown</h2>
          <p className="mt-2">
            Fill in the English (left) and in Katakana (right) using the boxes
            below.
          </p>
          <p className="mt-3 text-sm italic">
            *Feel free to google the Katakana if you're unsure.
          </p>
        </div>

        <div className="flex">
          <p className="w-1/3 text-center font-bold">Example:</p>
          <p className="w-2/3 text-center">
            Virginia {"->"}{" "}
            <span className="font-japanese text-xl">バージニア</span>
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-12 w-1/3 text-center font-japanese text-2xl">
            <Input placeholder="State" className="bg-card" />
          </div>
          <CustomTextArea
            className="h-28 w-2/3 resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>

        <div className="flex">
          <p className="w-1/3 text-center font-bold">Example:</p>
          <p className="w-2/3 text-center">
            Front Royal {"->"}{" "}
            <span className="font-japanese text-xl">フロントロヤル</span>
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-12 w-1/3 text-center font-japanese text-2xl">
            <Input placeholder="County/City/Town Name" className="bg-card" />
          </div>
          <CustomTextArea
            className="h-28 w-2/3 resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>

        <h2 className="!mt-12 text-center text-2xl font-bold">Your School</h2>
        <div className="flex">
          <p className="w-1/3 text-center font-bold">Example:</p>
          <p className="w-2/3 text-center">
            University of Virginia {"->"}{" "}
            <span className="font-japanese text-xl">バージニアだいがく</span>
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-12 w-1/3 text-center font-japanese text-2xl">
            <Input placeholder="School Name" className="bg-card" />
          </div>
          <CustomTextArea
            className="h-28 w-2/3 resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>

        <div className="flex">
          <p className="w-1/3 text-center font-bold">Example:</p>
          <p className="w-2/3 text-center">
            Charlottesville, Virginia {"->"}{" "}
            <span className="font-japanese text-xl">
              シャーロッツビル、バージニア
            </span>
          </p>
        </div>
        <div className="flex items-center">
          <div className="mr-12 w-1/3 text-center font-japanese text-2xl">
            <Input placeholder="Location" className="bg-card" />
          </div>
          <CustomTextArea
            className="h-28 w-2/3 resize-none font-japanese text-xl"
            spacing={14}
          />
        </div>
        <div>
          <h2 className="text-center text-2xl font-bold">
            Other Katakana Words
          </h2>
          <p className="mt-2">
            You are preparing things to take to Japan and want to ask them if
            you can borrow/use the following items. List them in Katakana.
          </p>
        </div>
        <div className="flex items-center">
          <h4 className="w-48 text-center">Hair Dryer</h4>
          <Input className="w-full bg-card font-japanese text-lg" />
        </div>
        <div className="flex items-center">
          <h4 className="w-48 text-center">Iron</h4>
          <Input className="w-full bg-card font-japanese text-lg" />
        </div>
        <div className="flex items-center">
          <h4 className="w-48 text-center">Blanket</h4>
          <Input className="w-full bg-card font-japanese text-lg" />
        </div>
        <div className="flex items-center">
          <h4 className="w-48 text-center">Internet</h4>
          <Input className="w-full bg-card font-japanese text-lg" />
        </div>
      </div>
    </ContentBox>
  )
}
