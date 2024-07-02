import Furigana from "@/components/text/Furigana"

export default function Dare() {
  return (
    <div className="h-full w-full bg-background-secondary p-8 text-base text-black">
      <h1 className="text-center text-xl font-bold">
        Asking Who with <span className="font-japanese text-red-500">だれ</span>
      </h1>
      <div className="mt-3">
        <h2 className="text-lg font-semibold">Function</h2>
        <p>
          <span className="font-japanese font-semibold text-red-500">
            誰 (だれ)
          </span>{" "}
          is used to ask <strong>who</strong> in Japanese. It is a question word
          that helps identify a person among many.
        </p>
      </div>
      <div className="mt-4">
        <div className="flex justify-center">
          <div className="mb-3 border-b-2 border-black">
            <h2 className="text-lg font-semibold italic">Example Sentences</h2>
          </div>
        </div>
        <div className="text-center">
          <p>
            <span className="font-japanese">
              あの
              <Furigana furigana={<span className="text-xs">がくせい</span>}>
                学生
              </Furigana>
              はだれですか。
            </span>{" "}
            - Who is that student?
          </p>
          <p>
            <span className="font-japanese">
              あのう、だれが
              <Furigana furigana={<span className="text-xs">がくせい</span>}>
                先生
              </Furigana>
              ですか。
            </span>{" "}
            - Um... who is the teacher?
          </p>
          <p className="mt-2">
            <span className="font-japanese">だれですか。</span> - Who is it?
          </p>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold">だれの - Whose</h2>
        <p>
          <span className="font-japanese">だれの</span> is used to ask whose
          something is. It combines <span className="font-japanese">だれ</span>{" "}
          (who) with <span className="font-japanese">の</span> (a possessive
          particle) to inquire about ownership.
        </p>
      </div>
      <div className="mt-4 text-center">
        <div className="flex justify-center">
          <div className="mb-3 border-b-2 border-black">
            <h2 className="text-lg font-semibold italic">Example Sentences</h2>
          </div>
        </div>
        <p>
          <span className="font-japanese">
            これはだれの
            <Furigana furigana={<span className="text-xs">さいふ</span>}>
              財布
            </Furigana>
            ですか。
          </span>{" "}
          - Whose wallet is this?
        </p>
        <p>
          <span className="font-japanese">
            これはだれの
            <Furigana furigana={<span className="text-xs">かばん</span>}>
              鞄
            </Furigana>
            ですか。
          </span>{" "}
          - Whose bag is this?
        </p>
        <p>
          <span className="font-japanese">
            だれの
            <Furigana furigana={<span className="text-xs">ぼうし</span>}>
              帽子
            </Furigana>
            ですか。
          </span>{" "}
          - Whose hat is this?
        </p>
      </div>
    </div>
  )
}
