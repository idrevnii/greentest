import AttachmentIcon from '../assets/AttachmentIcon'
import EmojiIcon from '../assets/EmojiIcon'
import MicrophoneIcon from '../assets/MicrophoneIcon'

export default function SendMessage() {
  return (
    <>
      <div className="w-full top-full sticky flex justify-between items-center px-4 py-4 space-x-2 bg-wagray-200">
        <div className="flex justify-between items-center">
          <div className="flex justify-center items-center w-10 h-10 cursor-pointer">
            <EmojiIcon />
          </div>
          <div className="flex justify-center items-center w-10 h-10 cursor-pointer">
            <AttachmentIcon />
          </div>
        </div>
        <input
          type="text"
          placeholder="Type a message"
          className="bg-white rounded-lg px-4 py-2 outline-none w-full"
        />
        <div className="flex justify-center items-center w-10 h-10 cursor-pointer">
          <MicrophoneIcon />
        </div>
      </div>
    </>
  )
}
