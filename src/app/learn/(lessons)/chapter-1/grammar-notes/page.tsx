import ContentBox from "@/components/ContentBox"
import GrammarNotes from "@/features/grammar-notes/GrammarNotes"
import XwaYdesu from "./components/XwaYdesu"
import KaParticle from "./components/KaParticle"
import NoParticle from "./components/NoParticle"

export default function page() {
  const items = [
    {
      title: (
        <>
          X<span className="font-japanese">は</span>Y
          <span className="font-japanese">です</span>
        </>
      ),
      content: <XwaYdesu />,
      imgSrc: "/img/chapter-1/grammar-notes/x-wa-y-desu.jpg",
    },
    {
      title: (
        <>
          <span className="font-japanese">か</span> Particle
        </>
      ),
      content: <KaParticle />,
      imgSrc: "/img/chapter-1/grammar-notes/ka-particle.jpg",
    },
    {
      title: (
        <>
          <span className="font-japanese">の</span> Particle
        </>
      ),
      content: <NoParticle />,
      imgSrc: "/img/chapter-1/grammar-notes/no-particle.jpg",
    },
  ]

  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      variant="fullscreen"
      nextPageLink="/learn/chapter-1/everyday-expressions"
      showProgressBar={false}
    >
      <GrammarNotes gridCols={3} items={items} />
    </ContentBox>
  )
}
