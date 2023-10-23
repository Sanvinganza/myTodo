import * as React from "react"
import Modal from "react-modal"

export interface IAddProjectModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export function AddProjectModal({ isOpen, setIsOpen }: IAddProjectModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => setIsOpen(false)}
      className="Modal"
      overlayClassName="Overlay"
    >
      i am modal
    </Modal>
  )
}
