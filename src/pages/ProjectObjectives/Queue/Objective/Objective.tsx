import { RefObject, forwardRef, useRef } from "react"
import { useDrop, useDrag } from "react-dnd"

interface ICardProps {
  date?: Date
  text: string
  id: number
  index: number
  moveCard: (k: number, t: number) => void
}

export interface ICardCoverProps {
  text: string
  ref: RefObject<HTMLDivElement>
}

export type TCardCover = ({ text, ref }: ICardCoverProps) => JSX.Element

const CardCover = forwardRef<HTMLDivElement, ICardCoverProps>(
  ({ text }, ref) => (
    <>
      <div ref={ref} className="queue-item">
        <span className="about">{text}</span>
        <footer>
          <div className="attribute-container">
            <div className="attribute">
              <img src={require("../../../../images/star.png")} />
            </div>
            <div className="attribute">
              <img src={require("../../../../images/message.png")} />
            </div>
            <div className="attribute">
              <img src={require("../../../../images/add.png")} />
            </div>
          </div>
        </footer>
      </div>
    </>
  ),
)

export const Card = ({ id, text, index, moveCard }: ICardProps) => {
  const ref = useRef(null)

  const [, drop] = useDrop({
    accept: "card",
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    hover(item: any) {
      if (!ref.current) {
        return
      }

      const dragIndex = item.index
      const hoverIndex = index

      if (dragIndex === hoverIndex) {
        return
      }

      moveCard(dragIndex, hoverIndex)

      item.index = hoverIndex
    },
  })

  const [, drag] = useDrag({
    type: "card",
    item: () => {
      return { id, index }
    },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  })

  drag(drop(ref))

  return <CardCover ref={ref} text={text} />
}
