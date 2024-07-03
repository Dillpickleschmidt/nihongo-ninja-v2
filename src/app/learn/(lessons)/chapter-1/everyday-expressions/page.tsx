import ContentBox from "@/features/content-box/ContentBox"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import VocabCard from "@/features/vocab-card/components/VocabCard"

export default async function page() {
  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/jpdb"
    >
      {/* <h1 className="px-20 pb-12 pt-28 text-center text-3xl font-medium leading-[2.75rem]">
        Exhausted from dancing with digits all day? Are you feeling like a ninja
        calculator from Japan, secretly number-crunching in the shadows? Fear
        not! We've got the perfect antidote—a single, magical word that's your
        golden ticket to broadcasting your vast knowledge to the world.
      </h1> */}
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Everyday Expressions
      </h1>
      <div className="m-6">
        <VocabCard
          index={0}
          kana={"（～を）おねがいします"}
          english="Please (give me) X. / I'd like to request X."
        >
          <li>
            <span className="font-bold">Usage: </span>Used when politely
            requesting something or asking for a favor.
          </li>
          <li>
            <span className="font-bold">Context: </span>This phrase is commonly
            heard in restaurants, shops, and formal situations. It conveys a
            high level of politeness and respect, making it suitable for
            professional and respectful interactions.
          </li>
          <li>
            <span className="font-bold">Example Usage: </span>
            <span className="font-japanese text-xl">
              <Furigana furigana={<span className="text-sm">みず</span>}>
                水
              </Furigana>
              をおねがいします。
            </span>{" "}
            — Water, please.
          </li>
          <li>
            Note that in this context, we use the{" "}
            <span className="font-japanese">～を</span>(o) particle to indicate
            the object we're referring to (more on this in a later lesson).
          </li>
          <li>
            ～ is the Japanese equavalent of "X" or "_", meaning
            "fill-in-the-blank." Japanese speakers might read it aloud as{" "}
            <span className="font-japanese">なになに</span>.
          </li>
        </VocabCard>
        <p className="my-6 px-16">
          In Japan, showing politeness and respect in social interactions is
          crucial. The phrase{" "}
          <span className="font-japanese">（～を）おねがいします</span> is often
          used when you want to make a request politely. For instance, in a
          restaurant, you might use it to ask for water, or at a store, you
          could use it when requesting assistance. It emphasizes your politeness
          and consideration for the other person's effort. This phrase is
          versatile and can be used in both formal and informal settings to show
          a high level of respect.
        </p>

        <VocabCard
          index={1}
          kana={"（～を）ください"}
          english="Please give me X."
          light
        >
          <li>
            <span className="font-bold">Usage: </span>Used when asking for
            something directly.
          </li>
          <li>
            <span className="font-bold">Context: </span>This phrase is slightly
            less formal than{" "}
            <span className="font-japanese text-xl">
              （～を）おねがいします
            </span>{" "}
            but still polite and widely used in shops, restaurants, and casual
            situations.
          </li>
          <li>
            <span className="font-bold">Example Usage: </span>
            <span className="font-japanese text-xl">
              <Furigana furigana={<span className="text-sm">こーひー</span>}>
                コーヒー
              </Furigana>
              をください。
            </span>{" "}
            — Please give me a coffee.
          </li>
          <li>
            Note that the long dash "ー" extends the vowel of the previous
            character, making it a long vowel. It's typically used with katakana
            words.
          </li>
        </VocabCard>
        <p className="my-6 px-16">
          The phrase{" "}
          <span className="font-japanese text-xl">（～を）ください</span> is
          another way to ask for something. It is often used when ordering food
          or drinks in a restaurant or requesting an item in a shop. While still
          polite, it is more direct and less formal than{" "}
          <span className="font-japanese text-xl">（～を）おねがいします</span>,
          but still very suitable for everyday interactions. The key difference
          between <span className="font-japanese text-xl">ください</span> and{" "}
          <span className="font-japanese text-xl">おねがいします</span> lies in
          the level of formality:{" "}
          <span className="font-japanese text-xl">おねがいします</span> can be
          roughly translated to "if you please", while{" "}
          <span className="font-japanese text-xl">ください</span> is more of a
          direct "please."
        </p>

        <VocabCard index={2} kana={"じゃあ"} english="Well then / So">
          <li>
            <span className="font-bold">Usage: </span>Used to transition between
            topics or to signal a change in the conversation.
          </li>
          <li>
            <span className="font-bold">Context: </span>Informal, often used
            among friends or in casual settings.
          </li>
          <li>
            <span className="font-bold">Example Usage: </span>
            <span className="font-japanese text-xl">
              じゃあ、
              <Furigana furigana={<span className="text-sm">い</span>}>
                行
              </Furigana>
              きましょう。
            </span>{" "}
            — Well then, let's go.
          </li>
        </VocabCard>
        <p className="my-6 px-16">
          In conversational Japanese,{" "}
          <span className="font-japanese">じゃあ</span> is a versatile and
          commonly used phrase to indicate a transition. It's often used when
          deciding on the next action or wrapping up a conversation. For
          example, after discussing plans with friends, you might say,
          "じゃあ、行きましょう" (Well then, let's go). It helps to move the
          conversation along smoothly and naturally, making it an essential
          phrase in everyday interactions.
        </p>

        <VocabCard index={3} kana={"どうぞ"} english="Please / Go ahead" light>
          <li>
            <span className="font-bold">Usage: </span>Used when offering
            something to someone or inviting them to do something.
          </li>
          <li>
            <span className="font-bold">Context: </span>Can be used in both
            formal and informal situations.
          </li>
          <li>
            <span className="font-bold">Example Usage: </span>
            <span className="font-japanese text-xl">
              どうぞ、お
              <Furigana furigana={<span className="text-sm">はい</span>}>
                入
              </Furigana>
              りください。
            </span>{" "}
            — Please, come in.
          </li>
        </VocabCard>
        <p className="my-6 px-16">
          <span className="font-japanese">どうぞ</span> is a polite phrase used
          to offer something or invite someone to do something. It's often heard
          when entering someone's home or being offered a seat. For example,
          <span className="font-japanese">"どうぞ、お入りください"</span>{" "}
          (Please, come in) is a common phrase used to welcome guests. It
          conveys a sense of hospitality and consideration, making it an
          essential phrase in Japanese culture. Using{" "}
          <span className="font-japanese">どうぞ</span> shows that you are
          considerate and respectful, whether in a formal or informal setting.
        </p>

        <VocabCard index={4} kana={"どうも"} english="Thanks / Hi">
          <li>
            <span className="font-bold">Usage: </span>A versatile word that can
            mean "thanks," "hello," or "excuse me," depending on the context and
            intonation.
          </li>
          <li>
            <span className="font-bold">Context: </span>Informal, often used
            among friends or in casual encounters.
          </li>
          <li>
            <span className="font-bold">Example Usage: </span>
            <span className="font-japanese text-xl">
              どうも、ありがとう。
            </span>{" "}
            — Thanks a lot.
          </li>
        </VocabCard>
        <p className="mt-6 px-16">
          <span className="font-japanese">どうも</span> is a multi-purpose
          phrase that can be used in various contexts. It can mean "thanks" by
          itself, or it might be followed by{" "}
          <span className="font-japanese">ありがとう</span> (arigatou), as in{" "}
          <span className="font-japanese">"どうも、ありがとう"</span> (Thanks a
          lot). It can also be used as a casual greeting, similar to "hi" or
          "hello." The versatility of{" "}
          <span className="font-japanese">どうも</span> makes it a convenient
          phrase for many everyday interactions, though it's generally used in
          more casual settings. Using{" "}
          <span className="font-japanese">どうも</span> shows friendliness and
          ease, making it an essential part of informal Japanese communication.
        </p>
      </div>
      <div className="space-y-4 px-24 text-xl leading-8 [&>*]:space-y-4">
        <h3 className="!pb-6 pt-16 text-center text-5xl font-bold">Practice</h3>
        <p className="text-center text-2xl font-bold">
          You are in a restaurant and want to order water.
        </p>
        <p>
          <span className="font-bold">Waiter: </span>
          <span className="font-japanese text-2xl">
            ご<Furigana furigana="ちゅうもん">注文</Furigana>は？
          </span>{" "}
          (What would you like to order?)
        </p>
        <p className="!mt-0">
          <span className="font-bold">You:</span>
        </p>
        <SelectText
          answer="（～を）ください"
          a="（～を）おねがいします"
          b="じゃあ"
          c="どうも"
          d="（～を）ください"
        />

        <p className="pt-12 text-center text-2xl font-bold">
          You are visiting a friend's house and they invite you in.
        </p>
        <p>
          <span className="font-bold">Friend: </span>
          <span className="font-japanese text-2xl">
            どうぞ、お<Furigana furigana="はい">入り</Furigana>ください。
          </span>{" "}
          (Please, come in.)
        </p>
        <p className="!mt-0">
          <span className="font-bold">You:</span>
        </p>
        <SelectText
          answer="どうも"
          a="じゃあ"
          b="どうぞ"
          c="どうも"
          d="（～を）おねがいします"
        />

        <p className="pt-12 text-center text-2xl font-bold">
          You are transitioning to a new topic while talking with a friend.
        </p>
        <p>
          <span className="font-bold">Friend: </span>The weather is nice today,
          isn't it?
        </p>
        <p className="!mt-0">
          <span className="font-bold">You: </span>
          <u>Well then</u>,{" "}
          <span className="text-base">(how was the movie yesterday?)</span>
        </p>
        <SelectText
          answer="じゃあ"
          a="どうも"
          b="じゃあ"
          c="おねがいします"
          d="どうぞ"
        />

        <p className="pt-12 text-center text-2xl font-bold">
          You are at a store and want to buy a pen.
        </p>
        <p>
          <span className="font-bold">Shopkeeper: </span>
          <span className="font-japanese text-2xl">
            何をお<Furigana furigana="さが">探</Furigana>
            しですか？
          </span>{" "}
          (What are you looking for?)
        </p>
        <p className="!mt-0">
          <span className="font-bold">You: </span>
        </p>
        <SelectText
          answer="（～を）ください"
          a="どうも"
          b="おねがいします"
          c="じゃあ"
          d="（～を）ください"
        />

        <p className="pt-12 text-center text-2xl font-bold">
          You receive a gift from a friend.
        </p>
        <p>
          <span className="font-bold">Friend: </span>
          This is a gift for you.
        </p>
        <p className="!mt-0">
          <span className="font-bold">You:</span>
        </p>
        <SelectText
          answer="どうも"
          a="どうも"
          b="じゃあ"
          c="おねがいします"
          d="どうぞ"
        />

        <p className="pt-12 text-center text-2xl font-bold">
          You are at a restaurant and want to ask for the menu.
        </p>
        <p>
          <span className="font-bold">You:</span>
        </p>
        <SelectText
          answer="（～を）おねがいします"
          a="じゃあ"
          b="（～を）おねがいします"
          c="どうも"
          d="（～を）ください"
        />
      </div>
    </ContentBox>
  )
}
