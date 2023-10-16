import * as React from "react"

export interface IMessageProps {
  text: string
  date: Date
}

export function Message({ text, date }: IMessageProps) {
  return (
    <div className="message-container">
      <span className="message-text">{text}</span>
      <div className="date">{date.getDate()}</div>
    </div>
  )
}
