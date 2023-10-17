import { DevelopmentQueue } from "./DevelopmentQueue"
import { DoneQueue } from "./DoneQueue"
import { InProgressQueeu } from "./InProgressQueeu"

export function Objectives() {
  return (
    <div className="tasks-container">
      <DevelopmentQueue />
      <InProgressQueeu />
      <DoneQueue />
    </div>
  )
}
