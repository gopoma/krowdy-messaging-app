import { useReceiversStore, useModalStore } from '../hooks'
import { useContext } from 'react'
import { MessagingFormContext } from '../context/MessagingFormContext'
import { MessagesService } from '../services'

const messagesServ = new MessagesService()

export const MessagingFormSubmitButton = ({ ...props }) => {
  const { receivers } = useReceiversStore()
  const { closeModal } = useModalStore()
  const {
    messagingFormState: { selectedChannels },
    email, text, whatsapp
  } = useContext(MessagingFormContext)

  const channelsMapping = { email, text, whatsapp }

  const _handleClick = async () => {
    let messagingFormData = {}

    selectedChannels.forEach((selectedChannel) => {
      messagingFormData = {
        ...messagingFormData,
        [selectedChannel]: { ...channelsMapping[selectedChannel] }
      }
    })

    await messagesServ.sendAllMessages({ receivers, messagingFormData })

    closeModal()
  }

  return (
    <button
      onClick={_handleClick}
      className='border border-blue-400 bg-blue-400 hover:bg-blue-600 transition-colors text-white py-2 px-3 disabled:border-blue-200 disabled:bg-blue-200 disabled:cursor-not-allowed'
      {...props}
    >
      Enviar
    </button>
  )
}
