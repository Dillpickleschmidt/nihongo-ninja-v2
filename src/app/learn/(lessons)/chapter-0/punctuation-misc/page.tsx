import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/vocab-list"
    >
      <h1 className="pt-28 text-[2rem] font-medium leading-[2.875rem] text-center px-20">
        Just When You Thought It Was Safe...{" "}
        <span className="text-[2.75rem] font-bold">Prepare Yourselves</span>,
        Intrepid Learners, for the World of{" "}
        <span className="text-[3.125rem] font-bold">Japanese Punctuation</span>.
        Uppercase? Lowercase?{" "}
        <span className="text-[2.125rem] font-semibold">Forget about it!</span>{" "}
        Question marks and periods? Oh, they're here, but with a{" "}
        <span className="text-[2.25rem]">
          <em>twist!</em>
        </span>{" "}
        Spaces?{" "}
        <span className="text-[2.125rem] font-bold">
          <em>Who needs them!</em>
        </span>{" "}
        Strap in, because you're about to get wildly... precise!
      </h1>
      <h2 className="text-3xl text-center font-bold mb-4 mt-12">
        No Uppercase or Lowercase!
      </h2>
      <div className="sm:px-24 px-16 space-y-9">
        <div className="mr-[5.75rem] mt-9 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>
            Sensei, I've been learning about Hiragana, but I have some questions
            about other parts of Japanese writing. What can you tell me about
            uppercase and lowercase letters in Japanese?
          </p>
        </div>
        <div className="ml-24 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
          <PortraitIcon src="/img/guru.png" className="float-end" />
          <p>
            Ah, inquisitive mind, Japanese is a language of simplicity in some
            aspects. Unlike English, Japanese does not distinguish between
            uppercase and lowercase letters. Each character stands proudly on
            its own, without needing to change form.
          </p>
        </div>
        <h2 className="text-3xl text-center font-bold mb-4 mt-12">
          Punctuation
        </h2>
        <div className="mr-[5.75rem] mt-9 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>What about punctuation, like question marks and periods?</p>
        </div>
        <div className="ml-24 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
          <PortraitIcon src="/img/guru.png" className="float-end" />
          <p>
            Ah, punctuation—the tiny marks that guide our understanding. In
            Japanese, we do use question marks and periods, but their usage can
            be a bit different. The Japanese question mark (？) is used
            sparingly, often in informal writing or to add emphasis. In more
            formal contexts, the question is usually indicated by the context
            and the sentence-ending particle{" "}
            <span className="font-japanese text-xl">か</span> (ka).
          </p>
        </div>
        <h3 className="text-2xl font-medium">
          Japanese speakers use <span className="font-japanese">か</span> to
          indicate questions in polite and formal contexts. In casual settings,
          they might drop <span className="font-japanese">か</span> and use a
          rising intonation at the end of their sentence, which is written with
          a question mark (？).
        </h3>
        <p>
          <span className="font-extrabold">Student:</span> Oh, that's weird.
          I'll have to get used to that.
        </p>
        <div className="mr-[5.75rem] mt-9 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>So, what about periods? Surely, they use those... right Sensei?</p>
        </div>
        <div className="ml-24 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
          <PortraitIcon src="/img/guru.png" className="float-end" />
          <p>
            Indeed, young grasshopper. The humble period (。) in Japanese is
            called “句点” (kuten). It's used at the end of a sentence, just like
            in English. But instead of a solid dot, it's a hollow circle—imagine
            it as a tiny halo, giving your sentence a celestial send-off.
          </p>
        </div>
        <h2 className="text-3xl text-center font-bold mb-4 mt-12">
          No Spaces!
        </h2>
        <div className="mr-[5.75rem] mt-9 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
          <PortraitIcon src="/img/student.png" />
          <p>
            Do Japanese sentences have spaces between words like in English?
          </p>
        </div>
        <div className="ml-24 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
          <PortraitIcon src="/img/guru.png" className="float-end" />
          <p>
            Ah, spaces, or rather the absence of them, is a unique feature of
            Japanese. In traditional Japanese writing, spaces are not used
            between words. The text flows continuously, like a river. However,
            modern Japanese sometimes uses spaces in children's books or
            language learning materials to help with readability.
          </p>
        </div>
        <h3 className="text-2xl font-medium">
          Japanese doesn't use spaces between words. However, when typing,
          you'll notice that characters like 。 and 、 have built-in spaces to
          separate sentences. Additionally, Japanese characters are
          double-width, which means punctuation marks like ? and ! take up more
          space, appearing as ？ and ！.
        </h3>
        <p>
          <span className="font-extrabold">Student:</span> <em>No spaces?</em>{" "}
          That must make reading a bit challenging!
        </p>
        <p>
          <span className="font-extrabold">Sensei:</span> It can be at first,
          but with practice, your mind will begin to recognize the patterns and
          break down sentences naturally. It's like learning to read music—once
          you understand the rhythm, you'll be able to play any tune.
        </p>
        <p>
          <span className="font-extrabold">Student:</span> Thanks, Sensei. This
          is starting to make more sense.
        </p>
      </div>
    </ContentBox>
  )
}
