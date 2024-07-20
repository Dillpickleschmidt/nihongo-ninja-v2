export default function XwaYdesu() {
  return (
    <div className="relative h-full w-full bg-background-secondary p-8 text-base text-black">
      <h1 className="text-center text-xl font-bold">
        <span className="font-japanese text-indigo-500">は</span> Particle
      </h1>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">Function</h2>
        <p>
          Marks the <span className="font-bold">topic</span> of the sentence,
          indicating what the sentence is about. You can translate it to "as
          for" or "regarding" if that helps.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Pronunciation</h2>
        <p>
          Written as <span className="font-japanese text-indigo-500">は</span>{" "}
          (ha) but pronounced "wa" when used as a particle.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Notes</h2>
        <p>
          Oftentimes, Japanese speakers will drop the topic +{" "}
          <span className="font-japanese text-indigo-500">は</span> if it is
          clear from context.
        </p>
      </div>
      <div className="mt-4">
        <h1 className="text-center text-xl font-bold">
          X<span className="font-japanese text-indigo-500">は</span>Y
          <span className="font-japanese text-red-500">です</span> (X wa Y desu)
        </h1>
      </div>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">Structure</h2>
        <p>
          X (topic) + <span className="font-japanese text-indigo-500">は</span>{" "}
          (wa) + Y (predicate) +{" "}
          <span className="font-japanese text-red-500">です</span> (desu)
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Meaning</h2>
        <p>
          <span className="font-bold">X is Y</span>. Used to state facts,
          describe characteristics, or introduce someone/something.
        </p>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">Usage</h2>
        <p>
          <span className="font-japanese text-indigo-500">は</span> (wa) marks
          the topic, <span className="font-japanese text-red-500">です</span>{" "}
          (desu) adds politeness and helps indicate the predicate.
        </p>
      </div>
      <div className="mt-4 text-center">
        <div className="flex justify-center">
          <div className="mb-3 border-b-2 border-black">
            <h2 className="text-lg font-semibold italic">Example Sentences</h2>
          </div>
        </div>
        <p>
          <span className="font-japanese">わたし は がくせい です。</span> - I
          am a student.
        </p>
        <p>
          <span className="font-japanese">わたし は [name] です。</span> - My
          name is [name].
        </p>
        <p>
          <span className="font-japanese">せんこう は けいざい です。</span> -
          (My) major is economics.
        </p>
        <h3 className="my-3 font-semibold italic">Or...</h3>
        <p>
          <span className="font-japanese">がくせい です。</span> - (I am) a
          student.
        </p>
        <p>
          <span className="font-japanese">[name] です。</span> - (My) name is
          [name].
        </p>
        <p>
          <span className="font-japanese">けいざい です。</span> - (My major) is
          economics.
        </p>
      </div>
    </div>
  )
}
