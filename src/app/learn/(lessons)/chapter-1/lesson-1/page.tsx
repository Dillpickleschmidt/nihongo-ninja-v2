import ContentBox from "@/components/ContentBox"
import CustomImage from "@/components/CustomImage"
import PortraitIcon from "@/components/PortraitIcon"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/lesson-2"
    >
      <div className="w-full flex justify-center">
        <div className="relative sm:mt-12 z-[-1] w-[615px] h-[800px] rounded-2xl shadow-xl overflow-hidden">
          <CustomImage image="/img/chapter-1/chapter-1-welcome.png" />
        </div>
      </div>
      <h2 className="mt-12 text-5xl font-medium leading-[3.5rem] text-center px-24">
        Getting started 🍵
      </h2>
      <h2 className="pb-2 mt-6 text-3xl font-medium leading-[2.5rem] px-24">
        If you feel intimidated about learning a new language, there's good news
        for you! Japanese pronunciation is{" "}
        <span className="font-extrabold">easy</span> if you know English.
      </h2>
      <div className="sm:px-24 px-16 [&>*]:my-6">
        <div className="pt-2 pb-4 [&>*]:my-6">
          <div className="mr-[5.75rem] rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
            <PortraitIcon image="/img/student.png" />
            <p>
              Wise Sensei, I want to learn Japanese. I heard that the sounds are
              similar to English. Is that true?
            </p>
          </div>
          <div className="ml-24 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
            <PortraitIcon image="/img/guru.png" className="float-end" />
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
          <div className="font-japanese font-medium text-center text-2xl !py-0">
            <p>あ a</p>
            <p>い i</p>
            <p>う u</p>
            <p>え e</p>
            <p>お o</p>
          </div>
          <p className="mt-0 text-sm text-center">
            *Note the rounded shapes of Hiragana characters.*
          </p>
          <p>
            These vowels form the essence of the Japanese phonetic system.
            Everything else is just a combination of these vowels with
            consonants you already know!
          </p>
          <p>
            <span className="font-extrabold">Student:</span> I'm not sure I'm
            following, wise one. Can you give me an example?
          </p>
          <p>
            <span className="font-extrabold">Sensei:</span> Of course.
          </p>
          <p className="text-center">
            Take the consonant <span className="font-bold text-xl">k</span>:
          </p>
          <div className="font-japanese font-medium text-2xl !py-0 flex justify-center">
            <div>
              <p>か ka</p>
              <p>き ki</p>
              <p>く ku</p>
              <p>け ke</p>
              <p>こ ko</p>
            </div>
          </div>
          <p className="text-center">
            And the consonant <span className="font-bold text-xl">s</span>:
          </p>
          <div className="font-japanese font-medium text-2xl !py-0 flex justify-center">
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
            <span className="font-extrabold">Student:</span> That's comforting
            to hear, wise Sensei. This doesn't seem so hard after all.
          </p>
          <h2 className="text-2xl font-bold !mt-12">Your Turn:</h2>
          <p className="!mt-2">
            Try connect the consonants t, n, h, m, and r to each of the five
            vowel sounds.
          </p>
        </div>
      </div>
    </ContentBox>
  )
}
