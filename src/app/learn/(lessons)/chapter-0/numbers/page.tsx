import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"
import Romaji from "@/components/text/Romaji"
import React from "react"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-0/numbers-1-100"
      showProgressBar={false}
    >
      <h1 className="pt-36 pb-16 text-5xl font-medium leading-[4rem] text-center px-20">
        <span className="font-bold text-6xl">Ditch the Charades:</span>{" "}
        <span className="text-5xl">Conquer</span> Japanese Numbers and{" "}
        <span className="text-6xl font-bold underline">Win at Life</span>
      </h1>
      <h2 className="text-xl text-center font-semibold pb-8">
        <em>Huh?</em>
      </h2>
      <div className="flex">
        <div className="md:px-16 sm:px-12 px-8 bg-background-secondary rounded-br-md">
          <p className="mt-6 text-3xl font-medium leading-[2.5rem] py-12 text-primary-foreground">
            Imagine you're in Japan, walking into a shop. You see ten{" "}
            <span className="font-semibold">beautiful</span> fans, but you only
            want two. How do you convey this without frantically waving your
            arms? <span className="font-extrabold">Numbers</span>, my friend!
          </p>
        </div>
        <div className="md:px-24 sm:px-20 px-16 min-w-[55%]">
          <p className="mt-12 text-3xl font-medium leading-[2.5rem] py-12">
            Or picture this: You're at a lively party in Tokyo. Someone asks
            your age. Do you start a game of charades, or do you confidently say{" "}
            <span className="font-japanese">にじゅうさい</span> (20 years old)?
            Numbers save the day again!
          </p>
        </div>
      </div>
      <div className="px-20">
        <p className="text-3xl font-medium leading-[2.5rem] py-24">
          And let's not forget about telling time. Miss your train because you
          couldn't understand "ごぜんくじ" (9 AM)? ...I hope your friends missed
          you, at least. 🥹
        </p>
      </div>
      <div className="px-20 bg-background-secondary">
        <PortraitIcon src="/img/guru.png" className="mt-28 h-14 w-14" />
        <p className="text-3xl font-medium leading-[2.5rem] py-24 text-primary-foreground">
          Numbers in Japanese aren't just digits; they're your key to avoiding
          awkward silences, wild gestures, and the dreaded mime routine. So,
          let's count our way to greatness!
        </p>
      </div>
    </ContentBox>
  )
}
