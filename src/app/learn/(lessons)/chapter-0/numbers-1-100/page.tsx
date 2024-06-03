import ContentBox from "@/components/ContentBox"
import Romaji from "@/components/text/Romaji"
import Numbers10 from "@/features/charts/Numbers10"
import Numbers100 from "@/features/charts/Numbers100"
import Numbers100V2 from "@/features/charts/Numbers100V2"

export default function page() {
  return (
    <ContentBox
      variant="xl"
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-0/practice-numbers-0-10"
      showProgressBar={false}
    >
      <h1 className="pt-20 mb-8 text-4xl font-medium leading-[3.25rem] text-center px-20">
        Let's learn the basic numbers.
      </h1>
      <div className="w-full lg:flex justify-center">
        <div className="flex justify-center mx-12">
          {/* Numbers List Box */}
          <div>
            <Numbers10 />
          </div>
        </div>
        <div>
          <div className="pt-12 xl:pr-24 lg:pl-6 md:px-28 px-16 space-y-12">
            <p>
              You'll notice that numbers 4, 7, and 9 have two options. Japanese
              speakers use either option, so it's good to know both!
            </p>
            <p>
              Just like most languages, 1-10 are essential numbers to know, but
              even more so in Japanese (and that's a good thing). Unlike
              English, there's no unique words for eleven, twelve, thirteen,
              etc. Nor are there even unique words for twenty, thirty, forty,
              etc. Instead, you combine the numbers{" "}
              <span className="whitespace-nowrap">1-10</span> to create them.
            </p>
            <div>
              <p className="text-center">
                To make eleven, you just put together &quot;ten&quot; and
                &quot;one&quot; to make
              </p>
              <div className="text-3xl text-center mt-2 flex justify-center">
                <Romaji romaji="jyuu">じゅう</Romaji>
                <span className="text-orange-400">
                  <Romaji romaji="ichi">いち</Romaji>
                </span>
                .
              </div>
            </div>
            <div>
              <p className="text-center">
                To make twenty, you put together &quot;two&quot; and
                &quot;ten&quot; to make
              </p>
              <div className="text-3xl mt-2 flex justify-center">
                <span className="text-red-400">
                  <Romaji romaji="ni">に</Romaji>
                </span>
                <Romaji romaji="jyuu">じゅう</Romaji>.
              </div>
            </div>
            <div>
              <div className="text-center">
                To make twenty-one, you put together &quot;two&quot;,
                &quot;ten&quot; and &quot;one&quot; to make
              </div>
              <div className="text-3xl mt-2 flex justify-center">
                <span className="text-red-400">
                  <Romaji romaji="ni">に</Romaji>
                </span>
                <Romaji romaji="jyuu">じゅう</Romaji>
                <span className="text-orange-400">
                  <Romaji romaji="ichi">いち</Romaji>
                </span>
                .
              </div>
            </div>
            <div>
              <p className="text-center">
                To make fifty-six, you put together &quot;five&quot;,
                &quot;ten&quot; and &quot;six&quot; to make
              </p>
              <div className="text-3xl mt-2 flex justify-center">
                <span className="text-red-400">
                  <Romaji romaji="go">ご</Romaji>
                </span>
                <Romaji romaji="jyuu">じゅう</Romaji>
                <span className="text-orange-400">
                  <Romaji romaji="roku">ろく</Romaji>
                </span>
                .
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-center">
              Think you can say 99? Give it a try!
            </h3>
          </div>
          <div className="px-24 mt-24">
            {/* <Nu
          mbers100 /> */}
          </div>
        </div>
      </div>
      <div className="dark:text-primary-foreground">
        <Numbers100V2 />
      </div>
    </ContentBox>
  )
}
