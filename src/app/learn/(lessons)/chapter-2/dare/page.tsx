import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/mo-particle"
      showProgressBar={false}
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Asking Who with <span className="font-japanese text-red-500">だれ</span>
      </h1>
      <div className="space-y-6 px-8 sm:px-16 md:px-24">
        <h3 className="!mt-12 text-2xl font-bold">
          <span className="font-japanese text-3xl">
            <Furigana furigana={<span className="text-lg">だれ</span>}>
              誰
            </Furigana>
          </span>{" "}
          - Who
        </h3>
        <ul className="!mt-2 list-inside list-disc space-y-2">
          <li>
            <strong>Function: </strong>
            <span className="font-japanese">だれ</span> is used to ask{" "}
            <span className="font-black">who</span> in Japanese. It is a
            question word that helps identify a person among many.
          </li>
          <li>
            <strong>Usage: </strong>Use{" "}
            <span className="font-japanese">だれ</span> when you want to know
            the identity of someone.
          </li>
        </ul>
        <h4 className="text-xl font-bold">Example Sentences</h4>
        <ol className="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            You notice a new student sitting across the room in class.
            <p className="mt-2">
              <span className="font-japanese text-xl">
                あの
                <Furigana furigana={<span className="text-sm">がくせい</span>}>
                  学生
                </Furigana>
                はだれですか。
              </span>
              {"->"} Who is that student?
            </p>
          </li>
          <li>
            Your young Japanese teacher just started teaching straight out of
            college and is indestinguishable from your peers.
            <p className="mt-2">
              <span className="font-japanese text-xl">
                あのう、だれが
                <Furigana furigana={<span className="text-sm">せんせい</span>}>
                  先生
                </Furigana>
                ですか。
              </span>
              {"->"} Um... who is the teacher?
            </p>
          </li>
          <li>
            You hear a knock on the door.
            <p className="mt-2">
              <span className="font-japanese text-xl">だれですか。</span>
              {"->"} Who is it?
            </p>
          </li>
        </ol>

        <h3 className="!mt-12 text-2xl font-bold">
          <span className="font-japanese text-3xl">
            <Furigana furigana={<span className="text-lg">だれ</span>}>
              誰
            </Furigana>
          </span>
          の - Whose
        </h3>
        <ul className="!mt-2 list-inside list-disc space-y-2">
          <li>
            <strong>Function: </strong>
            <span className="font-japanese">だれの</span> is used to ask{" "}
            <span className="font-black">whose</span> something is. It combines{" "}
            <span className="text-nowrap font-japanese">だれ</span> (who) with{" "}
            <span className="font-japanese">の</span> (a possessive particle) to
            inquire about ownership.
          </li>
          <li>
            <strong>Usage: </strong>Use{" "}
            <span className="font-japanese">だれの</span> when you want to know
            the owner of an item.
          </li>
        </ul>
        <h4 className="text-xl font-bold">Example Sentences</h4>
        <ol className="!mt-4 ml-6 list-decimal space-y-2">
          <li>
            You find a wallet on the floor
            <p className="mt-2">
              <span className="font-japanese text-xl">
                これはだれの
                <Furigana furigana={<span className="text-sm">さいふ</span>}>
                  財布
                </Furigana>
                ですか。
              </span>
              {"->"} Whose wallet is this?
            </p>
          </li>
          <li>
            You're walking to your seat and notice a bag on your desk.
            <p className="mt-2">
              <span className="font-japanese text-xl">
                これはだれの
                <Furigana furigana={<span className="text-sm">かばん</span>}>
                  鞄
                </Furigana>
                ですか。
              </span>
              {"->"} Whose bag is this?
            </p>
          </li>
          <li>
            Your professor finds an extravagant sombrero left behind in the
            lecture hall.
            <p className="mt-2">
              <span className="font-japanese text-xl">
                えっと。。。だれの
                <Furigana furigana={<span className="text-sm">ぼうし</span>}>
                  帽子
                </Furigana>
                ですか。
              </span>
              {"->"} Uh... whose hat is this?
            </p>
          </li>
        </ol>
      </div>

      <div className="space-y-4 px-8 leading-8 sm:px-16 md:px-24 [&>*]:space-y-4">
        <h3 className="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p>
          You notice a skinny old man at the gym lift twice your max. You turn
          your head and whisper to your friend:
        </p>
        <SelectText
          answer="あのおじいさんはだれですか。"
          a="あのおじいさんはだれのですか。"
          b="そのおじいさんはだれですか。"
          c="あのおじさんはだれですか。"
          d="あのおじいさんはだれですか。"
          className="text-xl"
        />
        <p>
          Someone crazy-looking comes up to you and proclaims to be your
          long-lost brother, but you're at least willing to hear them out...
        </p>
        <SelectText
          answer="あのう、すみませんが、だれですか。"
          a="あのう、だれのか。"
          b="あのう、すみませんが、だれですか。"
          c="あのう、だれの。"
          d="あのう、すみませんが、だれのか。"
          className="text-xl"
        />
        <p>
          Someone left their umbrella in the stand, and your shop is closing for
          the day. You turn and ask your remaining colleagues:
        </p>
        <SelectText
          answer="だれのかさですか。"
          a="このかさはだれですか。"
          b="だれのかさですか。"
          c="かさはだれですか。"
          d="これはだれですか。"
          className="text-xl"
        />
      </div>
    </ContentBox>
  )
}
