export interface IComment {
  id?: number
  text: string
  children?: IComment[]
  date?: string
}

export interface ICommentProps extends IComment {}

export function Comment({ id, text, children, date }: ICommentProps) {
  return (
    <div key={text} className="comment-container">
      <div className="comment-container-info">
        <div className="title">
          <div className="header-info">
            <div className="name">John Doe</div>
            <div className="date">2 second ago</div>
          </div>
        </div>
        <div className="text">{text}</div>
      </div>
      <img src={require("../images/delete.png")} alt="" className="delete" />
    </div>
  )
}
