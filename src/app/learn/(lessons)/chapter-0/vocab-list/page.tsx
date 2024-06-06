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
        <h1 className="px-20 pb-6 pt-28 text-center text-4xl font-medium leading-[3.25rem]">
          <span className="text-5xl font-medium">Great job</span>, you've
          finally made it! You've now got a strong grasp of Hiragana! Not only
          can you <span className="text-5xl">read</span> hiragana, but you also
          have the phonetic arsenal to <span className="text-5xl">say</span>{" "}
          pretty much <span className="font-bold">*anything*</span> in
          Japanese!🔥
        </h1>
        <p className="px-28 py-6 text-xl leading-8">
          You're probably tired of practicing hiragana, so here's a quick
          preview of what you'll learn in the next few lessons. You'll quckly
          work your way through each word as they come up, and you'll be having
          real Japanese conversations before you know it!
        </p>
        <h1 className="mx-auto mb-12 mt-6 text-center text-6xl font-semibold tracking-wide underline-offset-8">
          <u>
            <em>Vocabliary</em>
          </u>
        </h1>
        <div className="mx-24 border-b border-neutral-600 pb-12">
          <h3 className="mb-6 mt-8 text-center text-3xl font-semibold text-orange-400">
            Greetings
          </h3>
          <table className={tableClassName}>
            <tbody className="align-top">
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>おはよう。</td>
                <td>Ohayou.</td>
                <td>Good morning.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>おはようございます。</td>
                <td>Ohayou gozaimasu.</td>
                <td>Good morning. (polite)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>こんにちは。</td>
                <td>Konnichiwa.</td>
                <td>Good afternoon., Hello.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>こんばんは。</td>
                <td>Konbanwa.</td>
                <td>Good evening.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>またね。</td>
                <td>Mata ne.</td>
                <td>See you., Bye.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>じゃあね。</td>
                <td>Jaa ne.</td>
                <td>See you later.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>さようなら。</td>
                <td>Sayounara.</td>
                <td>Goodbye.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>ようこそ。</td>
                <td>Youkoso.</td>
                <td>Welcome.</td>
              </tr>
            </tbody>
          </table>
          <h3 className="mb-6 mt-8 text-center text-3xl font-semibold text-orange-400">
            Common Expressions
          </h3>

          <table className={tableClassName}>
            <tbody className="align-top">
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>すみません</td>
                <td>sumimasen</td>
                <td>Excuse me., Sorry.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>いいえ</td>
                <td>iie</td>
                <td>No</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>いってきます。</td>
                <td>Itte kimasu.</td>
                <td>I'll go and come back.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>いってらっしゃい。</td>
                <td>Itterasshai.</td>
                <td>Go and come back.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>ただいま。</td>
                <td>Tadaima.</td>
                <td>I'm home.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>おかえり (なさい)。</td>
                <td>Okaeri (nasai).</td>
                <td>Welcome home.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>おやすみ (なさい)。</td>
                <td>Oyasumi (nasai).</td>
                <td>Good night. (sleeping)</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>いただきます。</td>
                <td>Itadakimasu.</td>
                <td>Than you for the food.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>ごちそうさま (でした)。</td>
                <td>Gochisooma (deshita).</td>
                <td>That was delicious.</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>はじめまして。</td>
                <td>Hajimemashite.</td>
                <td>Nice to meet you</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>よろしく おねがいします。</td>
                <td>Yoroshiku onegai shimasu.</td>
                <td>Please be kind to me.</td>
              </tr>
            </tbody>
          </table>
          <h3 className="mb-6 mt-8 text-center text-3xl font-semibold text-orange-400">
            Numbers
          </h3>
          <table className={tableClassName}>
            <tbody className="align-top">
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>ぜろ・れい</td>
                <td>zero/rei</td>
                <td>Zero</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>いち</td>
                <td>ichi</td>
                <td>One</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>に</td>
                <td>ni</td>
                <td>Two</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>さん</td>
                <td>san</td>
                <td>Three</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>よん・し</td>
                <td>yon/shi</td>
                <td>Four</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>ご</td>
                <td>go</td>
                <td>Five</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>ろく</td>
                <td>roku</td>
                <td>Six</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>なな・しち</td>
                <td>shichi/nana</td>
                <td>Seven</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>はち</td>
                <td>hachi</td>
                <td>Eight</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>きゅう・く</td>
                <td>kyuu/ku</td>
                <td>Nine</td>
              </tr>
              <tr className="[&>*]:py-[0.65rem]">
                <td className={japaneseClassName}>じゅう</td>
                <td>juu</td>
                <td>Ten</td>
              </tr>
            </tbody>
          </table>
          <h3 className="mt-4 text-center">...up to 99 (it's easy).</h3>
        </div>
      </div>
    </ContentBox>
  )
}
