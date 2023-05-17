export type Chat = {
  id: number
  name: string
  phone: string
  lastSeen: string
  lastMessage: string
  avatarUrl: string
}

export type Message = {
  receiptId: number
  owner: 'me' | 'companion'
  text: string
}
