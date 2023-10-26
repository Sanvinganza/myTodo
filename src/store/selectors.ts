import { IState } from "./store"

export const getAllProject = (state: IState) => state.projects
export const getProjectById = (id: string | undefined) => (state: IState) =>
  state.projects.find(project => project.id === id)
