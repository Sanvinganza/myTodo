import { V1Options } from "uuid"
import { IProject } from "../types"
import * as actionTypes from "./actionTypes"

export type TProjectActions = IAddProject | IDeleteProject

export const addProject = (payload: IProject) => ({
  type: actionTypes.ADD_PROJECT,
  payload,
})

export const deleteProject = (payload: V1Options) => ({
  type: actionTypes.DELETE_PROJECT,
  payload,
})
export interface IAddProject {
  type: typeof actionTypes.ADD_PROJECT
  payload: IProject
}

export interface IDeleteProject {
  type: typeof actionTypes.DELETE_PROJECT
  payload: IProject
}
