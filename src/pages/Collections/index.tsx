import { useState } from "react"
import { Link } from "react-router-dom"
import { AddProjectModal } from "../../modals/AddProjectModal"
import { IProject, Project } from "./Project"

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
  return (
    <div className="projects-container">
      {[1, 2].map((project: number) => (
        <Link key={project} to="1">
          <Project />
        </Link>
      ))}
      <AddProject />
    </div>
  )
}
