import { format, formatDistance, subDays } from "date-fns"
import { FormEvent, useRef, useState } from "react"
import Modal from "react-modal"
import { useDispatch } from "react-redux"
import { v1 as uuidv1 } from "uuid"
import { addProject } from "../store/actions/projectsActions"

export interface IAddProjectModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function AddProjectModal({ isOpen, setIsOpen }: IAddProjectModalProps) {
  const [deadlineDate, setDeadlineDate] = useState(new Date().toString())
  const statusRef = useRef<HTMLSelectElement>(null)
  const discribeRef = useRef<HTMLTextAreaElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)

  const dispatch = useDispatch()
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log(deadlineDate)
    dispatch(
      addProject({
        id: uuidv1(),
        title: titleRef.current?.value,
        discribe: discribeRef.current?.value,
        status:
          statusRef.current?.value === "in progress" ? "in progress" : "done",
      }),
    )
    setIsOpen(false)
  }
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className="Modal"
      style={{ content: { height: "fit-content" } }}
      overlayClassName="Overlay"
    >
      <form>
        <div className="modal-container">
          <div className="modal-info">
            <div className="date-info">
              <div className="created">
                created: {format(new Date(), "MM.dd.yy HH:mm")}
              </div>
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
                {formatDistance(
                  subDays(new Date(deadlineDate || new Date()), 0),
                  new Date(),
                  {
                    addSuffix: true,
                  },
                )}
              </div>
            </div>
            <h1 className="title">
              <input
                required
                type="text"
                className="title-field"
                ref={titleRef}
              />
              <select className="status" ref={statusRef} required>
                <option className="in-progress">in progress</option>
                <option className="done">done</option>
              </select>
            </h1>
            <h3 className="about">
              <textarea required ref={discribeRef} />
            </h3>
            <button className="save" onClick={onSubmit}>
              SAVE
            </button>
          </div>
        </div>
      </form>
    </Modal>
  )
}
