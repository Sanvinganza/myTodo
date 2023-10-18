import React from "react"
import Modal from "react-modal"
import { Comment } from "../components/Comment"

interface IMessageModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
Modal.setAppElement(":root")

const comments = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, tenetur.",
  "Accusamus qui consequuntur ex nemo ipsam est quod voluptatibus reiciendis!",
  "Iste ea debitis ipsum laboriosam animi nemo sapiente voluptatum nulla?",
  "Neque reiciendis aliquid, amet saepe architecto distinctio ad quos deserunt.",
  "Nulla minima officia, corrupti ex voluptatem harum doloremque consequuntur perspiciatis.",
]

export const CommentsModal = ({ isOpen, setIsOpen }: IMessageModalProps) => {
  function afterOpenModal() {
    // alert("isOpen")
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={() => setIsOpen(false)}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="comments-container">
        <div className="comments-container-inner">
          {comments.map(text => (
            <Comment
              text={text}
              child={<Comment text={text} child={<Comment text={text} />} />}
            ></Comment>
          ))}
        </div>
        <form>
          <input
            type="text"
            content="add a Comment"
            className="comment-field"
          />
        </form>
      </div>
    </Modal>
  )
}
