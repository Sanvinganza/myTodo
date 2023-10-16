import { useRef } from "react"
import { useDrop, useDrag } from "react-dnd"
import { Card } from "../../components/Card"

interface IObjectiveProps {
  date?: Date
  text: string
  id: number
  index: number
  moveCard: (k: number, t: number) => void
}

export const Objective = ({ id, text, index, moveCard }: IObjectiveProps) => {
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

  return <Card ref={ref} text={text} />
}
