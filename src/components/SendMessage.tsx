import { useState } from 'react'
import AttachmentIcon from '../assets/AttachmentIcon'
import EmojiIcon from '../assets/EmojiIcon'
import MicrophoneIcon from '../assets/MicrophoneIcon'

type Props = {
  sendMessage: (message: string) => void
}

export default function SendMessage({ sendMessage }: Props) {
  const [text, setText] = useState('')

  const onSubmit = () => {
    console.log(text)
    sendMessage(text)
  }

  return (
    <>
      <div className="w-full top-full sticky flex justify-between items-center px-4 py-4 space-x-2 bg-wagray-200">
        <div className="flex items-center">
          <div className="flex justify-center items-center w-10 h-10 cursor-pointer">
            <EmojiIcon />
          </div>
          <div className="flex justify-center items-center w-10 h-10 cursor-pointer">
            <AttachmentIcon />
          </div>
        </div>
        <form className="w-full outline-none">
          <input
            type="text"
            placeholder="Type a message"
            className="bg-white rounded-lg px-4 outline-none border-0 w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault()
                onSubmit()
              }
            }}
          />
        </form>
        <div className="flex justify-center items-center w-10 h-10 cursor-pointer">
          <MicrophoneIcon />
        </div>
      </div>
    </>
  )
}
