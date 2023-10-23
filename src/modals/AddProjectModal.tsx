import { useState } from "react"
import Modal from "react-modal"
import "react-calendar/dist/Calendar.css"
import { getCurrentDate } from "../helpers/getCurrentDate"

export interface IAddProjectModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function AddProjectModal({ isOpen, setIsOpen }: IAddProjectModalProps) {
  const [calendarIsOpen, setCalendarIsOpen] = useState(false)
  console.log(getCurrentDate())
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
            <div className="latest">update: {getCurrentDate()}</div>
            <div className="deadline">
              deadline:
              <span className="datepicker-toggle">
                <span className="datepicker-toggle-button"></span>
                <input type="date" className="datepicker-input" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  )
}
