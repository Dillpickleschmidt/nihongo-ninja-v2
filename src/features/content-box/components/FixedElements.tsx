type FixedElementsProps = {
  children: React.ReactNode
}

export default function FixedElements({ children }: FixedElementsProps) {
  return <div className="z-50">{children}</div>
}
