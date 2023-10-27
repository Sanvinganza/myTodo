import { ITask } from "../types"
import * as actionTypes from "./actionTypes"

export type TTaskActions = IAddTask | IDeleteTask | IEditTask

export const addTask = (payload: ITask) => ({
  type: actionTypes.ADD_TASK,
  payload,
})

export const deleteTask: (payload: string) => IDeleteTask = (
  payload: string,
) => ({
  type: actionTypes.DELETE_TASK,
  payload,
})

export const editTask: (payload: ITask) => IEditTask = (payload: ITask) => ({
  type: actionTypes.EDIT_TASK,
  payload,
})

export interface IEditTask {
  type: typeof actionTypes.EDIT_TASK
  payload: ITask
}

export interface IAddTask {
  type: typeof actionTypes.ADD_TASK
  payload: ITask
}

export interface IDeleteTask {
  type: typeof actionTypes.DELETE_TASK
  payload: string
}
