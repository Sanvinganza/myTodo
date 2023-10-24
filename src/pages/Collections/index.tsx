import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { AddProjectModal } from "../../modals/AddProjectModal"
import { getProjects } from "../../store/selectors"
import { IProject } from "../../store/types"
import { Project } from "./Project"

export interface IProjectsProps {
  projects: IProject[]
}
const AddProject = ({}) => {
  const [addProjectIsOpen, setAddProjectIsOpen] = useState(false)

  return (
    <>
      <div className="project-container">
        <img
          src={require("../../images/add.png")}
          alt=""
          className="add-icon"
          onClick={() => setAddProjectIsOpen(true)}
        />
      </div>

      <AddProjectModal
        isOpen={addProjectIsOpen}
        setIsOpen={setAddProjectIsOpen}
      />
    </>
  )
}
export function Collections() {
  const { projects }: any = useSelector(getProjects)
  console.log(projects)
  return (
    <div className="projects-container">
      {projects?.map(({ title, id, discribe, status }: IProject) => (
        <Link key={id} to={id}>
          <Project title={title} discribe={discribe} status={status} />
        </Link>
      ))}
      <AddProject />
    </div>
  )
}
