import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { deleteProject } from "../../store/actions/projectsActions"
import { IProject as IProjectProps } from "../../store/types"

export function Project({ id, title, discribe, status }: IProjectProps) {
  const dispatch = useDispatch()

  const onDelete = () => dispatch(deleteProject(id))

  return (
    <div className="project-container">
      <div className="title">
        <div className="title-content">
          {title}
          <div className="status">{status}</div>
        </div>
        <img
          src={require("../../images/delete.png")}
          className="delete"
          onClick={() => onDelete()}
        />
      </div>
      <Link to={id}>
        <div className="about">{discribe}</div>
      </Link>
    </div>
  )
}
