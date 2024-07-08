"use client"
import { createContext, useContext, useState } from "react"

type ConjugationPracticeProps = {
  children: React.ReactNode
}

type VerbTypes = {
  verbgodan: boolean
  verbichidan: boolean
  verbirregular: boolean
}

type VerbTenses = {
  verbpresent: boolean
  verbpast: boolean
  verbte: boolean
}

type VerbAffirmativeNegative = {
  verbaffirmative: boolean
  verbnegative: boolean
}

type PlainPolite = {
  verbplain: boolean
  verbpolite: boolean
}

type AdjectiveTypes = {
  adjectivei: boolean
  adjectivena: boolean
  adjectiveirregular: boolean
}

type AdjectiveTenses = {
  adjectivepresent: boolean
  adjectivepast: boolean
  adjectiveadverb: boolean
}

type AdjectiveAffirmativeNegative = {
  adjectiveaffirmative: boolean
  adjectivenegative: boolean
}

type AdjectivePlainPolite = {
  adjectiveplain: boolean
  adjectivepolite: boolean
}

export type ConjugationPracticeContextType = {
  showFurigana: boolean
  setShowFurigana: React.Dispatch<React.SetStateAction<boolean>>
  showEmojis: boolean
  setShowEmojis: React.Dispatch<React.SetStateAction<boolean>>
  showStreak: boolean
  setShowStreak: React.Dispatch<React.SetStateAction<boolean>>
  showTranslation: boolean
  setShowTranslation: React.Dispatch<React.SetStateAction<boolean>>
  isTranslationTransparent: boolean
  setIsTranslationTransparent: React.Dispatch<React.SetStateAction<boolean>>
  showVerbOptions: boolean
  setShowVerbOptions: React.Dispatch<React.SetStateAction<boolean>>
  showVerbTypes: VerbTypes
  setShowVerbTypes: React.Dispatch<React.SetStateAction<VerbTypes>>
  showVerbTenses: VerbTenses
  setShowVerbTenses: React.Dispatch<React.SetStateAction<VerbTenses>>
  showVerbAffirmativeNegative: VerbAffirmativeNegative
  setShowVerbAffirmativeNegative: React.Dispatch<
    React.SetStateAction<VerbAffirmativeNegative>
  >
  showVerbPlainPolite: PlainPolite
  setShowVerbPlainPolite: React.Dispatch<React.SetStateAction<PlainPolite>>
  showAdjectiveOptions: boolean
  setShowAdjectiveOptions: React.Dispatch<React.SetStateAction<boolean>>
  showAdjectiveTypes: AdjectiveTypes
  setShowAdjectiveTypes: React.Dispatch<React.SetStateAction<AdjectiveTypes>>
  showAdjectiveTenses: AdjectiveTenses
  setShowAdjectiveTenses: React.Dispatch<React.SetStateAction<AdjectiveTenses>>
  showAdjectiveAffirmativeNegative: AdjectiveAffirmativeNegative
  setShowAdjectiveAffirmativeNegative: React.Dispatch<
    React.SetStateAction<AdjectiveAffirmativeNegative>
  >
  showAdjectivePlainPolite: AdjectivePlainPolite
  setShowAdjectivePlainPolite: React.Dispatch<
    React.SetStateAction<AdjectivePlainPolite>
  >
}

const ConjugationPracticeContext =
  createContext<ConjugationPracticeContextType | null>(null)

export function ConjugationPracticeContextProvider({
  children,
}: ConjugationPracticeProps) {
  const [showFurigana, setShowFurigana] = useState(true)
  const [showEmojis, setShowEmojis] = useState(true)
  const [showStreak, setShowStreak] = useState(true)
  const [showTranslation, setShowTranslation] = useState(true)
  const [isTranslationTransparent, setIsTranslationTransparent] =
    useState(false)

  const [showVerbOptions, setShowVerbOptions] = useState(true)
  const [showVerbTypes, setShowVerbTypes] = useState<VerbTypes>({
    verbgodan: true,
    verbichidan: true,
    verbirregular: true,
  })
  const [showVerbTenses, setShowVerbTenses] = useState<VerbTenses>({
    verbpresent: true,
    verbpast: true,
    verbte: true,
  })
  const [showVerbAffirmativeNegative, setShowVerbAffirmativeNegative] =
    useState<VerbAffirmativeNegative>({
      verbaffirmative: true,
      verbnegative: true,
    })
  const [showVerbPlainPolite, setShowVerbPlainPolite] = useState<PlainPolite>({
    verbplain: true,
    verbpolite: true,
  })

  const [showAdjectiveOptions, setShowAdjectiveOptions] = useState(true)
  const [showAdjectiveTypes, setShowAdjectiveTypes] = useState<AdjectiveTypes>({
    adjectivei: true,
    adjectivena: true,
    adjectiveirregular: true,
  })
  const [showAdjectiveTenses, setShowAdjectiveTenses] =
    useState<AdjectiveTenses>({
      adjectivepresent: true,
      adjectivepast: true,
      adjectiveadverb: true,
    })
  const [
    showAdjectiveAffirmativeNegative,
    setShowAdjectiveAffirmativeNegative,
  ] = useState<AdjectiveAffirmativeNegative>({
    adjectiveaffirmative: true,
    adjectivenegative: true,
  })
  const [showAdjectivePlainPolite, setShowAdjectivePlainPolite] =
    useState<AdjectivePlainPolite>({
      adjectiveplain: true,
      adjectivepolite: true,
    })

  return (
    <ConjugationPracticeContext.Provider
      value={{
        showFurigana,
        setShowFurigana,
        showEmojis,
        setShowEmojis,
        showStreak,
        setShowStreak,
        showTranslation,
        setShowTranslation,
        isTranslationTransparent,
        setIsTranslationTransparent,
        showVerbOptions,
        setShowVerbOptions,
        showVerbTypes,
        setShowVerbTypes,
        showVerbTenses,
        setShowVerbTenses,
        showVerbAffirmativeNegative,
        setShowVerbAffirmativeNegative,
        showVerbPlainPolite,
        setShowVerbPlainPolite,
        showAdjectiveOptions,
        setShowAdjectiveOptions,
        showAdjectiveTypes,
        setShowAdjectiveTypes,
        showAdjectiveTenses,
        setShowAdjectiveTenses,
        showAdjectiveAffirmativeNegative,
        setShowAdjectiveAffirmativeNegative,
        showAdjectivePlainPolite,
        setShowAdjectivePlainPolite,
      }}
    >
      {children}
    </ConjugationPracticeContext.Provider>
  )
}

export function useConjugationPracticeContext() {
  const context = useContext(ConjugationPracticeContext)
  if (!context) {
    throw new Error(
      "useConjugationPracticeContext must be used within a ConjugationPracticeContextProvider",
    )
  }
  return context
}
