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
  return axios.get<ReceiveNotificationResponse>(url).then((r) => r.data)
}

export async function deleteNotification({
  receiptId,
  credentials
}: DeleteNotificationArgs) {
  const url = `https://api.green-api.com/waInstance${credentials.idInstance}/DeleteNotification/${credentials.apiTokenInstance}/${receiptId}`
  return axios.get<DeleteNotificationResponse>(url).then((r) => r.data)
}

export async function fetchNotificationQuery({
  credentials
}: ReceiveNotificationArgs) {
  const notifications = []

  let result
  do {
    result = await receiveNotification({ credentials })
    notifications.push(result.body.messageData.textMessageData.textMessage)
    await deleteNotification({ receiptId: result.receiptId, credentials })
  } while (result)

  return notifications
}
