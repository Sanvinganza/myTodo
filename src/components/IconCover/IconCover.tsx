import * as React from "react"
import "./IconCover.scss"

export interface IIconCoverProps {
  url: string
  size: "small" | "middle" | "large"
}

export function IconCover({ url, size }: IIconCoverProps) {
  return (
    <div className="icon">
      <img src={url} />
    </div>
  )
}
