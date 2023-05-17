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
  const notifications: { receiptId: number; text: string }[] = []
  let isEnd = false

  while (!isEnd) {
    isEnd = await receiveNotification({ credentials }).then(async (result) => {
      if (result?.receiptId) {
        if (
          result.body.typeWebhook === 'incomingMessageReceived' &&
          result.body.messageData.typeMessage === 'textMessage'
        ) {
          notifications.push({
            receiptId: result.receiptId,
            text: result.body.messageData.textMessageData.textMessage
          })
        }
        await deleteNotification({
          receiptId: result.receiptId,
          credentials
        })
        return true
      } else {
        return false
      }
    })
  }

  return notifications
}
