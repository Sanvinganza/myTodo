import { RefObject, forwardRef, useState } from "react"
import "./components.scss"
import { CommentsModal } from "../modals/CommentsModal"
import { ObjectiveModal } from "../modals/ObjectiveModal"

export interface ICardCoverProps {
  ref: RefObject<HTMLDivElement>
  title: string
}

export type TCardCover = ({ ref, title }: ICardCoverProps) => JSX.Element
export const Card = forwardRef<HTMLDivElement, ICardCoverProps>(
  ({ title }, ref) => {
    const [starModalIsOpen, setStarModalIsOpen] = useState(false)
    const [messageModalIsOpen, setMessageModalIsOpen] = useState(false)

    return (
      <>
        <div ref={ref} className="queue-item">
          <div className="container">
            <div className="title">{title}</div>
            {/* <figure className="rating-container">
              <img src={require("../images/star.png")} />
              <figcaption>8</figcaption>
            </figure> */}
          </div>

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
