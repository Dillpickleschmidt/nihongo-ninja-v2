import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"

export default async function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/useful-expressions"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Saying "You" in Japanese
      </h1>
      <div className="space-y-3 px-16 md:px-24">
        <p>
          In Japanese, addressing someone as "you" is quite nuanced and{" "}
          <span className="font-bold">often avoided</span>. Unlike English,
          where "you" is universally applicable, using direct pronouns in
          Japanese can come across as{" "}
          <span className="font-bold">rude or overly direct</span>. Instead,
          Japanese speakers prefer using names and titles, which convey respect
          and help maintain social harmony.
        </p>
        <h2 className="pb-3 pt-6 text-center text-2xl font-bold">
          Using Names and Titles Instead of "You"
        </h2>
        <p>
          Japanese speakers frequently use the person's name with an appropriate
          honorific or title, especially in formal or polite settings. This
          practice is more respectful and avoids the directness that can
          sometimes be considered impolite in Japanese culture.
        </p>
        <div></div>
        <h2 className="pb-3 pt-6 text-center text-2xl font-bold">
          Ways to Say "You" in Japanese and When to Use Them (
          <span className="underline underline-offset-4">and When Not</span>)
        </h2>
        <h3 className="pt-3 font-bold">
          <span className="font-japanese text-xl">あなた</span> (Anata)
        </h3>
        <div className="ml-4">
          <li>
            <span className="font-bold">Usage: </span>General term for "you,"
            that can sometimes be used between equals or in polite
            conversations.
          </li>
          <li>
            <span className="font-bold">Context: </span>While polite in some
            contexts, <span className="font-japanese text-xl">あなた</span> can
            also sound overly familiar or even rude if used too frequently or
            inappropriately, especially with strangers or superiors. By the time
            you learn someone's name, it's usually better to use that instead of{" "}
            <span className="font-japanese text-xl">あなた</span>.
          </li>
          <li>
            <span className="font-bold">Example Usage: </span>
            <span className="font-japanese text-xl">
              あなたは
              <Furigana furigana={<span className="text-sm">がくせい</span>}>
                学生
              </Furigana>
              ですか。
            </span>
            — Are you a student?
          </li>
        </div>
        <h3 className="pt-3 font-bold">
          <Furigana furigana={<span className="text-sm">きみ</span>}>
            君
          </Furigana>{" "}
          (Kimi)
        </h3>
        <div className="ml-4">
          <li>
            <span className="font-bold">Usage: </span>Informal term for "you,"
            often used by men towards someone of lower status or age, or by
            women towards their children or close friends.
          </li>
          <li>
            <span className="font-bold">Context: </span>Can sound affectionate
            or condescending depending on the relationship and context. It's
            more common in casual settings and should be used with caution,
            especially with people you do not know well.
          </li>
          <li>
            <span className="font-bold">Example Usage: </span>
            <span className="font-japanese text-xl">
              <Furigana furigana={<span className="text-sm">きみ</span>}>
                君
              </Furigana>
              はどう
              <Furigana furigana={<span className="text-sm">おも</span>}>
                思
              </Furigana>
              う？
            </span>
            — What do you think?
          </li>
        </div>
        <div className="ml-4">
          <h3 className="pt-3 font-bold">
            <span className="font-japanese text-xl">
              お
              <Furigana furigana={<span className="text-sm">まえ</span>}>
                前
              </Furigana>
            </span>{" "}
            (Omae)
          </h3>
          <li>
            <span className="font-bold">Usage: </span>Very informal and direct
            term for "you," often used by men.
          </li>
          <li>
            <span className="font-bold">Context: </span>Can sound rude or
            aggressive if used improperly. Suitable for very close friends or in
            confrontational contexts. Using{" "}
            <span className="font-japanese text-xl">お前</span> with strangers
            or superiors can be very disrespectful and is generally not
            recommended.
          </li>
          <li>
            <span className="font-bold">Example Usage: </span>
            <span className="font-japanese text-xl">
              お前は何をしているんだ？
            </span>
            — What the hell are you doing?
          </li>
        </div>
        <div className="ml-4">
          <h3 className="pt-3 font-bold">
            <Furigana furigana={<span className="text-sm">きさま</span>}>
              貴様
            </Furigana>{" "}
            (Kisama)
          </h3>
          <li>
            <span className="font-bold">Usage: </span>Archaic and very rude term
            for "you."
          </li>
          <li>
            <span className="font-bold">Context: </span>Almost always insulting
            or confrontational. Not used in modern polite conversation. This
            term should be avoided entirely unless you are in a historical drama
            or intend to be extremely offensive.
          </li>
          <li>
            <span className="font-bold">Example Usage: </span>
            <span className="font-japanese">
              <Furigana furigana={<span className="text-sm">きさま</span>}>
                貴様
              </Furigana>
              、
              <Furigana furigana={<span className="text-sm">ゆる</span>}>
                許
              </Furigana>
              さん！
            </span>
            — I won't forgive you mother @$#%!
          </li>
        </div>
        <div className="ml-4">
          <h3 className="pt-3 font-bold">
            <span className="font-japanese text-xl">
              あなた
              <Furigana furigana={<span className="text-sm">さま</span>}>
                様
              </Furigana>
            </span>{" "}
            (Anata-sama)
          </h3>
          <li>
            <span className="font-bold">Usage: </span>Very respectful and formal
            term for "you."
          </li>
          <li>
            <span className="font-bold">Context: </span>Used in extremely polite
            or deferential contexts, such as customer service or formal
            addresses. It conveys high respect and is suitable for addressing
            customers or in very formal situations.
          </li>
          <li>
            <span className="font-bold">Example Usage: </span>
            <span className="font-japanese">
              あなた
              <Furigana furigana={<span className="text-sm">さま</span>}>
                様
              </Furigana>
              のお
              <Furigana furigana={<span className="text-sm">なまえ</span>}>
                名前
              </Furigana>
              は？
            </span>
            — What is your name, sir/madam?
          </li>
        </div>
      </div>
    </ContentBox>
  )
}
