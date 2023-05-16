import { Message } from './ChatWindow'

type Props = {
  messages: Message[]
}

export default function Messages({ messages }: Props) {
  return (
    <div className="bg-red-100 h-full flex flex-col">
      {messages.map((msg, ind) => {
        if (msg.owner === 'me') {
          return (
            <h4 key={ind} className="bg-blue-300 self-start">
              {msg.text}
            </h4>
          )
        }
        return (
          <h4 key={ind} className="bg-violet-300 self-end">
            {msg.text}
          </h4>
        )
      })}
    </div>
  )
}
