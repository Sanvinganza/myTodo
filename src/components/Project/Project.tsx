import "./style.scss"
export interface IProjectProps {}

export function Project(props: IProjectProps) {
  return (
    <div className="container">
      <div className="container-inner">
        <div className="title">Project 1</div>
        <div className="about">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad sint aut
          autem sequi accusantium officiis.
        </div>
      </div>
    </div>
  )
}
