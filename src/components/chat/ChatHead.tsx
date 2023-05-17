import MenuIcon from '../../assets/MenuIcon'
import SearchIcon from '../../assets/SearchIcon'

type Props = {
  name: string
  status: string
  avatarUrl: string
}

export default function ChatHead({ name, status, avatarUrl }: Props) {
  return (
    <div className="bg-wagray-200 h-full w-full flex justify-between items-center px-4 py-2">
      <div className="flex justify-between items-center w-full cursor-pointer">
        <div className="flex justify-between items-center space-x-4">
          <img
            src={avatarUrl}
            className="w-10 h-10 rounded-full"
            alt="Companion avatar"
          />
          <div className="flex flex-col">
            <p className="text-slate-600 font-sans font-medium text-base">
              {name}
            </p>
            <p className="text-slate-400 font-sans font-medium text-xs">
              {status}
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <div className="w-10 h-10 flex justify-center items-center">
            <SearchIcon />
          </div>
          <div className="w-10 h-10 flex justify-center items-center">
            <MenuIcon />
          </div>
        </div>
      </div>
    </div>
  )
}
