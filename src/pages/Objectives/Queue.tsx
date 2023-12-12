import { useState } from "react"
import useMediaQuery from "../../helpers/useMediaQuery"
import { Card } from "../../components/Card"

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
          {cards.map((task, i) => (
            <Card task={task} key={i} />
          ))}
          <footer>add task</footer>
        </div>
      ) : null}
    </div>
  )
}
