import { Link } from "react-router-dom"
import { IProject, Project } from "../../components/Project/Project"
import "./Projects.scss"

export interface IProjectsProps {
  projects: IProject[]
}

export function Projects() {
  return (
    <div className="projects-container">
      <div className="container-inner">
        {[1, 2, 3, 4, 5, 6, 7].map((project: number) => (
          <Link key={project} to="1">
            <Project />
          </Link>
        ))}
      </div>
    </div>
  )
}
