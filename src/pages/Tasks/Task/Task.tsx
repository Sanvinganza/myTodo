import { RefObject, createRef } from "react"
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

const CardCover: TCardCover = ({ text, ref }) => (
  <>
    <div ref={ref} className="queue-item">
      <span className="about">{text}</span>
      <footer>
        <div className="attribute-container">
          <div className="attribute">
            <img src={require("../../../images/star.png")} />
          </div>
          <div className="attribute">
            <img src={require("../../../images/message.png")} />
          </div>
          <div className="attribute">
            <img src={require("../../../images/add.png")} />
          </div>
        </div>
      </footer>
    </div>
  </>
)

export const ItemTypes = {
  CARD: "card",
}

export const Card = ({ id, text, index, moveCard, date }: ICardProps) => {
  const ref = createRef<HTMLDivElement>()
  console.log(date)
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CARD,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      }
    },
    hover(item: any, monitor) {
      if (!ref.current) {
        return
      }
      const dragIndex = item.index
      const hoverIndex = index
      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return
      }
      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect()
      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2
      // Determine mouse position
      const clientOffset = monitor.getClientOffset()
      // Get pixels to the top
      const hoverClientY = clientOffset
        ? clientOffset.y
        : 0 - hoverBoundingRect.top
      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%
      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return
      }
      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return
      }
      // Time to actually perform the action
      moveCard(dragIndex, hoverIndex)
      // Note: we're mutating the monitor item here!
      // Generally it's better to avoid mutations,
      // but it's good here for the sake of performance
      // to avoid expensive index searches.
      item.index = hoverIndex
    },
  })
  const [, drag] = useDrag({
    type: ItemTypes.CARD,
    item: () => {
      return { id, index }
    },
  })

  drag(drop(ref))

  return <CardCover ref={ref} text={text} />
}
