import { IProject, Project } from "../../components/Project/Project"
import "./Projects.scss"

export interface IProjectsProps {
  projects: IProject[]
}

export function Projects() {
  return (
    <div className="projects-container">
      <div className="container-inner">
        {[1, 2, 3, 4, 5, 6, 7].map(project => (
          <Project />
        ))}
      </div>
    </div>
  )
}
