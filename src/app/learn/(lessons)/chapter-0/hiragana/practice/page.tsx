import data from "../hiragana.json"
import PracticeModePage from "@/features/practice-mode/PracticeModePage"

export default async function page() {
  return <PracticeModePage data={data} deckName="Hiragana" />
}
