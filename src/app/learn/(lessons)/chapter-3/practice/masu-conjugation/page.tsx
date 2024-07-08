import SettingsMenu from "@/features/conjugation-practice/components/SettingsMenu"
import { ConjugationPracticeContextProvider } from "@/features/conjugation-practice/context/ConjugationPracticeContext"
import ContentBox from "@/features/content-box/ContentBox"
import WanakanaWrapper from "@/features/wanakana/WanaKana"

export default function Page() {
  return (
    <ContentBox
      variant="md"
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={2}
      nextPageLink=""
      showProgressBar={false}
      nextButton=""
    >
      <div className="flex w-full flex-col items-center pt-16">
        <div className="flex w-[500px] flex-col items-center space-y-6">
          <ConjugationPracticeContextProvider>
            <SettingsMenu />
          </ConjugationPracticeContextProvider>
        </div>
      </div>
    </ContentBox>
  )
}
