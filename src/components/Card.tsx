import { RefObject, forwardRef, useState } from "react"
import "./components.scss"
import { AddModal } from "../modals/AddModal"
import { MessageModal } from "../modals/MessageModal"
import { StarModal } from "../modals/StarModal"

export interface ICardCoverProps {
  text: string
  ref: RefObject<HTMLDivElement>
}

export type TCardCover = ({ text, ref }: ICardCoverProps) => JSX.Element
export const Card = forwardRef<HTMLDivElement, ICardCoverProps>(
  ({ text }, ref) => {
    const [starModalIsOpen, setStarModalIsOpen] = useState(false)
    const [addModalIsOpen, setAddModalIsOpen] = useState(false)
    const [messageModalIsOpen, setMessageModalIsOpen] = useState(false)

    return (
      <>
        <div ref={ref} className="queue-item">
          <span className="about">{text}</span>
          <footer>
            <div className="attribute-container">
              <img
                src={require("../images/star.png")}
                className="icon"
                onClick={() => {
                  setStarModalIsOpen(true)
                }}
              />
              <img
                src={require("../images/message.png")}
                className="icon"
                onClick={() => {
                  setMessageModalIsOpen(true)
                }}
              />
              <img
                src={require("../images/add.png")}
                className="icon"
                onClick={() => {
                  setAddModalIsOpen(true)
                }}
              />
            </div>
          </footer>
        </div>
        <StarModal isOpen={starModalIsOpen} setIsOpen={setStarModalIsOpen} />
        <MessageModal
          isOpen={messageModalIsOpen}
          setIsOpen={setMessageModalIsOpen}
        />
        <AddModal isOpen={addModalIsOpen} setIsOpen={setAddModalIsOpen} />
      </>
    )
  },
)
