export default function Janai() {
  return (
    <div className="h-full w-full bg-background-secondary p-8 text-base text-black">
      <h1 className="text-center text-lg font-bold">
        <span className="font-japanese text-orange-500">じゃない</span> - The
        Negative Form in Japanese
      </h1>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">Function</h2>
        <p>
          The{" "}
          <span className="font-japanese font-semibold text-orange-500">
            じゃない
          </span>{" "}
          construction in Japanese is used to negate statements, much like
          saying <strong>is not</strong> in English.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Basic Usage</h2>
        <p>
          The basic form of negating a noun sentence in Japanese involves
          replacing <span className="font-japanese font-medium">です</span> with{" "}
          <span className="font-japanese font-semibold text-orange-500">
            じゃないです
          </span>
          .
        </p>
        <div className="flex justify-center">
          <div>
            <div className="flex">
              <p className="w-60 font-japanese text-xl font-medium">
                これ<span className="font-semibold text-sky-400">は</span>
                ペンです。
              </p>
              <p className="mr-3 text-lg">{"->"}</p>
              <p className="text-lg">This is a pen.</p>
            </div>
            <div className="flex">
              <p className="w-60 font-japanese text-xl font-medium">
                これ<span className="font-semibold text-sky-400">は</span>ペン
                <span className="font-semibold text-orange-400">
                  じゃないです。
                </span>
              </p>
              <p className="mr-3 text-lg">{"->"}</p>
              <p className="text-lg">
                This <span className="font-bold text-orange-400">is not</span> a
                pen.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="mt-3 text-lg font-semibold">Variations of Negation</h2>
      <p>There are three common ways to form negative sentences in Japanese:</p>
      <p>
        1.{" "}
        <span className="font-japanese text-lg font-medium">じゃないです</span>{" "}
        - Colloquial and commonly used in everyday conversation.
      </p>
      <p>
        2.{" "}
        <span className="font-japanese text-lg font-medium">
          じゃありません
        </span>{" "}
        - Slightly more formal, appropriate for polite speech.{" "}
        <span className="font-japanese font-medium">じゃ</span> is a contraction
        of <span className="font-japanese font-medium">では</span> (de-wa).
      </p>
      <p>
        3.{" "}
        <span className="font-japanese text-lg font-medium">
          ではありません
        </span>{" "}
        (de-wa-arimasen) - Formal and appropriate for written language or very
        polite speech.
      </p>
      <p className="mt-1 text-sm italic">
        *Notice 2 & 3 don't include{" "}
        <span className="font-japanese not-italic">です</span>.
      </p>

      <h2 className="mt-3 text-lg font-semibold">Using じゃない to Confirm</h2>
      <p>
        In addition to negating statements,{" "}
        <span className="font-japanese font-semibold text-orange-500">
          じゃない
        </span>{" "}
        can be used in conversations to ask someone else to confirm or clarify
        something, similar to saying <strong>isn't it?</strong> in English.
      </p>
      <p className="text-center">
        <span className="font-japanese">
          これは田中さんの本じゃないですか。
        </span>{" "}
        {"->"} Isn't this Tanaka's book?
      </p>

      <h2 className="mt-2 text-lg font-semibold">
        Only Negates Nouns (and na-adjectives)
      </h2>
      <p>
        The{" "}
        <span className="font-japanese font-semibold text-orange-500">
          じゃないです
        </span>{" "}
        form is used exclusively for nouns and na-adjectives. It cannot be used
        to negate i-adjectives or verbs.
      </p>

      <p className="mt-1 text-sm italic">
        *We'll cover adjective conjugation in Chapter 5.
      </p>

      <div className="mt-1 flex w-full items-center">
        <p className="w-1/4 font-semibold text-red-500">Incorrect</p>
        <p className="w-3/4">
          <span className="font-japanese line-through">
            おいしいじゃないです。
          </span>
        </p>
      </div>
      <div className="flex w-full items-center">
        <p className="w-1/4 font-semibold">Correct</p>
        <p className="w-3/4">
          <span className="font-japanese">おいしくないです。</span>
          {"->"} It's not delicious.
        </p>
      </div>

      <div className="mt-1 flex w-full items-center">
        <p className="w-1/4 font-semibold text-red-500">Incorrect</p>
        <p className="w-3/4">
          <span className="font-japanese line-through">高いじゃないです。</span>
        </p>
      </div>
      <div className="flex w-full items-center">
        <p className="w-1/4 font-semibold">Correct</p>
        <p className="w-3/4">
          <span className="font-japanese">高くないです。</span>
          {"->"} It's not expensive.
        </p>
      </div>
    </div>
  )
}
