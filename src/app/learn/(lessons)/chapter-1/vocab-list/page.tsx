import ContentBox from "@/components/ContentBox"

export default async function page() {
  const tableClassName = "table-fixed w-full"
  const japaneseClassName = "font-japanese text-[1.35rem] font-medium"

  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-0/greetings"
    >
      <div>
        <h1 className="mx-auto mb-12 mt-20 text-center text-6xl font-semibold tracking-wide underline-offset-8">
          <u>
            <em>Vocabliary</em>
          </u>
        </h1>
        <div className="mx-24 border-b border-neutral-600 pb-12">
          <h3 className="mb-6 mt-8 text-center text-3xl font-semibold text-orange-400">
            People, Descriptors, Misc.
          </h3>
          <table className={tableClassName}>
            <tbody className="align-top">
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>わたし</td>
                <td>Watashi</td>
                <td>I</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>ともだち</td>
                <td>Tomodachi</td>
                <td>Friend</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>～じん</td>
                <td>...jin</td>
                <td>...people</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>にほんじん</td>
                <td>Nihonjin</td>
                <td>Japanese people</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>ばんごう</td>
                <td>Bangō</td>
                <td>Number</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>なまえ</td>
                <td>Namae</td>
                <td>Name</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>みんな</td>
                <td>Min'na</td>
                <td>Everyone / All</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>なん/なに</td>
                <td>Nan/Nani</td>
                <td>What</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>あのう</td>
                <td>Anō</td>
                <td>Um...</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>はい</td>
                <td>Hai</td>
                <td>Yes</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>そうです</td>
                <td>Sō desu</td>
                <td>That's right.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>そうですか</td>
                <td>Sō desu ka</td>
                <td>I see / Is that so?</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>～さん</td>
                <td>...san</td>
                <td>Mr. / Mrs. / Ms.</td>
              </tr>
            </tbody>
          </table>
          <h3 className="mb-6 mt-8 text-center text-3xl font-semibold text-orange-400">
            Family & School
          </h3>
          <table className={tableClassName}>
            <tbody className="align-top">
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>おかあさん</td>
                <td>Okaasan</td>
                <td>Mother</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>おとうさん</td>
                <td>Otōsan</td>
                <td>Father</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>おねえさん</td>
                <td>Oneesan</td>
                <td>Older sister</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>おにいさん</td>
                <td>Oniisan</td>
                <td>Older brother</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>いもうと</td>
                <td>Imōto</td>
                <td>Younger sister</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>おとうと</td>
                <td>Otōto</td>
                <td>Younger brother</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>おじいさん</td>
                <td>Ojiisan</td>
                <td>Grandfather</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>おばあさん</td>
                <td>Obaasan</td>
                <td>Grandmother</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>おばさん</td>
                <td>Obasan</td>
                <td>Aunt</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>おじさん</td>
                <td>Ojisan</td>
                <td>Uncle</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>だいがく</td>
                <td>Daigaku</td>
                <td>College / University</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>こうこう</td>
                <td>Kōkō</td>
                <td>High school</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>がくせい</td>
                <td>Gakusei</td>
                <td>Student</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>だいがくせい</td>
                <td>Daigakusei</td>
                <td>College student</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>りゅうがくせい</td>
                <td>Ryuugakusei</td>
                <td>International student</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>～ねんせい</td>
                <td>...nensei</td>
                <td>...year student</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>いちねんせい</td>
                <td>Ichinensei</td>
                <td>First-year student</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>せんこう</td>
                <td>Senkō</td>
                <td>Major</td>
              </tr>
            </tbody>
          </table>
          <h3 className="mb-6 mt-8 text-center text-3xl font-semibold text-orange-400">
            Occupations & Majors
          </h3>
          <table className={tableClassName}>
            <tbody className="align-top">
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>いしゃ</td>
                <td>Isha</td>
                <td>Doctor</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>かいしゃいん</td>
                <td>Kaishain</td>
                <td>Office worker</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>かんごし</td>
                <td>Kangoshi</td>
                <td>Nurse</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>こうこうせい</td>
                <td>Kōkōsei</td>
                <td>High school student</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>しゅふ</td>
                <td>Shufu</td>
                <td>Housewife</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>だいがくいんせい</td>
                <td>Daigakuinsei</td>
                <td>Graduate student</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>べんごし</td>
                <td>Bengoshi</td>
                <td>Lawyer</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>アジアけんきゅう</td>
                <td>Ajia kenkyuu</td>
                <td>Asian studies</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>けいざい</td>
                <td>Keizai</td>
                <td>Economics</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>こうがく</td>
                <td>Kōgaku</td>
                <td>Engineering</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>こくさいかんけい</td>
                <td>Kokusai kankei</td>
                <td>International relations</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>コンピューター</td>
                <td>Konpyuutaa</td>
                <td>Computer</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>せいじ</td>
                <td>Seiji</td>
                <td>Politics</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>せいぶつがく</td>
                <td>Seibutsugaku</td>
                <td>Biology</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>ビジネス</td>
                <td>Bijinesu</td>
                <td>Business</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>ぶんがく</td>
                <td>Bungaku</td>
                <td>Literature</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>れきし</td>
                <td>Rekishi</td>
                <td>History</td>
              </tr>
            </tbody>
          </table>
          <h3 className="mb-6 mt-8 text-center text-3xl font-semibold text-orange-400">
            Useful Expressions
          </h3>
          <table className={tableClassName}>
            <tbody className="align-top">
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>はじめまして。</td>
                <td>Hajimemashite.</td>
                <td>
                  <span className="whitespace-nowrap">How do you do.</span> /{" "}
                  <span className="whitespace-nowrap">Nice to meet you.</span>
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>[your name]です。</td>
                <td>[your name] desu.</td>
                <td>I am [your name].</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>
                  しゅっしんは[your hometown]です。
                </td>
                <td>Shusshin wa [your hometown] desu.</td>
                <td>I came from [your hometown].</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>
                  どうぞよろしくおねがいします。
                </td>
                <td>Dōzo yoroshiku onegaishimasu.</td>
                <td>Very pleased to meet you.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>おなまえは？</td>
                <td>Onamae wa?</td>
                <td>What is your name?</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>せんせい</td>
                <td>Sensei</td>
                <td>
                  <span className="whitespace-nowrap">Teacher</span> /{" "}
                  <span className="whitespace-nowrap">Professor</span> /{" "}
                  <span className="whitespace-nowrap">Dr.</span>
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>あのう、すみません。</td>
                <td>Anō, sumimasen.</td>
                <td>Ummm, excuse me</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>しつもんがあります。</td>
                <td>Shitsumon ga arimasu.</td>
                <td>I have a question.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>
                  もういちどおねがいします。
                </td>
                <td>Mōichido onegaishimasu.</td>
                <td>One more time, please.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>
                  もうちょっとゆっくりおねがいします。
                </td>
                <td>Mōchotto yukkuri onegaishimasu.</td>
                <td>A little slower, please.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>
                  どうもありがとうございます。
                </td>
                <td>Dōmo arigatō gozaimasu.</td>
                <td>Thank you very much.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>しつれいします。</td>
                <td>Shitsurei shimasu.</td>
                <td>
                  <span className="whitespace-nowrap">Excuse me</span> / Please
                  excuse my interrupting you
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>かいてください。</td>
                <td>Kaite kudasai.</td>
                <td>Please write.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>
                  すみませんが、えいごでいいですか。
                </td>
                <td>Sumimasen ga, eigo de ii desu ka?</td>
                <td>Excuse me but is English okay?</td>
              </tr>
            </tbody>
          </table>
          <h3 className="mb-6 mt-8 text-center text-3xl font-semibold text-orange-400">
            Countries & Time
          </h3>
          <table className={tableClassName}>
            <tbody className="align-top">
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>いま</td>
                <td>Ima</td>
                <td>
                  <span className="whitespace-nowrap">Now</span> /{" "}
                  <span className="whitespace-nowrap">Right now</span>
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>ごぜん</td>
                <td>Gozen</td>
                <td>
                  <span className="whitespace-nowrap">A.M.</span> /{" "}
                  <span className="whitespace-nowrap">Morning</span>
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>ごご</td>
                <td>Gogo</td>
                <td>
                  <span className="whitespace-nowrap">P.M.</span> /{" "}
                  <span className="whitespace-nowrap">Afternoon</span>
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>～じ</td>
                <td>...ji</td>
                <td>
                  <span className="whitespace-nowrap">...o'clock</span> /{" "}
                  <span className="whitespace-nowrap">...hour</span>
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>いちじ</td>
                <td>Ichiji</td>
                <td>
                  <span className="whitespace-nowrap">One o'clock</span> /{" "}
                  <span className="whitespace-nowrap">1:00</span>
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>はん</td>
                <td>Han</td>
                <td>
                  <span className="whitespace-nowrap">Half</span> /{" "}
                  <span className="whitespace-nowrap">Half past</span>
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>にじはん</td>
                <td>Nijihan</td>
                <td>
                  <span className="whitespace-nowrap">Half past two</span> /{" "}
                  <span className="whitespace-nowrap">2:30</span>
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>にほん</td>
                <td>Nihon</td>
                <td>Japan</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>アメリカ</td>
                <td>Amerika</td>
                <td>
                  <span className="whitespace-nowrap">America</span> /{" "}
                  <span className="whitespace-nowrap">USA</span>
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>イギリス</td>
                <td>Igirisu</td>
                <td>
                  <span className="whitespace-nowrap">UK</span> /{" "}
                  <span className="whitespace-nowrap">Britain</span>
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>オーストラリア</td>
                <td>Ōsutoraria</td>
                <td>Australia</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>かんこく</td>
                <td>Kankoku</td>
                <td>
                  <span className="whitespace-nowrap">Korea</span> /{" "}
                  <span className="whitespace-nowrap">South Korea</span>
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>カナダ</td>
                <td>Kanada</td>
                <td>Canada</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>ちゅうごく</td>
                <td>Chuugoku</td>
                <td>China</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>インド</td>
                <td>Indo</td>
                <td>India</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>エジプト</td>
                <td>Ejiputo</td>
                <td>Egypt</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className={japaneseClassName}>フィリピン</td>
                <td>Firipin</td>
                <td>Philippines</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ContentBox>
  )
}
