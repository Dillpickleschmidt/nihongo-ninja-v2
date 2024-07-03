type FixedElementsProps = {
  children: React.ReactNode
}

export default function FixedElements({ children }: FixedElementsProps) {
  return <div className="fixed left-0 top-0 z-50">{children}</div>
}
