import ChatPerson from './ChatPerson'
import ChatSearch from './ChatSearch'

const chats = [
  {
    name: 'Andrei Yakuba',
    avatarUrl:
      'https://www.thesprucepets.com/thmb/whvFIY9Epn7ITmGk1pfYMuHCRO0=/1471x0/filters:no_upscale():strip_icc()/GettyImages-1288261359-4016b054680e41d28451f081babd0c45.jpg',
    lastMessage: 'Privet',
    lastTimeOnline: 'yesterday'
  },
  {
    name: 'Andrei Yakuba',
    avatarUrl:
      'https://www.thesprucepets.com/thmb/whvFIY9Epn7ITmGk1pfYMuHCRO0=/1471x0/filters:no_upscale():strip_icc()/GettyImages-1288261359-4016b054680e41d28451f081babd0c45.jpg',
    lastMessage: 'Privet',
    lastTimeOnline: 'yesterday'
  }
]

export default function Chats() {
  return (
    <div className="bg-white h-full">
      <ChatSearch />
      <div className="flex flex-col">
        {chats.map(({ name, avatarUrl, lastMessage, lastTimeOnline }, ind) => (
          <ChatPerson
            key={ind}
            name={name}
            avatarUrl={avatarUrl}
            lastMessage={lastMessage}
            lastTimeOnline={lastTimeOnline}
          />
        ))}
      </div>
    </div>
  )
}
