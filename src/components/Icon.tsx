import "./components.scss"

export interface IIconCoverProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  type: "star" | "message" | "task" | "add"
}

export function Icon({ type }: IIconCoverProps): JSX.Element {
  switch (type) {
    case "add":
      return <img src={require("../images/add.png")} className="icon" />
    case "message":
      return <img src={require("../images/message.png")} className="icon" />
    case "star":
      return <img src={require("../images/star.png")} className="icon" />
    case "task":
      return <img src={require("../images/task.png")} className="icon" />
    default:
      return <></>
  }
}
