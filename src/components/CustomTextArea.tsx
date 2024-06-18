import { cn } from "@/utils/cn"
import { Textarea, TextareaProps } from "./ui/textarea"

type CustomTextAreaProps = TextareaProps & {
  backgroundColor?: string
  foregroundColor?: string
  spacing?: number
}

export default function CustomTextArea({
  backgroundColor = "hsl(var(--card))",
  foregroundColor = "hsl(var(--card-foreground))",
  spacing = 10,
  className,
  ...props
}: CustomTextAreaProps) {
  // Define dynamic styles based on props
  const noteStyle = {
    backgroundAttachment: "local",
    backgroundImage: `
      linear-gradient(to right, ${backgroundColor} ${spacing}px, transparent ${spacing}px),
      linear-gradient(to left, ${backgroundColor} ${spacing}px, transparent ${spacing}px),
      repeating-linear-gradient(${backgroundColor}, ${backgroundColor} ${spacing * 3}px, ${foregroundColor} ${spacing * 3}px, ${foregroundColor} ${spacing * 3 + 1}px, ${backgroundColor} ${spacing * 3 + 1}px)
    `,
    lineHeight: `${spacing * 3 + 1}px`,
    padding: "8px 10px",
  }

  return (
    <Textarea
      style={noteStyle}
      className={cn("!px-6 text-lg", className)}
      {...props}
    >
      {/* Content of the note */}
    </Textarea>
  )
}
