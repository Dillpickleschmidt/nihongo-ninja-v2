import React from "react"

type LayoutProps = {
  children: React.ReactNode
}

export default function ({ children }: LayoutProps) {
  return <div>{children}</div>
}
