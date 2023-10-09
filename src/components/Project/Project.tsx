import "./Project.scss"

export interface IProject {
  id: number
  title: string
  about: string
}

export function Project() {
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
