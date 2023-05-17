import { Message } from '../models'

type Props = {
  messages: Message[]
}

export default function Messages({ messages }: Props) {
  return (
    <div className="bg-texture h-full flex flex-col p-4 overflow-auto">
      {messages.map((msg, ind) => {
        if (msg.owner === 'me') {
          return (
            <div key={ind} className="flex justify-end mb-2">
              <div className="bg-wamessage text-gray-800 rounded-lg p-2 max-w-xs">
                <p className="text-sm">{msg.text}</p>
              </div>
            </div>
          )
        }
        return (
          <div key={ind} className="flex mb-2">
            <div className="bg-white text-gray-800 rounded-lg p-2 max-w-xs">
              <p className="text-sm">{msg.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
