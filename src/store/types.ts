export interface IProject {
  id: string
  title?: string
  discribe?: string
  createAt?: string
  status?: "in progress" | "done"
}

export interface ITask {
  id: string
  title: string
  describe: string
  createAt: Date
  deadline: Date
  priority: number
  status: "development" | "queue" | "done"
  subtasks: ISubtask[]
  comments: IComment[]
  number: number
}

export interface IComment {
  id: string
  taskId: string
  title: string
  describe: string
  createAt: Date
  forwarded: string
}

export interface ISubtask {
  id: string
  taskId: string
  title: string
  describe: string
  createAt: Date
  status: boolean
}
