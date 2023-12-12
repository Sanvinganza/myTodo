import { RefObject, forwardRef, useState } from "react"
import "./components.scss"
import { CommentsModal } from "../modals/CommentsModal"
import { ObjectiveModal } from "../modals/ObjectiveModal"
import { ICardInfo } from "../pages/Objectives/Queue"

export interface ICardCoverProps {
  task: ICardInfo
}

export type TCardCover = ({ task }: ICardCoverProps) => JSX.Element

export const Card: TCardCover = ({ task }) => {
  const [starModalIsOpen, setStarModalIsOpen] = useState(false)
  const [messageModalIsOpen, setMessageModalIsOpen] = useState(false)

  return (
    <>
      <div className="queue-item">
        <div className="container">
          <div className="title">{"title"}</div>
          <figure className="rating-container">
            <img src={require("../images/star.png")} />
            <figcaption>8</figcaption>
          </figure>
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

      <ObjectiveModal isOpen={starModalIsOpen} setIsOpen={setStarModalIsOpen} />
      <CommentsModal
        isOpen={messageModalIsOpen}
        setIsOpen={setMessageModalIsOpen}
      />
    </>
  )
}
