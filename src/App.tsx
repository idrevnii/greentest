import { useState } from 'react'
import ChatWindow from './components/chat/ChatWindow'
import MainMenu from './components/menu/MainMenu'
import { Chat } from './components/models'
import Auth from './components/Auth'

type AuthData = {
  idInstance: string
  apiTokenInstance: string
}

function App() {
  const [authData, setAuthData] = useState<AuthData>({
    idInstance: '',
    apiTokenInstance: ''
  })

  const [activeChat, setActiveChat] = useState<Chat>()

  const changeAuthData = (idInstance: string, apiTokenInstance: string) =>
    setAuthData({
      idInstance,
      apiTokenInstance
    })

  const changeActiveChat = (chat: Chat) => setActiveChat(chat)

  return (
    <div className="h-screen w-full bg-gray-50 flex justify-center items-center">
      <MainMenu changeActiveChat={changeActiveChat} />
      {activeChat ? (
        <ChatWindow activeChat={activeChat} credentials={authData} />
      ) : (
        <Auth changeAuthData={changeAuthData} />
      )}
    </div>
  )
}

export default App
