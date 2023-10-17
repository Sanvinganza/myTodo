import * as React from "react"
import { ICardInfo, Queue } from "./Queue"

export interface IDevelopmentQueueProps {}
const queue: ICardInfo[] = [
  {
    id: 1,
    index: 1,
    date: new Date(),
    text: "1Lorem dolor sit amet consectetur, adipisicing elit. Offic",
  },
  {
    id: 2,
    index: 2,
    date: new Date(),
    text: "2Lorem ipsum doloadipisicing elit. Offic",
  },
  {
    id: 3,
    index: 3,
    date: new Date(),
    text: "3Lorem ipsum dolor sit apisicing elit. Offic",
  },
  {
    id: 4,
    index: 4,
    date: new Date(),
    text: "4amet consectetur, adipisicing elit. Offic",
  },
  {
    id: 5,
    index: 5,
    date: new Date(),
    text: "5Lorpsum dolor sit amet consectetur, adipisicing elit. Offic",
  },
]

export function DevelopmentQueue(props: IDevelopmentQueueProps) {
  return <Queue queue={queue} title="Development" />
}
