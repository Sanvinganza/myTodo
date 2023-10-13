import * as React from "react"

export interface IIconCoverProps {
  url: string
  size: "small" | "middle" | "large"
}

export function Icon({ url, size }: IIconCoverProps) {
  return (
    <div className="icon">
      <img src={url} />
    </div>
  )
}
