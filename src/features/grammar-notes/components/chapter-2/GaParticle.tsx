import Furigana from "@/components/text/Furigana"

export default function GaParticle() {
  return (
    <div className="relative h-full w-full bg-background-secondary p-8 text-base text-black">
      <h1 className="text-center text-xl font-bold">
        <span className="font-japanese text-green-500">が</span> Particle
      </h1>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">Function</h2>
        <p>
          Marks the <span className="font-bold">subject</span> of the sentence,
          emphasizing the subject itself.
        </p>
      </div>
      <h2 className="mt-4 text-lg font-semibold">
        Difference between は and が
      </h2>
      <p>
        <span className="font-japanese font-bold text-sky-500">は</span> (wa)
        Marks the <strong>topic</strong> of the sentence, quickly indicating
        what the sentence is about, and{" "}
        <u>
          emphasizes what comes <span className="font-semibold">after</span> it.
        </u>
      </p>
      <p className="my-4 text-center">
        <span className="font-japanese">
          これ<span className="font-bold text-sky-500">は</span>
          <Furigana furigana={<span className="text-xs">おおき</span>}>
            大木
          </Furigana>
          <Furigana furigana={<span className="text-xs">いぬ</span>}>
            犬
          </Furigana>
          です。
        </span>{" "}
        {"->"} As for this,{" "}
        <span className="font-bold italic">it's a big dog.</span>
      </p>
      <p>
        All of the emphasis is placed on{" "}
        <span className="font-bold italic">it's a big dog</span>, while quickly
        indicating that it's{" "}
        <span className="font-japanese font-medium">これ</span> that we're
        referring to.
      </p>

      <p className="mt-2">
        <span className="font-japanese font-bold text-green-500">が</span> (ga)
        Marks the <strong>subject</strong> of the sentence,{" "}
        <u>
          emphasizing what comes <span className="font-semibold">before</span>{" "}
          it.
        </u>
      </p>
      <p className="mb-1 text-center">
        <span className="font-japanese">
          これ<span className="font-bold text-green-500">が</span>
          <Furigana furigana={<span className="text-xs">おおき</span>}>
            大木
          </Furigana>
          <Furigana furigana={<span className="text-xs">いぬ</span>}>
            犬
          </Furigana>
          です。
        </span>
        {"->"} As for <span className="font-bold italic">this</span>, it's a big
        dog.
      </p>
      <p className="text-sm italic">
        *The above sentence would make sense at a pet show where there are
        multiple dogs.
      </p>
      <p className="mt-1">
        The emphasis here is placed on{" "}
        <span className="font-bold italic">this</span>. In this case, the word{" "}
        <span className="font-japanese font-medium">これ</span> is much more
        important.
      </p>

      <p className="mt-1 text-center">
        <strong>Credit: </strong>
        <a
          href="https://www.youtube.com/watch?v=ytjRoTwWnzw"
          target="_blank"
          className="text-sky-600"
        >
          (YouTube) Japanese は and が Particles in 2 Minutes | (WA) vs (GA)
        </a>
      </p>

      <h2 className="mt-2 text-lg font-semibold">WH Questions and が</h2>
      <p>
        WH-words like <span className="font-japanese">だれ</span>,{" "}
        <span className="font-japanese">なに</span>,{" "}
        <span className="font-japanese">どこ</span>,{" "}
        <span className="font-japanese">どれ</span>, etc. are always followed by{" "}
        <span className="font-japanese font-bold text-green-500">が</span> when
        they are the subject of a sentence.
      </p>

      <div className="flex w-full items-center">
        <p className="w-1/4 font-semibold text-red-500">Incorrect</p>
        <p className="w-3/4">
          <span className="font-japanese line-through">
            どれ
            <span className="font-bold text-sky-400">は</span>
            田中さんのペンですか。
          </span>
        </p>
      </div>
      <div className="flex w-full items-center">
        <p className="w-1/4 font-semibold">Correct</p>
        <p className="w-3/4">
          <span className="font-japanese">
            どれ
            <span className="font-bold text-green-500">が</span>
            田中さんのペンですか。
          </span>
          {"->"} Which one is Tanaka's pen?
        </p>
      </div>

      <ul className="ml-4 mt-1 list-inside list-disc">
        <li>
          This sentence emphasizes{" "}
          <span className="font-japanese font-semibold">どれ</span> (which one)
          as the subject of the sentence{" "}
          <span className="text-sm">
            (focus on the part{" "}
            <strong>
              before <span className="font-japanese">が</span>
            </strong>
            )
          </span>
          . It directly asks which pen among several options belongs to Tanaka.
        </li>
      </ul>

      <div className="flex w-full items-center">
        <p className="w-1/4 font-bold">Also Correct</p>
        <p className="w-3/4">
          <span className="font-japanese">
            田中さんのペン
            <span className="font-bold text-sky-400">は</span>どれですか。
          </span>
          {"->"} Which one is Tanaka's pen?
        </p>
      </div>
      <ul className="ml-4 mt-1 list-inside list-disc">
        <li>
          This sentence places{" "}
          <span className="font-japanese">田中さんのペン</span> (Tanaka's pen)
          as the topic. It asks
          <span className="ml-2 border-l-[3px] border-muted-foreground pl-2">
            <span className="font-light italic">
              among these several pens,{" "}
              <span className="font-normal underline underline-offset-4">
                which one
              </span>{" "}
              is Tanaka's?
            </span>
          </span>{" "}
          (with the focus on the part{" "}
          <strong>
            after <span className="font-japanese">は</span>
          </strong>
          ).
        </li>
      </ul>
    </div>
  )
}
