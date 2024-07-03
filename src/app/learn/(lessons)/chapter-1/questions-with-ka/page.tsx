import React from "react"
import ContentBox from "@/features/content-box/ContentBox"
import Furigana from "@/components/text/Furigana"
import { Button } from "@/components/ui/button"

export default function Page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/the-no-particle"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Forming Questions With The{" "}
        <span className="font-japanese text-red-500">か</span> Particle
      </h1>
      <div className="space-y-6 px-16 md:px-24">
        <h2 className="my-3 text-center text-2xl font-bold">Introduction</h2>
        <p>
          The <span className="font-japanese">か</span> particle is a crucial
          element in Japanese grammar, primarily used to form questions.
          Understanding how to use <span className="font-japanese">か</span>{" "}
          will help you ask and understand questions in Japanese, enhancing your
          conversational skills.
        </p>
        <h2 className="my-3 text-center text-2xl font-bold">
          Forming Yes/No Questions
        </h2>
        <div>
          <p>
            To form a yes/no question in Japanese, simply add{" "}
            <span className="font-japanese text-xl">か</span> to the end of a
            statement.
          </p>
          <ul className="my-4 ml-6">
            <li>
              <span className="font-bold">Statement: </span>
              <span className="font-japanese text-xl font-bold">
                がくせいです。
              </span>{" "}
              - <span className="text-muted-foreground">(I am)</span> a student.
            </li>
            <li>
              <span className="font-bold">Question: </span>
              <span className="font-japanese text-xl font-bold">
                がくせいです
                <span className="text-red-500">か</span>。
              </span>{" "}
              - Are <span className="text-muted-foreground">(you)</span> a
              student?
            </li>
          </ul>
          <p>
            Notice that in Japanese, it is not customary to use a question mark
            at the end of a question sentence when the{" "}
            <span className="font-japanese">か</span> particle is present,
            though it is sometimes used in casual writing for clarity.
          </p>
        </div>
        <h2 className="my-3 text-center text-2xl font-bold">Question Words</h2>
        <p>
          In addition to yes/no questions, Japanese questions often use specific
          question words, such as:
        </p>
        <div className="flex w-full justify-center">
          <ul className="list-disc text-xl">
            <li>
              <span className="font-japanese text-2xl font-semibold">なん</span>{" "}
              or{" "}
              <span className="font-japanese text-2xl font-semibold">なに</span>{" "}
              - what
            </li>
            <li>
              <span className="font-japanese text-2xl font-semibold">どこ</span>{" "}
              - where
            </li>
            <li>
              <span className="font-japanese text-2xl font-semibold">だれ</span>{" "}
              - who
            </li>
            <li>
              <span className="font-japanese text-2xl font-semibold">いつ</span>{" "}
              - when
            </li>
            <li>
              <span className="font-japanese text-2xl font-semibold">どう</span>{" "}
              - how
            </li>
            <li>
              <span className="font-japanese text-2xl font-semibold">なぜ</span>{" "}
              - why
            </li>
          </ul>
        </div>
        <p>
          These question words are typically followed by the{" "}
          <span className="font-japanese text-xl">か</span> particle to form a
          complete question.
        </p>
        <li className="italic">
          In this lesson, we'll focus on using{" "}
          <span className="font-japanese text-xl not-italic">なん・なに</span>{" "}
          with the <span className="font-japanese text-xl not-italic">か</span>{" "}
          particle.
        </li>
        <p>
          <strong>Example:</strong>
        </p>
        <ul>
          <li>
            <span className="font-japanese text-xl">
              せんこうはなんですか。
            </span>{" "}
            - What is your major?
            <ul className="ml-6 list-disc">
              <li>
                <span className="font-japanese text-xl">せんこう</span> - major
              </li>
              <li>
                <span className="font-japanese">は</span> - topic particle
              </li>
              <li>
                <span className="font-japanese text-xl">なん</span> - what
              </li>
              <li>
                <span className="font-japanese text-xl">です</span> - is
              </li>
              <li>
                <span className="font-japanese text-xl">か</span> - question
                particle
              </li>
            </ul>
          </li>
        </ul>
        <p>
          Can be literally translated as:{" "}
          <span className="font-bold">
            As for <span className="text-muted-foreground">(your)</span> major,
            what is it?
          </span>
        </p>
        <p>
          <strong>Responses:</strong>
        </p>
        <ul>
          <li>
            <span className="font-japanese text-xl">
              せんこうはえいごです。
            </span>{" "}
            - My major is English.
          </li>
          <li>
            Or just: <span className="font-japanese text-xl">えいごです。</span>{" "}
            - It's English.
          </li>
        </ul>
        <div>
          <h2 className="text-center text-2xl font-bold">
            <span className="font-japanese text-sky-500">なん</span> vs.{" "}
            <span className="font-japanese text-sky-500">なに</span>
          </h2>
          <h2 className="text-center font-japanese text-3xl font-medium text-sky-500">
            何
          </h2>
        </div>
        <p>
          Both <span className="font-japanese text-sky-500">なん</span> and{" "}
          <span className="font-japanese text-sky-500">なに</span> mean{" "}
          <span className="font-bold italic">"what"</span> in Japanese, and they
          share the same kanji{" "}
          <span className="font-japanese text-xl text-sky-500">何</span>, but
          they are used slightly differently. Here's a quick guide:
        </p>
        <div className="space-y-1">
          <h3 className="font-japanese text-2xl font-bold text-sky-500">
            なに
          </h3>
          <li>Used most of the time.</li>
          <li>
            Example:{" "}
            <span className="font-japanese text-xl font-bold">
              なにをしますか。
            </span>{" "}
            - What will you do?
          </li>
        </div>
        <div className="space-y-1">
          <h3 className="font-japanese text-2xl font-bold text-sky-500">
            なん
          </h3>
          <li>
            Used before words starting with{" "}
            <span className="font-black">d</span>,{" "}
            <span className="font-black">n</span>, or{" "}
            <span className="font-black">t</span> sounds, and with counters.
          </li>
          <li>
            Example:{" "}
            <span className="font-japanese text-xl font-bold">
              なんですか。
            </span>{" "}
            - What is it?
          </li>
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-bold">Quick Tips</h3>
          <li>
            Use <span className="font-japanese text-xl">なに</span> in general.
          </li>
          <li>
            Use <span className="font-japanese text-xl">なん</span> before{" "}
            <span className="font-black">d</span>,{" "}
            <span className="font-black">n</span>, or{" "}
            <span className="font-black">t</span> sounds, and counters.
          </li>
          <li>
            Don't overthink it! You'll get a feel for which one to use pretty
            quickly with practice.
          </li>
        </div>
        <h2 className="my-3 text-center text-2xl font-bold">
          <span className="font-japanese text-3xl text-red-500">か</span>{" "}
          Example Sentences
        </h2>
        <ul>
          <li>
            <h4 className="mb-1 mt-6 font-bold">What time is it now?</h4>
            <ul className="ml-6 list-disc">
              <li>
                A:{" "}
                <span className="font-japanese text-xl">
                  いまなんじですか。
                </span>{" "}
              </li>
              <li>
                B: <span className="font-japanese text-xl">くじです。</span> -
                It is nine o'clock.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="mb-1 mt-6 font-bold">How old are you, Yuki?</h4>
            <ul className="ml-6 list-disc">
              <li>
                A:{" "}
                <span className="font-japanese text-xl">
                  ゆきさんはなんさいですか。
                </span>{" "}
              </li>
              <li>
                B:{" "}
                <span className="font-japanese text-xl">
                  じゅうきゅうさいです。
                </span>{" "}
                - I'm nineteen years old.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="mb-1 mt-6 font-bold">
              What year are you in college?
            </h4>
            <ul className="ml-6 list-disc">
              <li>
                A:{" "}
                <span className="font-japanese text-xl">
                  なんねんせいですか。
                </span>{" "}
              </li>
              <li>
                B:{" "}
                <span className="font-japanese text-xl">にねんせいです。</span>{" "}
                - I'm a sophomore.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="mb-1 mt-6 font-bold">
              What is your telephone number?
            </h4>
            <ul className="ml-6 list-disc">
              <li>
                A:{" "}
                <span className="font-japanese text-xl">
                  でんわばんごうはなんばんですか。
                </span>{" "}
              </li>
              <li>
                B:{" "}
                <span className="font-japanese text-xl">
                  はちろくななごさんぜろきゅうです。
                </span>{" "}
                - It is 867-5309.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="pt-6 text-center text-2xl font-bold">
          Additional Points to Consider
        </h2>
        <ul className="ml-6 list-disc">
          <li>
            <strong>Using Question Marks</strong>: While traditional Japanese
            does not use question marks, they have become fairly common in
            casual and written language, especially in text messages and
            informal writing. However, in formal writing and speech, the{" "}
            <span className="font-japanese">か</span> particle alone is
            sufficient to indicate a question.
          </li>
        </ul>
        <h2 className="my-3 text-center text-2xl font-bold">
          Non-Question Uses of{" "}
          <span className="font-japanese text-[1.65rem] text-red-500">か</span>
        </h2>
        <ul className="ml-6 list-disc">
          <li>
            <h4 className="mb-1 mt-6 font-bold">
              Expressing Uncertainty or Surprise:
            </h4>
            <ul className="ml-6 list-disc">
              <li>
                <span className="font-japanese text-xl">そうですか</span> - Is
                that so?
              </li>
              <li>
                Here, <span className="font-japanese text-xl">か</span> can
                indicate mild surprise or uncertainty, often translating to{" "}
                <span className="font-semibold italic">Oh, really?</span> in
                English.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="mb-1 mt-6 font-bold">Polite Confirmations:</h4>
            <ul className="ml-6 list-disc">
              <li>
                <span className="font-japanese text-xl">そうですね。</span> -
                That's right.
              </li>
              <li>
                <span className="font-japanese text-xl">そうですか。</span> - I
                see. / Is that so?
              </li>
              <li>
                The <span className="font-japanese text-xl">か</span> at the end
                shows that the speaker is politely confirming information, often
                used in conversations to show attentiveness.
              </li>
            </ul>
          </li>
        </ul>
        <h2 className="my-3 text-center text-2xl font-bold">Intonation</h2>
        <p>
          In Japanese, intonation plays a significant role in conveying meaning,
          especially when using the <span className="font-japanese">か</span>{" "}
          particle. The intonation can rise or fall depending on the context and
          the speaker's intention.
        </p>
        <h3 className="text-center text-xl font-semibold">
          Rising Intonation (<span className="text-yellow-400">↑</span>)
        </h3>
        <p>
          Rising intonation is often used in direct questions, especially when
          seeking information or confirmation. We often do the same in English.
        </p>
        <ul>
          <li>
            <h4 className="mb-1 mt-6 font-bold">Example 1:</h4>
            <ul className="ml-6 list-disc">
              <li>
                <strong>Question:</strong>{" "}
                <span className="font-japanese text-xl">
                  いまなんじですか。
                </span>{" "}
                - What time is it now? (seeking information)
              </li>
              <li>
                <strong>Response:</strong>{" "}
                <span className="font-japanese text-xl">くじです。</span> - It
                is nine o'clock.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="mb-1 mt-6 font-bold">Example 2:</h4>
            <ul className="ml-6 list-disc">
              <li>
                <strong>Question:</strong>{" "}
                <span className="font-japanese text-xl">
                  さとうさんはがくせいですか。
                </span>{" "}
                - Are you{" "}
                <span className="text-base text-muted-foreground">(Satou)</span>{" "}
                a student? (seeking confirmation)
              </li>
              <li>
                <strong>Response:</strong>{" "}
                <span className="font-japanese text-xl">
                  はい、がくせいです。
                </span>{" "}
                - Yes, I am a student.
              </li>
            </ul>
          </li>
        </ul>
        <h3 className="text-center text-xl font-semibold">
          Falling Intonation (<span className="text-indigo-400">↓</span>)
        </h3>
        <p>
          Falling intonation is often used to indicate understanding,
          realization, or mild surprise. It can also be used to politely confirm
          information that the speaker has just learned.
        </p>
        <ul>
          <li>
            <h4 className="mb-1 mt-6 font-bold">Example 1:</h4>
            <ul className="ml-6 list-disc">
              <li>
                <strong>Statement:</strong>{" "}
                <span className="font-japanese text-xl">
                  あのう、いまなんじですか。
                </span>{" "}
                - Excuse me, what time is it now?
              </li>
              <li>
                <strong>Response:</strong>{" "}
                <span className="font-japanese text-xl">いまですか。</span>{" "}
                <span className="font-japanese text-xl">１０じです。</span> -
                Now? It's ten o'clock.
              </li>
              <li>
                <strong>Confirmation:</strong>{" "}
                <span className="font-japanese text-xl">
                  あ、１０じですか。ありがとうございます。
                </span>{" "}
                - Oh, it's ten o'clock. Thank you.
              </li>
            </ul>
          </li>
          <li>
            <h4 className="mb-1 mt-6 font-bold">Example 2:</h4>
            <ul className="ml-6 list-disc">
              <li>
                <strong>Statement:</strong>{" "}
                <span className="font-japanese text-xl">
                  はじめまして。A です。
                </span>{" "}
                - Nice to meet you. I'm A.
              </li>
              <li>
                <strong>Confirmation:</strong>{" "}
                <span className="font-japanese text-xl">
                  ああ、A さんですか。はじめまして。B です。
                </span>{" "}
                - Oh, you are A? Nice to meet you. I'm B.
              </li>
            </ul>
          </li>
        </ul>
        {/* <h2 className="my-3 text-center text-2xl font-bold">Practice</h2>
        <p>
          Convert the following statements into questions by adding the{" "}
          <span className="font-japanese">か</span> particle:
        </p>
        <ul>
          <li>
            <span className="font-japanese">かれはにほんじんです。</span> - "He
            is Japanese."
            <ul className="ml-6 list-disc">
              <li>
                <span className="font-japanese">かれはにほんじんですか。</span>{" "}
                - "Is he Japanese?"
              </li>
            </ul>
          </li>
          <li>
            <span className="font-japanese">ねこがすきです。</span> - "I like
            cats."
            <ul className="ml-6 list-disc">
              <li>
                <span className="font-japanese">ねこがすきですか。</span> - "Do
                you like cats?"
              </li>
            </ul>
          </li>
          <li>
            <span className="font-japanese">さとうさんはがくせいです。</span> -
            "Satou is a student."
            <ul className="ml-6 list-disc">
              <li>
                <span className="font-japanese">
                  さとうさんはがくせいですか。
                </span>{" "}
                - "Is Satou a student?"
              </li>
            </ul>
          </li>
        </ul> */}
        <h2 className="pt-6 text-center text-2xl font-bold">Conclusion</h2>
        <p>
          Mastering the use of the <span className="font-japanese">か</span>{" "}
          particle is essential for forming questions in Japanese. By
          understanding how to use it with both yes/no questions and questions
          with specific question words, you'll be able to engage in more
          meaningful and varied conversations in Japanese. Additionally,
          understanding its use in statements and polite confirmations will
          enhance your ability to interact naturally in Japanese. Practice
          regularly, and soon using <span className="font-japanese">か</span>{" "}
          will become second nature!
        </p>
      </div>
    </ContentBox>
  )
}
