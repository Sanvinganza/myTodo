import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { getProjectById } from "../../store/selectors"
import { DevelopmentQueue } from "./DevelopmentQueue"
import { DoneQueue } from "./DoneQueue"
import { InProgressQueeu } from "./InProgressQueeu"

export function Objectives() {
  const { id } = useParams()
  const project = useSelector(getProjectById(id))

  return (
    <div className="tasks-container">
      <header className="container">
        <div className="title">
          <div className="title-content">{project?.title}</div>
          {/* <img
            src={require("../../images/project.png")}
            alt=""
            className="edit"
          /> */}
        </div>
        <div className="discribe">{project?.discribe}</div>
      </header>
      <div className="container-inner">
        <DndProvider backend={HTML5Backend}>
          <DevelopmentQueue />
          <InProgressQueeu />
          <DoneQueue />
        </DndProvider>
      </div>
    </div>
  )
}
