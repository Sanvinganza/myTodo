import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./reducers"
import { IComment, IProject, ISubtask, ITask } from "./types"

export const store = configureStore({
  reducer: rootReducer,
})

export interface IState {
  projects: IProject[]
  comments: IComment[]
  subtasks: ISubtask[]
  tasks: ITask[]
}
