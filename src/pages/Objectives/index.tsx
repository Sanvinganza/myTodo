import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { DevelopmentQueue } from "./DevelopmentQueue"
import { DoneQueue } from "./DoneQueue"
import { InProgressQueeu } from "./InProgressQueeu"

export function Objectives() {
  return (
    <div className="tasks-container">
      <DndProvider backend={HTML5Backend}>
        <DevelopmentQueue />
        <InProgressQueeu />
        <DoneQueue />
      </DndProvider>
    </div>
  )
}
