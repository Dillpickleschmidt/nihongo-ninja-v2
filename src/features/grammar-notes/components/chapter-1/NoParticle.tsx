import Furigana from "@/components/text/Furigana"

export default function NoParticle() {
  return (
    <div className="h-full w-full bg-background-secondary p-8 text-base text-black">
      <h1 className="text-center text-xl font-bold">
        <span className="font-japanese text-sky-500">の</span> Particle
      </h1>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">Function</h2>
        <p>
          Connects two nouns, indicating possession or a close relationship.
          Similar to the apostrophe-s ('s) in English, but it's better to think
          of it as a noun connector.
        </p>
      </div>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">Structure</h2>
        <p>
          [Noun 1] + <span className="font-japanese text-sky-500">の</span> +
          [Noun 2]
        </p>
        <p>Noun 1 is the owner, and Noun 2 is the possessed item.</p>
      </div>
      <div className="mt-4 text-center">
        <div className="flex justify-center">
          <div className="border-b-2 border-black">
            <h2 className="text-lg font-semibold italic">Example Sentences</h2>
          </div>
        </div>
        <div className="mt-3">
          <p>
            <span className="font-japanese">たけしさんのでんわばんご</span> -
            Takeshi's phone number
          </p>
          <p>
            <span className="font-japanese">わたしのほん</span> - My book
          </p>
          <p>
            <span className="font-japanese">せんせいのくるま</span> - Teacher's
            car
          </p>
          <p>
            <span className="font-japanese">さとうさんのおかあさん</span> -
            Satou's mother
          </p>
          <p>
            <span className="font-japanese">おとうさんのくるま</span> - Father's
            car
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">
          Connecting More Than Two Nouns
        </h2>
        <p>
          You can string together multiple{" "}
          <span className="font-japanese text-sky-500">の</span> particles in a
          single sentence:
        </p>

        <p className="mt-4">
          Example:{" "}
          <span className="font-japanese">
            <Furigana furigana={<span className="text-sm">あめりか</span>}>
              アメリカ
            </Furigana>
            <span className="text-sky-500">の</span>ともだち
            <span className="text-sky-500">の</span>
            <Furigana furigana={<span className="text-sm">かめら</span>}>
              カメラ
            </Furigana>
          </span>{" "}
          - American friend's camera
        </p>
        <p>
          Example:{" "}
          <span className="font-japanese">
            にほんご<span className="text-sky-500">の</span>せんせい
            <span className="text-sky-500">の</span>とけい
          </span>{" "}
          - Japanese teacher's watch
        </p>
      </div>
    </div>
  )
}
