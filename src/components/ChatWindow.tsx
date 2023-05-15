import { useEffect, useState } from 'react'
import ChatHead from './ChatHead'
import Messages from './Messages'
import SendMessage from './SendMessage'
import { useQuery } from '@tanstack/react-query'
import { fetchNotificationQuery } from '../api/notifications'

export default function ChatWindow() {
  const [messages, setMessages] = useState<string[]>([])
  const { data, isLoading, error } = useQuery({
    queryKey: 'notifications',
    queryFn: fetchNotificationQuery
  })

  useEffect(() => {
    if (data) {
      setMessages([...messages, ...data])
    }
  }, [messages, data])

  return (
    <div className="flex flex-col w-full">
      <div>
        <ChatHead
          name={'Nikita Poludnev'}
          status={'Online'}
          avatarUrl={
            'https://images.saymedia-content.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cq_auto:eco%2Cw_1200/MTk2Nzg0MjYxNjk5NzQxMzE0/cats-that-look-like-tigers-leopards-and-cheetahs.png'
          }
        />
      </div>
      {isLoading ? (
        <div className="h-full text-4xl">Loading...</div>
      ) : error ? (
        <div className="h-full text-4xl text-[#f00]">Error!</div>
      ) : (
        <Messages messages={messages} />
      )}
      <SendMessage />
    </div>
  )
}
