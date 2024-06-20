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
          link="/learn/chapter-0/hiragana/practice"
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
          link="/learn/chapter-0/dakuten-handakuten/practice"
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
          link="/learn/chapter-0/contracted-sounds/practice"
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
          type="practice"
          link="/learn/chapter-0/long-vowels-double-consonants/practice"
        >
          Practice Long Vow. & Dbl. Cons.
        </UnitButton>
        <UnitButton
          id="14."
          type="writing"
          link="/learn/chapter-0/all-hiragana-quiz"
        >
          All Hiragana Quiz
        </UnitButton>
        <UnitButton
          id="15."
          type="lesson"
          link="/learn/chapter-0/punctuation-misc"
        >
          Punctuation and Misc.
        </UnitButton>
        <UnitButton
          id="16."
          type="vocab-list"
          link="/learn/chapter-0/vocab-list"
        >
          Chapter 0 Vocab List
        </UnitButton>
        <UnitButton id="17." type="vocab" link="/learn/chapter-0/greetings">
          Greetings
        </UnitButton>
        <UnitButton
          id="18."
          type="culture-note"
          link="/learn/chapter-0/culture-note-japanese-greetings"
        >
          Culture Note: Japanese Greetings
        </UnitButton>
        <UnitButton
          id="15."
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
          link="/learn/chapter-0/greetings-common-expressions/practice"
        >
          Practice Greet. & Common Expr.
        </UnitButton>
        <UnitButton id="21." type="lesson" link="/learn/chapter-0/numbers">
          Numbers
        </UnitButton>
        <UnitButton id="22." type="vocab" link="/learn/chapter-0/numbers-0-100">
          Numbers 0-100
        </UnitButton>
        <UnitButton
          id="23."
          type="practice"
          link="/learn/chapter-0/number-matching"
        >
          Number Matching
        </UnitButton>
        <UnitButton
          id="24."
          type="practice"
          link="/learn/chapter-0/numbers-0-10/practice"
        >
          Practice Numbers 0-10
        </UnitButton>
        <UnitButton
          id="25."
          type="practice"
          link="/learn/chapter-0/numbers-11-100/practice"
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
          link="/learn/chapter-1/people-descriptors-misc/practice"
        >
          Practice People, Descriptors, Misc.
        </UnitButton>
        <UnitButton id="7." type="vocab" link="/learn/chapter-1/family-school">
          Family & School
        </UnitButton>
        <UnitButton
          id="8."
          type="practice"
          link="/learn/chapter-1/family-school/practice"
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
          link="/learn/chapter-1/occupations-majors/practice"
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
          link="/learn/chapter-1/countries-time/practice"
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
        <UnitButton
          id="21."
          type="writing"
          link="/learn/chapter-1/practice-sentences-desu-wa-ka-no"
        >
          Practice Sentences:{" "}
          <span className="font-japanese">です, は, か, の</span>
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
        <UnitButton id="26." type="writing">
          Practice Time
        </UnitButton>
        <UnitButton id="27." type="lesson" link="/learn/chapter-1/minutes">
          Minutes
        </UnitButton>
        <UnitButton
          id="28."
          type="audio"
          link="/learn/chapter-1/kikusasaizu-1-2"
        >
          MyKikitori - Conversation 2
        </UnitButton>
        <UnitButton id="29." type="practice">
          Vocab Practice: All Vocab
        </UnitButton>
        <UnitButton id="30." type="writing">
          Worksheet 1
        </UnitButton>
        <UnitButton id="31." type="writing">
          Worksheet 2
        </UnitButton>
        <UnitButton
          id="32."
          type="video"
          link="/learn/chapter-1/kikusasaizu-1-3"
        >
          Kikusasaizu Video - L1-3
        </UnitButton>
        <UnitButton id="33." type="game" disabled>
          Meet Your Host Family At The Airport
        </UnitButton>
        <UnitButton id="34." type="audio">
          MyKikitori - Conversation 3
        </UnitButton>
      </ChapterBox>
      <ChapterBox text="Chapter 2" className="bg-green-600 saturate-[65%]">
        <UnitButton id="1." type="vocab-list">
          Chapter 2 Vocab List
        </UnitButton>
        <UnitButton id="2." type="grammar-notes">
          Chapter 2 Grammar notes
        </UnitButton>
        <UnitButton id="3." type="lesson">
          Katakana
        </UnitButton>
        <UnitButton id="4." type="practice">
          Practice Katakana
        </UnitButton>
        <UnitButton id="5." type="lesson">
          English Words in Japanese
        </UnitButton>
        <UnitButton id="6." type="writing">
          Katakana Quiz
        </UnitButton>
        <UnitButton id="7." type="writing">
          Katakana Words Practice
        </UnitButton>
        <UnitButton id="8." type="vocab">
          Things
        </UnitButton>
        <UnitButton id="9." type="practice">
          Practice Things
        </UnitButton>
        <UnitButton id="10." type="lesson">
          Words That Point Pt.1
        </UnitButton>
        <UnitButton id="11." type="lesson">
          Words That Point Pt.2
        </UnitButton>
        <UnitButton id="12." type="practice">
          Practice Words That Point
        </UnitButton>
        <UnitButton id="13." type="lesson">
          <span className="font-japanese font-medium">だれ</span>
        </UnitButton>
        <UnitButton id="14." type="lesson">
          <span className="font-japanese font-medium">も</span>
        </UnitButton>
        <UnitButton id="15." type="lesson">
          It is not...
        </UnitButton>
        <UnitButton id="16." type="video">
          Kikusasaizu Video - L2-1
        </UnitButton>
        <UnitButton id="17." type="lesson">
          <span className="font-japanese font-medium">ね, よ</span>
        </UnitButton>
        <UnitButton id="18." type="video">
          Kikusasaizu Video - L2-2
        </UnitButton>
        <UnitButton id="19." type="vocab">
          Places, Money, Food
        </UnitButton>
        <UnitButton id="20." type="practice">
          Practice Places, Money, Food
        </UnitButton>
        <UnitButton id="21." type="audio">
          MyKikitori - At a Café
        </UnitButton>
        <UnitButton id="22." type="lesson">
          Big Numbers
        </UnitButton>
        <UnitButton id="23." type="lesson">
          Japanese Money
        </UnitButton>
        <UnitButton id="24." type="writing">
          Practice Money
        </UnitButton>
        <UnitButton id="25." type="game" disabled>
          Numbers Game 1
        </UnitButton>
        <UnitButton id="26." type="game" disabled>
          Numbers Game 2
        </UnitButton>
        <UnitButton id="23." type="culture-note">
          Bonus: More About Money
        </UnitButton>
        <UnitButton id="23." type="writing">
          Worksheet 1
        </UnitButton>
        <UnitButton id="23." type="writing">
          Worksheet 2
        </UnitButton>
        <UnitButton id="23." type="writing">
          Worksheet 3
        </UnitButton>
        <UnitButton id="23." type="game" disabled>
          House Tour
        </UnitButton>
      </ChapterBox>
      <ChapterBox text="Chapter 3" className="bg-orange-500 saturate-[65%]">
        <UnitButton id="1." type="vocab-list">
          Chapter 3 Vocab List
        </UnitButton>
        <UnitButton id="2." type="grammar-notes">
          Chapter 3 Grammar Notes
        </UnitButton>
        <UnitButton id="3." type="lesson">
          Introduction to Kanji
        </UnitButton>
        <UnitButton id="4." type="lesson">
          Breaking Down Kanji
        </UnitButton>
        <UnitButton id="5." type="vocab">
          Chapter 3 Nouns
        </UnitButton>
        <UnitButton id="6." type="practice">
          Practice Nouns - Readings
        </UnitButton>
        <UnitButton id="7." type="practice">
          Practice Nouns - Kana
        </UnitButton>
        <UnitButton id="8." type="vocab">
          Chapter 3 Verbs & Adj.
        </UnitButton>
        <UnitButton id="9." type="practice">
          Practice Verbs & Adj. - Readings
        </UnitButton>
        <UnitButton id="10." type="practice">
          Practice Verbs & Adj. - Kana
        </UnitButton>
        <UnitButton id="11." type="lesson">
          Verb Conj. - <span className="font-japanese">ます</span>, Godan,
          Ichidan
        </UnitButton>
        <UnitButton id="12." type="practice">
          Practice Positive <span className="font-japanese">ます</span>{" "}
          Conjugation
        </UnitButton>
        <UnitButton id="13." type="lesson">
          Negative <span className="font-japanese">ます</span> Conjugation
        </UnitButton>
        <UnitButton id="14." type="practice">
          Practice Negative <span className="font-japanese">ます</span>{" "}
          Conjugation
        </UnitButton>
        <UnitButton id="15." type="writing">
          Verb Conj. Worksheet
        </UnitButton>
        <UnitButton id="16." type="lesson">
          Particles - <span className="font-japanese">を, で, に, へ</span>
        </UnitButton>
        <UnitButton id="17." type="lesson">
          Word Order
        </UnitButton>
        <UnitButton id="18." type="writing">
          Practice Particles
        </UnitButton>
        <UnitButton id="19." type="reading">
          Reading Practice
        </UnitButton>
        <UnitButton id="20." type="lesson">
          Polite Invitations
        </UnitButton>
        <UnitButton id="21." type="video">
          Kikusasaizu Video - L3-2
        </UnitButton>
        <UnitButton id="22." type="lesson">
          Days of The Week & Time
        </UnitButton>
        <UnitButton id="23." type="practice">
          Practice Days & Time - Readings
        </UnitButton>
        <UnitButton id="24." type="lesson">
          Practice Days & Time - Kana
        </UnitButton>
        <UnitButton id="25." type="lesson">
          ちょっと
        </UnitButton>
        <UnitButton id="26." type="video">
          Kikusasaizu Video - L3-3
        </UnitButton>
        <UnitButton id="27." type="audio">
          MyKikitori - Do You Want to Go to Tokyo?
        </UnitButton>
        <UnitButton id="28." type="vocab">
          Frequency Adverbs
        </UnitButton>
        <UnitButton id="29." type="vocab">
          More Common Expressions
        </UnitButton>
        <UnitButton id="30." type="video">
          MyKikitori - Campus Interview #1
        </UnitButton>
        <UnitButton id="31." type="video">
          Aizuchi: Japanese Noises
        </UnitButton>
        <UnitButton id="32." type="vocab">
          <span className="font-japanese">
            そして、それから, でも, けど, が
          </span>
        </UnitButton>
        <UnitButton id="33." type="writing">
          <span className="font-japanese">
            そして, それから, でも, けど, が
          </span>{" "}
          Practice
        </UnitButton>
        <UnitButton id="34." type="video">
          Kikusasaizu Video - L3-1
        </UnitButton>
        <UnitButton id="35." type="audio">
          MyKikitori - Campus Interview #2
        </UnitButton>
        <UnitButton id="36." type="lesson">
          Note on <span className="font-japanese">けど</span>
        </UnitButton>
        <UnitButton id="37." type="writing">
          Contrast Worksheet
        </UnitButton>
        <UnitButton id="38." type="writing">
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
