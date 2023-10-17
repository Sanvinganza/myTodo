import { RefObject, forwardRef, useState } from "react"
import "./components.scss"
import { CommentsModal } from "../modals/CommentsModal"
import { ObjectiveModal } from "../modals/ObjectiveModal"

export interface ICardCoverProps {
  text: string
  ref: RefObject<HTMLDivElement>
}

export type TCardCover = ({ text, ref }: ICardCoverProps) => JSX.Element
export const Card = forwardRef<HTMLDivElement, ICardCoverProps>(
  ({ text }, ref) => {
    const [starModalIsOpen, setStarModalIsOpen] = useState(false)
    const [messageModalIsOpen, setMessageModalIsOpen] = useState(false)

    return (
      <>
        <div ref={ref} className="queue-item">
          <span className="about">{text}</span>
          <footer>
            <div className="attribute-container">
              <img
                src={require("../images/project.png")}
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
            </div>
          </footer>
        </div>

        <ObjectiveModal
          isOpen={starModalIsOpen}
          setIsOpen={setStarModalIsOpen}
        />
        <CommentsModal
          isOpen={messageModalIsOpen}
          setIsOpen={setMessageModalIsOpen}
        />
      </>
    )
  },
)
