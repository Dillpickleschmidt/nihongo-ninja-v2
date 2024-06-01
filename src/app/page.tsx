import PortraitIcon from "@/components/PortraitIcon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col items-center justify-center p-24 w-full h-[420px] bg-black/5">
        <div>
          <h1 className="text-center text-6xl font-semibold">Nihongo Ninja</h1>
          <h2 className="text-center text-muted-foreground mt-4">
            The one-stop shop for all your Japanese learning needs.
          </h2>
          <div className="mt-6 flex gap-2">
            <Input
              placeholder="your@email.com"
              className="border-none bg-card w-72 placeholder:text-muted-foreground/50 placeholder:text-center"
            />
            <Button className="bg-red-400 text-white">Get started!</Button>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-0.5 bg-white/10" /> */}
      <div className="w-full h-[800px] px-12 bg-black/20">
        <div className="flex">
          <h2 className="text-4xl font-semibold pt-24 text-primary/95 pl-4">
            Diverse Activities
          </h2>
          <div className="w-full -ml-12">
            <div className="grid grid-cols-9 gap-2 [&>*]:h-40 pt-12 [&>*]:bg-neutral-700 [&>*]:text-neutral-700 [&>*]:rounded-2xl">
              <div>.</div>
              <div>.</div>
              <div>.</div>
              <div>.</div>
              <div>.</div>
              <div>.</div>
              <div>.</div>
              <div>.</div>
              <div>.</div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-2 [&>*]:h-96 pt-24 [&>*]:bg-neutral-700 [&>*]:text-neutral-700 [&>*]:rounded-2xl">
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full flex min-h-[900px]">
          <div className="w-[35%] bg-background-secondary text-primary-foreground">
            <div className="mt-24 xl:ml-44 mx-24 space-y-12">
              <h2 className="text-6xl font-medium">
                Ever felt like language apps <u>just don&apos;t cut it</u>?
                Craving something a little{" "}
                <span className="font-semibold text-7xl">more? </span>
              </h2>
              <h3 className="text-4xl">
                Nihongo Ninja is here for you! All of our lessons are based on
                material from real teachers in college courses.
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full flex min-h-[900px]">
          <div className="w-[65%]"></div>
          <div className="w-[35%]">
            <div className="mt-24 xl:mr-40 mx-24 space-y-12">
              <h2 className="text-4xl">
                <span className="font-semibold text-6xl">
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
                    className="mt-4 border-none w-16 h-16 mr-16"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex min-h-[900px]">
          <div className="w-[35%] bg-red-500">
            <div className="mt-48 xl:ml-40 mx-24 space-y-12">
              <h2 className="text-4xl">
                <span className="font-semibold text-6xl">Games?</span> Oh,
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
        <div className="w-full flex min-h-[900px]">
          <div className="w-[35%]">
            <div className="mt-24 xl:ml-40 mx-24 space-y-12">
              <h2 className="text-4xl">
                <span className="font-semibold text-6xl">Flashcards?</span> Even
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
        <div className="w-full flex min-h-[900px] bg-background-secondary text-primary-foreground">
          <div className="w-[35%]">
            <div className="mt-24 xl:ml-40 mx-24 space-y-12">
              <h2 className="text-4xl">
                <span className="font-semibold text-6xl">
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
          <div className="w-[65%] flex flex-col justify-center">
            <div className="w-full h-full mt-24 mb-8 bg-background rounded-l-md"></div>
          </div>
        </div>
        <div className="w-full flex min-h-[900px]">
          <div className="w-[35%]">
            <div className="mt-24 xl:ml-40 mx-24 space-y-12">
              <h2 className="text-4xl">
                <span className="font-semibold text-6xl">
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
        <div className="min-h-[400px] py-12 flex flex-col justify-center items-center bg-background-secondary">
          <div className="xl:mx-64 mx-24 space-y-12">
            <h2 className="text-[2.5rem] text-center font-semibold text-primary-foreground">
              Sound interesting?
            </h2>
            <Button
              link="learn/"
              variant="outline"
              className="mt-8 text-6xl font-semibold py-16 px-12 rounded-2xl"
            >
              Try your first lesson {"->"}
            </Button>
          </div>
        </div>
        <div className="h-[500px] flex flex-col justify-end items-center bg-card">
          {/* <div className="bottom-0 w-[75%] h-80 bg-background-secondary rounded-t-3xl"></div> */}
        </div>
      </div>
    </main>
  )
}
