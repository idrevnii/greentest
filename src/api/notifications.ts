import axios from 'axios'
import {
  ReceiveNotificationArgs,
  ReceiveNotificationResponse,
  DeleteNotificationArgs,
  DeleteNotificationResponse
} from './models'

export async function receiveNotification({
  credentials
}: ReceiveNotificationArgs) {
  const url = `https://api.green-api.com/waInstance${credentials.idInstance}/ReceiveNotification/${credentials.apiTokenInstance}`
  return axios.get<ReceiveNotificationResponse | null>(url).then((r) => r.data)
}

export async function deleteNotification({
  receiptId,
  credentials
}: DeleteNotificationArgs) {
  const url = `https://api.green-api.com/waInstance${credentials.idInstance}/DeleteNotification/${credentials.apiTokenInstance}/${receiptId}`
  return axios.delete<DeleteNotificationResponse>(url).then((r) => r.data)
}

export async function fetchNotifications({
  credentials
}: ReceiveNotificationArgs) {
  const notifications = []
  let isEnd = false

  while (!isEnd) {
    const result = await receiveNotification({ credentials })
    console.log('resultNotification', result)
    if (result) {
      if (result.body.typeWebhook === 'incomingMessageReceived') {
        notifications.push({
          receiptId: result.receiptId,
          text: result.body.messageData.textMessageData.textMessage
        })
      }
      const response = await deleteNotification({
        receiptId: result.receiptId,
        credentials
      })
      console.log('deleteResponse', response)
    } else {
      isEnd = true
    }
  }

  console.log('call', notifications)

  return notifications
}
