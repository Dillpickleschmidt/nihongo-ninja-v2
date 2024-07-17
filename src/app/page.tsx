import PortraitIcon from "@/components/PortraitIcon"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import supabaseServer from "@/lib/supabase/server"
import { redirect } from "next/navigation"

export default async function Home() {
  const supabase = supabaseServer()
  const user = (await supabase.auth.getSession()).data.session?.user
  if (!user) {
    redirect("/learn")
  }

  return (
    <main className="">
      <div className="flex h-[420px] w-full flex-col items-center justify-center bg-black/5 p-24">
        <div>
          <h1 className="text-center text-6xl font-semibold">Nihongo Ninja</h1>
          <h2 className="mt-4 text-center text-muted-foreground">
            The one-stop shop for all your Japanese learning needs.
          </h2>
          <div className="mt-6 flex gap-2">
            <Input
              placeholder="your@email.com"
              className="w-72 border-none bg-card placeholder:text-center placeholder:text-muted-foreground/50"
            />
            <Button className="bg-red-400 text-white">Get started!</Button>
          </div>
        </div>
      </div>
      {/* <div className="w-full h-0.5 bg-white/10" /> */}
      <div className="h-[800px] w-full bg-black/20 px-12">
        <div className="flex">
          <h2 className="pl-4 pt-24 text-4xl font-semibold text-primary/95">
            Diverse Activities
          </h2>
          <div className="-ml-12 w-full">
            <div className="grid grid-cols-9 gap-2 pt-12 [&>*]:h-40 [&>*]:rounded-2xl [&>*]:bg-neutral-700 [&>*]:text-neutral-700">
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
        <div className="grid grid-cols-5 gap-2 pt-24 [&>*]:h-96 [&>*]:rounded-2xl [&>*]:bg-neutral-700 [&>*]:text-neutral-700">
          <div>.</div>
          <div>.</div>
          <div>.</div>
          <div>.</div>
        </div>
      </div>
      <div className="w-full">
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
          {/* <div className="bottom-0 w-[75%] h-80 bg-background-secondary rounded-t-3xl"></div> */}
        </div>
      </div>
    </main>
  )
}
