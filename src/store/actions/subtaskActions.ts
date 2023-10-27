import { ISubtask } from "../types"
import * as actionTypes from "./actionTypes"

export type TSubtaskActions = IAddSubtask | IDeleteSubtask | IEditSubtask

export const addSubtask = (payload: ISubtask) => ({
  type: actionTypes.ADD_SUBTASK,
  payload,
})

export const deleteSubtask: (payload: string) => IDeleteSubtask = (
  payload: string,
) => ({
  type: actionTypes.DELETE_SUBTASK,
  payload,
})

export const editSubtask: (payload: ISubtask) => IEditSubtask = (
  payload: ISubtask,
) => ({
  type: actionTypes.EDIT_SUBTASK,
  payload,
})

export interface IEditSubtask {
  type: typeof actionTypes.EDIT_SUBTASK
  payload: ISubtask
}

export interface IAddSubtask {
  type: typeof actionTypes.ADD_SUBTASK
  payload: ISubtask
}

export interface IDeleteSubtask {
  type: typeof actionTypes.DELETE_SUBTASK
  payload: string
}
