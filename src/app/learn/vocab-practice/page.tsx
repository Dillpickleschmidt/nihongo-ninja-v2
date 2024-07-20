import Link from "next/link"
import Dropdown from "@/features/vocab-practice/Dropdown"
import { Button } from "@/components/ui/button"

export default function page() {
  return (
    <div className="scrollbar-thin scrollbar-thumb-[#999999] hover:scrollbar-thumb-neutral-400 h-full">
      <div className="mt-32 text-lg">
        <div className="flex w-full flex-col items-center">
          <Dropdown text="Chapter 0">
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-0/practice/hiragana"
            >
              Hiragana
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-0/practice/dakuten-handakuten"
            >
              Dakuten & Handakuten
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-0/practice/contracted-sounds"
            >
              Contracted Sounds
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-0/practice/greetings-common-expressions"
            >
              Greetings & Common Expressions
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-0/practice/numbers-0-10"
            >
              Numbers 0-10
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-0/practice/numbers-11-100"
            >
              Numbers 11-100
            </Button>
          </Dropdown>
          <Dropdown text="Chapter 1">
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-1/practice/kanji-numbers"
            >
              Kanji Numbers
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-1/practice/people-descriptors-misc"
            >
              People, Descriptors, & Misc.
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-1/practice/family-school"
            >
              Family & School
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-1/practice/occupations-majors"
            >
              Occupations & Majors
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-1/practice/countries-time"
            >
              Countries & Time
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-1/practice/time"
            >
              Time
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-1/practice/minutes"
            >
              Minutes
            </Button>
          </Dropdown>
          <Dropdown text="Chapter 2">
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-2/practice/katakana"
            >
              Katakana
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-2/practice/things"
            >
              Things
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-2/practice/words-that-point"
            >
              Words That Point
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-2/practice/places-money-food"
            >
              Places, Money, Food
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-2/practice/all-vocab"
            >
              All Vocab
            </Button>
          </Dropdown>
          <Dropdown text="Chapter 3">
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-3/practice/chapter-1-kanji-part-1"
            >
              Chapter 1 Kanji Part 1
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-3/practice/chapter-1-kanji-part-2"
            >
              Chapter 1 Kanji Part 2
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-3/practice/chapter-1-kanji-part-3"
            >
              Chapter 1 Kanji Part 3
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-3/practice/chapter-2-kanji"
            >
              Chapter 2 Kanji
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-3/practice/nouns-readings"
            >
              Nouns - Readings
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-3/practice/nouns-kana"
            >
              Nouns - Kana
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-3/practice/days-and-time-readings"
            >
              Days & Time - Readings
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-3/practice/days-and-time-kana"
            >
              Days & Time - Kana
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-3/practice/verbs-and-adj-readings"
            >
              Verbs & Adjectives - Readings
            </Button>
            <Button
              variant="link"
              className="justify-start text-start text-lg font-normal duration-100 ease-out"
              link="/learn/chapter-3/practice/verbs-and-adj-kana"
            >
              Verbs & Adjectives - Kana
            </Button>
          </Dropdown>
        </div>
      </div>
    </div>
  )
}
