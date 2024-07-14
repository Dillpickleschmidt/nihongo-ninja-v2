"use client"
import React, {
  useState,
  useRef,
  ChangeEvent,
  ReactElement,
  ReactNode,
  useEffect,
  forwardRef,
  useImperativeHandle,
} from "react"
import { toKana, toRomaji, toHiragana, toKatakana } from "wanakana"

type TranslationType = "romaji" | "hiragana" | "katakana" | "kana"

type WanakanaWrapperProps = React.InputHTMLAttributes<HTMLInputElement> & {
  children?: ReactNode
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

const WanakanaWrapper = forwardRef<HTMLInputElement, WanakanaWrapperProps>(
  ({ children, value = "", to = "kana", onChange, ...props }, ref) => {
    const innerRef = useRef<HTMLInputElement>(null)
    const [parsedValue, setValue] = useState<string>(translateValue(value, to))

    useImperativeHandle(ref, () => innerRef.current!, [])

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const updatedValue = translateValue(e.target.value, to)
      setValue(updatedValue)
      if (innerRef.current) {
        innerRef.current.value = updatedValue
      }
      onChange && onChange(e)
    }

    useEffect(() => {
      setValue(translateValue(value, to))
    }, [value, to])

    const enhancedChildren = React.Children.map(children, (child) => {
      if (React.isValidElement(child)) {
        return React.cloneElement(child as ReactElement<any>, {
          ref: innerRef,
          value: parsedValue,
          onChange: handleChange,
          ...props,
        })
      }
      return child
    })

    return <>{enhancedChildren}</>
  },
)

WanakanaWrapper.displayName = "WanakanaWrapper"

export default WanakanaWrapper
