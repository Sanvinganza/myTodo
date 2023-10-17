import { useState } from "react"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"
import { Queue } from "./Queue"

export function Objectives() {
  const [showQueue, setShowQueue] = useState(true)

  return (
    <div className="tasks-container">
      {["Queue", "Development", "Done"].map(title => {
        return (
          <div key={title} className="column">
            <div className="title">
              <div className="text">{title}</div>
              <div
                className="dropdown"
                onClick={() => setShowQueue(!showQueue)}
              >
                <img
                  src={
                    showQueue
                      ? require("../../images/dropup.png")
                      : require("../../images/dropdown.png")
                  }
                  alt=""
                  className="icon dropdown"
                />
              </div>
            </div>
            <DndProvider backend={HTML5Backend}>
              {showQueue ? <Queue /> : null}
            </DndProvider>
          </div>
        )
      })}
    </div>
  )
}
