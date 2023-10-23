import { useSelector } from "react-redux"

export interface IProject {
  id: number
  title: string
  about: string
}

export function Project() {
  //eslint-disable-next-line
  const projects = useSelector((state: any) => state.projects)
  console.log(projects)
  return (
    <div className="project-container">
      <div className="title">Project 1</div>
      <div className="about">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad sint aut
        autem sequi accusantium officiis.
      </div>
    </div>
  )
}
