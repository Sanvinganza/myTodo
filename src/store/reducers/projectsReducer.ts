import * as actionTypes from "../actions/actionTypes"
import { TProjectActions } from "../actions/projectsActions"
import { IProject } from "../types"

export interface IProjectsState {
  projects: IProject[]
}
export const initialProjectsState: IProjectsState = {
  projects: [],
}

export const projectsReducer = (
  state = initialProjectsState,
  action: TProjectActions,
) => {
  switch (action.type) {
    case actionTypes.ADD_PROJECT:
      return {
        ...state,
        projects: [...state.projects, action.payload],
      }
    case actionTypes.DELETE_PROJECT:
      return {
        ...state,
        projects: state.projects?.filter(
          (project: IProject) => project.id !== action.payload,
        ),
      }
    default:
      return state
  }
}
