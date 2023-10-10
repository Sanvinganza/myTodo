export interface IQueueProps {}
import "./Queue.scss"

export function Queue(props: IQueueProps) {
  const queue1 = [
    "Lorem ipsum dolor sit amet",
    " consectetur, adipisicing elit. Offic",
    ",iis vel qui similique in",
    ", impedit nobis perferendis iure e",
    "t numquam. Soluta adipisci",
    " consequatur totam qua",
    "m enim similique laboriosam ab ducimus ",
    "nostrum suscipit placeat et illo, di",
    "cta dolore. Id, nobis architect",
    "o. Tempora perferendis aliquid nulla ",
    "mollitia quisquam, placeat ",
    "hic accusantium adipisci ipsam?",
  ]

  return (
    <div className="queue-container">
      {queue1.map(task => {
        return <div className="queue-item">{task}</div>
      })}
      <footer></footer>
    </div>
  )
}
