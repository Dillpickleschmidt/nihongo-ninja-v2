import KaParticle from "./components/chapter-1/KaParticle"
import NoParticle from "./components/chapter-1/NoParticle"
import XwaYdesu from "./components/chapter-1/XwaYdesu"
import Dare from "./components/chapter-2/Dare"
import GaParticle from "./components/chapter-2/GaParticle"
import Janai from "./components/chapter-2/Janai"
import MoParticle from "./components/chapter-2/MoParticle"
import NeYoParticles from "./components/chapter-2/NeYoParticles"
import WordsThatPoint from "./components/chapter-2/WordsThatPoint"

export const chapter1 = [
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
export const chapter2 = [
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
