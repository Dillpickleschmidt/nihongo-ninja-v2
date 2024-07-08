const wordData = {
  verbs: [
    { kanji: "行<rt>い</rt>く", type: "irv", eng: "go" },
    { kanji: "する", type: "irv", eng: "do, make" },
    { kanji: "来<rt>く</rt>る", type: "irv", eng: "come" },
    { kanji: "ある", type: "irv", eng: "have, exists, is (inanimate)" },
    { kanji: "問<rt>と</rt>う", type: "irv", eng: "ask, accuse" },
    { kanji: "いる", type: "ichidan", eng: "exists, is (living things)" },
    {
      kanji: "出<rt>で</rt>来<rt>き</rt>る",
      type: "ichidan",
      eng: "able, can do",
    },
    { kanji: "始<rt>はじ</rt>める", type: "ichidan", eng: "begin" },
    { kanji: "借<rt>か</rt>りる", type: "ichidan", eng: "borrow, rent" },
    { kanji: "続<rt>つづ</rt>ける", type: "ichidan", eng: "continue, proceed" },
    { kanji: "決<rt>き</rt>める", type: "ichidan", eng: "decide, choose" },
    { kanji: "食<rt>た</rt>べる", type: "ichidan", eng: "eat" },
    { kanji: "忘<rt>わす</rt>れる", type: "ichidan", eng: "forget" },
    { kanji: "降<rt>お</rt>りる", type: "ichidan", eng: "get off, go down" },
    { kanji: "疲<rt>つか</rt>れる", type: "ichidan", eng: "get tired" },
    { kanji: "起<rt>お</rt>きる", type: "ichidan", eng: "get up, wake up" },
    { kanji: "あげる", type: "ichidan", eng: "give" },
    { kanji: "出<rt>で</rt>る", type: "ichidan", eng: "leave, exit, appear" },
    { kanji: "助<rt>たす</rt>ける", type: "ichidan", eng: "help" },
    { kanji: "見<rt>み</rt>る", type: "ichidan", eng: "see, look" },
    { kanji: "開<rt>あ</rt>ける", type: "ichidan", eng: "open" },
    { kanji: "覚<rt>おぼ</rt>える", type: "ichidan", eng: "remember, learn" },
    { kanji: "寝<rt>ね</rt>る", type: "ichidan", eng: "sleep, go to bed" },
    { kanji: "閉<rt>し</rt>める", type: "ichidan", eng: "close" },
    {
      kanji: "着<rt>き</rt>る",
      type: "ichidan",
      eng: "put on, wear (shirt, jacket, etc)",
    },
    { kanji: "なる", type: "godan", eng: "become" },
    { kanji: "乗<rt>の</rt>る", type: "godan", eng: "board, ride" },
    { kanji: "切<rt>き</rt>る", type: "godan", eng: "cut" },
    { kanji: "やる", type: "godan", eng: "do, give" },
    { kanji: "終<rt>お</rt>わる", type: "godan", eng: "end" },
    {
      kanji: "上<rt>あ</rt>がる",
      type: "godan",
      eng: "go up, rise",
      altOkurigana: ["上る"],
    },
    { kanji: "知<rt>し</rt>る", type: "godan", eng: "know" },
    { kanji: "作<rt>つく</rt>る", type: "godan", eng: "make, build" },
    { kanji: "帰<rt>かえ</rt>る", type: "godan", eng: "return, go home" },
    { kanji: "取<rt>と</rt>る", type: "godan", eng: "take, steal" },
    { kanji: "買<rt>か</rt>う", type: "godan", eng: "buy" },
    { kanji: "笑<rt>わら</rt>う", type: "godan", eng: "laugh, smile" },
    { kanji: "会<rt>あ</rt>う", type: "godan", eng: "meet" },
    { kanji: "言<rt>い</rt>う", type: "godan", eng: "say, utter" },
    { kanji: "思<rt>おも</rt>う", type: "godan", eng: "think, believe" },
    { kanji: "使<rt>つか</rt>う", type: "godan", eng: "use" },
    { kanji: "持<rt>も</rt>つ", type: "godan", eng: "hold, have" },
    { kanji: "待<rt>ま</rt>つ", type: "godan", eng: "wait" },
    { kanji: "立<rt>た</rt>つ", type: "godan", eng: "stand up" },
    { kanji: "聞<rt>き</rt>く", type: "godan", eng: "hear, listen" },
    { kanji: "引<rt>ひ</rt>く", type: "godan", eng: "pull, tug" },
    {
      kanji: "履<rt>は</rt>く",
      type: "godan",
      eng: "put on, wear (pants, skirt, shoes, etc)",
    },
    { kanji: "歩<rt>ある</rt>く", type: "godan", eng: "walk" },
    { kanji: "書<rt>か</rt>く", type: "godan", eng: "write" },
    { kanji: "働<rt>はたら</rt>く", type: "godan", eng: "work" },
    { kanji: "死<rt>し</rt>ぬ", type: "godan", eng: "die, pass away" },
    { kanji: "飲<rt>の</rt>む", type: "godan", eng: "drink" },
    { kanji: "楽<rt>たの</rt>しむ", type: "godan", eng: "enjoy, have fun" },
    { kanji: "進<rt>すす</rt>む", type: "godan", eng: "advance, go forward" },
    { kanji: "住<rt>す</rt>む", type: "godan", eng: "live, inhabit" },
    { kanji: "読<rt>よ</rt>む", type: "godan", eng: "read" },
    { kanji: "休<rt>やす</rt>む", type: "godan", eng: "rest, be absent" },
    {
      kanji: "遊<rt>あそ</rt>ぶ",
      type: "godan",
      eng: "play, have a good time",
    },
    { kanji: "学<rt>まな</rt>ぶ", type: "godan", eng: "study, learn" },
    { kanji: "選<rt>えら</rt>ぶ", type: "godan", eng: "choose, select" },
    {
      kanji: "返<rt>かえ</rt>す",
      type: "godan",
      eng: "return (something), put back",
    },
    { kanji: "押<rt>お</rt>す", type: "godan", eng: "push, press" },
    { kanji: "治<rt>なお</rt>す", type: "godan", eng: "cure, repair" },
    { kanji: "話<rt>はな</rt>す", type: "godan", eng: "talk, speak" },
    { kanji: "探<rt>さが</rt>す", type: "godan", eng: "search, look for" },
    { kanji: "貸<rt>か</rt>す", type: "godan", eng: "lend, loan" },
    { kanji: "泳<rt>およ</rt>ぐ", type: "godan", eng: "swim" },
    {
      kanji: "脱<rt>ぬ</rt>ぐ",
      type: "godan",
      eng: "take off clothes, undress",
    },
    { kanji: "急<rt>いそ</rt>ぐ", type: "godan", eng: "hurry" },
    {
      kanji: "稼<rt>かせ</rt>ぐ",
      type: "godan",
      eng: "earn income, make money",
    },
    { kanji: "寛<rt>くつろ</rt>ぐ", type: "godan", eng: "relax, feel at home" },
    {
      kanji: "繋<rt>つな</rt>ぐ",
      type: "godan",
      eng: "connect, link together",
    },
    { kanji: "分<rt>わ</rt>かる", type: "godan", eng: "understand" },
    {
      kanji: "勉<rt>べん</rt>強<rt>きょう</rt>する",
      type: "irv",
      eng: "study",
    },
    {
      kanji: "運<rt>うん</rt>動<rt>どう</rt>する",
      type: "irv",
      eng: "exercise",
    },
    {
      kanji: "受<rt>う</rt>け<ruby>持<rt>も</rt></ruby>つ",
      type: "godan",
      eng: "take charge of",
    },
    {
      kanji: "持<rt>も</rt>って<ruby>行<rt>い</rt></ruby>く",
      type: "irv",
      eng: "take, carry away",
    },
    {
      kanji: "食<rt>た</rt>べ<ruby>歩<rt>ある</rt></ruby>く",
      type: "godan",
      eng: "try food at various restaurants",
    },
  ],
  adjectives: [
    { kanji: "いい", type: "ira", eng: "good" },
    { kanji: "かっこいい", type: "ira", eng: "cool, handsome" },
    { kanji: "赤<rt>あか</rt>い", type: "i", eng: "red" },
    { kanji: "新<rt>あたら</rt>しい", type: "i", eng: "new" },
    { kanji: "暑<rt>あつ</rt>い", type: "i", eng: "hot (weather)" },
    { kanji: "危<rt>あぶ</rt>ない", type: "i", eng: "dangerous" },
    { kanji: "美<rt>お</rt>味<rt>い</rt>しい", type: "i", eng: "delicious" },
    { kanji: "大<rt>おお</rt>きい", type: "i", eng: "big" },
    { kanji: "遅<rt>おそ</rt>い", type: "i", eng: "late, slow" },
    {
      kanji: "面<rt>おも</rt>白<rt>しろ</rt>い",
      type: "i",
      eng: "interesting, funny",
    },
    { kanji: "可<rt>か</rt>愛<rt>わい</rt>い", type: "i", eng: "cute, pretty" },
    { kanji: "寒<rt>さむ</rt>い", type: "i", eng: "cold (weather)" },
    { kanji: "高<rt>たか</rt>い", type: "i", eng: "high, expensive" },
    { kanji: "楽<rt>たの</rt>しい", type: "i", eng: "fun, pleasant" },
    { kanji: "小<rt>ちい</rt>さい", type: "i", eng: "small" },
    {
      kanji: "詰<rt>つま</rt>らない",
      type: "i",
      eng: "uninteresting, boring",
      altOkurigana: ["詰まらない"],
    },
    { kanji: "速<rt>はや</rt>い", type: "i", eng: "fast, quick" },
    { kanji: "古<rt>ふる</rt>い", type: "i", eng: "old (thing)" },
    { kanji: "欲<rt>ほ</rt>しい", type: "i", eng: "wanted, desired" },
    { kanji: "難<rt>むずか</rt>しい", type: "i", eng: "difficult" },
    { kanji: "安<rt>やす</rt>い", type: "i", eng: "cheap" },
    { kanji: "好<rt>す</rt>き", type: "na", eng: "like" },
    { kanji: "有<rt>ゆう</rt>名<rt>めい</rt>", type: "na", eng: "famous" },
    { kanji: "きれい", type: "na", eng: "beautiful, tidy" },
    { kanji: "嫌<rt>きら</rt>い", type: "na", eng: "dislike" },
    { kanji: "静<rt>しず</rt>か", type: "na", eng: "quiet" },
    { kanji: "元<rt>げん</rt>気<rt>き</rt>", type: "na", eng: "healthy" },
    { kanji: "色<rt>いろ</rt>々<rt>いろ</rt>", type: "na", eng: "various" },
    { kanji: "心<rt>しん</rt>配<rt>ぱい</rt>", type: "na", eng: "worry, care" },
    { kanji: "嫌<rt>いや</rt>", type: "na", eng: "unpleasant, detestable" },
    {
      kanji: "十<rt>じゅう</rt>分<rt>ぶん</rt>",
      type: "na",
      eng: "sufficient",
    },
    {
      kanji: "立<rt>りっ</rt>派<rt>ぱ</rt>",
      type: "na",
      eng: "excellent, splendid",
    },
    { kanji: "同<rt>おな</rt>じ", type: "na", eng: "same, alike" },
    {
      kanji: "大<rt>だい</rt>丈<rt>じょう</rt>夫<rt>ぶ</rt>",
      type: "na",
      eng: "okay, safe",
    },
    {
      kanji: "真<rt>ま</rt>っ<ruby>直<rt>す</rt></ruby>ぐ",
      type: "na",
      eng: "straight, direct",
      altOkurigana: ["真直ぐ", "真すぐ", "真っすぐ"],
    },
    { kanji: "下<rt>へ</rt>手<rt>た</rt>", type: "na", eng: "unskilled" },
    {
      kanji: "簡<rt>かん</rt>単<rt>たん</rt>",
      type: "na",
      eng: "simple, easy",
    },
    { kanji: "楽<rt>らく</rt>", type: "na", eng: "comfortable, easy" },
    {
      kanji: "残<rt>ざん</rt>念<rt>ねん</rt>",
      type: "na",
      eng: "unfortunate, disappointing",
    },
    { kanji: "必<rt>ひつ</rt>要<rt>よう</rt>", type: "na", eng: "necessary" },
  ],
}

export default wordData
