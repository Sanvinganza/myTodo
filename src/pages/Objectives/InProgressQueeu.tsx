import * as React from "react"
import { ICardInfo, Queue } from "./Queue"

export interface IInProgressQueeuProps {}
const queue: ICardInfo[] = [
  {
    id: 6,
    index: 6,
    date: new Date(),
    text: "6Lorem dolor sit amet consectetur, adipisicing elit. Offic",
  },
  {
    id: 7,
    index: 7,
    date: new Date(),
    text: "7Lorem ipsum doloadipisicing elit. Offic",
  },
  {
    id: 8,
    index: 8,
    date: new Date(),
    text: "8Lorem ipsum dolor sit apisicing elit. Offic",
  },
  {
    id: 9,
    index: 9,
    date: new Date(),
    text: "9amet consectetur, adipisicing elit. Offic",
  },
  {
    id: 10,
    index: 10,
    date: new Date(),
    text: "10Lorpsum dolor sit amet consectetur, adipisicing elit. Offic",
  },
]
export function InProgressQueeu(props: IInProgressQueeuProps) {
  return <Queue title="Queue" queue={queue} />
}
