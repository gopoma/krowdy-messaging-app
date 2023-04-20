export class MessagesService {
  async sendEmailMessage (receiver) {}
  async sendTextMessage (receiver) {}
  async sendWhatsappMessage (receiver) {}

  async sendAllMessages ({ receivers, messagingFormData }) {
    console.log({ receivers, messagingFormData })
  }
}
