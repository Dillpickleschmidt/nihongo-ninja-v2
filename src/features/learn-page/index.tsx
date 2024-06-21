import ChapterBox from "./components/ChapterBox/ChapterBox"
import UnitButton from "./components/ChapterBox/UnitButton"
import ButtonBarGroup from "./components/ButtonBar/ButtonBarGroup"
import TopWindowAnimations from "./components/TopWindowAnimations"

export function ChapterBoxes() {
  return (
    <>
      <ChapterBox text="Chapter 0" className="bg-[#f83333] saturate-50">
        {/* <UnitButton id="1." type="preview" link="/learn/chapter-0/welcome">
          Welcome!
        </UnitButton> */}
        <UnitButton
          id="1."
          type="lesson"
          link="/learn/chapter-0/japanese-pronunciation"
        >
          Japanese Pronunciation
        </UnitButton>
        <UnitButton
          id="2."
          type="lesson"
          link="/learn/chapter-0/writing-systems"
        >
          Writing Systems
        </UnitButton>
        <UnitButton id="3." type="lesson" link="/learn/chapter-0/hiragana">
          Hiragana
        </UnitButton>
        <UnitButton
          id="4."
          type="practice"
          link="/learn/chapter-0/practice/hiragana"
        >
          Practice Hiragana
        </UnitButton>
        <UnitButton
          id="5."
          type="writing"
          link="/learn/chapter-0/hiragana-quiz"
        >
          Hiragana Quiz
        </UnitButton>
        <UnitButton
          id="6."
          type="lesson"
          link="/learn/chapter-0/dakuten-handakuten"
        >
          Dakuten & Handakuten
        </UnitButton>
        <UnitButton
          id="7."
          type="practice"
          link="/learn/chapter-0/practice/dakuten-handakuten"
        >
          Practice Dakuten & Handakuten
        </UnitButton>
        <UnitButton
          id="8."
          type="writing"
          link="/learn/chapter-0/dakuten-handakuten-quiz"
        >
          Dakuten & Handakuten Quiz
        </UnitButton>
        <UnitButton
          id="9."
          type="lesson"
          link="/learn/chapter-0/contracted-sounds"
        >
          Contracted Sounds
        </UnitButton>
        <UnitButton
          id="10."
          type="practice"
          link="/learn/chapter-0/practice/contracted-sounds"
        >
          Practice Contracted Sounds
        </UnitButton>
        <UnitButton
          id="11."
          type="writing"
          link="/learn/chapter-0/contracted-sounds-quiz"
        >
          Contracted Sounds Quiz
        </UnitButton>
        <UnitButton
          id="12."
          type="lesson"
          link="/learn/chapter-0/long-vowels-double-consonants"
        >
          Long Vowels & Double Consonants
        </UnitButton>
        <UnitButton
          id="13."
          type="writing"
          link="/learn/chapter-0/all-hiragana-quiz"
        >
          All Hiragana Quiz
        </UnitButton>
        <UnitButton
          id="14."
          type="lesson"
          link="/learn/chapter-0/punctuation-misc"
        >
          Punctuation and Misc.
        </UnitButton>
        <UnitButton
          id="15."
          type="vocab-list"
          link="/learn/chapter-0/vocab-list"
        >
          Chapter 0 Vocab List
        </UnitButton>
        <UnitButton id="16." type="vocab" link="/learn/chapter-0/greetings">
          Greetings
        </UnitButton>
        <UnitButton
          id="17."
          type="culture-note"
          link="/learn/chapter-0/culture-note-japanese-greetings"
          disabled
        >
          Culture Note: Japanese Greetings
        </UnitButton>
        <UnitButton
          id="18."
          type="writing"
          link="/learn/chapter-0/greetings-quiz"
        >
          Greetings Quiz
        </UnitButton>
        <UnitButton
          id="19."
          type="vocab"
          link="/learn/chapter-0/common-expressions"
        >
          Common Expressions
        </UnitButton>
        <UnitButton
          id="20."
          type="practice"
          link="/learn/chapter-0/practice/greetings-common-expressions"
        >
          Practice Greet. & Common Expr.
        </UnitButton>
        <UnitButton
          id="21."
          type="lesson"
          link="/learn/chapter-0/numbers-intro"
        >
          Numbers Intro
        </UnitButton>
        <UnitButton id="22." type="vocab" link="/learn/chapter-0/numbers-0-100">
          Numbers 0-100
        </UnitButton>
        <UnitButton
          id="23."
          type="practice"
          link="/learn/chapter-0/number-matching"
          disabled
        >
          Number Matching
        </UnitButton>
        <UnitButton
          id="24."
          type="practice"
          link="/learn/chapter-0/practice/numbers-0-10"
        >
          Practice Numbers 0-10
        </UnitButton>
        <UnitButton
          id="25."
          type="practice"
          link="/learn/chapter-0/practice/numbers-11-100"
        >
          Practice Numbers 11-100
        </UnitButton>
        <UnitButton id="26." type="game" link="" disabled>
          Numbers Game 1
        </UnitButton>
        <UnitButton id="27." type="game" link="" disabled>
          Numbers Game 2
        </UnitButton>
      </ChapterBox>
      <ChapterBox text="Chapter 1" className="bg-sky-600 saturate-50">
        <UnitButton
          id="1."
          type="vocab-list"
          link="/learn/chapter-1/vocab-list"
        >
          Chapter 1 Vocab List
        </UnitButton>
        <UnitButton
          id="2."
          type="grammar-notes"
          link="/learn/chapter-1/grammar-notes"
        >
          Chapter 1 Grammar Notes
        </UnitButton>
        <UnitButton
          id="3."
          type="vocab"
          link="/learn/chapter-1/everyday-expressions"
        >
          Everyday Expressions
        </UnitButton>
        <UnitButton id="4." type="lesson">
          jpdb.io Flashcards
        </UnitButton>
        <UnitButton
          id="5."
          type="vocab"
          link="/learn/chapter-1/people-descriptors-misc"
        >
          People, Descriptors, Misc.
        </UnitButton>
        <UnitButton
          id="6."
          type="practice"
          link="/learn/chapter-1/practice/people-descriptors-misc"
        >
          Practice People, Descriptors, Misc.
        </UnitButton>
        <UnitButton id="7." type="vocab" link="/learn/chapter-1/family-school">
          Family & School
        </UnitButton>
        <UnitButton
          id="8."
          type="practice"
          link="/learn/chapter-1/practice/family-school"
        >
          Practice Family & School
        </UnitButton>
        <UnitButton id="9." type="lesson" link="/learn/chapter-1/x-wa-y-desu">
          <span className="font-bold">X</span>
          <span className="font-japanese">は</span>
          <span className="font-bold">Y</span>
          <span className="font-japanese">です</span>
        </UnitButton>
        <UnitButton
          id="10."
          type="vocab"
          link="/learn/chapter-1/occupations-majors"
        >
          Occuupations & Majors
        </UnitButton>
        <UnitButton
          id="11."
          type="practice"
          link="/learn/chapter-1/practice/occupations-majors"
        >
          Practice Occuupations & Majors
        </UnitButton>
        <UnitButton
          id="12."
          type="writing"
          link="/learn/chapter-1/x-wa-y-desu/practice-sentences"
        >
          <span className="font-bold">X</span>
          <span className="font-japanese">は</span>
          <span className="font-bold">Y</span>
          <span className="font-japanese">です</span> Practice Sentences
        </UnitButton>
        <UnitButton
          id="13."
          type="lesson"
          link="/learn/chapter-1/self-introductions"
        >
          Self Introductions
        </UnitButton>
        <UnitButton
          id="14."
          type="lesson"
          link="/learn/chapter-1/japanese-names-honorifics"
        >
          Japanese Names & Honorifics
        </UnitButton>
        <UnitButton
          id="15."
          type="lesson"
          link="/learn/chapter-1/saying-you-in-japanese"
        >
          Saying "You" in Japanese
        </UnitButton>
        <UnitButton
          id="16."
          type="vocab"
          link="/learn/chapter-1/useful-expressions"
        >
          Useful Expressions
        </UnitButton>
        <UnitButton
          id="17."
          type="vocab"
          link="/learn/chapter-1/countries-time"
        >
          Countries & Time
        </UnitButton>
        <UnitButton
          id="18."
          type="practice"
          link="/learn/chapter-1/practice/countries-time"
        >
          Practice Countries & Time
        </UnitButton>
        <UnitButton
          id="19."
          type="lesson"
          link="/learn/chapter-1/questions-with-ka"
        >
          Questions with <span className="font-japanese">か</span>
        </UnitButton>
        <UnitButton
          id="20."
          type="lesson"
          link="/learn/chapter-1/the-no-particle"
        >
          Modifying Nouns: <span className="font-japanese">の</span>
        </UnitButton>
        <UnitButton id="21." type="writing" link="/learn/chapter-1/worksheet-1">
          Worksheet 1
        </UnitButton>
        <UnitButton id="22." type="lesson" link="/learn/chapter-1/anou-etto">
          Sounding Natural:{" "}
          <span className="font-japanese">あのう、えっと。。。</span>
        </UnitButton>
        <UnitButton
          id="23."
          type="video"
          link="/learn/chapter-1/kikusasaizu-1-1"
        >
          Kikusasaizu Video - L1-1
        </UnitButton>
        <UnitButton
          id="24."
          type="audio"
          link="/learn/chapter-1/my-kikitori-conversation-1"
        >
          MyKikitori - Conversation 1
        </UnitButton>
        <UnitButton id="25." type="lesson" link="/learn/chapter-1/telling-time">
          Telling Time
        </UnitButton>
        <UnitButton
          id="26."
          type="practice"
          link="/learn/chapter-1/practice/telling-time"
        >
          Practice Time
        </UnitButton>
        <UnitButton id="27." type="lesson" link="/learn/chapter-1/minutes">
          Minutes
        </UnitButton>
        <UnitButton
          id="28."
          type="practice"
          link="/learn/chapter-1/practice/minutes"
        >
          Practice Minutes
        </UnitButton>
        <UnitButton
          id="29."
          type="audio"
          link="/learn/chapter-1/my-kikitori-conversation-2"
        >
          MyKikitori - Conversation 2
        </UnitButton>
        <UnitButton id="30." type="practice">
          Vocab Practice: All Vocab
        </UnitButton>
        <UnitButton id="31." type="writing" disabled>
          Worksheet 2
        </UnitButton>
        <UnitButton id="32." type="writing" disabled>
          Worksheet 3
        </UnitButton>
        <UnitButton
          id="33."
          type="video"
          link="/learn/chapter-1/kikusasaizu-1-3"
        >
          Kikusasaizu Video - L1-3
        </UnitButton>
        <UnitButton id="34." type="game" disabled>
          Meet Your Host Family At The Airport
        </UnitButton>
        <UnitButton
          id="35."
          type="audio"
          link="/learn/chapter-1/my-kikitori-conversation-3"
        >
          MyKikitori - Conversation 3
        </UnitButton>
      </ChapterBox>
      <ChapterBox text="Chapter 2" className="bg-green-600 saturate-[65%]">
        <UnitButton id="1." type="vocab-list" disabled>
          Chapter 2 Vocab List
        </UnitButton>
        <UnitButton id="2." type="grammar-notes" disabled>
          Chapter 2 Grammar notes
        </UnitButton>
        <UnitButton id="3." type="lesson" disabled>
          Katakana
        </UnitButton>
        <UnitButton id="4." type="practice" disabled>
          Practice Katakana
        </UnitButton>
        <UnitButton id="5." type="lesson" disabled>
          English Words in Japanese
        </UnitButton>
        <UnitButton id="6." type="writing" disabled>
          Katakana Quiz
        </UnitButton>
        <UnitButton id="7." type="writing" disabled>
          Katakana Words Practice
        </UnitButton>
        <UnitButton id="8." type="vocab" disabled>
          Things
        </UnitButton>
        <UnitButton id="9." type="practice" disabled>
          Practice Things
        </UnitButton>
        <UnitButton id="10." type="lesson" disabled>
          Words That Point Pt.1
        </UnitButton>
        <UnitButton id="11." type="lesson" disabled>
          Words That Point Pt.2
        </UnitButton>
        <UnitButton id="12." type="practice" disabled>
          Practice Words That Point
        </UnitButton>
        <UnitButton id="13." type="lesson" disabled>
          <span className="font-japanese font-medium">だれ</span>
        </UnitButton>
        <UnitButton id="14." type="lesson" disabled>
          <span className="font-japanese font-medium">も</span>
        </UnitButton>
        <UnitButton id="15." type="lesson" disabled>
          It is not...
        </UnitButton>
        <UnitButton id="16." type="video" disabled>
          Kikusasaizu Video - L2-1
        </UnitButton>
        <UnitButton id="17." type="lesson" disabled>
          <span className="font-japanese font-medium">ね, よ</span>
        </UnitButton>
        <UnitButton id="18." type="video" disabled>
          Kikusasaizu Video - L2-2
        </UnitButton>
        <UnitButton id="19." type="vocab" disabled>
          Places, Money, Food
        </UnitButton>
        <UnitButton id="20." type="practice" disabled>
          Practice Places, Money, Food
        </UnitButton>
        <UnitButton id="21." type="audio" disabled>
          MyKikitori - At a Café
        </UnitButton>
        <UnitButton id="22." type="lesson" disabled>
          Big Numbers
        </UnitButton>
        <UnitButton id="23." type="lesson" disabled>
          Japanese Money
        </UnitButton>
        <UnitButton id="24." type="writing" disabled>
          Practice Money
        </UnitButton>
        <UnitButton id="25." type="game" disabled>
          Numbers Game 1
        </UnitButton>
        <UnitButton id="26." type="game" disabled>
          Numbers Game 2
        </UnitButton>
        <UnitButton id="23." type="culture-note" disabled>
          Bonus: More About Money
        </UnitButton>
        <UnitButton id="23." type="writing" disabled>
          Worksheet 1
        </UnitButton>
        <UnitButton id="23." type="writing" disabled>
          Worksheet 2
        </UnitButton>
        <UnitButton id="23." type="writing" disabled>
          Worksheet 3
        </UnitButton>
        <UnitButton id="23." type="game" disabled>
          House Tour
        </UnitButton>
      </ChapterBox>
      <ChapterBox text="Chapter 3" className="bg-orange-500 saturate-[65%]">
        <UnitButton id="1." type="vocab-list" disabled>
          Chapter 3 Vocab List
        </UnitButton>
        <UnitButton id="2." type="grammar-notes" disabled>
          Chapter 3 Grammar Notes
        </UnitButton>
        <UnitButton id="3." type="lesson" disabled>
          Introduction to Kanji
        </UnitButton>
        <UnitButton id="4." type="lesson" disabled>
          Breaking Down Kanji
        </UnitButton>
        <UnitButton id="5." type="vocab" disabled>
          Chapter 3 Nouns
        </UnitButton>
        <UnitButton id="6." type="practice" disabled>
          Practice Nouns - Readings
        </UnitButton>
        <UnitButton id="7." type="practice" disabled>
          Practice Nouns - Kana
        </UnitButton>
        <UnitButton id="8." type="vocab" disabled>
          Chapter 3 Verbs & Adj.
        </UnitButton>
        <UnitButton id="9." type="practice" disabled>
          Practice Verbs & Adj. - Readings
        </UnitButton>
        <UnitButton id="10." type="practice" disabled>
          Practice Verbs & Adj. - Kana
        </UnitButton>
        <UnitButton id="11." type="lesson" disabled>
          Verb Conj. - <span className="font-japanese">ます</span>, Godan,
          Ichidan
        </UnitButton>
        <UnitButton id="12." type="practice" disabled>
          Practice Positive <span className="font-japanese">ます</span>{" "}
          Conjugation
        </UnitButton>
        <UnitButton id="13." type="lesson" disabled>
          Negative <span className="font-japanese">ます</span> Conjugation
        </UnitButton>
        <UnitButton id="14." type="practice" disabled>
          Practice Negative <span className="font-japanese">ます</span>{" "}
          Conjugation
        </UnitButton>
        <UnitButton id="15." type="writing" disabled>
          Verb Conj. Worksheet
        </UnitButton>
        <UnitButton id="16." type="lesson" disabled>
          Particles - <span className="font-japanese">を, で, に, へ</span>
        </UnitButton>
        <UnitButton id="17." type="lesson" disabled>
          Word Order
        </UnitButton>
        <UnitButton id="18." type="writing" disabled>
          Practice Particles
        </UnitButton>
        <UnitButton id="19." type="reading" disabled>
          Reading Practice
        </UnitButton>
        <UnitButton id="20." type="lesson" disabled>
          Polite Invitations
        </UnitButton>
        <UnitButton id="21." type="video" disabled>
          Kikusasaizu Video - L3-2
        </UnitButton>
        <UnitButton id="22." type="lesson" disabled>
          Days of The Week & Time
        </UnitButton>
        <UnitButton id="23." type="practice" disabled>
          Practice Days & Time - Readings
        </UnitButton>
        <UnitButton id="24." type="lesson" disabled>
          Practice Days & Time - Kana
        </UnitButton>
        <UnitButton id="25." type="lesson" disabled>
          ちょっと
        </UnitButton>
        <UnitButton id="26." type="video" disabled>
          Kikusasaizu Video - L3-3
        </UnitButton>
        <UnitButton id="27." type="audio" disabled>
          MyKikitori - Do You Want to Go to Tokyo?
        </UnitButton>
        <UnitButton id="28." type="vocab" disabled>
          Frequency Adverbs
        </UnitButton>
        <UnitButton id="29." type="vocab" disabled>
          More Common Expressions
        </UnitButton>
        <UnitButton id="30." type="video" disabled>
          MyKikitori - Campus Interview #1
        </UnitButton>
        <UnitButton id="31." type="video" disabled>
          Aizuchi: Japanese Noises
        </UnitButton>
        <UnitButton id="32." type="vocab" disabled>
          <span className="font-japanese">
            そして、それから, でも, けど, が
          </span>
        </UnitButton>
        <UnitButton id="33." type="writing" disabled>
          <span className="font-japanese">
            そして, それから, でも, けど, が
          </span>{" "}
          Practice
        </UnitButton>
        <UnitButton id="34." type="video" disabled>
          Kikusasaizu Video - L3-1
        </UnitButton>
        <UnitButton id="35." type="audio" disabled>
          MyKikitori - Campus Interview #2
        </UnitButton>
        <UnitButton id="36." type="lesson" disabled>
          Note on <span className="font-japanese">けど</span>
        </UnitButton>
        <UnitButton id="37." type="writing" disabled>
          Contrast Worksheet
        </UnitButton>
        <UnitButton id="38." type="writing" disabled>
          Chapter 3 Worksheet
        </UnitButton>
      </ChapterBox>
    </>
  )
}

export function ButtonBar() {
  return <ButtonBarGroup />
}

export function TopWindow({ children }: { children: React.ReactNode }) {
  return <TopWindowAnimations>{children}</TopWindowAnimations>
}
