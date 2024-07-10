"use client"
import React, {
  useState,
  useRef,
  ChangeEvent,
  ReactElement,
  ReactNode,
  useEffect,
} from "react"
import { toKana, toRomaji, toHiragana, toKatakana } from "wanakana"

type TranslationType = "romaji" | "hiragana" | "katakana" | "kana"

type WanakanaWrapperProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: ReactNode // Accept any ReactNode as children
  value?: string
  to?: TranslationType
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

const translateValue = (string: string, type: TranslationType): string => {
  switch (type) {
    case "romaji":
      return toRomaji(string, { IMEMode: true })
    case "hiragana":
      return toHiragana(string, { IMEMode: true })
    case "katakana":
      return toKatakana(string, { IMEMode: true })
    case "kana":
    default:
      return toKana(string, { IMEMode: true })
  }
}

const WanakanaWrapper: React.FC<WanakanaWrapperProps> = ({
  children,
  value = "",
  to = "kana",
  onChange,
  ...props
}) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const [parsedValue, setValue] = useState<string>(translateValue(value, to))

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const updatedValue = translateValue(e.target.value, to)
    setValue(updatedValue)
    if (inputRef.current) {
      inputRef.current.value = updatedValue
    }
    onChange && onChange(e)
  }

  // Sync parsedValue with the external value prop
  useEffect(() => {
    setValue(translateValue(value, to))
  }, [value, to])

  // Clone each child with updated props
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as ReactElement<any>, {
        ref: inputRef,
        value: parsedValue,
        onChange: handleChange,
        ...props,
      })
    }
    return child
  })

  return <>{enhancedChildren}</>
}

export default WanakanaWrapper
