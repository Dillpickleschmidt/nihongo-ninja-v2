import Furigana from "@/components/text/Furigana"

export default function WoDeNiEParticles() {
  return (
    <div className="relative h-full w-full bg-background-secondary p-8 text-base text-black">
      <h1 className="text-center text-xl font-bold">
        Understanding The <span className="font-japanese text-red-500">を</span>
        , <span className="font-japanese text-orange-400">で</span>,{" "}
        <span className="font-japanese text-green-500">に</span>, and{" "}
        <span className="font-japanese text-sky-400">へ</span> Particles
      </h1>

      <div className="mt-3">
        <h2 className="text-lg font-semibold">
          Function of{" "}
          <span className="font-japanese text-xl font-bold text-red-500">
            を
          </span>{" "}
          (o)
        </h2>
        <p>
          The particle{" "}
          <span className="font-japanese font-semibold text-red-500">を</span>{" "}
          marks the <u>direct object</u> of an action verb. It indicates what or
          who is receiving the action.
        </p>
      </div>

      <div className="mt-2 text-center">
        <p>
          <span className="font-japanese">本を読みます。</span> - I read a book.
        </p>
        <p>
          <span className="font-japanese">日本語を勉強します。</span> - I study
          Japanese.
        </p>
      </div>

      <h2 className="mt-4 text-lg font-semibold">
        Function of{" "}
        <span className="font-japanese text-xl font-bold text-orange-400">
          で
        </span>{" "}
        (de)
      </h2>
      <p>
        The particle{" "}
        <span className="font-japanese font-semibold text-orange-400">で</span>{" "}
        indicates the <u>means</u> by which an action is performed, the{" "}
        <u>location</u> where an action takes place, or <u>reason/cause</u>.
      </p>
      <p className="mt-2">
        <strong>Think "utilization":</strong> If you can rephrase the sentence
        as "I utilize A to do B," then{" "}
        <span className="font-japanese font-semibold text-orange-400">で</span>{" "}
        is likely correct.
      </p>

      <div className="mt-2 text-center">
        <p>
          <span className="font-japanese">ペンで書きます。</span> - I write with
          a pen.
        </p>
        <p>
          <span className="font-japanese">図書館で 勉強します。</span> - I study
          at the library.
        </p>
      </div>

      <h2 className="mt-4 text-lg font-semibold">
        Function of{" "}
        <span className="font-japanese text-xl font-bold text-green-500">
          に
        </span>{" "}
        (ni) and{" "}
        <span className="font-japanese text-xl font-bold text-sky-400">へ</span>{" "}
        (e)
      </h2>
      <p>
        The particles{" "}
        <span className="font-japanese font-semibold text-green-500">に</span>{" "}
        and <span className="font-japanese font-semibold text-sky-400">へ</span>{" "}
        are often used interchangeably to indicate <u>direction</u> or{" "}
        <u>destination</u>.
      </p>
      <p className="mt-2">
        <span className="font-japanese font-semibold text-green-500">に</span>{" "}
        has additional uses:
      </p>
      <ul className="list-inside list-disc">
        <li>Specific point in time</li>
        <li>Indirect object</li>
        <li>
          Location of existence (with{" "}
          <span className="font-japanese">いる</span> and{" "}
          <span className="font-japanese">ある</span>)
        </li>
      </ul>

      <div className="mt-2 text-center">
        <p>
          <span className="font-japanese">学校に行きます。</span> /{" "}
          <span className="font-japanese">学校へ行きます。</span> - I go to
          school.
        </p>
        <p>
          <span className="font-japanese">7時に起きます。</span> - I wake up at
          7 o'clock.
        </p>
        <p>
          <span className="font-japanese">友達に プレゼントをあげます。</span> -
          I give a present to my friend.
        </p>
      </div>

      <h2 className="mt-6 text-lg font-semibold">
        Key Differences:{" "}
        <span className="font-japanese text-orange-400">で</span> vs{" "}
        <span className="font-japanese text-green-500">に</span>
      </h2>
      <p>
        Use{" "}
        <span className="font-japanese font-semibold text-orange-400">で</span>{" "}
        for locations where actions occur. Use{" "}
        <span className="font-japanese font-semibold text-green-500">に</span>{" "}
        for destinations, points in time, or locations of existence.
      </p>

      <div className="mt-2 text-center">
        <p>
          <span className="font-japanese">
            図書館<span className="font-bold text-orange-400">で</span>
            勉強します。
          </span>{" "}
          - I study at the library. (Action location)
        </p>
        <p>
          <span className="font-japanese">
            図書館<span className="font-bold text-green-500">に</span>行きます。
          </span>{" "}
          - I go to the library. (Destination)
        </p>
        <p>
          <span className="font-japanese">
            図書館<span className="font-bold text-green-500">に</span>
            本があります。
          </span>{" "}
          - There are books in the library. (Existence)
        </p>
      </div>
    </div>
  )
}
