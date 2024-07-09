import React, { ReactNode } from "react"
import {
  convertFuriganaToRubyHtml,
  extractHiragana,
} from "@/features/vocab-data-parsers"

interface RubyTextProps {
  children: ReactNode
  showFurigana: boolean
  furiganaSize?: string
}

function createMarkup(html: string) {
  return { __html: html }
}

export default function RubyText({
  children,
  showFurigana,
  furiganaSize,
}: RubyTextProps) {
  function processContent(content: ReactNode): string {
    if (typeof content === "string") {
      if (showFurigana) {
        return convertFuriganaToRubyHtml(content, furiganaSize)
      } else {
        return extractHiragana(content)
      }
    }
    if (Array.isArray(content)) {
      return content.map(processContent).join("")
    }
    if (React.isValidElement(content)) {
      return processContent(content.props.children)
    }
    return ""
  }

  const displayText = processContent(children)

  return (
    <span
      dangerouslySetInnerHTML={createMarkup(displayText)}
      className="font-japanese"
    />
  )
}
