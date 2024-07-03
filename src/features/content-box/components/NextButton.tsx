import { Button } from "@/components/ui/button"

type NextButtonProps = {
  nextButton?: React.ReactNode
  nextPageLink: string
}

export default function NextButton({
  nextButton,
  nextPageLink,
}: NextButtonProps) {
  const defaultButton = (
    <div className="mx-12 flex flex-row justify-end pb-16 pt-24">
      <Button link={nextPageLink}>Next Lesson {"->"}</Button>
    </div>
  )

  if (nextButton) {
    return nextButton
  } else {
    return defaultButton
  }
}
