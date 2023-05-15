import SearchIcon from '../assets/SearchIcon'
import UnreadChatsIcon from '../assets/UnreadChatsIcon'

export default function ChatSearch() {
  return (
    <div className="px-4 py-2 flex items-center border-b border-waborder">
      <div className="flex items-center justify-between w-full">
        <span className="absolute left-10">
          <SearchIcon />
        </span>
        <input
          className="outline-none bg-wagray-200 rounded-md pl-16 py-1 w-full mr-5"
          placeholder="Search or start new chat"
          type="text"
        />
        <UnreadChatsIcon />
      </div>
    </div>
  )
}
