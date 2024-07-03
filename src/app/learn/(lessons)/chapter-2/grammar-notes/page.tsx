import ContentBox from "@/features/content-box/ContentBox"
import GrammarNotes from "@/features/grammar-notes/GrammarNotes"
import GaParticle from "./components/GaParticle"
import Dare from "./components/Dare"
import MoParticle from "./components/MoParticle"
import Janai from "./components/Janai"
import NeYoParticles from "./components/NeYoParticles"
import WordsThatPoint from "./components/WordsThatPoint"

export default function page() {
  const items = [
    {
      title: <>Words That Point</>,
      content: <WordsThatPoint />,
      imgSrc: "/img/chapter-2/grammar-notes/words-that-point.jpg",
    },
    {
      title: (
        <>
          <span className="font-japanese">が</span> Particle
        </>
      ),
      content: <GaParticle />,
      imgSrc: "/img/chapter-2/grammar-notes/ga-particle.jpg",
    },
    {
      title: (
        <>
          <span className="font-japanese">だれ</span> - Who
        </>
      ),
      content: <Dare />,
      imgSrc: "/img/chapter-2/grammar-notes/dare.jpg",
    },
    {
      title: (
        <>
          <span className="font-japanese">も</span> Particle
        </>
      ),
      content: <MoParticle />,
      imgSrc: "/img/chapter-2/grammar-notes/mo-particle.jpg",
    },
    {
      title: (
        <>
          <span className="font-japanese">じゃない</span> - Negative Form
        </>
      ),
      content: <Janai />,
      imgSrc: "/img/chapter-2/grammar-notes/janai.jpg",
    },
    {
      title: (
        <>
          <span className="font-japanese">ね</span> and{" "}
          <span className="font-japanese">よ</span>
        </>
      ),
      content: <NeYoParticles />,
      imgSrc: "/img/chapter-2/grammar-notes/ne-yo.jpg",
    },
  ]

  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      variant="fullscreen"
      nextPageLink="/learn/chapter-3/katakana"
      showProgressBar={false}
    >
      <GrammarNotes items={items} />
    </ContentBox>
  )
}
