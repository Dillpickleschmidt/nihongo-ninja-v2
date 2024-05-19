import ChapterBox from "./components/ChapterBox/ChapterBox"
import UnitButton from "./components/ChapterBox/UnitButton"
import ButtonBarGroup from "./components/ButtonBar/ButtonBarGroup"
import TopWindowAnimations from "./components/TopWindowAnimations"

export function ChapterBoxes() {
  return (
    <>
      <ChapterBox text="Chapter 1" className="bg-red-600 saturate-50">
        <UnitButton id="1." type="preview" link="/learn/chapter-1/welcome">
          Welcome!
        </UnitButton>
        <UnitButton id="2." type="lesson" link="/learn/chapter-1/lesson-1">
          Japanese Pronunciation
        </UnitButton>
        <UnitButton id="3." type="lesson" link="/learn/chapter-1/lesson-2">
          Writing Systems
        </UnitButton>
        <UnitButton id="4." type="lesson" link="/learn/chapter-1/lesson-3">
          Hiragana
        </UnitButton>
        <UnitButton id="5." type="quiz" link="/learn/chapter-1/hiragana-quiz-1">
          Hiragana Quiz 1
        </UnitButton>
        <UnitButton id="6." type="lesson" link="/learn/chapter-1/lesson-4">
          Dakuten & Handakuten
        </UnitButton>
        <UnitButton id="7." type="quiz" link="/learn/chapter-1/hiragana-quiz-2">
          Hiragana Quiz 2
        </UnitButton>
        <UnitButton id="8." type="lesson" link="/learn/chapter-1/lesson-5">
          Contracted Sounds
        </UnitButton>
        <UnitButton id="9." type="quiz" link="/learn/chapter-1/hiragana-quiz-3">
          Hiragana Quiz 3
        </UnitButton>
        <UnitButton id="10." type="lesson" link="/learn/chapter-1/lesson-6">
          Long Vowels & Double Consonants
        </UnitButton>
        <UnitButton id="11." type="quiz" link="/learn/chapter-1/hiragana-test">
          Hiragana Final Quiz
        </UnitButton>
        <UnitButton id="12." type="quiz" link="/learn/chapter-1/lesson-7">
          Punctuation and Misc.
        </UnitButton>
        <UnitButton id="13." type="vocab-list">
          Chapter 1 - All Vocab
        </UnitButton>
        <UnitButton id="14." type="lesson">
          Greetings
        </UnitButton>
        <UnitButton id="15." type="quiz">
          Greetings Quiz
        </UnitButton>
        <UnitButton id="16." type="lesson">
          Common Phrases
        </UnitButton>
        <UnitButton id="17." type="lesson">
          Numbers
        </UnitButton>
        <UnitButton id="18." type="vocab-list">
          Numbers 1-100
        </UnitButton>
        <UnitButton id="19." type="quiz">
          Practice Numbers 0-10
        </UnitButton>
        <UnitButton id="20." type="quiz">
          Practice Numbers 11-100
        </UnitButton>
      </ChapterBox>
      <ChapterBox text="Chapter 2" className="bg-sky-600 saturate-50">
        <UnitButton id="1." type="preview">
          Chapter Preview
        </UnitButton>
        <UnitButton id="2." type="vocab-list">
          Chapter 2 - All Vocab
        </UnitButton>
        <UnitButton id="3." type="lesson">
          です
        </UnitButton>
        <UnitButton id="4." type="lesson">
          わたし + は
        </UnitButton>
        <UnitButton id="Unit 4">Placeholder</UnitButton>
        <UnitButton id="Unit 5">Placeholder</UnitButton>
        <UnitButton id="Unit 6">Placeholder</UnitButton>
        <UnitButton id="Unit 7">Placeholder</UnitButton>
        <UnitButton id="Unit 8">Placeholder</UnitButton>
        <UnitButton id="Unit 9">Placeholder</UnitButton>
        <UnitButton id="Unit 10">Placeholder</UnitButton>
      </ChapterBox>
      <ChapterBox text="Chapter 3" className="bg-green-600 saturate-50">
        <UnitButton id="Unit 1">Placeholder</UnitButton>
        <UnitButton id="Unit 2">Placeholder</UnitButton>
        <UnitButton id="Unit 3">Placeholder</UnitButton>
        <UnitButton id="Unit 4">Placeholder</UnitButton>
        <UnitButton id="Unit 5">Placeholder</UnitButton>
        <UnitButton id="Unit 6">Placeholder</UnitButton>
        <UnitButton id="Unit 7">Placeholder</UnitButton>
        <UnitButton id="Unit 8">Placeholder</UnitButton>
        <UnitButton id="Unit 9">Placeholder</UnitButton>
        <UnitButton id="Unit 10">Placeholder</UnitButton>
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
