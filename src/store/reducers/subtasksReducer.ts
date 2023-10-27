import * as actionTypes from "../actions/actionTypes"
import { TSubtaskActions } from "../actions/subtaskActions"
import { ISubtask } from "../types"

export type TSubtasksState = Array<ISubtask>
export const initialSubtasksState: TSubtasksState = []

export default (state = initialSubtasksState, action: TSubtaskActions) => {
  switch (action.type) {
    case actionTypes.ADD_SUBTASK:
      return [...state, action.payload]
    case actionTypes.DELETE_SUBTASK:
      return [
        ...state.filter((project: ISubtask) => project.id !== action.payload),
      ]
    case actionTypes.EDIT_SUBTASK:
      return [
        ...state.filter(
          (project: ISubtask) => project.id !== action.payload.id,
        ),
        { ...action.payload },
      ]
    default:
      return state
  }
}
