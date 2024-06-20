import data from "../dakuten-handakuten.json"
import PracticeModePage from "@/features/practice-mode/PracticeModePage"

export default async function page() {
  return <PracticeModePage data={data} deckName="Dakuten & Handakuten" />
}
