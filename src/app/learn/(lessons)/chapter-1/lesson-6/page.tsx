import ContentBox from "@/components/ContentBox"
import PortraitIcon from "@/components/PortraitIcon"

export default function page() {
  return (
    <ContentBox
      backgroundImage="/img/dust-splatter-1.png"
      backgroundImageSize="1215px"
      backgroundImageOpacity={5}
      nextPageLink="/learn/chapter-1/hiragana-test"
    >
      <h1 className="pt-28 text-[2rem] font-medium leading-[2.875rem] text-center px-20">
        You thought you were finally in the clear?{" "}
        <span className="text-[2.75rem] font-bold">
          <em>No!</em>{" "}
        </span>
        ...<em>Welcome</em>, brave souls, to the{" "}
        <span className="text-[2.125rem] font-medium">adrenaline-pumping</span>,
        edge-of-your-seat world of{" "}
        <span className="text-[3.125rem] font-bold">Double Consonants</span> and{" "}
        <span className="text-[3.125rem] font-bold">Long Vowels</span> in
        Japanese!{" "}
        <span className="font-semibold">
          <u>Oh yes</u>
        </span>
        , it's the roller coaster ride of language learning you{" "}
        <em>never knew you needed</em>.{" "}
        <span className="text-[2.125rem] font-bold">
          <em>Buckle up</em>
        </span>
        , because things are about to get <em>wildly</em>... linguistic.
      </h1>
      <h2 className="text-3xl font-medium leading-[3.25rem] text-center px-20"></h2>

      <div className="px-32 [&>*]:py-6">
        <h3 className="font-semibold !pb-4">
          Double Consonants (<span className="font-japanese">促音</span>,
          Sokuon): The Dramatic Pauses of Japanese:
        </h3>
        <div className="flex flex-row justify-center !pb-0">
          <ul
            className="pr-4 leading-7 pl-2 text-xl font-bold text-center
              ![&>*]:py-0"
          >
            <li>C</li>
            <li>o</li>
            <li>n</li>
            <li>s</li>
            <li>o</li>
            <li>n</li>
            <li>a</li>
            <li>n</li>
            <li>t</li>
            <li>s</li>
          </ul>
          <ul
            className="pr-6 leading-7 text-xl font-bold text-center
              ![&>*]:py-0"
          >
            <li>D</li>
            <li>o</li>
            <li>u</li>
            <li>b</li>
            <li>l</li>
            <li>e</li>
          </ul>
          <div>
            <p>
              Imagine you're in a suspenseful movie, and there's that momentary
              pause that makes your heart skip a beat. That's what double
              consonants are in the realm of Japanese. They're like tiny,
              suspenseful hiccups in words that add a whole layer of drama.
            </p>
            <br />
            <p>
              Take &quot;
              <span className="font-japanese font-semibold">がっこう</span>{" "}
              (gakkou - school).&quot; Without the double 'k', it would just be
              a boring old 'gakou.' But with that extra 'k', suddenly, it's
              'gak-kou' a word with a bit more punch, a bit more{" "}
              <span className="">
                <u>
                  <em>oomph</em>
                </u>
                .
              </span>{" "}
              It's the linguistic version of adding an extra shot of espresso to
              your morning coffee - small but mighty!
            </p>
          </div>
        </div>
        <p className="!pb-0 text-center">
          *Use a little っ before the consonant character to make it a double
          consonant.
        </p>
        <h3 className="font-semibold !pb-4 !pt-16 text-center">
          Long Vowels (<span className="font-japanese">長音</span>, chōon): The
          Stretchy Elastic of Sounds:
        </h3>
        <div className="flex flex-row justify-center !pb-0">
          <div
            className="pr-4 leading-7 pl-2 text-xl font-bold text-center
              ![&>*]:py-0"
          >
            <p>V</p>
            <p>o</p>
            <p>w</p>
            <p>e</p>
            <p>l</p>
            <p>s</p>
          </div>
          <div
            className="pr-6 leading-7 text-xl font-bold text-center
              ![&>*]:py-0"
          >
            <p>L</p>
            <p>o</p>
            <p>n</p>
            <p>g</p>
          </div>
          <div>
            <p>
              Now, let's switch gears to long vowels. If double consonants are
              the dramatic pauses, long vowels are like stretching a rubber
              band, elongating the sound until you think it might just snap. But
              fear not, it won't!
            </p>
            <br />
            <p>
              Consider &quot;お<u>ばあ</u>さん (o<u>baa</u>san -
              grandmother).&quot; If you don't stretch the 'a', you might end up
              calling someone{" "}
              <span className="text-nowrap">
                &quot;お<u>ば</u>
                さん
              </span>{" "}
              (o<u>ba</u>san - aunt),&quot; and <em>oh boy</em>, can that lead
              to some awkward family reunions.
            </p>
          </div>
        </div>
        <div>
          <p className="text-center">*See the extra あ?</p>
          <p className="mt-3">
            In hiragana, you'll also see the 'o' sound get extended with the う
            (u) character. For example: ようこそ (welcome) is pronounced yōkuso
            (extend the 'o' sound), not yo-u-koso. This applies to many
            characters that end in 'o' such as お, こ, そ, と, も, etc. For
            example:
          </p>
          <div className="mt-2 w-full flex justify-center">
            <ul className="list-disc">
              <li>
                <span className="font-japanese font-semibold text-xl">
                  おとうさん
                </span>{" "}
                <span className="text-sm">(father)</span> - otōsan{" "}
                <span>✔️</span>, not oto-u-san.{" "}
                <span className="text-sm">❌</span>
              </li>
              <li>
                <span className="font-japanese font-semibold text-xl">
                  おしょうがつ
                </span>{" "}
                <span className="text-sm">(New Year's)</span> - oshōgatsu{" "}
                <span>✔️</span>, not osho-u-gatsu.{" "}
                <span className="text-sm">❌</span>
              </li>
              <li>
                <span className="font-japanese font-semibold text-xl">
                  もう
                </span>{" "}
                <span className="text-sm">(already)</span> - mō <span>✔️</span>,
                not mo-u. <span className="text-sm">❌</span>
              </li>
            </ul>
          </div>
          <p className="mt-2">
            You might see some places write the romaji as 'y<u>ou</u>koso', but
            remember, there is no 'u' sound, just a long 'o' sound.
          </p>
        </div>
        <div className="pt-16">
          <h3 className="font-semibold text-center">
            A special note for <span className="font-japanese text-xl">ん</span>
          </h3>
          <p className="mt-2">
            If a Japanese word contains a single "n" followed by na-ni-nu-ne-no
            you must say the single "n" individually from na-ni-nu-ne-no. Think
            of it like double letters in English, but even more important in
            Japanese—for example, "hello" versus "helo."
          </p>
          <div className="mt-6 mx-16 rounded-lg bg-card/100 border-[2.5px] border-dashed border-card-foreground shadow-inner">
            <table className="font-japanese table-fixed border-collapse text-4xl w-full">
              <tbody>
                <tr className="[&>*]:border-l-2 [&>*]:border-r-2 [&>*]:border-card-foreground/75 [&>*]:h-[4.5rem] [&>*]:text-center [&>*]:pb-2">
                  <td className="!border-l-0">ko</td>
                  <td>n'</td>
                  <td>ni</td>
                  <td>chi</td>
                  <td className="!border-r-0">wa</td>
                </tr>
              </tbody>
            </table>
          </div>
          <ul className="mt-4 text-center">
            <li>kon'nichiwa</li>
            <li>
              <span className="text-sm">❌</span>{" "}
              <span className="line-through">ko nichiwa</span>
            </li>
          </ul>
        </div>
        <p>
          Double consonants and long vowels can be tricky for English speakers.
          While Japanese pronunciation is generally easy, it's{" "}
          <span className="text-xl font-bold">crucial</span> to pay special
          attention to these sounds, as they can change a word's meaning{" "}
          <u>entirely</u>. Japanese speakers are forgiving of accents but highly
          attuned to these subtle length differences. Don't worry if you
          struggle at first—you'll encounter and practice them throughout your
          Japanese journey.
        </p>

        <h3 className="mt-8 !pb-0 text-3xl font-bold text-center">
          <em>Why, oh </em>
          <span className="text-4xl">Why?</span>
        </h3>
        <p>
          You may ask,{" "}
          <span className="text-xl">
            <em>&quot;Why do these exist?&quot;</em>
          </span>{" "}
          Well, it's all about adding <em>flavor</em>, my friends! Just like
          chefs use spices to turn bland food into culinary masterpieces,
          Japanese uses double consonants and long vowels to turn plain speech
          into <em>*melodious music*</em>.
        </p>
        <p>
          <span className="text-xl font-bold">Mastering the Art:</span> Getting
          these sounds right might feel like trying to pat your head and rub
          your belly at the same time. But once you get the hang of it, you'll
          be weaving through Japanese conversations with the grace of a
          linguistic acrobat.
        </p>
        <div className="-mb-12 ">
          <p className="mt-6 text-base">
            <span className="font-bold">A note from sensei: </span>
            <em>
              Embark on this exhilarating adventure with gusto! Embrace the
              dramatic, relish the stretchy, and remember - in the world of
              Japanese phonetics, <u>more is more</u>. Revel in the glory of
              sounding like a <em>true</em> Nihongo master, and let the double
              consonants and long vowels add that extra *zing* to your
              linguistic journey! ✨
            </em>
          </p>
          <div className="mt-8 w-full flex justify-center">
            <PortraitIcon image="/img/guru.png" className="border-none" />
          </div>
        </div>
      </div>
    </ContentBox>
  )
}
