import Greetings from "./components/chapter-0/Greetings"
import CommonExpressions from "./components/chapter-0/CommonExpressions"
import Numbers from "./components/chapter-0/Numbers"
import PeopleDescriptorsMisc from "./components/chapter-1/PeopleDescriptorsMisc"
import OccupationsMajors from "./components/chapter-1/OccupationsMajors"
import Countries from "./components/chapter-1/Countries"
import Minutes from "./components/chapter-1/Minutes"
import FamilySchool from "./components/chapter-1/FamilySchool"
import UsefulExpressions from "./components/chapter-1/UsefulExpressions"
import Time from "./components/chapter-1/Time"
import Things from "./components/chapter-2/Things"
import PlacesMoneyFood from "./components/chapter-2/PlacesMoneyFood"
import WordsThatPoint from "./components/chapter-2/WordsThatPoint"

export default function VocabList() {
  return (
    <>
      <h1 className="mx-auto mb-6 mt-28 text-center text-5xl font-semibold tracking-wide">
        <em>Chapter 0</em>
      </h1>
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="hidden lg:block">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Greetings
          </h3>
          <Greetings />
          <div>
            <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
              Common Expressions
            </h3>
            <CommonExpressions />
          </div>
        </div>

        <div className="lg:hidden">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Greetings
          </h3>
          <Greetings />
        </div>
        <div>
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Common Expressions
          </h3>
          <CommonExpressions />
        </div>
        <div className="lg:hidden">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Numbers
          </h3>
          <Numbers />
          <p className="mt-4 text-center">...up to 99 (it's easy).</p>
        </div>
      </div>

      <h1 className="mx-auto mb-6 mt-20 text-center text-5xl font-semibold tracking-wide">
        <em>Chapter 1</em>
      </h1>
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="hidden lg:block">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            People, Descriptors, Misc.
          </h3>
          <PeopleDescriptorsMisc />
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Occupations & Majors
          </h3>
          <OccupationsMajors />
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Countries
          </h3>
          <Countries />
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Minutes
          </h3>
          <Minutes />
        </div>

        <div className="hidden lg:block">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Family & School
          </h3>
          <FamilySchool />
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Useful Expressions
          </h3>
          <UsefulExpressions />
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Time
          </h3>
          <Time />
        </div>

        <div className="lg:hidden">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            People, Descriptors, Misc.
          </h3>
          <PeopleDescriptorsMisc />
        </div>
        <div className="lg:hidden">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Family & School
          </h3>
          <FamilySchool />
        </div>
        <div className="lg:hidden">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Occupations & Majors
          </h3>
          <OccupationsMajors />
        </div>
        <div className="lg:hidden">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Useful Expressions
          </h3>
          <UsefulExpressions />
        </div>
        <div className="lg:hidden">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Countries
          </h3>
          <Countries />
        </div>
        <div className="lg:hidden">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Time
          </h3>
          <Time />
        </div>
        <div className="lg:hidden">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Minutes
          </h3>
          <Minutes />
        </div>
      </div>

      <h1 className="mx-auto mb-6 mt-20 text-center text-5xl font-semibold tracking-wide">
        <em>Chapter 2</em>
      </h1>
      <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="hidden lg:block">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Things
          </h3>
          <Things />

          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Places, Money, Food
          </h3>
          <PlacesMoneyFood />
        </div>

        <div className="hidden lg:block">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Words That Point
          </h3>
          <WordsThatPoint />
        </div>

        <div className="lg:hidden">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Things
          </h3>
          <Things />
        </div>
        <div className="lg:hidden">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Words That Point
          </h3>
          <WordsThatPoint />
        </div>
        <div className="lg:hidden">
          <h3 className="mb-3 mt-6 text-center text-2xl font-medium text-orange-400">
            Places, Money, Food
          </h3>
          <PlacesMoneyFood />
        </div>
      </div>
    </>
  )
}
