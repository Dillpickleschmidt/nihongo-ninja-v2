import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"
import TantanChart from "@/features/charts/TantanChart"

export default function page() {
  return (
    <ContentBox
      color="light"
      backgroundImage="/img/wavy-pattern-2.jpg"
      backgroundImageSize="700px"
      backgroundImageOpacity={9}
      nextPageLink="/learn/chapter-0/practice/dakuten-handakuten"
    >
      <h2 className="mt-40 px-20 text-center text-[2.625rem] font-medium leading-[3.25rem]">
        🌊
      </h2>
      <h2 className="px-20 pb-12 text-center text-[2rem] font-medium leading-[2.875rem]">
        So you've mastered the gentle curves and strokes of Hiragana, and you're
        feeling <em>*pretty* confident</em>, right? Well,{" "}
        <span className="text-[3.125rem]">
          <strong>hold onto your hats</strong>
        </span>
        , because it's time to <em>spice</em> things up with some dashes and
        circles —welcome to the dazzling domain of{" "}
        <span className="text-[2.675rem] font-bold">Dakuten</span> and{" "}
        <span className="text-[2.675rem] font-bold">Handakuten!</span>
      </h2>
      <p className="mb-2 text-center text-2xl font-bold">( &quot; )</p>
      <div className="mx-16 space-y-6 sm:mx-[7.5rem]">
        <div className="flex flex-row justify-center !pb-0">
          <div className="![&>*]:py-0 pl-2 pr-6 text-center text-xl font-bold">
            <em>
              <p>D</p>
              <p>A</p>
              <p>K</p>
              <p>U</p>
              <p>T</p>
              <p>E</p>
              <p>N</p>
            </em>
          </div>
          <p>
            Think of Dakuten as little <em>magical</em> marks that have the
            power to change sounds in a snap. They're like the cool DJs of the
            Hiragana world, remixing the beats. You take a plain sound like 'ka'
            (<span className="font-japanese text-xl font-semibold">か</span>
            ), slap on a dakuten, and voila, it's suddenly transformed into{" "}
            <em>'ga'</em> (
            <span className="font-japanese text-xl font-semibold">が</span>
            ). It's like adding a little bit of seasoning to your favorite dish
            - just a small dash changes the whole flavor! 🍜
          </p>
        </div>
        <p className="mb-12 mt-0 text-center text-sm">
          *It's a small change but take a look at those extra little quote marks
          on が*
        </p>
        <div className="!mt-16 flex flex-row items-center justify-center !pb-0">
          <div className="![&>*]:py-0 pl-2 pr-6 text-center text-xl font-bold">
            <em>
              <p>H</p>
              <p>A</p>
              <p>N</p>
              <p>D</p>
              <p>A</p>
              <p>K</p>
              <p>U</p>
              <p>T</p>
              <p>E</p>
              <p>N</p>
            </em>
          </div>
          <div className="mb-12">
            <p className="pr-10 text-center text-2xl font-bold">( ゜)</p>
            <p>
              Now, if Dakuten are the DJs, Handakuten are like their quirky
              sidekicks. These little circles are a bit more selective, only
              partying with the{" "}
              <span className="font-japanese text-[0.95rem] font-semibold">
                'h'
              </span>{" "}
              sounds. Add them to 'ha' (
              <span className="font-japanese text-xl font-semibold">は</span>
              ), and suddenly you're in the cool, breezy world of <em>
                'pa'
              </em>{" "}
              (<span className="font-japanese text-xl font-semibold">ぱ</span>
              ). It's like putting a fancy hat on a letter and watching it turn
              into a social butterfly. 🦋
            </p>
          </div>
        </div>
        <div className="space-y-4">
          <h2 className="mt-16 text-center text-[2rem] font-bold">
            <em>
              <span className="text-[2.675rem]">WHY</span>, THOUGH?
            </em>
          </h2>
          <p className="">
            You might be asking, &quot;
            <span className="text-[1.375rem]">
              <em>Why all these changes?</em>
            </span>{" "}
            &quot; Well, because{" "}
            <em>
              <u>variety is the spice of life!</u>
            </em>{" "}
            Or maybe because Japanese speakers centuries ago got a little bored
            and decided to mix things up.
          </p>
        </div>
        <p className="text-center text-xl">
          <span className="font-japanese">わかりません</span>{" "}
          <span className="text-base">(I don't know)</span>{" "}
          <span className="!py-2 text-3xl">🤷🏻</span>
        </p>
        <p>
          <span className="text-[1.1625rem] font-bold">
            <em>Strap in</em>
          </span>{" "}
          and let's play with these quirky additions to the Japanese alphabet.
          Who knew a couple of tiny marks could make such a <u>big</u>{" "}
          difference? Happy learning, and remember, in the realm of Dakuten and
          Handakuten, <em>expect the unexpected!</em>
        </p>
        <div className="!mt-12 flex flex-col items-center">
          <TantanChart />
        </div>
        <div className="!-mb-6 text-center">
          <p className="!mt-16 text-5xl font-semibold">
            <span className="font-japanese">がんばって！</span>
          </p>
          <p className="mt-4 text-2xl">Do your best! 😀</p>
        </div>
      </div>
    </ContentBox>
  )
}
