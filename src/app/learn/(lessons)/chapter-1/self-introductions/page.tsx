import ContentBox from "@/features/content-box/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"

export default async function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/japanese-names-honorifics"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-5xl font-semibold">
        <em>Self Introductions</em>
      </h1>
      <div className="space-y-3 px-16 md:px-24">
        <h2 className="my-3 text-center text-2xl font-bold">
          First-Person Pronouns
        </h2>
        <p className="pb-6 pt-1">
          In Japanese, there are several pronouns that you can use to refer to
          yourself, each with its own nuance and level of formality. Unlike
          English, which primarily uses "I," Japanese pronouns can reflect
          gender, formality, and personal style.
        </p>
        <div>
          <YouTubeVideo
            videoId="MNR0egvK_oQ"
            title="Nuances of Japanese First-Person Pronouns by Kaname Naito, Mar 26 2023"
            credit="Kaname Naito"
            glow
          />
        </div>
        <h3 className="pt-12 font-japanese text-3xl font-medium">
          <Furigana furigana="わたし">私</Furigana> -{" "}
          <span className="font-honk text-4xl">Watashi</span>
        </h3>
        <li>
          <span className="font-bold">Usage: </span>Gender-neutral, formal or
          informal
        </li>
        <li>
          <span className="font-bold">Context: </span>Suitable for both men and
          women in most situations. It is commonly used in formal settings, such
          as business meetings, public speaking, or when you want to be polite.
        </li>
        <li className="flex items-start">
          <span className="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 className="text-xl">
              <span className="text-2xl font-black">
                <em>Story:</em>{" "}
              </span>
              Business meeting
            </h4>
            <h4 className="text-xl">
              <span className="mr-2 text-2xl font-black">
                <em>Characters:</em>
              </span>
              You (the learner), Mr. Tanaka (your boss), and clients
            </h4>
            <p className="mt-3">
              You nervously enter the meeting room, aware that first impressions
              are crucial. As you introduce yourself to the clients, you say,
              "Hello, I am [your name]. It's nice to meet you all." You use{" "}
              <span className="font-japanese font-bold">わたし</span> because
              it's a formal setting and you want to appear professional. Mr.
              Tanaka nods approvingly, knowing that you've made a good start.
            </p>
          </div>
        </li>
        <h3 className="pt-12 font-japanese text-3xl font-medium">
          <Furigana furigana="わたくし">私</Furigana> -{" "}
          <span className="font-honk text-4xl">Watakushi</span>
        </h3>
        <li>
          <span className="font-bold">Usage: </span>Very formal, gender-neutral.
          (Note: Both <span className="font-japanese">わたし</span> and{" "}
          <span className="font-japanese">わたくし</span> use the same kanji,{" "}
          <span className="font-japanese">私</span>)
        </li>
        <li>
          <span className="font-bold">Context: </span>Used in highly formal
          situations, such as official speeches, ceremonies, or when speaking to
          someone of significantly higher status.
        </li>
        <li className="flex items-start">
          <span className="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 className="text-xl">
              <span className="text-2xl font-black">
                <em>Story:</em>{" "}
              </span>
              Award ceremony
            </h4>
            <h4 className="text-xl">
              <span className="mr-2 text-2xl font-black">
                <em>Characters:</em>
              </span>
              You (the award recipient), the audience
            </h4>
            <p className="mt-3">
              The spotlight is on you as you walk up to the stage to receive
              your award. You feel the weight of the moment and know that
              formality is key. You start your speech with, "My name is [your
              name], and I am deeply honored to receive this award." Using{" "}
              <span className="font-japanese font-bold">わたくし</span>, you
              convey the respect and seriousness the occasion demands. The
              audience claps enthusiastically, impressed by your elegance.
            </p>
          </div>
        </li>
        <h3 className="pt-12 font-japanese text-3xl font-medium">
          <Furigana furigana="ぼく">僕</Furigana> -{" "}
          <span className="font-honk text-4xl">Boku</span>
        </h3>
        <li>
          <span className="font-bold">Usage: </span>Informal, typically used by
          males
        </li>
        <li>
          <span className="font-bold">Context: </span>Commonly used by boys and
          men in casual or semi-formal settings. It conveys a sense of humility
          and is less formal than <span className="font-japanese">わたし</span>.
        </li>
        <li className="flex items-start">
          <span className="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 className="text-xl">
              <span className="text-2xl font-black">
                <em>Story:</em>{" "}
              </span>
              School club introduction
            </h4>
            <h4 className="text-xl">
              <span className="mr-2 text-2xl font-black">
                <em>Characters:</em>
              </span>
              You (a new club member), club members
            </h4>
            <p className="mt-3">
              You walk into the school's soccer club for the first time, feeling
              a bit anxious. To break the ice, you introduce yourself, "Hey, I'm
              [your name]. I love playing soccer." Using{" "}
              <span className="font-japanese font-bold">ぼく</span>, you sound
              friendly and approachable. The club members welcome you warmly,
              and you quickly feel like part of the team.
            </p>
          </div>
        </li>
        <h3 className="pt-12 font-japanese text-3xl font-medium">
          <Furigana furigana="おれ">俺</Furigana> -{" "}
          <span className="font-honk text-4xl">Ore</span>
        </h3>
        <li>
          <span className="font-bold">Usage: </span>Very informal, typically
          used by males
        </li>
        <li>
          <span className="font-bold">Context: </span>Used among close friends
          or in very casual situations. It can come off as rude or overly
          familiar if used inappropriately. It conveys a strong sense of
          masculinity and confidence.
        </li>
        <li className="flex items-start">
          <span className="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 className="text-xl">
              <span className="text-2xl font-black">
                <em>Story:</em>{" "}
              </span>
              Gaming night with close friends
            </h4>
            <h4 className="text-xl">
              <span className="mr-2 text-2xl font-black">
                <em>Characters:</em>
              </span>
              You (with close friends)
            </h4>
            <p className="mt-3">
              It's Friday night, and you're at a friend's house for your weekly
              gaming session. You grab the controller and say, "I'm totally
              going to win this round." Using{" "}
              <span className="font-japanese font-bold">おれ</span>, you show
              your confidence and casual rapport with your friends. They laugh
              and challenge you, knowing it's all in good fun.
            </p>
          </div>
        </li>
        <h3 className="pt-12 font-japanese text-3xl font-bold">
          あたし - <span className="font-honk text-4xl">Atashi</span>
        </h3>
        <li>
          <span className="font-bold">Usage: </span>Informal, typically used by
          females. (Note: <span className="font-japanese">あたし</span> is often
          written in hiragana, but it can use the same kanji as{" "}
          <span className="font-japanese">わたし</span> and{" "}
          <span className="font-japanese">わたくし</span>)
        </li>
        <li>
          <span className="font-bold">Context: </span>Used by women and girls in
          casual settings. It is a more casual and feminine version of{" "}
          <span className="font-japanese">わたし</span>.
        </li>
        <li className="flex items-start">
          <span className="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 className="text-xl">
              <span className="text-2xl font-black">
                <em>Story:</em>{" "}
              </span>
              Café with friends
            </h4>
            <h4 className="text-xl">
              <span className="mr-2 text-2xl font-black">
                <em>Characters:</em>
              </span>
              You (a young woman), friends
            </h4>
            <p className="mt-3">
              You're at a cozy café, chatting with your friends about the latest
              music trends. You smile and say, "Hi, I'm [your name], and I
              absolutely love music!" Using{" "}
              <span className="font-japanese font-bold">あたし</span>, you keep
              the conversation light and friendly. Your friends nod and start
              sharing their favorite songs, making the conversation lively and
              enjoyable.
            </p>
          </div>
        </li>
        <h3 className="pt-12 font-japanese text-3xl font-bold">
          <Furigana furigana="わし">儂</Furigana> -{" "}
          <span className="font-honk text-4xl">Washi</span>
        </h3>
        <li>
          <span className="font-bold">Usage: </span>Informal, used by older men.
          (Note: わし is often written in hiragana, but this kanji can be used)
        </li>
        <li>
          <span className="font-bold">Context: </span>Can be used by elderly men
          to refer to themselves, though not commonly used except in Hiroshima
          dialect or in anime. It conveys wisdom and age.
        </li>
        <li className="flex items-start">
          <span className="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 className="text-xl">
              <span className="text-2xl font-black">
                <em>Story:</em>{" "}
              </span>
              Telling stories to grandchildren
            </h4>
            <h4 className="text-xl">
              <span className="mr-2 text-2xl font-black">
                <em>Characters:</em>
              </span>
              You (an elderly man), grandchildren
            </h4>
            <p className="mt-3">
              You sit in your favorite armchair, surrounded by your eager
              grandchildren. They love hearing your stories from the past. You
              begin, "Back in my day, I was a teacher." Using{" "}
              <span className="font-japanese font-bold">わし</span>, you convey
              your age and experience. The children listen intently, fascinated
              by your tales of wisdom and history.
            </p>
          </div>
        </li>
        <h3 className="pt-12 text-center font-inter text-2xl font-bold">
          Plural First-Person
        </h3>
        <ul className="space-y-4 pt-4 text-xl">
          <li>
            <span className="font-japanese text-3xl font-semibold">
              <Furigana furigana="わたしたち">私たち</Furigana> -{" "}
            </span>
            Plural of <span className="font-japanese">わたし</span>.
          </li>
          <li>
            <span className="font-japanese text-3xl font-semibold">
              <Furigana furigana="ぼくたち">僕たち</Furigana> -{" "}
            </span>
            Plural of <span className="font-japanese">ぼく</span>.
          </li>
          <li>
            <span className="font-japanese text-3xl font-semibold">
              <Furigana furigana="おれたち">俺たち</Furigana> -{" "}
            </span>
            Plural of <span className="font-japanese">おれ</span>.
          </li>
          <li>
            <span className="font-japanese text-3xl font-semibold">
              あたしたち -{" "}
            </span>
            Plural of <span className="font-japanese">あたし</span>.
          </li>
        </ul>
        <h3 className="pt-12 font-japanese text-3xl font-bold">
          <Furigana furigana="われわれ">我々</Furigana> -{" "}
          <span className="font-honk text-4xl">Wareware</span>
        </h3>
        <li>
          <span className="font-bold">Usage: </span>Formal, often used in
          speeches or literary contexts
        </li>
        <li>
          <span className="font-bold">Context: </span>Used to refer to a group,
          conveying a strong sense of unity and formality.
        </li>
        <li className="flex items-start">
          <span className="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 className="text-xl">
              <span className="text-2xl font-black">
                <em>Story:</em>{" "}
              </span>
              Company announcement
            </h4>
            <h4 className="text-xl">
              <span className="mr-2 text-2xl font-black">
                <em>Characters:</em>
              </span>
              You (a company representative), employees
            </h4>
            <p className="mt-3">
              You stand in front of the employees to make an important
              announcement. You begin, "We at [company name] are committed to
              achieving excellence in all our endeavors." Using{" "}
              <span className="font-japanese font-bold">われわれ</span>, you
              emphasize the collective effort and formal nature of the
              statement. The employees listen attentively, feeling part of a
              unified team.
            </p>
          </div>
        </li>
        <h2 className="pb-3 pt-24 text-center text-3xl font-bold">
          Introducing Yourself
        </h2>
        <div className="!mb-12 !mt-6">
          <YouTubeVideo
            videoId="t1iTJK31UYw"
            title="First-time Greeting in Japanese for Beginners by Kaname Naito, Jun 15 2024"
            credit="Kaname Naito"
            glow
            timestamps={[
              { time: 0, label: "First-time Greetings" },
              { time: 256, label: "How to Ask for Someone's Name" },
            ]}
          />
        </div>
        <div>
          <p>
            We've learned the <span className="font-bold">X</span>
            <span className="font-japanese">は</span>
            <span className="font-bold">Y</span>
            <span className="font-japanese">です</span> structure for making
            simple statements, and indeed, you can use it to introduce yourself.
            For example, you could say:
          </p>
          <p className="text-center font-japanese">
            <Furigana furigana="わたし">私</Furigana>は
            <span className="font-inter">[Your name]</span>
            です。
          </p>
        </div>
        <p>
          That's one way you could do it, and can sound fine in some situations.
          But in Japanese, you don't just go around throwing{" "}
          <span className="font-japanese font-bold">わたし</span> in every
          sentence like confetti. You use it when you really need to emphasize
          that it's YOU we're talking about.
        </p>
        <li className="ml-4">
          <span className="font-bold">Omitting Pronouns: </span>In Japanese,
          pronouns like <Furigana furigana="わたし">私</Furigana> are often
          omitted when it's clear from context who you are talking about. Since
          an introduction is inherently about yourself, repeating{" "}
          <Furigana furigana="わたし">私</Furigana> can sound redundant.
        </li>
        <li className="ml-4">
          <span className="font-bold">Cultural Context: </span>Japanese culture
          values humility and context. Overusing{" "}
          <Furigana furigana="わたし">私</Furigana>
          <span className="font-japanese">は</span> can make you sound a bit
          self-centered or overly formal in Japanese. It's like walking into a
          room and announcing, "As for me..." before every single statement you
          make.
        </li>
        <h3 className="pt-6 text-center text-xl font-black italic">
          The Solution
        </h3>
        <p>
          So, how do you introduce yourself in a less rigid manner? Just say
          [your name] + <span className="font-japanese">です</span>. That's it.
          Simple, right?
        </p>
        <h4 className="py-4 text-center text-3xl font-bold">
          [your name] + <span className="font-japanese">です</span>。
        </h4>
        <p>
          Okay, but if you're looking to become a real social samurai, you can
          say:
        </p>
        <p className="font-japanese text-xl font-semibold">
          こんにちは！はじめまして！
          <span className="font-inter">[Your name]</span>
          です。
          <span className="font-inter">[Additional information]です。</span>
          どうぞよろしくおねがいします。
        </p>
        <p className="py-6 text-center">
          <em>"Okay, what was all that?"</em>
        </p>
        <li>
          <span className="font-japanese font-bold">こんにちは</span> - Simple
          way to say hello.
        </li>
        <li>
          <span className="font-japanese font-bold">はじめまして</span> -
          Literally—
          <em>"For the first time."</em> - Means—<em>"Nice to meet you."</em>
        </li>
        <li>
          <span className="font-bold">
            [Additional Information]
            <span className="font-japanese">です。</span>
          </span>
          - You can include your occupation, role, hobby, or any other relevant
          information. For example:
        </li>
        <div className="text-center">
          <p>
            <span className="font-japanese">
              <Furigana furigana="かいしゃいん">会社員</Furigana>です
            </span>{" "}
            - I am an office worker.
          </p>
          <p>
            <span className="font-japanese">
              <Furigana furigana="がくせい">学生</Furigana>です
            </span>{" "}
            - I am a student.
          </p>
          <p>
            <span className="font-japanese">
              <Furigana furigana="しゅみ">趣味</Furigana>は
              <Furigana furigana="どくしょ">読書</Furigana>です - My hobby is
              reading.
            </span>
          </p>
        </div>
        <li>
          <span className="font-japanese font-bold">
            どうぞよろしくおねがいします。
          </span>{" "}
          Means—
          <em>"Please treat me kindly"</em> (roughly translated). It can also be
          shortened to <span className="font-japanese">どうぞよろしく</span> or
          even just <span className="font-japanese">よろしく</span> if you're
          looking to be more casual. This phrase is used at the end of the
          introduction to express your hope for a positive relationship. It's a
          versatile and polite phrase that can be used in various situations,
          from casual meetings to formal business settings.
        </li>
        <li>
          You can drop{" "}
          <span className="font-japanese font-bold">はじめまして</span> to be
          less formal.
        </li>
        <li>
          You can say <span className="font-japanese font-bold">どうも</span>{" "}
          instead of <span className="font-japanese font-bold">こんにちは</span>
          , or use both{" -> "}
          <span className="font-japanese font-bold">どうも、こんにちは</span>
        </li>
        <h2 className="pt-6 text-2xl font-bold">Summary</h2>
        <ul className="ml-6 mt-2 list-disc space-y-4">
          <li>
            There are several ways to refer to yourself.{" "}
            <Furigana furigana={<span className="text-sm">わたし</span>}>
              私
            </Furigana>{" "}
            is a good baseline, but you can choose another pronoun based on the
            context, formality, and your personal style.
          </li>
          <li>
            [Your name] + <span className="font-japanese">です</span> is the
            basic way to to share your name.
          </li>
          <li>
            For a more thorough introduction you can say:{" "}
            <span className="font-japanese">
              どうも、こんにちは。
              <span className="font-inter">[Your name]</span>
              です。
              <span className="font-inter">[Additional information]です。</span>
              どうぞよろしくおねがいします。
            </span>{" "}
            Feel free to shorten it when you see fit.
          </li>
        </ul>
      </div>
    </ContentBox>
  )
}
