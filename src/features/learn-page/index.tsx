import ChapterBox from "./components/ChapterBox/ChapterBox"
import UnitButton from "./components/ChapterBox/UnitButton"
import ButtonBarGroup from "./components/ButtonBar/ButtonBarGroup"
import TopWindowSizer from "./components/TopWindowSizer"

export function ChapterBoxes() {
  return (
    <>
      <ChapterBox text="Chapter 1" className="bg-red-600 saturate-50">
        <UnitButton id="1." type="preview" link="learn/test">
          Welcome!
        </UnitButton>
        <UnitButton id="2." type="lesson">
          Writing Systems
        </UnitButton>
        <UnitButton id="3." type="lesson">
          Hiragana
        </UnitButton>
        <UnitButton id="4." type="quiz">
          Hiragana Quiz 1
        </UnitButton>
        <UnitButton id="5." type="lesson">
          Dakuten & Handakuten
        </UnitButton>
        <UnitButton id="6." type="quiz">
          Hiragana Quiz 2
        </UnitButton>
        <UnitButton id="7." type="lesson">
          Contracted Sounds
        </UnitButton>
        <UnitButton id="8." type="quiz">
          Hiragana Quiz 3
        </UnitButton>
        <UnitButton id="9." type="lesson">
          Long Vowels & Double Consonants
        </UnitButton>
        <UnitButton id="10." type="quiz">
          Hiragana Final Quiz
        </UnitButton>
        <UnitButton id="11." type="vocab-list">
          Chapter 1 - All Vocab
        </UnitButton>
        <UnitButton id="12." type="lesson">
          Greetings
        </UnitButton>
        <UnitButton id="13." type="quiz">
          Greetings Quiz
        </UnitButton>
        <UnitButton id="14." type="lesson">
          Common Phrases
        </UnitButton>
        <UnitButton id="15." type="lesson">
          Numbers
        </UnitButton>
        <UnitButton id="16." type="vocab-list">
          Numbers 1-100
        </UnitButton>
        <UnitButton id="17." type="quiz">
          Practice Numbers 0-10
        </UnitButton>
        <UnitButton id="18." type="quiz">
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
  return <TopWindowSizer>{children}</TopWindowSizer>
}
