type Props = {
  name: string
  avatarUrl: string
  lastMessage: string
  lastTimeOnline: string
}

export default function ChatPerson({
  name,
  avatarUrl,
  lastMessage,
  lastTimeOnline
}: Props) {
  return (
    <div className={'border-b border-waborder cursor-pointer'}>
      <div className="flex items-center w-full">
        <div className="p-3">
          <img
            src={avatarUrl}
            alt="profile image"
            className="rounded-full w-10 h-10"
          />
        </div>
        <div className="flex justify-between w-8/12">
          <div className="flex flex-col">
            <h3 className="text-md text-gray-700 font-sans font-normal">
              {name}
            </h3>
            <p className="text-md text-gray-500 font-sans font-normal">
              {lastMessage}
            </p>
          </div>
          <p className="text-xs font-sans text-gray-500 font-light">
            {lastTimeOnline}
          </p>
        </div>
      </div>
    </div>
  )
}
