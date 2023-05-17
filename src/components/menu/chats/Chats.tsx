import { useState } from 'react'
import ChatPerson from './ChatPerson'
import ChatSearch from './ChatSearch'
import { Chat } from '../../models'

type Props = {
  changeActiveChat: (chat: Chat) => void
}

export default function Chats({ changeActiveChat }: Props) {
  const [chats, setChats] = useState<Chat[]>([])

  const addToChats = (phone: string) => {
    setChats((chats) => [
      ...chats,
      {
        id: chats.length + 1,
        name: phone,
        phone: `${phone.replace('+', '').replaceAll(' ', '')}@c.us`,
        lastSeen: 'just now',
        lastMessage: '',
        avatarUrl:
          'https://www.thesprucepets.com/thmb/whvFIY9Epn7ITmGk1pfYMuHCRO0=/1471x0/filters:no_upscale():strip_icc()/GettyImages-1288261359-4016b054680e41d28451f081babd0c45.jpg'
      }
    ])
  }

  return (
    <div className="bg-white h-full">
      <ChatSearch addToChats={addToChats} />
      <div className="flex flex-col">
        {chats.map(({ id, name, avatarUrl, lastMessage, lastSeen }) => (
          <ChatPerson
            key={id}
            name={name}
            avatarUrl={avatarUrl}
            lastMessage={lastMessage}
            lastSeen={lastSeen}
            onClick={() =>
              changeActiveChat(chats.find((chat) => chat.id === id)!)
            }
          />
        ))}
      </div>
    </div>
  )
}
