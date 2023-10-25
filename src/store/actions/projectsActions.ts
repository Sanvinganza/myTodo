import { IProject } from "../types"
import * as actionTypes from "./actionTypes"

export type TProjectActions = IAddProject | IDeleteProject | IEditProject

export const addProject: (payload: IProject) => IAddProject = (
  payload: IProject,
) => ({
  type: actionTypes.ADD_PROJECT,
  payload,
})

export const deleteProject: (payload: string) => IDeleteProject = (
  payload: string,
) => ({
  type: actionTypes.DELETE_PROJECT,
  payload,
})

export const editProject: (payload: IProject) => IEditProject = (
  payload: IProject,
) => ({
  type: actionTypes.EDIT_PROJECT,
  payload,
})

export interface IEditProject {
  type: typeof actionTypes.EDIT_PROJECT
  payload: IProject
}

export interface IAddProject {
  type: typeof actionTypes.ADD_PROJECT
  payload: IProject
}

export interface IDeleteProject {
  type: typeof actionTypes.DELETE_PROJECT
  payload: string
}
