import Romaji from "@/components/text/Romaji"

export default function Numbers10() {
  return (
    <div className="flex justify-center rounded-md bg-background-secondary dark:text-primary-foreground pt-8 pb-12 px-20 text-3xl">
      <ul className="[&>*]:flex [&>*]:justify-between [&>*]:items-center [&>*]:min-w-72 [&>*]:py-2 [&>*]:pr-4 [&>*]:pl-2 [&>*]:border-b [&>*]:border-black">
        {/* Individual Box */}
        <li>
          {/* Romaji Element */}
          <div className="text-4xl font-medium">
            <Romaji romaji="ichi">いち</Romaji>
          </div>
          <p>1</p>
        </li>
        <li>
          <div className="text-4xl font-medium">
            <Romaji romaji="ni">に</Romaji>
          </div>
          <p>2</p>
        </li>
        <li>
          <div className="text-4xl font-medium">
            <Romaji romaji="san">さん</Romaji>
          </div>
          <p>3</p>
        </li>
        <li>
          <div className="text-4xl font-medium flex gap-2">
            <Romaji romaji="yon">よん /</Romaji>
            <Romaji romaji="shi">し</Romaji>
          </div>
          <p>4</p>
        </li>
        <li>
          <div className="text-4xl font-medium">
            <Romaji romaji="go">ご</Romaji>
          </div>
          <p>5</p>
        </li>
        <li>
          <div className="text-4xl font-medium">
            <Romaji romaji="roku">ろく</Romaji>
          </div>
          <p>6</p>
        </li>
        <li>
          <div className="text-4xl font-medium flex gap-2">
            <Romaji romaji="nana">なな /</Romaji>
            <Romaji romaji="shichi">しち</Romaji>
          </div>
          <p>7</p>
        </li>
        <li>
          <div className="text-4xl font-medium">
            <Romaji romaji="hachi">はち</Romaji>
          </div>
          <p>8</p>
        </li>
        <li>
          <div className="text-4xl font-medium flex gap-2">
            <Romaji romaji="kyuu">きゅう /</Romaji>
            <Romaji romaji="ku">く</Romaji>
          </div>
          <p>9</p>
        </li>
        <li>
          <div className="text-4xl font-medium">
            <Romaji romaji="juu">じゅう</Romaji>
          </div>
          <p>10</p>
        </li>
      </ul>
    </div>
  )
}
