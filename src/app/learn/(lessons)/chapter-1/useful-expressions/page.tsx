import ContentBox from "@/components/ContentBox"
import SelectText from "@/components/text/MultipleChoiceText"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-1/useful-expressions"
  const data = await fetchVocabularyByPath(path)

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
        Useful Expressions
      </h1>
      <VocabCards data={data} noFurigana />
      <div className="space-y-4 px-24 text-xl leading-8 [&>*]:space-y-4">
        <h3 className="!pb-6 pt-16 text-center text-5xl font-bold">Practice</h3>
        <p>
          What does <span className="font-japanese">わかりましたか。</span>
          mean?
        </p>
        <SelectText
          answer="Do you understand?"
          a="Do you understand?"
          b="Please say it slowly."
          c="I have a question."
          d="Excuse me."
          className="text-xl"
        />
        <p>
          Your teacher explains something and you want to say you understood.
          How do you respond?
        </p>
        <SelectText
          answer="わかりました。"
          a="はじめまして。"
          b="どうぞよろしくおねがいします。"
          c="わかりました。"
          d="ちょっとまってください。"
        />
        <p>
          You didn't understand a word your friend said. What do you say to let
          them know?
        </p>
        <SelectText
          answer="わかりません。"
          a="おなまえは？"
          b="きいてください。"
          c="もういちどいってください。"
          d="わかりません。"
        />
        <p>
          You are having trouble keeping up with the conversation and need
          someone to speak more slowly. What do you request?
        </p>
        <SelectText
          answer="もうちょっとゆっくりおねがいします。"
          a="かいてください。"
          b="もうちょっとゆっくりおねがいします。"
          c="１０ぺージをみてください。"
          d="しつれいします。"
        />
        <p>How do you ask someone to repeat what they just said?</p>
        <SelectText
          answer="もういちどいってください。"
          a="わかりましたか。"
          c="せんせい。"
          d="もういちどいってください。"
          b="あのう、すみません。"
        />
        <p>
          You need a moment and want someone to wait. What phrase do you use?
        </p>
        <SelectText
          answer="ちょっとまってください。"
          a="わかりません。"
          c="もうちょっとゆっくりおねがいします。"
          d="ちょっとまってください。"
          b="おなまえは？"
        />
        <p>Which phrase means "Please listen"?</p>
        <SelectText
          answer="きいてください。"
          a="きいてください。"
          c="どうぞよろしくおねがいします。"
          d="どうもありがとうございます。"
          b="もうちょっとゆっくりおねがいします。"
        />
        <p>
          You are looking at a textbook and want someone to turn to a specific
          page. What do you tell them?
        </p>
        <SelectText
          answer="１０ぺージをみてください。"
          a="しつもんがあります。"
          c="しつれいします。"
          d="１０ぺージをみてください。"
          b="もういちどおねがいします。"
        />
        <p>
          You meet someone for the first time and want to introduce yourself.
          What is the appropriate greeting?
        </p>
        <SelectText
          answer="はじめまして。"
          a="すみませんが、えいごでいいですか。"
          c="どうぞよろしくおねがいします。"
          d="ゆっくりいってください。"
          b="はじめまして。"
        />
        <p>How do you tell someone where you are from in Japanese?</p>
        <SelectText
          answer="しゅっしんは[your hometown]です。"
          a="しゅっしんは[your hometown]です。"
          b="せんせい。"
          c="もういちどいってください。"
          d="おなまえは？"
        />
        <p>
          You're about to leave your Japanese teacher's office. What should you
          say before you exit?
        </p>
        <SelectText
          answer="しつれいします。"
          a="しつれいします。"
          b="わかりましたか。"
          c="もういちどいってください。"
          d="どうもありがとうございます。"
        />
        <p>
          You didn't understand what your teacher just said. How do you ask them
          to repeat?
        </p>
        <SelectText
          answer="もういちどおねがいします。"
          a="どうぞよろしくおねがいします。"
          b="もうちょっとゆっくりおねがいします。"
          c="もういちどおねがいします。"
          d="すみませんが、えいごでいいですか。"
        />
        <p>How do you say "Teacher" in Japanese?</p>
        <SelectText
          answer="せんせい"
          a="せんせい"
          b="しつもん"
          c="おなまえ"
          d="しつれい"
        />
        <p>
          You're meeting new coworkers at your new job. What's a good phrase to
          end your self-introduction?
        </p>
        <SelectText
          answer="どうぞよろしくおねがいします。"
          a="はじめまして。"
          b="しつれいします。"
          c="どうぞよろしくおねがいします。"
          d="わかりましたか。"
        />
        <p>
          Your <span className="font-japanese">せんせい</span> said{" "}
          <span className="font-japanese">かいってください</span> today while
          staring right at you from across the classroom! What on earth did she
          mean?
        </p>
        <SelectText
          answer="Please write"
          a="Please listen."
          b="Please write."
          c="Please ask."
          d="Please wake up."
          className="text-xl"
        />
        <p>
          How do you politely get someone's attention by saying "Excuse me"?
        </p>
        <SelectText
          answer="あのう、すみません。"
          a="あのう、すみません。"
          b="おなまえは？"
          c="せんせい"
          d="どうもありがとうございます。"
        />
        <p>
          You want to tell someone your name. How do you say "I am [your name]"
          in Japanese?
        </p>
        <SelectText
          answer="[your name]です。"
          a="[your name] せんせい。"
          b="どうぞよろしくおねがいします。"
          c="[your name]です。"
          d="おなまえは？"
        />
        <p>
          You're a bad uncle who forgot that your sister's kid's stroller is
          parked on a hill, and it starts to roll! Thankfully, a good samaritan
          swept in and saved the day. You want to seriously thank them. What's a
          good response to give?
        </p>
        <SelectText
          answer="どうもありがとうございます。"
          a="どうもありがとうございます。"
          b="すみませんが、えいごでいいですか。"
          c="わかりましたか。"
          d="ちょっとまってください。"
        />
        <p>
          You have a question during class. How do you say "I have a question"?
        </p>
        <SelectText
          answer="しつもんがあります。"
          a="おなまえは？"
          b="わかりましたか。"
          c="しつもんがあります。"
          d="ゆっくりいってください。"
        />
      </div>
    </ContentBox>
  )
}
