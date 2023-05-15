import axios from 'axios'
import { SendMessageArgs, SendMessageResponse } from './models'

export async function sendMessageQuery({
  chatId,
  message,
  credentials
}: SendMessageArgs) {
  const url = `https://api.green-api.com/waInstance${credentials.idInstance}/SendMessage/${credentials.apiTokenInstance}`
  const data = {
    chatId,
    message
  }
  return axios.post<SendMessageResponse>(url, data).then((r) => r.data)
}
