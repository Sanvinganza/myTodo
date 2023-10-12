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
        date={card.date}
      />
    )
  }, [])

  return (
    <div className="queue-container">
      {cards.map((task, i) => renderCard(task, i))}
      <footer>add task</footer>
    </div>
  )
}
