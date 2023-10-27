import { TState } from "./store"

export const getAllProject = (state: TState) => state.projects
export const getProjectById = (id: string | undefined) => (state: TState) =>
  state.projects.find(project => project.id === id)
