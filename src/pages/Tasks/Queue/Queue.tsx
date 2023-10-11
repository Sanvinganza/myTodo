import update from "immutability-helper"
import { useCallback, useState } from "react"
import "./Queue.scss"
import { Card } from "../Task/Task"

export interface ICardInfo {
  id: number
  date: Date
  index: number
  text: string
}

const queue: ICardInfo[] = [
  {
    id: 1,
    index: 21,
    date: new Date(),
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Offic",
  },
  {
    id: 2,
    index: 22,
    date: new Date(),
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Offic",
  },
  {
    id: 3,
    index: 23,
    date: new Date(),
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Offic",
  },
  {
    id: 14,
    index: 24,
    date: new Date(),
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Offic",
  },
  {
    id: 15,
    index: 25,
    date: new Date(),
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Offic",
  },
]

export function Queue() {
  const [cards, setCards] = useState(queue)

  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards(prevCards =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      }),
    )
  }, [])

  const renderCard = useCallback((card: ICardInfo, index: number) => {
    return (
      <Card
        key={card.id}
        index={index}
        id={card.id}
        text={card.text}
        moveCard={moveCard}
      />
    )
  }, [])

  return (
    <div className="queue-container">
      {cards.map(
        (task, i) => renderCard(task, i),
        // task.text,
      )}
      <footer>add task</footer>
    </div>
  )
}
