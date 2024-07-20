export default function KaParticle() {
  return (
    <div className="relative h-full w-full bg-background-secondary p-8 text-base text-black">
      <h1 className="text-center text-xl font-bold">
        <span className="font-japanese text-red-500">か</span> Particle
      </h1>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">Function</h2>
        <p>
          Forms questions in Japanese. Simply add{" "}
          <span className="font-japanese text-red-500">か</span> to the end of a
          statement to make it a question.
        </p>
        <div className="flex justify-center">
          <div>
            <p>
              <span className="font-japanese">がくせいです。</span> - (I am) a
              student.
            </p>
            <p>
              <span className="font-japanese">
                がくせいです<span className="text-red-500">か</span>。
              </span>{" "}
              - Are (you) a student?
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">Question Marks</h2>
        <p>
          Question marks (？) are typically not used—
          <span className="font-japanese text-red-500">か</span> alone is enough
          to indicate a question, though question markers have become popular in
          casual writing.
        </p>
      </div>
      <div className="mt-3 space-y-3 text-center">
        <div className="flex justify-center">
          <div className="border-b-2 border-black">
            <h2 className="text-lg font-semibold italic">Example Sentences</h2>
          </div>
        </div>
        <div>
          <p>
            Q: <span className="font-japanese">いまなんじですか。</span>
          </p>
          <p className="text-xs">What time is it now?</p>
          <p>
            A: <span className="font-japanese">くじです。</span>
          </p>
          <p className="text-xs">It is nine o'clock.</p>
        </div>

        <div>
          <p>
            Q: <span className="font-japanese">ゆきさんはなんさいですか。</span>
          </p>
          <p className="text-xs">How old are you, Yuki?</p>
          <p>
            A: <span className="font-japanese">じゅうきゅうさいです。</span>
          </p>
          <p className="text-xs">I'm nineteen years old.</p>
        </div>

        <div>
          <p>
            Q:{" "}
            <span className="font-japanese">
              でんわばんごうはなんばんですか。
            </span>
          </p>
          <p className="text-xs">What is your telephone number?</p>
          <p>
            A:{" "}
            <span className="font-japanese">
              はちろくななごさんぜろきゅうです。
            </span>
          </p>
          <p className="text-xs">It is 867-5309.</p>
        </div>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Non-Question Uses</h2>
        <p>
          Expressing uncertainty:{" "}
          <span className="font-japanese">そうですか。</span> - Is that so?{" "}
          <br />
          Polite confirmations:{" "}
          <span className="font-japanese">そうですか。</span> - I see.
        </p>
      </div>

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Intonation</h2>
        <p>Rising intonation (↑) for direct questions.</p>
        <p>Falling intonation (↓) for understanding or mild surprise.</p>
      </div>

      <div className="mt-4 space-y-3">
        <p>
          Example: <span className="font-japanese">いまなんじですか。</span> -
          What time is it now? (↑) <br />
          Example: <span className="font-japanese">そうですか。</span> - I see.
          (↓)
        </p>
      </div>
    </div>
  )
}
