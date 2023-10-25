import * as actionTypes from "../actions/actionTypes"
import { TProjectActions } from "../actions/projectsActions"
import { IProject } from "../types"

export type TProjectsState = Array<IProject>
export const initialProjectsState: TProjectsState = []

export default (state = initialProjectsState, action: TProjectActions) => {
  switch (action.type) {
    case actionTypes.ADD_PROJECT:
      return [...state, action.payload]
    case actionTypes.DELETE_PROJECT:
      return [
        ...state.filter((project: IProject) => project.id !== action.payload),
      ]
    case actionTypes.EDIT_PROJECT:
      return [
        ...state.filter(
          (project: IProject) => project.id !== action.payload.id,
        ),
        { ...action.payload },
      ]
    default:
      return state
  }
}
