import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/hiragana-test"
    >
      <h1 className="mt-40 text-6xl font-bold leading-[3.5rem] mx-24 text-center">
        More about the Japanese writing systems
      </h1>
      <h2 className="text-3xl text-center font-bold mb-4 mt-12">
        Uppercase and Lowercase
      </h2>
      <div className="sm:px-24 px-16 space-y-9">
        <div className="mr-[5.75rem] mt-6 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
          <PortraitIcon image="/img/student.png" />
          <p>
            Sensei, I've been learning about Hiragana, but I have some questions
            about other parts of Japanese writing. What can you tell me about
            uppercase and lowercase letters in Japanese?
          </p>
        </div>
        <div className="ml-24 rounded-2xl bg-card p-4 border-muted border-dashed border-2 shadow-md">
          <PortraitIcon image="/img/guru.png" className="float-end" />
          <p>
            Ah, inquisitive mind, Japanese is a language of simplicity in some
            aspects. Unlike English, Japanese does not distinguish between
            uppercase and lowercase letters. Each character stands proudly on
            its own, without needing to change form.
          </p>
        </div>
        <p>
          <span className="font-extrabold">Student:</span> That's interesting!
          What about punctuation, like question marks and periods?
        </p>
        <p>
          <span className="font-extrabold">Sensei:</span> Ah, punctuation—the
          tiny marks that guide our understanding. In Japanese, we do use
          question marks and periods, but their usage can be a bit different.
          The Japanese question mark (？) is used sparingly, often in informal
          writing or to add emphasis. In more formal contexts, the question is
          usually indicated by the context and the sentence-ending particle “か”
          (ka).
        </p>
        <p>
          <span className="font-extrabold">Student:</span> Oh, that's weird.
          I'll have to get used to that... So, what about periods?
        </p>
        <p>
          <span className="font-extrabold">Sensei:</span> The humble period (。)
          in Japanese is called “句点” (kuten). It's used at the end of a
          sentence, just like in English. Think of it as a small circle marking
          the end of your thought.
        </p>
        <p>
          <span className="font-extrabold">Student:</span> Do Japanese sentences
          have spaces between words like in English?
        </p>
        <p>
          <span className="font-extrabold">Sensei:</span> Ah, spaces, or rather
          the absence of them, is a unique feature of Japanese. In traditional
          Japanese writing, spaces are not used between words. The text flows
          continuously, like a river. However, modern Japanese sometimes uses
          spaces in children's books or language learning materials to help with
          readability.
        </p>
        <p>
          <span className="font-extrabold">Student:</span> That must make
          reading a bit challenging!
        </p>
        <p>
          <span className="font-extrabold">Sensei:</span> It can be at first,
          but with practice, your mind will begin to recognize the patterns and
          break down sentences naturally. Now, let's talk about Romaji.
        </p>
        <p>
          <span className="font-extrabold">Student:</span> Yes, I’ve seen Romaji
          used a lot. What exactly is it?
        </p>
        <p>
          <span className="font-extrabold">Sensei:</span> Romaji is the use of
          Latin alphabet letters to represent Japanese sounds. It serves as a
          bridge for those who are just beginning their journey in the Japanese
          language. For example, the word “こんにちは” can be written as
          “konnichiwa” in Romaji.
        </p>
        <p>
          <span className="font-extrabold">Student:</span> Is Romaji used often
          in Japan?
        </p>
        <p>
          <span className="font-extrabold">Sensei:</span> Romaji is primarily
          used for the benefit of learners and in contexts where Japanese
          characters might not be practical, such as on international signage or
          in technology settings. However, true mastery of Japanese involves
          moving beyond Romaji and immersing oneself in Hiragana, Katakana, and
          Kanji.
        </p>
        <p>
          <span className="font-extrabold">Student:</span> I see. So, Romaji is
          like training wheels?
        </p>
        <p>
          <span className="font-extrabold">Sensei:</span> Precisely, young
          student. Romaji can help you get started, but to truly embrace the
          beauty and depth of the Japanese language, you must delve into its
          unique scripts.
        </p>
        <p>
          <span className="font-extrabold">Student:</span> Thanks, Sensei. This
          makes a lot of sense. I’ll make sure to practice reading without
          relying too much on Romaji.
        </p>
        <p>
          <span className="font-extrabold">Sensei:</span> Wise decision, young
          one. Embrace the challenge and let each step bring you closer to
          fluency. Remember, the journey of learning a language is as important
          as the destination. Enjoy each moment.
        </p>
      </div>
    </ContentBox>
  )
}
