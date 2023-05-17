import { useState } from 'react'
import SearchIcon from '../../../assets/SearchIcon'
import UnreadChatsIcon from '../../../assets/UnreadChatsIcon'

type Props = {
  addToChats: (name: string) => void
}

export default function ChatSearch({ addToChats }: Props) {
  const [text, setText] = useState('')

  const onSubmit = () => {
    addToChats(text)
    setText('')
  }

  return (
    <div className="px-4 py-2 flex items-center border-b border-waborder">
      <div className="flex items-center justify-between w-full">
        <span className="absolute left-10">
          <SearchIcon />
        </span>
        <form className="mr-5">
          <input
            className="outline-none border-0 bg-wagray-200 rounded-md pl-16 py-1 w-full"
            placeholder="Search or start new chat"
            type="text"
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
        <UnreadChatsIcon />
      </div>
    </div>
  )
}
