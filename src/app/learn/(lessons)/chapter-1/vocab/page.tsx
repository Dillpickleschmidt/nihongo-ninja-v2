import ContentBox from "@/components/ContentBox"

export default function Numbers() {
  const tableClassName = "table-fixed w-full leading-[2.75rem]"
  const japaneseClassName = "font-japanese text-[1.35rem] font-medium"

  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/vocab"
    >
      <div className="pb-20">
        <h1 className="pt-28 pb-6 text-4xl font-medium leading-[3.25rem] text-center px-20">
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
        <h1 className="mx-auto mt-6 mb-12 text-6xl text-center font-semibold tracking-wide underline-offset-8">
          <u>
            <em>Vocabliary</em>
          </u>
        </h1>
        <div className="mx-24 pb-12 border-b border-neutral-600">
          <h3 className="mt-8 mb-6 text-3xl text-center text-orange-400 font-semibold">
            Greetings
          </h3>
          <table className={tableClassName}>
            <tr>
              <td className={japaneseClassName}>おはよう。</td>
              <td>Ohayou.</td>
              <td>Good morning.</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>おはようございます。</td>
              <td>Ohayou gozaimasu.</td>
              <td>Good morning. (polite)</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>こんにちは。</td>
              <td>Konnichiwa.</td>
              <td>Good afternoon.</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>こんばんは。</td>
              <td>Konbanwa.</td>
              <td>Good evening.</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>またね。</td>
              <td>Mata ne.</td>
              <td>See you later.</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>じゃあね。</td>
              <td>Jaa ne.</td>
              <td>See you later.</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>さようなら。</td>
              <td>Sayounara.</td>
              <td>Goodbye.</td>
            </tr>
          </table>
          <h3 className="mt-8 mb-6 text-3xl text-center text-orange-400 font-semibold">
            Common Phrases
          </h3>
          <table className={tableClassName}>
            <tr>
              <td className={japaneseClassName}>いってきます。</td>
              <td>Itte kimasu.</td>
              <td>I'll go and come back.</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>いってらっしゃい。</td>
              <td>Itterasshai.</td>
              <td>Go and come back.</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>ただいま。</td>
              <td>Tadaima.</td>
              <td>I'm home.</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>おかえり (なさい)。</td>
              <td>Okaeri (nasai).</td>
              <td>Welcome home.</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>おやすみ (なさい)。</td>
              <td>Oyasumi (nasai).</td>
              <td>Good night. (sleeping)</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>いただきます。</td>
              <td>Itadakimasu.</td>
              <td>Than you for the food.</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>ごちそうさま (でした)。</td>
              <td>Gochisooma (deshita).</td>
              <td>That was delicious.</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>はじめまして。</td>
              <td>Hajimemashite.</td>
              <td>How do you do?</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>よろしく おねがいします。</td>
              <td>Yoroshiku onegai shimasu.</td>
              <td>Please be kind to me.</td>
            </tr>
          </table>
          <h3 className="mt-8 mb-6 text-3xl text-center text-orange-400 font-semibold">
            Essential Expressions
          </h3>
          <table className={tableClassName}>
            <tr>
              <td className={japaneseClassName}>すみません</td>
              <td>sumimasen</td>
              <td>excuse me; sorry</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>いいえ</td>
              <td>iie</td>
              <td>no</td>
            </tr>
          </table>

          <h3 className="mt-8 mb-6 text-3xl text-center text-orange-400 font-semibold">
            Numbers
          </h3>
          <table className={tableClassName}>
            <tr>
              <td className={japaneseClassName}>いち</td>
              <td>ichi</td>
              <td>one</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>に</td>
              <td>ni</td>
              <td>two</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>さん</td>
              <td>san</td>
              <td>three</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>よん</td>
              <td>yon</td>
              <td>four</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>ご</td>
              <td>go</td>
              <td>five</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>ろく</td>
              <td>roku</td>
              <td>six</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>なな</td>
              <td>nana</td>
              <td>seven</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>はち</td>
              <td>hachi</td>
              <td>eight</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>きゅう</td>
              <td>kyuu</td>
              <td>nine</td>
            </tr>
            <tr>
              <td className={japaneseClassName}>じゅう</td>
              <td>juu</td>
              <td>ten</td>
            </tr>
          </table>
          <h3 className="mt-4 text-center">...up to 99 (it's easy).</h3>
        </div>
      </div>
    </ContentBox>
  )
}
