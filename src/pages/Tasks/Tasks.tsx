import * as React from "react"
import "./Tasks.scss"
import { Queue } from "./Queue/Queue"

export interface ITasksProps {}

export function Tasks(props: ITasksProps) {
  return (
    <div className="tasks-container">
      {["Queue", "Development", "Done"].map(title => {
        return (
          <div key={title} className="column">
            <div className="title">{title}</div>
            <Queue />
          </div>
        )
      })}
    </div>
  )
}
