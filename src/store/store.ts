import { configureStore } from "@reduxjs/toolkit"
import { rootReducer } from "./reducers"
import { IComment, IProject, ISubtask, ITask } from "./types"

function saveToLocalStorage(state: any) {
  try {
    const serialisedState = JSON.stringify(state)
    localStorage.setItem("persistantState", serialisedState)
  } catch (e) {
    console.warn(e)
  }
}

function loadFromLocalStorage() {
  try {
    const serialisedState = localStorage.getItem("persistantState")
    if (serialisedState === null) return undefined
    return JSON.parse(serialisedState)
  } catch (e) {
    console.warn(e)
    return undefined
  }
}

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: loadFromLocalStorage(),
})

store.subscribe(() => saveToLocalStorage(store.getState()))

export interface IState {
  projects: IProject[]
  comments: IComment[]
  subtasks: ISubtask[]
  tasks: ITask[]
}
