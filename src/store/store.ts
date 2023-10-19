import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./reducers"

export const store = configureStore({
  reducer: rootReducer,
})

// export interface IState {
//   projects: IProject[]
//   comments: IComment[]
//   subtasks: ISubtask[]
//   tasks: ITask[]
// }
