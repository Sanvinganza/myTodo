import update from "immutability-helper"
import { useCallback, useState } from "react"
import useMediaQuery from "../../helpers/useMediaQuery"
import { Objective } from "./Objective"

export interface ICardInfo {
  id: number
  date: Date
  index: number
  text: string
}

export interface IQueueProps {
  queue: ICardInfo[]
  title: string
}

export function Queue({ queue = [], title }: IQueueProps) {
  const [cards, setCards] = useState(queue)
  const isMobile = useMediaQuery("(max-width: 480px)")
  const [showQueue, setShowQueue] = useState(!isMobile)

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
      <Objective
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
    <div key={title} className="column">
      <div className="title">
        <div className="text">{title}</div>
        {isMobile ? (
          <div className="dropdown" onClick={() => setShowQueue(!showQueue)}>
            <img
              src={
                showQueue
                  ? require("../../images/dropup.png")
                  : require("../../images/dropdown.png")
              }
              alt=""
              className="icon dropdown"
            />
          </div>
        ) : null}
      </div>
      {showQueue ? (
        <div className="queue-container">
          {cards.map((task, i) => renderCard(task, i))}
          <footer>add task</footer>
        </div>
      ) : null}
    </div>
  )
}
