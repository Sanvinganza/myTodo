import { Link } from "react-router-dom"
import { IProject, Project } from "./Project/Project"
import "./Collections.scss"

export interface IProjectsProps {
  projects: IProject[]
}

export function Collections() {
  return (
    <div className="projects-container">
      <div className="container-inner">
        {[1, 2].map((project: number) => (
          <Link key={project} to="1">
            <Project />
          </Link>
        ))}
      </div>
    </div>
  )
}
