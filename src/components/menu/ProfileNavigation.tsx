import CommunitiesIcon from '../../assets/CommunitiesIcon'
import MenuIcon from '../../assets/MenuIcon'
import NewChatIcon from '../../assets/NewChatIcon'
import StatusIcon from '../../assets/StatusIcon'

type Props = {
  profileImageUrl: string
}

export default function ProfileNavigation({ profileImageUrl }: Props) {
  return (
    <div className="bg-wagray-200 flex justify-between items-center px-4 py-2 border-r border-waborder">
      <div className="flex justify-center items-center w-10 h-10">
        <img
          className="rounded-full h-full"
          src={profileImageUrl}
          alt="Profile image"
        />
      </div>
      <div className="flex justify-center items-center space-x-2">
        <span className="w-7 h-7">
          <CommunitiesIcon />
        </span>
        <span className="w-7 h-7">
          <StatusIcon />
        </span>
        <span className="w-7 h-7">
          <NewChatIcon />
        </span>
        <span className="w-7 h-7">
          <MenuIcon />
        </span>
      </div>
    </div>
  )
}
