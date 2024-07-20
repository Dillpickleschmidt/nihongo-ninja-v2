import Furigana from "@/components/text/Furigana"

export default function MasuForm() {
  return (
    <div className="relative h-full w-full bg-background-secondary p-8 text-base text-black">
      <h1 className="mb-4 text-center text-2xl font-bold">
        Godan/Ichidan Verbs and{" "}
        <span className="font-japanese text-emerald-500">ます</span> Form
      </h1>

      <div>
        <h2 className="mb-1 text-xl font-semibold">Types of Japanese Verbs</h2>
        <ol className="list-inside list-decimal space-y-1">
          <li>
            <span className="font-bold">
              Godan (<span className="font-japanese">五段</span>) Verbs
            </span>
            <ul className="ml-4 list-inside list-disc">
              <li>Also known as U-verbs</li>
              <li>
                End with an <span className="font-japanese">う</span> sound in
                dictionary form
              </li>
              <li>
                Examples: <span className="font-japanese">聞く</span> (kiku),{" "}
                <span className="font-japanese">読む</span> (yomu),{" "}
                <span className="font-japanese">話す</span> (hanasu)
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">
              Ichidan (<span className="font-japanese">一段</span>) Verbs
            </span>
            <ul className="ml-4 list-inside list-disc">
              <li>
                End with <u>iru</u> or <u>eru</u> sound in dictionary form
              </li>
              <li>
                Examples: <span className="font-japanese">食べる</span> (tab
                <u>eru</u>), <span className="font-japanese">見る</span> (m
                <u>iru</u>), <span className="font-japanese">起きる</span> (ok
                <u>iru</u>)
              </li>
            </ul>
          </li>
          <li>
            <span className="font-bold">Irregular Verbs</span>
            <ul className="ml-4 list-inside list-disc">
              <li>Don't follow standard rules</li>
              <li>
                Main examples: <span className="font-japanese">する</span>{" "}
                (suru), <span className="font-japanese">来る</span> (kuru)
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="absolute right-14 mt-6 text-right">
        <h2 className="mb-2 mr-1 text-3xl font-semibold">
          <span className="font-japanese font-bold text-emerald-500">ます</span>{" "}
          Form
        </h2>
        <p>Polite form used for:</p>
        <ol className="text-xl font-semibold">
          <li>Habitual actions</li>
          <li>Future tense</li>
        </ol>
      </div>

      <h2 className="mb-1 mt-4 text-xl font-semibold">Conjugation Rules</h2>
      <ol className="list-inside list-decimal space-y-1">
        <li>
          <span className="font-bold">Godan Verbs:</span>
          <ul className="ml-4 list-inside list-disc">
            <li className="underline">Change last syllable to "i" sound</li>
            <li>
              Add <span className="font-japanese">ます</span>
            </li>
            <li>
              Example:{" "}
              <span className="font-japanese">
                聞<span className="underline underline-offset-2">く</span>
              </span>{" "}
              (kiku) {"->"}{" "}
              <span className="font-japanese">
                聞<span className="underline underline-offset-2">き</span>ます
              </span>{" "}
              (kikimasu)
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Ichidan Verbs:</span>
          <ul className="ml-4 list-inside list-disc">
            <li className="underline">
              Remove <span className="font-japanese">る</span>
            </li>
            <li>
              Add <span className="font-japanese">ます</span>
            </li>
            <li>
              Example:{" "}
              <span className="font-japanese">
                食べ<span className="underline underline-offset-2">る</span>
              </span>{" "}
              (taberu) {"->"} <span className="font-japanese">食べます</span>{" "}
              (tabemasu)
            </li>
          </ul>
        </li>
        <li>
          <span className="font-bold">Irregular Verbs:</span>
          <ul className="ml-4 list-inside list-disc">
            <li>
              <span className="font-japanese">する</span> {"->"}{" "}
              <span className="font-japanese">します</span> (shimasu)
            </li>
            <li>
              <span className="font-japanese">来る</span> {"->"}{" "}
              <span className="font-japanese">来ます</span> (kimasu)
            </li>
          </ul>
        </li>
      </ol>

      <div className="mt-2 flex items-center justify-between">
        <h2 className="max-w-32 text-center font-semibold">
          Godan Verb Ending Examples
        </h2>
        <div className="flex w-full justify-center">
          <div className="grid grid-cols-3 gap-x-6 gap-y-0 font-japanese text-lg">
            <div>
              <Furigana furigana={<span className="text-xs">うた</span>}>
                歌
              </Furigana>
              <span className="font-medium">う</span>{" "}
              <span className="font-inter">{"->"}</span> 歌
              <span className="font-medium">い</span>ます
            </div>
            <div>
              <Furigana furigana={<span className="text-xs">き</span>}>
                聞
              </Furigana>
              <span className="font-medium">く</span>{" "}
              <span className="font-inter">{"->"}</span> 聞
              <span className="font-medium">き</span>ます
            </div>
            <div>
              <Furigana furigana={<span className="text-xs">およ</span>}>
                泳
              </Furigana>
              <span className="font-medium">ぐ</span>{" "}
              <span className="font-inter">{"->"}</span> 泳
              <span className="font-medium">ぎ</span>ます
            </div>
            <div>
              <Furigana furigana={<span className="text-xs">はな</span>}>
                話
              </Furigana>
              <span className="font-medium">す</span>{" "}
              <span className="font-inter">{"->"}</span> 話
              <span className="font-medium">し</span>ます
            </div>
            <div>
              <Furigana furigana={<span className="text-xs">も</span>}>
                持
              </Furigana>
              <span className="font-medium">つ</span>{" "}
              <span className="font-inter">{"->"}</span> 持
              <span className="font-medium">ち</span>ます
            </div>
            <div>
              <Furigana furigana={<span className="text-xs">し</span>}>
                死
              </Furigana>
              <span className="font-medium">ぬ</span>{" "}
              <span className="font-inter">{"->"}</span> 死
              <span className="font-medium">に</span>ます
            </div>
            <div>
              <Furigana furigana={<span className="text-xs">あそ</span>}>
                遊
              </Furigana>
              <span className="font-medium">ぶ</span>{" "}
              <span className="font-inter">{"->"}</span>遊
              <span className="font-medium">び</span>ます
            </div>
            <div>
              <Furigana furigana={<span className="text-xs">の</span>}>
                飲
              </Furigana>
              <span className="font-medium">む</span>{" "}
              <span className="font-inter">{"->"}</span>
              <span className="font-medium">み</span>ます
            </div>
            <div>
              <Furigana furigana={<span className="text-xs">かえ</span>}>
                帰
              </Furigana>
              <span className="font-medium">る</span>{" "}
              <span className="font-inter">{"->"}</span>帰
              <span className="font-medium">り</span>ます
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-6 text-sm font-light italic">
        *Think shifting characters from the{" "}
        <span className="font-japanese not-italic">う</span> to the{" "}
        <span className="font-japanese not-italic">い</span> column.
      </div>

      <div className="mt-3">
        <h2 className="text-lg font-semibold">
          Note on <span className="font-japanese">する</span> Compounds
        </h2>
        <ul className="list-inside list-disc">
          <li>
            Many nouns + <span className="font-japanese">する</span> create
            compound verbs
          </li>
          <li>
            Example: <span className="font-japanese">勉強する</span> {"->"}{" "}
            <span className="font-japanese">勉強します</span>
          </li>
        </ul>
      </div>

      <div className="absolute bottom-4 right-6 text-sm italic">
        *Change{" "}
        <span className="font-japanese not-italic text-emerald-500">ます</span>{" "}
        to{" "}
        <span className="font-japanese not-italic text-orange-400">ません</span>{" "}
        for negative!
      </div>
    </div>
  )
}
