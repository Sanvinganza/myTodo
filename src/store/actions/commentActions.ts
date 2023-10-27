import { IComment } from "../types"
import * as actionTypes from "./actionTypes"

export type TCommentActions = IAddComment | IDeleteComment | IEditComment

export const addComment = (payload: IComment) => ({
  type: actionTypes.ADD_COMMENT,
  payload,
})

export const deleteComment: (payload: string) => IDeleteComment = (
  payload: string,
) => ({
  type: actionTypes.DELETE_COMMENT,
  payload,
})

export const editComment: (payload: IComment) => IEditComment = (
  payload: IComment,
) => ({
  type: actionTypes.EDIT_COMMENT,
  payload,
})

export interface IEditComment {
  type: typeof actionTypes.EDIT_COMMENT
  payload: IComment
}

export interface IAddComment {
  type: typeof actionTypes.ADD_COMMENT
  payload: IComment
}

export interface IDeleteComment {
  type: typeof actionTypes.DELETE_COMMENT
  payload: string
}
