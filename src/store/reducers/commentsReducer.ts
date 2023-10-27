import * as actionTypes from "../actions/actionTypes"
import { TCommentActions } from "../actions/commentActions"
import { IComment } from "../types"

export type TCommentsState = Array<IComment>
export const initialCommentsState: TCommentsState = []

export default (state = initialCommentsState, action: TCommentActions) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      return [...state, action.payload]
    case actionTypes.DELETE_COMMENT:
      return [
        ...state.filter((project: IComment) => project.id !== action.payload),
      ]
    case actionTypes.EDIT_COMMENT:
      return [
        ...state.filter(
          (project: IComment) => project.id !== action.payload.id,
        ),
        { ...action.payload },
      ]
    default:
      return state
  }
}
