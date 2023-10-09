export interface IComment {
  id: number
  text: string
  children?: IComment[]
  date: string
}

import * as React from "react"

export interface ICommentProps {}

export function Comment(props: ICommentProps) {
  return <div></div>
}
