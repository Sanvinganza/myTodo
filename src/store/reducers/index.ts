import { combineReducers } from "redux"
import projectsReducer from "./projectsReducer"

export const rootReducer = combineReducers({
  projects: projectsReducer,
})
