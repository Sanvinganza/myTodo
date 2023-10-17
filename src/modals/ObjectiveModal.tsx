import React from "react"
import Modal from "react-modal"
import { Message } from "../components/Message"

interface IStarModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const ObjectiveModal = ({ isOpen, setIsOpen }: IStarModalProps) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.`
  }
  Modal.setAppElement(":root")
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={() => setIsOpen(false)}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-container">
        <div className="modal-info">
          <div className="date-info">
            <div className="created">created: 17.11.22 16:00</div>
            <div className="latest">update: 12.04.23 12:00</div>
            <div className="deadline">deadline: 11.02.23 11:00</div>
          </div>
          <h1 className="title">
            <div className="text">Title</div>
            <div className="status">in progress</div>
          </h1>
          <h3 className="about">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam
            similique assumenda quisquam, ipsa reprehenderit repellat eum
            reiciendis temporibus! Maxime, perferendis.
          </h3>
          <h2>Subtasks</h2>
          {[1, 2, 3, 4].map(subtasks => {
            return (
              <div className="subtask-container">
                <div className="about">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Ratione?
                </div>
                <div className="created">13.12.23 15:00</div>
                <input type="checkbox" className="status" />
              </div>
            )
          })}
        </div>
        <div className="modal-comments" hidden>
          <div className="chat">
            {[
              { message: "Lorem ipsum dolor sit amet.", date: new Date() },
              { message: "Lorem, ipsum.", date: new Date() },
              {
                message: "Lorem ipsum dolor sit amet consectetur.",
                date: new Date(),
              },
            ].map(({ message, date }) => (
              <Message text={message} date={date} key={message} />
            ))}
            <input type="text" />
          </div>
        </div>
      </div>
    </Modal>
  )
}
