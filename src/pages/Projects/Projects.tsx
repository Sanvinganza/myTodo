import { Project } from "../../components/Project/Project"
import "./style.scss"

export interface IProjectsProps {}

export function Projects(props: IProjectsProps) {
  return (
    <div className="container">
      <div className="container-inner">
        <Project />
      </div>
    </div>
  )
}
