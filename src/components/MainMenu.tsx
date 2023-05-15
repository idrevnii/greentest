import Chats from './Chats'
import ProfileNavigation from './ProfileNavigation'

export default function MainMenu() {
  return (
    <div className="h-full w-1/3">
      <ProfileNavigation profileImageUrl="https://cdn.theatlantic.com/thumbor/d8lh_KAZuOgBYslMOP4T0iu9Fks=/0x62:2000x1187/1600x900/media/img/mt/2018/03/AP_325360162607/original.jpg" />
      <Chats />
    </div>
  )
}
