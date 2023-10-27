import { combineReducers } from "redux"
import commentsReducer from "./commentsReducer"
import projectsReducer from "./projectsReducer"
import subtasksReducer from "./subtasksReducer"
import tasksReducer from "./tasksReducer"

export const rootReducer = combineReducers({
  projects: projectsReducer,
  tasks: tasksReducer,
  subtasks: subtasksReducer,
  comments: commentsReducer,
})
