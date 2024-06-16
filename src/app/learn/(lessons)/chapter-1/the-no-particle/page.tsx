import ContentBox from "@/components/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"

export default async function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/useful-expressions"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Mastering the <span className="font-japanese">の</span> Particle in
        Japanese
      </h1>
      <div className="space-y-3 px-16 md:px-24">
        <p>
          Welcome back to our Japanese language journey! Today, we're diving
          into the versatile <span className="font-japanese">の</span> (no)
          particle. Think of it as the Swiss army knife of Japanese particles,
          primarily used to show possession. Let's break it down in a way that's
          easy to grasp and fun to use.
        </p>

        <h2 className="pb-3 pt-6 text-center text-2xl font-bold">
          The Basics: Possession with <span className="font-japanese">の</span>
        </h2>
        <p>
          The <span className="font-japanese">の</span> particle is used to link
          two nouns, indicating possession or a close relationship. It’s similar
          to the apostrophe-s ('s) in English.
        </p>
        <p>
          Example: <br />
          <span className="font-japanese">たけしさんの</span>
          <Furigana furigana={<span className="text-sm">でんわばんごう</span>}>
            電話番号
          </Furigana>{" "}
          (Takeshi-san no denwa bangou) <br />
          <span className="font-bold">Takeshi's phone number</span>
        </p>
        <p>
          Here's the structure: <br />
          [Owner] + <span className="font-japanese">の</span> + [Possession]
        </p>
        <p>More Examples:</p>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <span className="font-japanese">わたしの</span>{" "}
            <Furigana furigana={<span className="text-sm">ほん</span>}>
              本
            </Furigana>{" "}
            (Watashi no hon) - <span className="font-bold">My book</span>
          </li>
          <li>
            <span className="font-japanese">先生の</span>{" "}
            <Furigana furigana={<span className="text-sm">くるま</span>}>
              車
            </Furigana>{" "}
            (Sensei no kuruma) -{" "}
            <span className="font-bold">Teacher's car</span>
          </li>
          <li>
            <span className="font-japanese">友達の</span>{" "}
            <Furigana furigana={<span className="text-sm">とけい</span>}>
              時計
            </Furigana>{" "}
            (Tomodachi no tokei) -{" "}
            <span className="font-bold">Friend’s watch</span>
          </li>
        </ul>

        <h2 className="pb-3 pt-6 text-center text-2xl font-bold">
          Practical Examples: Bringing It to Life
        </h2>
        <p>
          Since you’ve recently learned family terms, countries, majors, and
          occupations, let’s use these topics for more examples. Imagine
          introducing your family members and their favorite things, and let's
          mix in some English nouns for practice.
        </p>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <span className="font-japanese">父のcar</span> (Chichi no car) -{" "}
            <span className="font-bold">Dad’s car</span>
          </li>
          <li>
            <span className="font-japanese">母の</span>{" "}
            <Furigana furigana={<span className="text-sm">だいがく</span>}>
              大学
            </Furigana>{" "}
            (Haha no daigaku) -{" "}
            <span className="font-bold">Mom’s university</span>
          </li>
          <li>
            <span className="font-japanese">兄のコンピューター</span> (Ani no
            konpyuutaa) -{" "}
            <span className="font-bold">Older brother’s computer</span>
          </li>
          <li>
            <span className="font-japanese">妹の</span>{" "}
            <Furigana furigana={<span className="text-sm">ほん</span>}>
              本
            </Furigana>{" "}
            (Imouto no hon) -{" "}
            <span className="font-bold">Younger sister’s book</span>
          </li>
          <li>
            <span className="font-japanese">友達のphone</span> (Tomodachi no
            phone) - <span className="font-bold">Friend's phone</span>
          </li>
          <li>
            <span className="font-japanese">先生のbag</span> (Sensei no bag) -{" "}
            <span className="font-bold">Teacher's bag</span>
          </li>
        </ul>

        <p>Or talk about friends from different countries:</p>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <span className="font-japanese">アメリカの友達のcamera</span>{" "}
            (Amerika no tomodachi no camera) -{" "}
            <span className="font-bold">American friend’s camera</span>
          </li>
          <li>
            <span className="font-japanese">日本の</span>{" "}
            <Furigana furigana={<span className="text-sm">せんせい</span>}>
              先生
            </Furigana>{" "}
            <span className="font-japanese">のwatch</span> (Nihon no sensei no
            watch) - <span className="font-bold">Japanese teacher’s watch</span>
          </li>
          <li>
            <span className="font-japanese">フランスの学生のnotebook</span>{" "}
            (Furansu no gakusei no notebook) -{" "}
            <span className="font-bold">French student’s notebook</span>
          </li>
        </ul>

        <h2 className="pb-3 pt-6 text-center text-2xl font-bold">
          Activity: My Favorite Things
        </h2>
        <p>
          Now it's your turn! Write about your favorite items and who they
          belong to. Use the <span className="font-japanese">の</span> particle
          to show possession, and try mixing in some English nouns. Here are
          some examples to get you started:
        </p>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <span className="font-japanese">私のコンピューター</span> (Watashi
            no konpyuutaa) - <span className="font-bold">My computer</span>
          </li>
          <li>
            <span className="font-japanese">兄のphone</span> (Ani no phone) -{" "}
            <span className="font-bold">My brother’s phone</span>
          </li>
          <li>
            <span className="font-japanese">お母さんのbag</span> (Okaasan no
            bag) - <span className="font-bold">My mom’s bag</span>
          </li>
        </ul>
        <p>
          Write three sentences about your favorite things and who they belong
          to. It’s a simple yet powerful exercise to master{" "}
          <span className="font-japanese">の</span>.
        </p>

        <h2 className="pb-3 pt-6 text-center text-2xl font-bold">
          Fun Activity: Who Owns What?
        </h2>
        <p>
          Let's play a quick game to reinforce what we’ve learned. I’ll describe
          an item, and you guess who it belongs to. Imagine you're a detective
          solving a fun mystery.
        </p>
        <ul className="ml-4 list-inside list-disc">
          <li>
            <span className="font-bold">これは誰の</span>{" "}
            <span className="font-japanese">本</span>{" "}
            <span className="font-bold">ですか？</span> (Kore wa dare no hon
            desu ka?)
            <br />
            <span className="font-bold">Whose book is this?</span>
            <br />
            <span className="font-japanese">これは妹の</span>{" "}
            <Furigana furigana={<span className="text-sm">ほん</span>}>
              本
            </Furigana>{" "}
            <span className="font-japanese">です。</span> (Kore wa imouto no hon
            desu.)
            <br />
            <span className="font-bold">This is my younger sister’s book.</span>
          </li>
          <li>
            <span className="font-bold">これは誰のコンピューターですか？</span>{" "}
            (Kore wa dare no konpyuutaa desu ka?)
            <br />
            <span className="font-bold">Whose computer is this?</span>
            <br />
            <span className="font-japanese">
              これは兄のコンピューターです。
            </span>{" "}
            (Kore wa ani no konpyuutaa desu.)
            <br />
            <span className="font-bold">
              This is my older brother’s computer.
            </span>
          </li>
        </ul>

        <h2 className="pb-3 pt-6 text-center text-2xl font-bold">
          Real-Life Application: Social Media Descriptions
        </h2>
        <p>
          Let’s relate this to something we all use: social media. Next time
          you’re scrolling through Instagram or Twitter, think about how you'd
          describe a photo using <span className="font-japanese">の</span>. For
          example, if you see a post of a friend’s new gadget, the caption might
          read:
        </p>
        <p>
          <span className="font-japanese">ジョンのgadgetです。</span> (John no
          gadget desu.)
          <br />
          <span className="font-bold">It’s John’s gadget.</span>
        </p>
        <p>
          Now think of a few items from your feed and describe them using{" "}
          <span className="font-japanese">の</span>. This could be a fun way to
          see how much you’ve learned!
        </p>

        <h2 className="pb-3 pt-6 text-center text-2xl font-bold">
          Wrap-Up: Practice Makes Perfect
        </h2>
        <p>
          That’s it for today’s lesson on the{" "}
          <span className="font-japanese">の</span> particle. By now, you should
          feel more comfortable using <span className="font-japanese">の</span>{" "}
          to show possession and make your sentences richer in detail. Keep
          practicing, and soon enough, using{" "}
          <span className="font-japanese">の</span> will become second nature.
        </p>
        <p>
          Remember, learning a language is a journey. Keep exploring and
          experimenting with new ways to express yourself. Happy studying!
        </p>

        <p className="text-center">
          Feel free to bookmark this post for future reference and share it with
          fellow Japanese learners. Keep up the great work!
        </p>
      </div>
    </ContentBox>
  )
}
