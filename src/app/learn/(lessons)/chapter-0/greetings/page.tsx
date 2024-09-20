import ContentBox from "@/features/content-box/ContentBox"
import VocabCards from "@/features/vocab-card/VocabCards"
import SelectText from "@/components/text/MultipleChoiceText"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"

export default async function page() {
  const path = "chapter-0/greetings-common-expressions"
  const data = await fetchVocabularyByPath(path)

  // Split the data into two parts
  const data1 = data.slice(0, 4)
  const data2 = data.slice(4, 7)
  data2.push(data[20])
  console.log(data1[1], data2[2])

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-0/culture-note-japanese-greetings"
    >
      <h1 className="px-20 pt-28 text-center text-4xl font-medium leading-[3.25rem]">
        <span className="text-5xl font-medium">Great job</span>, you've finally
        made it! You've now got a strong grasp of Hiragana! Not only can you{" "}
        <span className="text-5xl">read</span> hiragana, but you also have the
        phonetic arsenal to <span className="text-5xl">say</span> pretty much{" "}
        <span className="font-bold">*anything*</span> in Japanese!🔥
      </h1>
      {/* <p className="px-28 py-6 text-xl leading-8">
        You're probably tired of practicing hiragana, so here's a quick preview
        of what you'll learn in the next few lessons. You'll quckly work your
        way through each word as they come up, and you'll be having real
        Japanese conversations before you know it!
      </p> */}

      <h2 className="px-28 pb-6 pt-12 text-3xl">
        Now that you're familiar with the basics, let's dive into some common
        Japanese greetings. These phrases will be your first steps into
        conversational Japanese, and they're essential for everyday
        interactions.
      </h2>
      <VocabCards data={data1} />
      <p className="px-16">
        Another common and slightly more formal way to say goodbye, especially
        in phone conversations or when you&apos;re not sure when you&apos;ll
        meet the person again, is:
      </p>
      <VocabCards data={data2} countOffset={4} />
      <p className="px-16">
        These phrases are great for everyday use and help convey a friendly,
        approachable tone. As with any language, the context and your
        relationship with the person you're speaking to will guide which phrase
        is most appropriate.
      </p>
      {/* Practice */}
      <div className="space-y-4 px-24 text-xl leading-8 [&>*]:space-y-4">
        <h3 className="!pb-6 !pt-32 text-center text-5xl font-bold">
          Practice
        </h3>
        {/* <p>
          Match the following greetings with the appropriate time of day
          (Morning, Afternoon, Evening, Leaving):
        </p>
        <div className="pl-10 font-japanese text-[1.55rem]">
          <p>{"a) ありがとう"}</p>
          <p>{"b) おはようございます"}</p>
          <p>{"c) こんばんは"}</p>
          <p>{"d) またね"}</p>
        </div> */}
        <p>
          You run into a friend in the morning while walking to the store. How
          do you greet them?
        </p>
        <SelectText
          answer="おはようございます"
          a="こんにちは"
          b="こんばんは"
          c="おはようございます"
          d="じゃあね"
        />
        <p>
          Which greeting would you use when leaving a casual meet-up with
          friends in the afternoon?
        </p>
        <SelectText
          answer="じゃあね"
          a="ありがとう"
          b="おはよう"
          c="じゃあね"
          d="さようなら"
        />
        <p>
          You say <span className="font-japanese text-2xl">こんばんは</span> to
          your teacher at 9 AM. Is this correct?
        </p>
        <SelectText answer="No" a="Yes" b="No" />
        <p>
          You've just finished a group project and want to thank everyone for
          their hard work. You say, '___________.
        </p>
        <SelectText
          answer="ありがとうございます"
          a="ありがとう"
          b="ありがとうございます"
          c="またね"
          d="さようなら"
        />
        <p>
          It's 8 PM and you are entering a restaurant. The staff greets you. You
          reply with:
        </p>
        <SelectText
          answer="こんばんは"
          a="おはようございます"
          b="こんばんは"
          c="こんにちは"
          d="じゃあね"
        />
        <p>
          <span className="font-japanese text-2xl">おはよう</span> is a formal
          way to say good morning.
        </p>
        <SelectText answer="False" a="True" b="False" />
        {/* <p>
          You are leaving a business meeting. How do you say goodbye to your
          colleagues?
        </p>
        <SelectText
          answer="さようなら"
          a="さようなら"
          b="じゃあね"
          c="またね"
          d="ありがとう"
        /> */}
      </div>
    </ContentBox>
  )
}
