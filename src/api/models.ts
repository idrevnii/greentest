export type Credentials = {
  idInstance: string
  apiTokenInstance: string
}

type TextNotification = {
  typeMessage: 'textMessage'
  textMessageData: {
    textMessage: string
    isTemplateMessage: boolean
  }
  quotedMessage?: {
    stanzaId: string
    paticipant: string
    typeMessage: string
  }
}

export type ReceiveNotificationArgs = {
  credentials: Credentials
}

export type ReceiveNotificationResponse = {
  receiptId: number
  body: {
    typeWebhook:
      | 'outgoingMessageStatus'
      | 'incomingMessageReceived'
      | 'outgoingAPIMessageReceived'
    messageData: TextNotification
  }
}

export type DeleteNotificationArgs = {
  receiptId: number
  credentials: Credentials
}

export type DeleteNotificationResponse = {
  result: boolean
}

export type SendMessageArgs = {
  chatId: string
  message: string
  credentials: Credentials
  quotedMessageId?: string
  archiveChat?: boolean
  linkPreview?: boolean
}

export type SendMessageResponse = {
  idMessage: string
}
