export default function MoParticle() {
  return (
    <div className="h-full w-full bg-background-secondary p-8 text-base text-black">
      <h1 className="text-center text-xl font-bold">
        <span className="font-japanese text-red-500">も</span> Particle
      </h1>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">Function</h2>
        <p>
          The <span className="font-japanese text-red-500">も</span> (mo)
          particle in Japanese is used to indicate that something is similar or
          in addition to something else. It translates to "also", "too", or "as
          well" in English.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Basic Usage</h2>
        <p>When adding similar information:</p>
        <p>
          A: <span className="font-japanese">私は学生です。</span> {"->"} I am a
          student.
        </p>
        <p>
          B: <span className="font-japanese">私も学生です。</span> {"->"} I am
          also a student.
        </p>
        <p>When listing multiple similar items:</p>
        <p>
          <span className="font-japanese">猫も犬も好きです。</span> {"->"} (I)
          like both cats and dogs.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Example Sentences</h2>
        <div className="text-center">
          <p>
            <span className="font-japanese">田中は日本人です。</span> {"->"}{" "}
            Takana is Japanese.
          </p>
          <p>
            <span className="font-japanese">石田も日本人です。</span> {"->"}{" "}
            Ishida is also Japanese.
          </p>
          <p>
            <span className="font-japanese">これは私の鞄です。</span> {"->"}{" "}
            This is my bag.
          </p>
          <p>
            <span className="font-japanese">これも私の鞄です。</span> {"->"}{" "}
            This is also my bag.
          </p>
          <p>
            <span className="font-japanese">あの鞄も田中さんの鞄です。</span>{" "}
            {"->"} That bag (over there) is also Tanaka's bag.
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Positioning も in Sentences</h2>
        <p>
          The position of <span className="font-japanese text-red-500">も</span>{" "}
          in a sentence can change its meaning. Compare the following sentences:
        </p>
        <p>
          <span className="font-japanese">私も専攻は日本語です。</span> {"->"}{" "}
          I'm also a Japanese major. (Implying other people are Japanese majors,
          and I am too.)
        </p>
        <p>
          <span className="font-japanese">私は日本語も専攻です。</span> {"->"}{" "}
          As for me, I also have a Japanese major. (Implying I have other
          majors, and Japanese is one of them.)
        </p>
        <p>
          *Place <span className="font-japanese text-red-500">も</span> after
          the noun there are more than one of.
        </p>
      </div>
    </div>
  )
}
