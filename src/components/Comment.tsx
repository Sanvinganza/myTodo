export interface IComment {
  id?: number
  text: string
  child?: any
  date?: string
}

export interface ICommentProps extends IComment {}

export function Comment({ id, text, child, date }: ICommentProps) {
  return (
    <div key={text} className="comment-container">
      <div className="container-inner">
        <div className="container-info">
          <div className="title">
            <div className="header-info">
              <div className="name">John Doe</div>
              <div className="date">2 second ago</div>
            </div>
            <img
              src={require("../images/delete.png")}
              alt=""
              className="delete"
            />
          </div>
          <div className="text-container">
            <div className="text">{text}</div>
            <img
              src={require("../images/forward.png")}
              alt=""
              className="forward"
            />
          </div>
        </div>
      </div>
      {child}
    </div>
  )
}
