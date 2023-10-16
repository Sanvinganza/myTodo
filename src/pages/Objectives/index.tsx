import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Queue } from "./Queue"

export function Objectives() {
  return (
    <div className="tasks-container">
      {["Queue", "Development", "Done"].map(title => {
        return (
          <div key={title} className="column">
            <div className="title">{title}</div>
            <DndProvider backend={HTML5Backend}>
              <Queue />
            </DndProvider>
          </div>
        )
      })}
    </div>
  )
}