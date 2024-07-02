export default function Janai() {
  return (
    <div className="h-full w-full bg-background-secondary p-8 text-base text-black">
      <h1 className="text-center text-xl font-bold">
        <span className="font-japanese text-red-500">じゃない</span> - The
        Negative Form in Japanese
      </h1>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">Function</h2>
        <p>
          The <span className="font-japanese text-red-500">じゃない</span>{" "}
          construction in Japanese is used to negate statements, much like
          saying "is not" in English.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Basic Usage</h2>
        <p>
          The basic form of negating a noun sentence in Japanese involves
          replacing <span className="font-japanese">です</span> with{" "}
          <span className="font-japanese text-red-500">じゃないです</span>.
        </p>
        <p>
          Example: <span className="font-japanese">これはペンです。</span>{" "}
          {"->"} This is a pen.
        </p>
        <p>
          <span className="font-japanese">これはペンじゃないです。</span> {"->"}{" "}
          This is not a pen.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Variations of Negation</h2>
        <p>
          There are three common ways to form negative sentences in Japanese:
        </p>
        <p>
          1. <span className="font-japanese">じゃないです</span> - Colloquial
          and commonly used in everyday conversation.
        </p>
        <p>
          2. <span className="font-japanese">じゃありません</span> - Slightly
          more formal, appropriate for polite speech.{" "}
          <span className="font-japanese">じゃ</span> is a contraction of{" "}
          <span className="font-japanese">では</span> (de-wa).
        </p>
        <p>
          3. <span className="font-japanese">ではありません</span>{" "}
          (de-wa-arimasen) - Formal and appropriate for written language or very
          polite speech.
        </p>
        <p>
          *Notice 2 & 3 don't include{" "}
          <span className="font-japanese">です</span>.
        </p>
        <p>Examples:</p>
        <p>
          1. <span className="font-japanese">田中さんは学生じゃないです。</span>{" "}
          {"->"} Colloquial
        </p>
        <p>
          2.{" "}
          <span className="font-japanese">田中さんは学生じゃありません。</span>{" "}
          {"->"} Polite
        </p>
        <p>
          3.{" "}
          <span className="font-japanese">田中さんは学生じゃありません。</span>{" "}
          {"->"} Formal
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Using じゃない to Confirm</h2>
        <p>
          In addition to negating statements,{" "}
          <span className="font-japanese text-red-500">じゃない</span> can be
          used in conversations to ask someone else to confirm or clarify
          something, similar to saying "isn't it?" in English.
        </p>
        <p>
          Example:{" "}
          <span className="font-japanese">
            これは田中さんの本じゃないですか。
          </span>{" "}
          {"->"} Isn't this Tanaka's book?
        </p>
        <p>A response might look like this:</p>
        <p>
          <span className="font-japanese">はい、田中さんの本です。</span> {"->"}{" "}
          Yes, that's Tanaka's book.
        </p>
        <p>
          <span className="font-japanese">
            いいえ、田中さんの本じゃないです。
          </span>{" "}
          {"->"} No, that's not Tanaka's book.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">
          Only Negates Nouns (and na-adjectives)
        </h2>
        <p>
          The <span className="font-japanese text-red-500">じゃないです</span>{" "}
          form is used exclusively for nouns and na-adjectives. It cannot be
          used to negate i-adjectives or verbs.
        </p>
        <p>
          Incorrect:{" "}
          <span className="font-japanese">おいしいじゃないです。</span>
        </p>
        <p>
          Correct: <span className="font-japanese">おいしくないです。</span>{" "}
          {"->"} It's not delicious.
        </p>
        <p>
          Incorrect: <span className="font-japanese">高いじゃないです。</span>
        </p>
        <p>
          Correct: <span className="font-japanese">高くないです。</span> {"->"}{" "}
          It's not expensive.
        </p>
      </div>
    </div>
  )
}
