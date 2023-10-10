export interface IQueueProps {}
import "./Queue.scss"
export interface ICardProps {
  task: string
}
export function Queue(props: IQueueProps) {
  const queue1 = [
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Offic",
    "t numquam. Soluta adipisci",
    " consequatur totam qua",
    "m enim similique laboriosam ab ducimus ",
    "nostrum suscipit placeat et illo, di",
    "cta dolore. Id, nobis architect",
    "o. Tempora perferendis aliquid nulla ",
    "mollitia quisquam, placeat ",
    "hic accusantium adipisci ipsam?",
  ]

  const Card = ({ task }: ICardProps) => (
    <>
      <div className="queue-item">
        <span className="about">{task}</span>
        <footer>
          <div className="attribute-container">
            <div className="attribute">
              <img src={require("../../../images/star.png")} />
            </div>
            <div className="attribute">
              <img src={require("../../../images/message.png")} />
            </div>
            <div className="attribute">
              <img src={require("../../../images/add.png")} />
            </div>
          </div>
        </footer>
      </div>
    </>
  )

  return (
    <div className="queue-container">
      {queue1.map(task => {
        return <Card task={task} />
      })}
      <footer>add task</footer>
    </div>
  )
}
