import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import SelectText from "@/components/text/MultipleChoiceText"
import YouTubeVideo from "@/features/youtube/YouTube"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-2/dare"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        New Subjects With The{" "}
        <span className="font-japanese text-green-500">が</span> Particle
      </h1>
      <div className="space-y-6 px-16 md:px-24">
        <div>
          <p>
            In this lesson, we'll delve into the{" "}
            <span className="font-japanese text-xl">が</span> (ga) particle, its
            use cases, and how it differs from the{" "}
            <span className="font-japanese text-xl">は</span> (wa) particle.
            You've learned how to define <strong>topics</strong> with{" "}
            <span className="font-japanese text-xl font-bold">は</span>; now
            it's time to understand how to define <strong>subjects</strong> with{" "}
            <span className="font-japanese text-xl font-bold">が</span>.
          </p>
          <p className="mt-2">
            First, let's review our understanding of{" "}
            <span className="font-japanese text-xl">は</span>.
          </p>
        </div>

        <h3 className="!mt-9 text-xl font-bold">
          <span className="font-japanese text-2xl">は</span> (Wa)
        </h3>
        <ul className="!mt-2 list-inside list-disc space-y-2">
          <li>
            <strong>Function: </strong>Marks the <strong>topic</strong> of the
            sentence, indicating what the sentence is about, and emphasizing
            what comes after it.
          </li>
          <li>
            <strong>Example: </strong>
            <span className="font-japanese text-xl">
              これ<span className="font-bold text-sky-400">は</span>
              <Furigana furigana={<span className="text-sm">おおき</span>}>
                大木
              </Furigana>
              <Furigana furigana={<span className="text-sm">いぬ</span>}>
                犬
              </Furigana>
              です。
            </span>
            {"->"} As for this,{" "}
            <span className="font-bold italic">it's a big dog.</span>
          </li>
        </ul>
        <p className="!mt-4">
          All of the emphasis is placed on{" "}
          <span className="font-bold italic">it's a big dog</span>, while
          quickly indicating that it's{" "}
          <span className="font-japanese text-xl">これ</span> that we're
          referring to.
        </p>

        <h3 className="!mt-9 text-xl font-bold">
          <span className="font-japanese text-2xl">が</span> (Ga)
        </h3>
        <ul className="!mt-2 list-inside list-disc space-y-2">
          <li>
            <strong>Function: </strong>Marks the <strong>subject</strong> of the
            sentence, (emphasizing the subject).
          </li>
          <li>
            <strong>Example: </strong>
            <span className="font-japanese text-xl">
              これ<span className="font-bold text-green-500">が</span>
              <Furigana furigana={<span className="text-sm">おおき</span>}>
                大木
              </Furigana>
              <Furigana furigana={<span className="text-sm">いぬ</span>}>
                犬
              </Furigana>
              です。
            </span>
            {"->"} As for <span className="font-bold italic">this</span>, it's a
            big dog.
          </li>
        </ul>
        <p className="!mt-4">
          The emphasis here is placed on{" "}
          <span className="font-bold italic">this</span>. In this case, the word
          <span className="font-japanese text-xl">これ</span> is much more
          important.
        </p>

        <p className="text-base italic text-muted-foreground">
          *Please note that these examples are taken from Andy's YouTube video
          where he explains the differences between{" "}
          <span className="font-japanese not-italic">は</span> and{" "}
          <span className="font-japanese not-italic">が</span>. We highly
          recommend you watch his video here for further understanding.
        </p>
        <div>
          <YouTubeVideo
            videoId="ytjRoTwWnzw"
            title="Japanese は and が Particles in 2 Minutes | (WA) vs (GA)"
            credit="ToKini Andy"
          />
        </div>
        <p className="text-sm italic text-muted-foreground">
          *The comparison aspect of{" "}
          <span className="font-japanese not-italic">は</span> will be covered
          in later chapters.
        </p>

        <p>Let's look at another example</p>

        <h3 className="text-xl">
          <span className="font-japanese text-2xl">
            これ<span className="font-bold text-sky-400">は</span>ペンです。
          </span>
          {"->"} This is a <span className="font-bold italic">pen.</span>
        </h3>
        <p>
          <strong>Context: </strong>Use this sentence when you want to introduce
          a pen as the topic of discussion. You are saying "As for this, it's a
          pen," and then any further discussion will be about the pen.
        </p>
        <ul className="!mt-2 list-inside list-disc space-y-2">
          <li>
            <strong>Situation: </strong>Showing items one by one: "This is an
            eraser, this is a pen, this is a ruler."
          </li>
        </ul>

        <h3 className="text-xl">
          <span className="font-japanese text-2xl">
            これ<span className="font-bold text-green-500">が</span>ペンです。
          </span>
          {"->"} <span className="font-bold italic">This</span> is a pen.
        </h3>
        <p>
          <strong>Context: </strong>Use when emphasizing "this" as the subject.
        </p>
        <ul className="!mt-2 list-inside list-disc space-y-2">
          <li>
            <strong>Situation: </strong>Imagine someone is looking for a pen
            among several mechanical pencils in a drawer, and they ask, "Which
            one is the pen?" You'd respond:{" "}
            <span className="font-japanese text-xl">
              これ<span className="font-bold text-green-500">が</span>ペンです。
            </span>
            {"->"} <span className="font-bold italic">This one's</span> a pen.
          </li>
        </ul>
        <p className="text-base">
          For the purposes of this chapter, the above information should be
          enough to get you started with{" "}
          <span className="font-japanese">が</span>. If you are interested in
          exploring this topic in more depth, we encourage you to read{" "}
          <a
            href="https://8020japanese.com/wa-vs-ga/"
            target="_blank"
            className="font-medium text-sky-400"
          >
            this article
          </a>
          . It assumes you have basic knowledge of verbs and particles that
          won't be introduced until Chapter 3, so some of the example sentences
          may be a bit advanced at this stage. However, the author's
          explanations are the clearest we've found, and it will probably save
          you years of headaches and confusion down the road.
        </p>
        <p className="text-base">
          While you don't have to read it now, you'll certainly want to read it
          in Chapter 3 when you start encountering more difficult/ambiguous
          sentences. Therefore, we've included this module again in the list of
          Chapter 3 lessons to make sure you don't forget to read it.
        </p>
      </div>

      <div className="space-y-4 px-24 leading-8 [&>*]:space-y-4">
        <h3 className="pt-12 text-center text-3xl font-bold">Practice</h3>
        <p>
          You are showing your friend different items in your room. How would
          you say "This is a pen"?
        </p>
        <SelectText
          answer="これはペンです。"
          a="これはペンです。"
          b="これがペンです。"
          className="text-xl"
        />
        <p>
          Your friend is looking for their notebook among several on the table.
          How would you say "This one's your notebook"?
        </p>
        <SelectText
          answer="これが[name]のノートです。"
          a="これは[name]のノートです。"
          b="これが[name]のノートです。"
          className="text-xl"
        />
        <p>Someone asks, "Who has this?" How would you say "Taro has it"?</p>
        <SelectText
          answer="たろうがもっています。"
          a="たろうはもっています。"
          b="たろうがもっています。"
          className="text-xl"
        />
      </div>
    </ContentBox>
  )
}
