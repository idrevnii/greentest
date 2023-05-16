import ChatWindow from './components/ChatWindow'
import MainMenu from './components/MainMenu'

function App() {
  return (
    <body className="h-full w-full bg-gray-50 flex">
      <MainMenu />
      <ChatWindow
        chatId="77055041082@c.us"
        credentials={{
          idInstance: '1101820042',
          apiTokenInstance: '12f2941ca04b4c82a9607cb42e081ff7c610ac5f0db04e6399'
        }}
      />
    </body>
  )
}

export default App
