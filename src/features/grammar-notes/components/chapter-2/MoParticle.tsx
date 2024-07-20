import Furigana from "@/components/text/Furigana"

export default function MoParticle() {
  return (
    <div className="relative h-full w-full bg-background-secondary p-8 text-base text-black">
      <h1 className="text-center text-lg font-bold">
        <span className="font-japanese text-purple-500">も</span> Particle
      </h1>

      <h2 className="mt-3 text-lg font-semibold">Function</h2>
      <p>
        The{" "}
        <span className="font-japanese font-semibold text-purple-500">も</span>{" "}
        (mo) particle in Japanese is used to indicate that something is similar
        or in addition to something else. It translates to <strong>also</strong>
        , <strong>too</strong>, or <strong>as well</strong> in English.
      </p>

      <h2 className="mt-4 text-lg font-semibold">Basic Usage</h2>
      <ol className="ml-6 mt-1 list-decimal">
        <li>
          <span className="">When adding similar information:</span>
          <ul className="list-inside list-disc">
            <li className="mt-1">
              A:{" "}
              <span className="font-japanese text-lg">
                <Furigana furigana={<span className="text-xs">わたし</span>}>
                  私
                </Furigana>
                <span className="font-semibold text-sky-500">は</span>
                <Furigana furigana={<span className="text-xs">がくせい</span>}>
                  学生
                </Furigana>
                です。
              </span>{" "}
              {"->"} I am a student.
            </li>
            <li className="mt-1">
              B:{" "}
              <span className="font-japanese text-lg">
                <Furigana furigana={<span className="text-xs">わたし</span>}>
                  私
                </Furigana>
                <span className="font-semibold text-purple-500">も</span>
                <Furigana furigana={<span className="text-xs">がくせい</span>}>
                  学生
                </Furigana>
                です。
              </span>
              {"->"} I am{" "}
              <span className="font-semibold text-purple-500">also</span> a
              student.
            </li>
          </ul>
        </li>
        <li className="mt-2">
          <span className="">When listing multiple similar items:</span>
          <ul className="list-inside list-disc">
            <li className="mt-1">
              <span className="font-japanese text-lg">
                <Furigana furigana={<span className="text-sm">ねこ</span>}>
                  猫
                </Furigana>
                <span className="font-semibold text-purple-500">も</span>
                <Furigana furigana={<span className="text-sm">いぬ</span>}>
                  犬
                </Furigana>
                <span className="font-semibold text-purple-500">も</span>
                <Furigana furigana={<span className="text-sm">す</span>}>
                  好
                </Furigana>
                きです。
              </span>
              {"->"} <span className="">(I)</span> like <em>both</em> cats{" "}
              <em>and</em> dogs.
            </li>
          </ul>
        </li>
      </ol>

      {/* <div className="mt-3 flex justify-center">
        <div className="mb-3 border-b-2 border-black">
          <h2 className="text-lg font-semibold italic">Example Sentences</h2>
        </div>
      </div>
      <div className="text-center">
        <p>
          <span className="font-japanese">この鞄は田中さんの鞄です。</span>
        </p>
        <p className="text-sm">This bag is Tanaka's bag.</p>
        <p>
          <span className="font-japanese">あの鞄も田中さんの鞄です。</span>
        </p>
        <p className="text-sm">That bag (over there) is also Tanaka's bag.</p>
      </div> */}

      <h2 className="mt-4 text-lg font-semibold">
        Positioning{" "}
        <span className="font-japanese font-bold text-purple-500">も</span> in
        Sentences
      </h2>

      <p>
        The position of{" "}
        <span className="font-japanese font-semibold text-purple-500">も</span>{" "}
        in a sentence can change its meaning. Compare the following sentences:
      </p>
      <ol className="ml-6 mt-1 list-decimal space-y-2">
        <li>
          <span className="font-japanese text-lg">
            <Furigana furigana={<span className="text-xs">わたし</span>}>
              私
            </Furigana>
            <span className="font-japanese font-semibold text-purple-500">
              も
            </span>
            <Furigana furigana={<span className="text-xs">せんこう</span>}>
              専攻
            </Furigana>
            <span className="font-japanese font-semibold text-sky-500">は</span>
            <Furigana furigana={<span className="text-xs">にほんご</span>}>
              日本語
            </Furigana>
            です。
          </span>
          {"->"} I'm also a Japanese major.{" "}
          <span className="text-base">
            (Implying other people are Japanese majors, and I am too.)
          </span>
        </li>
        <li>
          <span className="font-japanese text-lg">
            <Furigana furigana={<span className="text-xs">わたし</span>}>
              私
            </Furigana>
            <span className="font-japanese font-semibold text-sky-500">は</span>
            <Furigana furigana={<span className="text-xs">にほんご</span>}>
              日本語
            </Furigana>
            <span className="font-japanese font-semibold text-purple-500">
              も
            </span>
            <Furigana furigana={<span className="text-xs">せんこう</span>}>
              専攻
            </Furigana>
            です。
          </span>
          {"->"} As for me, I also have a Japanese major.{" "}
          <span className="text-base">
            (Implying I have other majors, and Japanese is one of them.)
          </span>
        </li>
      </ol>
      <p className="mt-2 text-sm italic">
        *Place <span className="font-japanese not-italic">も</span> after the
        noun there are more than one of.
      </p>
      <p className="mt-2">
        In the first sentence, <span className="font-japanese">も</span> is
        placed after 私 (I), indicating that the speaker, like someone else, is
        a Japanese major. In the second sentence,{" "}
        <span className="font-japanese">も</span> is placed after{" "}
        <span className="font-japanese">日本語</span> (Japanese), indicating
        that the speaker has multiple majors, and Japanese is one of them.
      </p>

      <h2 className="mt-4 text-lg font-semibold">
        When not to use{" "}
        <span className="font-japanese font-bold text-purple-500">も</span>
      </h2>
      <p className="-mt-2">
        For questions using words like{" "}
        <Furigana furigana={<span className="text-xs">だれ</span>}>誰</Furigana>
        ,{" "}
        <Furigana furigana={<span className="text-xs">なに</span>}>何</Furigana>
        , <span className="font-japanese">どこ</span>, etc., using{" "}
        <span className="font-japanese font-semibold text-green-500">が</span>{" "}
        is more appropriate.{" "}
        <span className="font-japanese font-semibold text-purple-500">も</span>{" "}
        would imply something else entirely which we'll look at in a later
        chapter.
      </p>
      <p>
        <span className="font-japanese line-through">
          誰
          <span className="font-japanese font-semibold text-purple-500">
            も
          </span>
          来きますか。
        </span>
        <span className="ml-4 font-japanese">
          誰
          <span className="font-japanese font-semibold text-green-500">が</span>
          来きますか。
        </span>
        {"->"} Who is coming?
      </p>
    </div>
  )
}
