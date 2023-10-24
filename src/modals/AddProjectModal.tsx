import { formatDistance, subDays } from "date-fns"
import { useState } from "react"
import Modal from "react-modal"
import "react-calendar/dist/Calendar.css"
import { getCurrentDate } from "../helpers/getCurrentDate"

export interface IAddProjectModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function AddProjectModal({ isOpen, setIsOpen }: IAddProjectModalProps) {
  const [deadlineDate, setDeadlineDate] = useState(new Date().toString())

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className="Modal"
      overlayClassName="Overlay"
    >
      <div className="modal-container">
        <div className="modal-info">
          <div className="date-info">
            <div className="created">created: {getCurrentDate()}</div>
            <div className="latest">
              <span className="datepicker-toggle">
                <span className="datepicker-toggle-button"></span>
                <input
                  type="datetime-local"
                  className="datepicker-input"
                  value={deadlineDate}
                  onChange={e => setDeadlineDate(e.target.value)}
                />
              </span>
            </div>
            <div className="deadline">
              deadline:{" "}
              {formatDistance(subDays(new Date(deadlineDate), 0), new Date(), {
                addSuffix: true,
              })}
            </div>
          </div>
          <h1 className="title">
            <input type="text" className="title-field" />
            <select className="status">
              <option className="in-progress">in progress</option>
              <option className="done">done</option>
            </select>
          </h1>
          <h3 className="about">
            <textarea />
          </h3>
        </div>
      </div>
    </Modal>
  )
}
