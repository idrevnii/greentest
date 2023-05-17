import Chats from './chats/Chats'
import ProfileNavigation from './ProfileNavigation'
import { Chat } from '../models'

type Props = {
  changeActiveChat: (chat: Chat) => void
}

export default function MainMenu({ changeActiveChat }: Props) {
  return (
    <div className="h-full w-1/3 flex flex-col">
      <ProfileNavigation profileImageUrl="https://cdn.theatlantic.com/thumbor/d8lh_KAZuOgBYslMOP4T0iu9Fks=/0x62:2000x1187/1600x900/media/img/mt/2018/03/AP_325360162607/original.jpg" />
      <Chats changeActiveChat={changeActiveChat} />
    </div>
  )
}
