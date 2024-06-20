import ContentBox from "@/components/ContentBox"
import { fetchVocabularyByPath } from "@/features/practice-mode/components/fetchVocabByPath"
import VocabCards from "@/features/vocab-card/VocabCards"

export default async function page() {
  const path = "chapter-1/occupations-majors"
  const data = await fetchVocabularyByPath(path)

  const tableClassName = "table-fixed w-full"
  const japaneseClassName = "font-japanese text-[1.35rem] font-medium"

  return (
    <ContentBox
      // backgroundImage="/img/dust-splatter-1.png"
      // backgroundImageSize="1215px"
      // backgroundImageOpacity={5}
      variant="xl"
      nextPageLink="/learn/chapter-1/practice/occupations-majors"
    >
      <h1 className="px-28 pb-6 pt-28 text-center text-4xl font-semibold">
        Occupations & Majors
      </h1>
      <div className="md:px-12 lg:px-24 xl:px-48 2xl:px-64">
        <VocabCards data={data} />
      </div>
      <div className="mx-24">
        <div className="border-b border-neutral-600 pb-6">
          <h2 className="py-3 text-center text-2xl font-bold">
            Additional Majors
          </h2>
          <p className="mb-6 text-center">
            Find the major that applies to{" "}
            <em>
              <span className="font-semibold text-orange-400">YOU</span>!
            </em>{" "}
            (no need to memorize these)
          </p>

          <table className={tableClassName}>
            <tbody className="align-top">
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Aerospace Engineering</td>
                <td>Uchuu koogaku</td>
                <td className={japaneseClassName}>
                  うちゅうこうがく (宇宙工学)
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Art History</td>
                <td>Bijutsu shi</td>
                <td className={japaneseClassName}>びじゅつし (美術史)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Architecture</td>
                <td>Kenchiku gaku</td>
                <td className={japaneseClassName}>けんちくがく (建築学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Biochemistry</td>
                <td>Seekagaku</td>
                <td className={japaneseClassName}>せいかがく (生化学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Biology</td>
                <td>Seebutsu gaku</td>
                <td className={japaneseClassName}>せいぶつがく (生物学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Chemical Engineering</td>
                <td>Kagaku koogaku</td>
                <td className={japaneseClassName}>かがくこうがく (化学工学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Chemistry</td>
                <td>Kagaku</td>
                <td className={japaneseClassName}>かがく (化学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Cognitive Science</td>
                <td>Ninchi kagaku</td>
                <td className={japaneseClassName}>にんちかがく (認知科学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>(Pre-) Commerce</td>
                <td>Bijinesu</td>
                <td className={japaneseClassName}>びじねす (ビジネス)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Computer Engineering</td>
                <td>Konpyuutaa koogaku</td>
                <td className={japaneseClassName}>
                  こんぴゅーたーこうがく (コンピュータ工学)
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Computer Science</td>
                <td>Konpyuutaa saiense</td>
                <td className={japaneseClassName}>
                  こんぴゅーたーさいえんす (コンピュータサイエンス)
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Communication</td>
                <td>Komyunikeeshion</td>
                <td className={japaneseClassName}>
                  こみゅにけーしょん (コミュニケーション)
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Drama</td>
                <td>Engeki</td>
                <td className={japaneseClassName}>えんげき (演劇)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>East Asian Studies</td>
                <td>Higashi ajia kenkyuu</td>
                <td className={japaneseClassName}>
                  ひがしあじあけんきゅう (東アジア研究)
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Electrical Engineering</td>
                <td>Denki koogaku</td>
                <td className={japaneseClassName}>でんきこうがく (電気工学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Education</td>
                <td>Kyooikugaku</td>
                <td className={japaneseClassName}>きょういくがく (教育学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Engineering</td>
                <td>Enjiniaringu</td>
                <td className={japaneseClassName}>
                  えんじにありんぐ (エンジニアリング)
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Environmental Science</td>
                <td>Kankyoo kagaku</td>
                <td className={japaneseClassName}>
                  かんきょうかがく (環境科学)
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Finance</td>
                <td>Zaiseegaku</td>
                <td className={japaneseClassName}>ざいせいがく (財政学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Foreign Affairs</td>
                <td>Kokusai kankee</td>
                <td className={japaneseClassName}>
                  こくさいかんけい (国際関係)
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Linguistics</td>
                <td>Gengogaku</td>
                <td className={japaneseClassName}>げんごがく (言語学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Management</td>
                <td>Keieegaku</td>
                <td className={japaneseClassName}>けいえいがく (経営学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Math</td>
                <td>Suugaku</td>
                <td className={japaneseClassName}>すうがく (数学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Media Studies</td>
                <td>Media kenkyuu</td>
                <td className={japaneseClassName}>
                  めでぃあけんきゅう (メディア研究)
                </td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Music</td>
                <td>Ongaku</td>
                <td className={japaneseClassName}>おんがく (音楽)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Neuroscience</td>
                <td>Shinkee kagagu</td>
                <td className={japaneseClassName}>しんけいかがく (神経科学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Pharmacy</td>
                <td>Yakugaku</td>
                <td className={japaneseClassName}>やくがく (薬学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Philosophy</td>
                <td>Tetsugaku</td>
                <td className={japaneseClassName}>てつがく (哲学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Physics</td>
                <td>Butsurigaku</td>
                <td className={japaneseClassName}>ぶつりがく (物理学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>(Pre-) Medical</td>
                <td>Igaku</td>
                <td className={japaneseClassName}>いがく (医学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Psychology</td>
                <td>Shinrigaku</td>
                <td className={japaneseClassName}>しんりがく (心理学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Religious Studies</td>
                <td>Shuukyoogaku</td>
                <td className={japaneseClassName}>しゅうきょうがく (宗教学)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Spanish</td>
                <td>Supein go</td>
                <td className={japaneseClassName}>すぺいんご (スペイン語)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>Studio Art</td>
                <td>Bijutsu</td>
                <td className={japaneseClassName}>びじゅつ (美術)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td>System Engineering</td>
                <td>Shisutemu koogaku</td>
                <td className={japaneseClassName}>
                  しすてむこうがく (システム工学)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-6">
          <table className={tableClassName}>
            <tbody className="align-top">
              <tr className="[&>*]:py-[0.65rem] [&>*]:pr-2">
                <td className="text-xl font-medium">Undecided</td>
                <td className="text-xl font-medium">Mada wakarimasen</td>
                <td className="font-japanese text-2xl font-medium">
                  まだわかりません (まだ分かりません)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </ContentBox>
  )
}
