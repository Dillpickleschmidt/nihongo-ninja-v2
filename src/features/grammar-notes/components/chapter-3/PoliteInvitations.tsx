import Furigana from "@/components/text/Furigana"

export default function PoliteInvitations() {
  return (
    <div className="h-full w-full bg-background-secondary p-8 text-base text-black">
      <h1 className="text-center text-xl font-bold">
        Polite Invitations with{" "}
        <span className="font-japanese text-teal-500">ませんか</span>
      </h1>

      <div className="mt-3">
        <h2 className="text-lg font-semibold">Structure</h2>
        <p>
          Verb (negative <span className="font-japanese">ます</span> form) +{" "}
          <span className="font-japanese">か</span>
        </p>
      </div>

      <div className="mt-2 text-center">
        <p className="font-japanese">映画を見ませんか。</p>
        <p className="text-sm">Would you like to watch a movie?</p>
      </div>

      <h2 className="mt-1 text-lg font-semibold">Usage</h2>
      <ul className="list-inside list-disc">
        <li>Polite way to suggest doing something together</li>
        <li>Equivalent to "Won't you...?" or "Why don't we...?" in English</li>
      </ul>

      <div className="mt-2 text-center">
        <p className="font-japanese">一緒に食べませんか。</p>
        <p className="text-sm">Would you like to eat together?</p>
      </div>

      <h2 className="mt-4 text-center text-lg font-semibold">
        Accepting an Invitation
      </h2>
      <p className="mt-1">
        Use <span className="font-japanese">いいです</span> with particles like{" "}
        <span className="font-japanese">ね</span> or{" "}
        <span className="font-japanese">よ</span>:
      </p>

      <div className="mt-2">
        <div className="flex w-full items-center">
          <p className="w-1/4 font-semibold">Invitation:</p>
          <p className="w-3/4 font-japanese">映画を見ませんか。</p>
        </div>
        <div className="flex w-full items-center">
          <p className="w-1/4 font-semibold">Accepting:</p>
          <p className="w-3/4 font-japanese">
            はい、いいですね。 / いいですよ。
          </p>
        </div>
      </div>

      <h2 className="mt-4 text-center text-lg font-semibold">
        Declining an Invitation
      </h2>
      <p className="mt-1">Use indirect methods to politely decline:</p>

      <div className="mt-2">
        <h3 className="text-base font-semibold">
          <span className="font-japanese">ちょっと</span> (chotto)
        </h3>
        <ul className="list-inside list-disc">
          <li>Literal meaning: "A little" or "slightly"</li>
          <li>Used as a softener for indirect refusal</li>
        </ul>
        <p className="mt-1 text-center font-japanese">
          あ、今日は
          <span className="font-medium text-orange-500">ちょっと</span>...
        </p>
        <p className="text-center text-sm">Ah, today is a bit...</p>
      </div>

      <div className="mt-1">
        <h3 className="text-base font-semibold">
          <span className="font-japanese">大丈夫</span> (daijōbu)
        </h3>
        <ul className="list-inside list-disc">
          <li>Literal meaning: "All right" or "OK"</li>
          <li>Used for polite refusal</li>
        </ul>
        <p className="mt-1 text-center font-japanese">
          ありがとうございます。でも、
          <span className="font-medium text-green-500">大丈夫</span>です。
        </p>
        <p className="text-center text-sm">Thank you, but I'm fine.</p>
      </div>

      <h2 className="mt-3 text-lg font-semibold">Additional Usage</h2>
      <p>
        <span className="font-japanese">ませんか</span> can occasionally be used
        to confirm a negative statement:
      </p>
      <div className="mt-2 text-center">
        <p className="font-japanese">そうですか。全然しませんか。</p>
        <p className="text-sm">Is that so? He doesn't study at all?</p>
      </div>
    </div>
  )
}
