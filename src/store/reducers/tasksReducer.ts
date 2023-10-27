import * as actionTypes from "../actions/actionTypes"
import { TTaskActions } from "../actions/taskActions"
import { ITask } from "../types"

export type TTasksState = Array<ITask>
export const initialTasksState: TTasksState = []

export default (state = initialTasksState, action: TTaskActions) => {
  switch (action.type) {
    case actionTypes.ADD_TASK:
      return [...state, action.payload]
    case actionTypes.DELETE_TASK:
      return [
        ...state.filter((project: ITask) => project.id !== action.payload),
      ]
    case actionTypes.EDIT_TASK:
      return [
        ...state.filter((project: ITask) => project.id !== action.payload.id),
        { ...action.payload },
      ]
    default:
      return state
  }
}
