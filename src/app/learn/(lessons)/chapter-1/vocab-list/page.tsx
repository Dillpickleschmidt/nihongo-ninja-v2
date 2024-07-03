import ContentBox from "@/features/content-box/ContentBox"
import Furigana from "@/components/text/Furigana"
import PeopleDescriptorsMisc from "./components/PeopleDescriptorsMisc"
import FamilySchool from "./components/FamilySchool"
import OccupationsMajors from "./components/OccupationsMajors"
import UsefulExpressions from "./components/UsefulExpressions"
import Countries from "./components/Countries"
import Time from "./components/Time"
import Minutes from "./components/Minutes"

export default async function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/grammar-notes"
    >
      <div className="mx-16 border-b border-neutral-600 pb-16">
        <h1 className="mx-auto mb-12 mt-20 text-center text-5xl font-semibold tracking-wide">
          <em>Vocabulary</em>
        </h1>
        <div className="mx-8">
          <h3 className="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
            People, Descriptors, Misc.
          </h3>
          <PeopleDescriptorsMisc />
          <h3 className="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
            Family & School
          </h3>
          <FamilySchool />
          <h3 className="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
            Occupations & Majors
          </h3>
          <OccupationsMajors />
          <h3 className="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
            Useful Expressions
          </h3>
          <UsefulExpressions />
          <h3 className="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
            Countries
          </h3>
          <Countries />
          <h3 className="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
            Time
          </h3>
          <Time />
          <h3 className="mb-6 mt-8 text-center text-2xl font-medium text-orange-400">
            Minutes
          </h3>
          <Minutes />
        </div>
      </div>
    </ContentBox>
  )
}
