import { TState } from "./store"

// ----- Project
export const getAllProject = (state: TState) => state.projects
export const getProjectById = (id: string | undefined) => (state: TState) =>
  state.projects.find(project => project.id === id)

// ----- Task
export const getAllTask = (state: TState) => state.tasks
export const getTaskById = (id: string | undefined) => (state: TState) =>
  state.tasks.find(task => task.id === id)

// export const getSortedTasksByTitle = (state: TState) =>
//   state.tasks.sort((taskA, taskB) => taskB.priority - taskA.priority)
