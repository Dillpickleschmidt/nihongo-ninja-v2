"use client"
import { useConjugationPracticeContext } from "@/features/conjugation-practice/context/ConjugationPracticeContext"
import EmojiToggle from "./toggles/EmojiToggle"
import FuriganaToggle from "./toggles/FuriganaToggle"
import StreakToggle from "./toggles/StreakToggle"
import TranslationToggle from "./toggles/TranslationToggle"
import VerbToggle from "./toggles/VerbToggle"
import AdjectiveToggle from "./toggles/AdjectiveToggle"
import GenericToggle from "./toggles/GenericToggle"

export default function SettingsMenu() {
  const { showVerbOptions, showAdjectiveOptions } =
    useConjugationPracticeContext()

  return (
    <div className="w-full space-y-3">
      <h1 className="text-center text-3xl font-semibold">Settings</h1>
      <div className="!mt-6 w-full space-y-3 border-b border-card-foreground pb-3 pl-1">
        <FuriganaToggle />
        <TranslationToggle />
        <EmojiToggle />
        <StreakToggle />
      </div>
      <div>
        <VerbToggle />
        {showVerbOptions && (
          <div className="ml-5 mt-3">
            <div className="space-y-3 border-b border-card-foreground pb-3 pl-1">
              <GenericToggle
                optionCategory="showVerbTypes"
                optionType="verbgodan"
                label="Godan verbs"
              />
              <GenericToggle
                optionCategory="showVerbTypes"
                optionType="verbichidan"
                label="Ichidan verbs"
              />
              <GenericToggle
                optionCategory="showVerbTypes"
                optionType="verbirregular"
                label="Irregular verbs"
              />
            </div>
            <div className="space-y-3 border-b border-card-foreground py-3 pl-1">
              <GenericToggle
                optionCategory="showVerbTenses"
                optionType="verbpresent"
                label="Present tense"
              />
              <GenericToggle
                optionCategory="showVerbTenses"
                optionType="verbpast"
                label="Past tense"
              />
              <GenericToggle
                optionCategory="showVerbTenses"
                optionType="verbte"
                label="Te-form"
              />
            </div>
            <div className="space-y-3 border-b border-card-foreground py-3 pl-1">
              <GenericToggle
                optionCategory="showVerbAffirmativeNegative"
                optionType="verbaffirmative"
                label="Affirmative"
              />
              <GenericToggle
                optionCategory="showVerbAffirmativeNegative"
                optionType="verbnegative"
                label="Negative"
              />
            </div>
            <div className="space-y-3 border-b border-card-foreground py-3 pl-1">
              <GenericToggle
                optionCategory="showVerbPlainPolite"
                optionType="verbplain"
                label="Plain"
              />
              <GenericToggle
                optionCategory="showVerbPlainPolite"
                optionType="verbpolite"
                label="Polite"
              />
            </div>
          </div>
        )}
      </div>

      <div>
        <AdjectiveToggle />
        {showAdjectiveOptions && (
          <div className="ml-5 mt-3">
            <div className="space-y-3 border-b border-card-foreground pb-3 pl-1">
              <GenericToggle
                optionCategory="showAdjectiveTypes"
                optionType="adjectivei"
                label="い-adjectives"
              />
              <GenericToggle
                optionCategory="showAdjectiveTypes"
                optionType="adjectivena"
                label="な-adjectives"
              />
              <GenericToggle
                optionCategory="showAdjectiveTypes"
                optionType="adjectiveirregular"
                label="Irregular adjectives"
              />
            </div>
            <div className="space-y-3 border-b border-card-foreground py-3 pl-1">
              <GenericToggle
                optionCategory="showAdjectiveTenses"
                optionType="adjectivepresent"
                label="Present tense"
              />
              <GenericToggle
                optionCategory="showAdjectiveTenses"
                optionType="adjectivepast"
                label="Past tense"
              />
              <GenericToggle
                optionCategory="showAdjectiveTenses"
                optionType="adjectiveadverb"
                label="Adverb"
              />
            </div>
            <div className="space-y-3 border-b border-card-foreground py-3 pl-1">
              <GenericToggle
                optionCategory="showAdjectiveAffirmativeNegative"
                optionType="adjectiveaffirmative"
                label="Affirmative"
              />
              <GenericToggle
                optionCategory="showAdjectiveAffirmativeNegative"
                optionType="adjectivenegative"
                label="Negative"
              />
            </div>
            <div className="space-y-3 border-b border-card-foreground py-3 pl-1">
              <GenericToggle
                optionCategory="showAdjectivePlainPolite"
                optionType="adjectiveplain"
                label="Plain"
              />
              <GenericToggle
                optionCategory="showAdjectivePlainPolite"
                optionType="adjectivepolite"
                label="Polite"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
