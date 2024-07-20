import ContentBox from "@/features/content-box/ContentBox"
import Furigana from "@/components/text/Furigana"
import YouTubeVideo from "@/features/youtube/YouTube"

export default async function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-3/your-japanese-voice"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-5xl font-semibold">
        <em>
          <span className="font-japanese not-italic">する</span> vs.{" "}
          <span className="font-japanese not-italic">やる</span>: The Two Ways
          to "Do" in Japanese
        </em>
      </h1>
      <div className="space-y-3 px-16 md:px-24">
        <p className="pb-6 pt-1">
          In Japanese, there are two main verbs used to express the concept of{" "}
          <strong>doing</strong> something:{" "}
          <span className="font-japanese text-xl font-medium">する</span> and{" "}
          <span className="font-japanese text-xl font-medium">やる</span>. While
          both can often be translated as <strong>to do</strong> in English,
          they have different nuances and uses that are important to understand.
          Many Japanese textbooks focus heavily on{" "}
          <span className="text-nowrap font-japanese text-xl font-medium">
            する
          </span>{" "}
          while neglecting{" "}
          <span className="font-japanese text-xl font-medium">やる</span>.{" "}
          <strong>We're here to fix that</strong>, as you'll hear{" "}
          <span className="font-japanese text-xl font-medium">やる</span>{" "}
          frequently used in everyday conversations, pop culture, and casual
          settings.
        </p>
        <div>
          <YouTubeVideo
            videoId="ALFAOoRhBVY"
            title="How to Use やる Yaru"
            credit="Kaname Naito"
          />
        </div>
        <h3 className="pt-12 font-japanese text-3xl font-medium">
          する - <span className="font-honk text-4xl">Suru</span>
        </h3>
        <li>
          <span className="font-bold">Usage: </span>More neutral, often used for
          everyday actions
        </li>
        <li>
          <span className="font-bold">Context: </span>Used in business settings,
          polite conversations, or when describing routine activities
        </li>
        <p className="text-base italic text-muted-foreground">
          *Remember, <span className="font-japanese not-italic">する</span> has
          a <span className="font-japanese not-italic">ます</span> stem of{" "}
          <span className="font-japanese not-italic">し</span> because it's an
          irregular verb.
        </p>
        <li className="flex items-start">
          <span className="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 className="text-xl">
              <span className="text-2xl font-black">
                <em>Story: </em>
              </span>
              The Overachiever's Dilemma
            </h4>
            <h4 className="mb-4 text-xl">
              <span className="mr-2 text-2xl font-black">
                <em>Characters: </em>
              </span>
              Tanaka (the overachiever), his colleagues
            </h4>
            <p className="mb-4">
              Tanaka, known for his impeccable work ethic, arrives at the office
              at 7 AM sharp, as usual. His colleagues, barely awake, watch in
              mild amusement as he meticulously organizes his desk.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Colleague A:</p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">
                    おはよう、田中さん。今日も早いね。
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    (Ohayou, Tanaka-san. Kyou mo hayai ne.)
                  </p>
                  <p>"Morning, Tanaka. Early as always, huh?"</p>
                </div>
              </div>
              <div>
                <p className="font-bold">Tanaka:</p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">
                    はい、
                    <Furigana
                      furigana={<span className="text-sm">しごと</span>}
                    >
                      仕事
                    </Furigana>
                    をしに来ました。
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    (Hai, shigoto wo shi ni kimashita.)
                  </p>
                  <p>"Yes, I came to do work."</p>
                </div>
              </div>
              <div>
                <p className="font-bold">Colleague B:</p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">
                    えっ、僕たちは
                    <Furigana furigana={<span className="text-sm">あそ</span>}>
                      遊
                    </Furigana>
                    びに来たと
                    <Furigana furigana={<span className="text-sm">おも</span>}>
                      思
                    </Furigana>
                    ってたよ。
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    (E, bokutachi wa asobi ni kita to omotteta yo.)
                  </p>
                  <p>"Oh? We thought we came here to play."</p>
                </div>
              </div>
              <div>
                <p className="font-bold">
                  Tanaka:{" "}
                  <span className="font-normal">(missing the sarcasm)</span>
                </p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">
                    いいえ、私は
                    <Furigana
                      furigana={<span className="text-sm">しごと</span>}
                    >
                      仕事
                    </Furigana>
                    をします。
                    <Furigana furigana={<span className="text-sm">あそ</span>}>
                      遊
                    </Furigana>
                    びませんよ。
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    (Iie, watashi wa shigoto wo shimasu. Asobimasen yo.)
                  </p>
                  <p>"No, I do work. I don't play."</p>
                </div>
              </div>
            </div>
            <p className="mt-4 italic text-muted-foreground">
              The colleagues exchange glances, realizing that humor is lost on
              Tanaka. They shrug and return to their desks, leaving Tanaka to
              his beloved work.
            </p>
          </div>
        </li>
        <h3 className="pt-12 font-japanese text-3xl font-medium">
          やる - <span className="font-honk text-4xl">Yaru</span>
        </h3>
        <li>
          <span className="font-bold">Usage</span>
          <ol className="ml-6 mt-1 list-inside list-disc space-y-1">
            <li>
              More casual, typically used for concrete or physical actions
            </li>
            <li>
              States a willful action to do something, thus it can only be used
              for voluntary actions{" "}
              <span className="text-muted-foreground">
                (as opposed to involuntary actions like breathing)
              </span>
              .
            </li>
            <li>
              Sounds more determined/significant than{" "}
              <span className="font-japanese">する</span>.
            </li>
          </ol>
        </li>
        <li>
          <span className="font-bold">Context: </span>Used among friends, in
          casual settings, or when emphasizing determination
        </li>
        <li className="flex items-start">
          <span className="mr-3 mt-1 inline-block">•</span>
          <div>
            <h4 className="text-xl">
              <span className="text-2xl font-black">
                <em>Story: </em>
              </span>
              The Reluctant Volunteer
            </h4>
            <h4 className="mb-4 text-xl">
              <span className="mr-2 text-2xl font-black">
                <em>Characters: </em>
              </span>
              Keiko (the reluctant volunteer), her friend Yuki, and a group of
              classmates
            </h4>
            <p className="mb-4">
              It's cleaning day at school. Keiko, hoping to avoid any
              responsibility, tries to blend into the wall. Her friend Yuki,
              however, has other plans.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-bold">Yuki:</p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">
                    ねえ、
                    <Furigana
                      furigana={<span className="text-sm">そうじ</span>}
                    >
                      掃除
                    </Furigana>{" "}
                    (を) やろうよ。
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    (Nee, souji yarou yo.)
                  </p>
                  <p>"Hey, let's do some cleaning."</p>
                </div>
              </div>
              <div>
                <p className="font-bold">Keiko:</p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">
                    えー、やりたくないな。
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    (Ee, yaritakunai na.)
                  </p>
                  <p>"Eh, I don't want to do it."</p>
                </div>
              </div>
              <div>
                <p className="font-bold">Classmate A:</p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">
                    誰かトイレ
                    <Furigana
                      furigana={<span className="text-sm">そうじ</span>}
                    >
                      掃除
                    </Furigana>{" "}
                    (を) やってくれない？
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    (Dare ka toire souji yatte kurenai?)
                  </p>
                  <p>"Can someone do the toilet cleaning?"</p>
                </div>
              </div>
              <p className="my-4 italic text-muted-foreground">
                Silence falls over the room. Keiko tries to make herself even
                smaller.
              </p>
              <div>
                <p className="font-bold">
                  Yuki:{" "}
                  <span className="font-normal">(with a mischievous grin)</span>
                </p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">慶子がやるって。</p>
                  <p className="text-sm italic text-muted-foreground">
                    (Keiko ga yaru tte.)
                  </p>
                  <p>"Keiko says she'll do it."</p>
                </div>
              </div>
              <div>
                <p className="font-bold">
                  Keiko: <span className="font-normal">(panicking)</span>
                </p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">
                    えっ？私がやるの？冗談でしょ？
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    (E? Watashi ga yaru no? Joudan desho?)
                  </p>
                  <p>"What? I'm doing it? You're joking, right?"</p>
                </div>
              </div>
              <div>
                <p className="font-bold">Classmate B:</p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">
                    じゃあ、決まり！慶子がトイレ
                    <Furigana
                      furigana={<span className="text-sm">そうじ</span>}
                    >
                      掃除
                    </Furigana>{" "}
                    (を) やって。
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    (Jaa, kimari! Keiko ga toire souji yatte.)
                  </p>
                  <p>"Then it's decided! Keiko's doing the toilet cleaning."</p>
                </div>
              </div>
              <div>
                <p className="font-bold">
                  Keiko:{" "}
                  <span className="font-normal">(resigned to her fate)</span>
                </p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">
                    はぁ...わかった。やるよ、やる。
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    (Haa... wakatta. Yaru yo, yaru.)
                  </p>
                  <p>"Sigh... Fine. I'll do it, I'll do it."</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                As Keiko trudges off to clean the toilets, Yuki calls out:
              </p>
              <div>
                <p className="font-bold">Yuki:</p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">がんばってね！</p>
                  <p className="text-sm italic text-muted-foreground">
                    (Ganbatte ne!)
                  </p>
                  <p>"Do your best!"</p>
                </div>
              </div>
              <p className="italic text-muted-foreground">
                Keiko mutters under her breath:
              </p>
              <div>
                <p className="font-bold">Keiko:</p>
                <div className="ml-4 mt-0.5">
                  <p className="font-japanese text-lg">
                    友達なんかやめてやる。
                  </p>
                  <p className="text-sm italic text-muted-foreground">
                    (Tomodachi nanka yamete yaru.)
                  </p>
                  <p>"I'm so done with having friends."</p>
                </div>
              </div>
            </div>
          </div>
        </li>
        <h2 className="pt-6 text-2xl font-bold">Key Differences</h2>
        <ul className="ml-6 mt-2 list-disc space-y-4">
          <li>
            <strong>Determination:</strong>{" "}
            <span className="font-japanese">する</span> is generally more
            neutral while <span className="font-japanese">やる</span> is more
            determined.
          </li>
          <li>
            <strong>Emphasis:</strong>{" "}
            <span className="font-japanese">やる</span> can express more
            determination or willingness to take on a task.
          </li>
          <li>
            <strong>Compound Verbs:</strong>{" "}
            <span className="font-japanese">する</span> is often used in
            compound verbs (noun + <span className="font-japanese">する</span>),
            while <span className="font-japanese">やる</span> typically stands
            alone.
          </li>
          <li>
            <strong>Nuance:</strong> <span className="font-japanese">する</span>{" "}
            often implies a more routine or professional action, while{" "}
            <span className="font-japanese">やる</span> can suggest a more
            active or physical engagement with the task.
          </li>
        </ul>
        <h2 className="pt-6 text-2xl font-bold">Summary</h2>
        <ul className="ml-6 mt-2 list-disc space-y-4">
          <li>
            Use <span className="font-japanese">する</span> for more neutral,
            professional, or abstract actions.
          </li>
          <li>
            Use <span className="font-japanese">やる</span> for casual, concrete
            tasks, or when emphasizing your determination.
          </li>
          <li>
            Pay attention to context and the level of formality required in
            different situations.
          </li>
          <li>
            Remember that while textbooks may focus on
            <span className="font-japanese"> する</span>,{" "}
            <span className="font-japanese">やる</span> is equally important in
            everyday Japanese conversation.
          </li>
        </ul>
      </div>
    </ContentBox>
  )
}
