import { V1Options } from "uuid"

export interface IProject {
  id: V1Options
  title: string
  describe: string
  createAt: Date
}

export interface ITask {
  id: V1Options
  title: string
  describe: string
  createAt: Date
  deadline: Date
  priority: number
  status: "development" | "queue" | "done"
  subtasks: ISubtask[]
  comments: IComment[]
}
export interface IComment {
  id: V1Options
  taskId: V1Options
  title: string
  describe: string
  createAt: Date
  forwarded: V1Options
}
export interface ISubtask {
  id: V1Options
  taskId: V1Options
  title: string
  describe: string
  createAt: Date
  status: boolean
}
