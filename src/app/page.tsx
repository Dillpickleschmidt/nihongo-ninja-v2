import CustomImage from "@/components/CustomImage"
import PortraitIcon from "@/components/PortraitIcon"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import supabaseServer from "@/lib/supabase/server"
import Link from "next/link"
import { redirect } from "next/navigation"

export default async function Home() {
  return (
    <main className="mt-16 w-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute z-[-1] w-full min-w-[800px]">
        <AspectRatio ratio={16 / 9}>
          <CustomImage
            src="/img/japanese-gate.png"
            alt="Japanese gate homescreen image"
            priority={true}
            className="gradient-mask-b-[transparent,rgba(0,0,0,1)_0%,rgba(0,0,0,0.0)_73%] opacity-15"
          />
        </AspectRatio>
      </div>
      {/* Headers */}
      <div className="px-10 pt-14 md:px-16 md:pt-16 lg:px-24 2xl:px-32 2xl:pt-24">
        <h3 className="ml-2 font-medium md:text-3xl md:text-[#BBBBBB]">
          Nihongo Ninja
        </h3>
        <h1 className="mt-28 max-w-[800px] pr-4 text-[2.25rem] font-medium leading-[3rem] text-[#BBBBBB] md:mt-48 md:pr-0 md:text-[3.25rem] md:leading-[3.5rem]">
          Curated Japanese Tools and Learning Resources
        </h1>
        <h2 className="mt-8 max-w-[950px] text-[1.15rem] leading-8 tracking-tight md:mt-5 md:text-[1.55rem] md:leading-[2.6rem]">
          Discover <span className="text-[#E8C1A9]">helpful videos</span>,{" "}
          tackle challenging <span className="text-[#E8C1A9]">grammar</span>{" "}
          concepts, learn <span className="text-[#E8C1A9]">vocabulary</span>{" "}
          through anime examples, master{" "}
          <span className="text-[#E8C1A9]">conjugation</span>, conquer{" "}
          <span className="text-[#E8C1A9]">kanji</span>, reinforce your skills
          with <span className="text-[#E8C1A9]">games</span>, and more.
        </h2>
        <div className="mt-8 flex w-full justify-center md:mt-10 md:justify-start">
          <Link href="/learn">
            <Button className="rounded-lg bg-[#E8C1A9] px-4 py-[0.65rem] text-[1rem] md:px-6 md:py-3 md:text-lg">
              Get Started! <span className="ml-2 font-semibold">{"->"}</span>
            </Button>
          </Link>
        </div>
      </div>
      {/* Box content */}
      <div className="mt-12 w-full px-12 pb-24 md:mt-24">
        <div className="grid w-[750px] grid-cols-9 gap-[0.275rem] md:ml-[17rem] md:w-[1475px] md:gap-2 [&>*]:h-20 [&>*]:rounded-2xl [&>*]:bg-neutral-700 [&>*]:text-neutral-700 [&>*]:md:h-40">
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
        <div className="mt-12 grid grid-cols-2 gap-[0.275rem] sm:grid-cols-3 md:w-[1750px] md:grid-cols-5 md:gap-2 md:pt-24 [&>*]:h-48 [&>*]:rounded-2xl [&>*]:bg-neutral-700 [&>*]:text-neutral-700 [&>*]:md:h-96">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      {/* <div className="w-full">
        <div className="flex min-h-[900px] w-full">
          <div className="w-[35%] bg-background-secondary text-primary-foreground">
            <div className="mx-24 mt-24 space-y-12 xl:ml-44">
              <h2 className="text-6xl font-medium">
                Ever felt like language apps <u>just don&apos;t cut it</u>?
                Craving something a little{" "}
                <span className="text-7xl font-semibold">more? </span>
              </h2>
              <h3 className="text-4xl">
                Nihongo Ninja is here for you! All of our lessons are based on
                material from real teachers in college courses.
              </h3>
            </div>
          </div>
        </div>
        <div className="flex min-h-[900px] w-full">
          <div className="w-[65%]"></div>
          <div className="w-[35%]">
            <div className="mx-24 mt-24 space-y-12 xl:mr-40">
              <h2 className="text-4xl">
                <span className="text-6xl font-semibold">
                  Crave the depth of textbooks?
                </span>{" "}
                Our lessons are like a comedy show meets Japanese class.
                You&apos;ll learn about culture, context, and why exactly that
                word means what it means—all while chuckling.
              </h2>
              <div className="flex">
                <h3 className="text-3xl">
                  Education or entertainment? Why not both?
                </h3>
                <div className="w-56">
                  <PortraitIcon
                    src="/img/guru.png"
                    className="mr-16 mt-4 h-16 w-16 border-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex min-h-[900px] w-full">
          <div className="w-[35%] bg-red-500">
            <div className="mx-24 mt-48 space-y-12 xl:ml-40">
              <h2 className="text-4xl">
                <span className="text-6xl font-semibold">Games?</span> Oh,
                we&apos;ve got games. They&apos;re not just fun; they&apos;re
                &apos;learn Japanese without realizing you&apos;re
                learning&apos; fun.
              </h2>
              <h3 className="text-2xl">
                Struggle with directions or telling time in Japanese? Our games
                will have you navigating Tokyo streets and scheduling sushi
                dates in no time, minus the actual sushi. 🍣
              </h3>
            </div>
          </div>
        </div>
        <div className="flex min-h-[900px] w-full">
          <div className="w-[35%]">
            <div className="mx-24 mt-24 space-y-12 xl:ml-40">
              <h2 className="text-4xl">
                <span className="text-6xl font-semibold">Flashcards?</span> Even
                better—adaptive and performance-based use of multiple-choice and
                written answers for faster comprehension.
              </h2>
              <h3 className="text-3xl">
                Plus, there&apos;s a twist—every new word comes with a mnemonic
                so bizarre, you&apos;ll wonder what we were thinking. But hey,
                if it helps you remember &apos;cat&apos; in Japanese, isn&apos;t
                that worth it?
              </h3>
            </div>
          </div>
          <div className="w-[65%]"></div>
        </div>
        <div className="flex min-h-[900px] w-full bg-background-secondary text-primary-foreground">
          <div className="w-[35%]">
            <div className="mx-24 mt-24 space-y-12 xl:ml-40">
              <h2 className="text-4xl">
                <span className="text-6xl font-semibold">
                  Don&apos;t you just wish you had someone to talk to?
                </span>{" "}
                Maybe not. But in Japanese, you&apos;ll surely want to get some
                practice speaking and listening.
              </h2>
              <h3 className="text-2xl">
                Nihongo Ninja integrates OpenAI&apos;s Whisper for top-notch
                speech recognition, so you can quickly answer Japanese questions
                with speed and confidence. But what&apos;s learning without a
                voice answering back?
              </h3>
            </div>
          </div>
          <div className="flex w-[65%] flex-col justify-center">
            <div className="mb-8 mt-24 h-full w-full rounded-l-md bg-background"></div>
          </div>
        </div>
        <div className="flex min-h-[900px] w-full">
          <div className="w-[35%]">
            <div className="mx-24 mt-24 space-y-12 xl:ml-40">
              <h2 className="text-4xl">
                <span className="text-6xl font-semibold">
                  We&apos;ve also integrated Voicepeak
                </span>
                , our favorite tool for text-to-speech. It gives you a total of
                6 very high-quality male and female voices for read-aloud and
                conversation.
              </h2>
              <h3 className="text-2xl">
                Now, you&apos;ll be able to speak, listen, and interact in
                Japanese, and receive real-time feedback. It&apos;s like having
                a conversation in a Tokyo café, minus the jet lag.
              </h3>
            </div>
          </div>
          <div className="w-[65%]"></div>
        </div>
        <div className="flex min-h-[400px] flex-col items-center justify-center bg-background-secondary py-12">
          <div className="mx-24 space-y-12 xl:mx-64">
            <h2 className="text-center text-[2.5rem] font-semibold text-primary-foreground">
              Sound interesting?
            </h2>
            <Button
              link="learn/"
              variant="outline"
              className="mt-8 rounded-2xl px-12 py-16 text-6xl font-semibold"
            >
              Try your first lesson {"->"}
            </Button>
          </div>
        </div>
        <div className="flex h-[500px] flex-col items-center justify-end bg-card">
        </div>
      </div> */}
    </main>
  )
}
