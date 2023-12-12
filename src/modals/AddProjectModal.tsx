import { format } from "date-fns"
import { FormEvent, useRef, useState } from "react"
import Modal from "react-modal"
import { useDispatch } from "react-redux"
import { v1 as uuidv1 } from "uuid"
import { addProject } from "../store/actions/projectActions"

export interface IAddProjectModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function AddProjectModal({ isOpen, setIsOpen }: IAddProjectModalProps) {
  const statusRef = useRef<HTMLSelectElement>(null)
  const discribeRef = useRef<HTMLTextAreaElement>(null)
  const titleRef = useRef<HTMLInputElement>(null)
  const createAt = format(new Date(), "MM.dd.yy HH:mm")

  const dispatch = useDispatch()
  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    dispatch(
      addProject({
        id: uuidv1(),
        title: titleRef.current?.value,
        discribe: discribeRef.current?.value,
        status:
          statusRef.current?.value === "in progress" ? "in progress" : "done",
        createAt: createAt,
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
              <div className="created">created: {createAt}</div>
              <div className="latest"></div>
            </div>
            <h1 className="title">
              <label htmlFor="title">Title :</label>
              <input
                name="title"
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
              <label htmlFor="textarea">ABOUT</label>
              <textarea name="textarea" required ref={discribeRef} />
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
