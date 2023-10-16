import { Link } from "react-router-dom"
import { IProject, Project } from "./Project"

export interface IProjectsProps {
  projects: IProject[]
}

export function Collections() {
  return (
    <div className="projects-container">
      {[1, 2].map((project: number) => (
        <Link key={project} to="1">
          <Project />
        </Link>
      ))}
    </div>
  )
}
