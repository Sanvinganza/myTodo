import React from "react"
import Modal from "react-modal"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

interface IAddModalProps {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}
Modal.setAppElement(":root")

export const AddModal = ({ isOpen, setIsOpen }: IAddModalProps) => {
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpenModal}
      onRequestClose={() => setIsOpen(false)}
      style={customStyles}
    >
      <div>I am a modal</div>
    </Modal>
  )
}
