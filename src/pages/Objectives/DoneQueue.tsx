import * as React from "react"
import { ICardInfo, Queue } from "./Queue"

export interface IDoneQueueProps {}
const queue: ICardInfo[] = [
  {
    id: 11,
    index: 11,
    date: new Date(),
    text: "11Lorem dolor sit amet consectetur, adipisicing elit. Offic",
  },
  {
    id: 12,
    index: 12,
    date: new Date(),
    text: "12Lorem ipsum doloadipisicing elit. Offic",
  },
  {
    id: 3,
    index: 3,
    date: new Date(),
    text: "13Lorem ipsum dolor sit apisicing elit. Offic",
  },
  {
    id: 14,
    index: 14,
    date: new Date(),
    text: "14amet consectetur, adipisicing elit. Offic",
  },
  {
    id: 15,
    index: 15,
    date: new Date(),
    text: "15Lorpsum dolor sit amet consectetur, adipisicing elit. Offic",
  },
]

export function DoneQueue(props: IDoneQueueProps) {
  return <Queue title="Done" queue={queue} />
}
