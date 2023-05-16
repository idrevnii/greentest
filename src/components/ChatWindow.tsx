import { useEffect, useState } from 'react'
import ChatHead from './ChatHead'
import Messages from './Messages'
import SendMessage from './SendMessage'
import { fetchNotifications } from '../api/notifications'
import { Credentials } from '../api/models'
import { sendMessage } from '../api/messages'

type Props = {
  chatId: string
  credentials: Credentials
}

export type Message = {
  receiptId: number
  owner: 'me' | 'companion'
  text: string
}

export default function ChatWindow({ chatId, credentials }: Props) {
  const [messages, setMessages] = useState<Message[]>([])

  const getNotifications = () =>
    fetchNotifications({ credentials }).then((data) => {
      if (data) {
        console.log('data', data)
        console.log('messages', messages)
        setMessages((messages) => [
          ...messages,
          ...data
            .map<Message>(({ receiptId, text }) => ({
              receiptId,
              owner: 'companion',
              text
            }))
            .filter(
              (data) => !messages.some((el) => el.receiptId === data.receiptId)
            )
            .sort((a, b) => a.receiptId - b.receiptId)
        ])
      }
    })

  useEffect(() => {
    setInterval(getNotifications, 5000)
  }, [])

  const sendMessageFn = (text: string) =>
    sendMessage({ credentials, chatId, message: text }).then(() =>
      setMessages((messages) => [
        ...messages,
        { receiptId: messages.length + 1, owner: 'me', text }
      ])
    )

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
      <Messages messages={messages} />
      <SendMessage sendMessage={sendMessageFn} />
    </div>
  )
}
