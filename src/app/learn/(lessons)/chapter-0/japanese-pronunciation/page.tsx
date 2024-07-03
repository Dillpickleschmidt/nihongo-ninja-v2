import ContentBox from "@/features/content-box/ContentBox"
import CustomImage from "@/components/CustomImage"
import PortraitIcon from "@/components/PortraitIcon"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-0/writing-systems"
    >
      <div className="flex w-full justify-center">
        <div className="relative z-[-1] h-[800px] w-[615px] overflow-hidden rounded-2xl shadow-xl sm:mt-12">
          <CustomImage
            src="/img/chapter-0/chapter-0-welcome.png"
            alt="welcome image"
          />
        </div>
      </div>
      <h2 className="mt-12 px-24 text-center text-5xl font-medium leading-[3.5rem]">
        Getting started 🍵
      </h2>
      <h2 className="mt-6 px-24 pb-2 text-3xl font-medium leading-[2.5rem]">
        If you feel intimidated about learning a new language, there's good news
        for you! Japanese pronunciation is{" "}
        <span className="font-extrabold">easy</span> if you know English.
      </h2>
      <div className="px-16 sm:px-24 [&>*]:my-6">
        <div className="pb-4 pt-2 [&>*]:my-6">
          <div className="mr-[5.75rem] rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/student.png" />
            <p>
              Wise Sensei, I want to learn Japanese. I heard that the sounds are
              similar to English. Is that true?
            </p>
          </div>
          <div className="ml-24 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/guru.png" className="float-end" />
            <p>
              Ah, young eager one, your ears are keen. Indeed, many Japanese
              sounds are quite familiar to English speakers. For instance, 'ko'
              (こ), 'ma' (ま), 'nu' (ぬ), 'ke' (け), and 'yo' (よ) are
              pronounced just as you read them in English.
            </p>
          </div>
        </div>
        <div className="px-2 [&>*]:mt-4">
          <p>
            <span className="font-extrabold">Student:</span> That's good to
            know. Does that make the path to learning easier, oh enlightened
            one?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Very much so.
            Japanese has a simple phonetic structure. The language revolves
            around five basic vowel sounds. Listen carefully:
          </p>
          <div className="flex w-full justify-center font-japanese text-2xl font-medium">
            <ul>
              <li>
                あ a -{" "}
                <span className="text-xl">
                  <em>
                    <span className="text-2xl font-extrabold">AH</span>HH!!
                  </em>
                </span>
              </li>
              <li>
                い i -{" "}
                <span className="text-xl">
                  <em>
                    eur<span className="text-2xl font-semibold">ea</span>ka!
                  </em>
                </span>
              </li>
              <li>
                う u -{" "}
                <span className="text-xl">
                  g<span className="text-2xl font-semibold">👀</span>se 🪿
                </span>
              </li>
              <li>
                え e -{" "}
                <span className="text-xl">
                  <span className="text-2xl font-semibold">e</span>lephant 🐘
                </span>
              </li>
              <li>
                お o -{" "}
                <span className="text-xl">
                  d<span className="text-2xl font-semibold">o</span>nut 🍩
                </span>
              </li>
            </ul>
          </div>
          <p className="mb-12 mt-0 text-center text-sm">
            *Note the rounded shapes of Hiragana characters.*
          </p>
          <div className="my-6 ml-6 rounded-2xl border-2 border-dashed border-muted bg-card p-4 shadow-md">
            <PortraitIcon src="/img/guru.png" className="float-end ml-2" />
            <p>
              These vowels form the essence of the Japanese phonetic system.
              Everything else is just a combination of these vowels with
              consonants you already know!
            </p>
          </div>
          <p>
            <span className="font-extrabold">Student:</span> I'm not sure I'm
            following, wise one. Can you give me an example?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Of course.
          </p>
          <p className="text-center">
            Take the consonant <span className="text-xl font-bold">k</span>:
          </p>
          <div className="flex justify-center font-japanese text-2xl font-medium">
            <div>
              <p>か ka</p>
              <p>き ki</p>
              <p>く ku</p>
              <p>け ke</p>
              <p>こ ko</p>
            </div>
          </div>
          <p className="text-center">
            And the consonant <span className="text-xl font-bold">s</span>:
          </p>
          <div className="flex justify-center font-japanese text-2xl font-medium">
            <div>
              <p>さ sa</p>
              <p>
                し shi<span className="text-xl">*</span>
              </p>
              <p>す su</p>
              <p>せ se</p>
              <p>そ so</p>
            </div>
          </div>
          <p>
            <span className="font-extrabold">Student:</span> Ah, I understand
            the pattern now. So, I can guess the sounds for t, n, h, and the
            rest?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Precisely, young
            apprentice. Japanese pronunciation is as consistent as the flow of
            time, unlike the unpredictable English. Once you learn a sound, it
            remains unchanged.
          </p>
          <p>
            As a matter of fact, Japanese has only 71 sounds that combine to
            create ~100 sound combinations. By contrast, English has ~250 unique
            sounds and 1000s of combinations. That means your tongue can already
            pronounce four times more sounds than the average Japanese person
            can!
          </p>
          <p>
            <span className="font-extrabold">Student:</span> That's comforting
            to hear, wise Sensei. This doesn't seem so hard after all.
          </p>
          <h2 className="!mt-12 text-2xl font-bold">Your Turn:</h2>
          <p className="!mt-2">
            Try connect the consonants t, n, h, m, and r to each of the five
            vowel sounds.
          </p>
        </div>
      </div>
    </ContentBox>
  )
}
