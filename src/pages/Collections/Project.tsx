import { IProject } from "../../store/types"

type TProjectProps = Omit<IProject, "id">

export function Project({ title, discribe, status, deadline }: TProjectProps) {
  return (
    <div className="project-container">
      <div className="title">{title}</div>

      <div className="about">{discribe}</div>
    </div>
  )
}
