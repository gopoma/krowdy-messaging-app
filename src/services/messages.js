import { sleep } from '../helpers'

// const API_URL = 'http://localhost:4000/api'
// const MESSAGING_API_URL = `${API_URL}/users`
// [POST] ${MESSAGING_API_URL}/${idUser}/messages?email=true&text=false&whatsapp=true

export class MessagesService {
  async sendEmailMessage (receiver, { subject = '', message = '' }) {
    await sleep(500)

    const formattedMessage = message.replaceAll('[userName]', receiver.fullname).replaceAll('[Link]', 'https://www.krowdy.com')
    return await Promise.resolve({ msg: `Sending Email Message to user with id ${receiver.id}:`, results: { subject, message: formattedMessage } })
  }

  async sendTextMessage (receiver, { message = '' }) {
    await sleep(500)

    const formattedMessage = message.replaceAll('[userName]', receiver.fullname).replaceAll('[Link]', 'https://www.krowdy.com')
    return await Promise.resolve({ msg: `Sending Text Message to user with id ${receiver.id}:`, results: { message: formattedMessage } })
  }

  async sendWhatsappMessage (receiver, { message = '' }) {
    await sleep(500)

    const formattedMessage = message.replaceAll('[userName]', receiver.fullname).replaceAll('[Link]', 'https://www.krowdy.com')
    return await Promise.resolve({ msg: `Sending Whatsapp Message to user with id ${receiver.id}`, results: { message: formattedMessage } })
  }

  async sendAllMessages ({ receivers, messagingFormData = {} }) {
    const compountPromises = receivers.map((receiver) => {
      const selectedChannels = Object.keys(messagingFormData)
      const promises = []

      if (selectedChannels.includes('email')) {
        promises.push(this.sendEmailMessage(receiver, messagingFormData.email))
      }

      if (selectedChannels.includes('text')) {
        promises.push(this.sendTextMessage(receiver, messagingFormData.text))
      }

      if (selectedChannels.includes('whatsapp')) {
        promises.push(this.sendWhatsappMessage(receiver, messagingFormData.whatsapp))
      }

      return Promise.all(promises)
    })

    const results = await Promise.all(compountPromises)
    console.log('MessagingService\'s sendAllMessages results:', results)
  }
}
