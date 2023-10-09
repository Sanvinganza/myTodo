import { IProject, Project } from "../../components/Project/Project"
import "./style.scss"

export interface IProjectsProps {
  projects: IProject[]
}

export function Projects() {
  return (
    <div className="container">
      {["title 1", "title 2", "title 3", "title 4"].map(project => (
        <Project />
      ))}
    </div>
  )
}
