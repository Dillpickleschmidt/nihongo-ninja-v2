type LayoutProps = {
  children: React.ReactNode
}

export default function layout({ children }: LayoutProps) {
  return <div className="relative overflow-hidden">{children}</div>
}
