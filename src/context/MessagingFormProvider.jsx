import { useEffect, useState } from 'react'
import { MessagingFormContext } from './MessagingFormContext'

const initialState = {
  selectedTypeMessage: '',
  selectedChannels: new Set(),
  email: {
    subject: '',
    message: ''
  },
  emailValid: false,
  text: {
    message: ''
  },
  textValid: false,
  whatsapp: {
    message: ''
  },
  whatsappValid: false
}

export const MessagingFormProvider = ({ children }) => {
  const [messagingFormState, setMessagingFormState] = useState(initialState)
  console.log(messagingFormState.text)

  const _handleSelectedTypeMessageElementChange = (messageType) => () => {
    setMessagingFormState((prevMessagingFormState) => {
      const newMessagingFormState = structuredClone(prevMessagingFormState)

      return {
        ...newMessagingFormState,
        selectedTypeMessage: messageType
      }
    })
  }

  const _handleChannelSelectionElementToggle = (channel) => () => {
    setMessagingFormState((prevMessagingFormState) => {
      const newSelectedChannels = new Set(prevMessagingFormState.selectedChannels)

      if (newSelectedChannels.has(channel)) {
        newSelectedChannels.delete(channel)
      } else {
        newSelectedChannels.add(channel)
      }

      const newMessagingFormState = structuredClone(prevMessagingFormState)

      return {
        ...newMessagingFormState,
        selectedChannels: newSelectedChannels
      }
    })
  }

  const _handleMessagingFormTextInputChange = (field) => ({ target }) => {
    const { name, value } = target

    setMessagingFormState((prevMessagingFormState) => {
      const newMessagingFormState = structuredClone(prevMessagingFormState)

      newMessagingFormState[field][name] = value

      return newMessagingFormState
    })
  }

  useEffect(() => {
    setMessagingFormState((prevMessagingFormState) => {
      const newMessagingFormState = structuredClone(prevMessagingFormState)

      const { email: { subject, message } } = newMessagingFormState

      if (subject.trim() === '' || message.trim() === '') {
        return {
          ...newMessagingFormState,
          emailValid: false
        }
      }

      return {
        ...newMessagingFormState,
        emailValid: true
      }
    })
  }, [messagingFormState.email.subject, messagingFormState.email.message])

  useEffect(() => {
    setMessagingFormState((prevMessagingFormState) => {
      const newMessagingFormState = structuredClone(prevMessagingFormState)

      const { text: { message } } = newMessagingFormState

      if (message.trim() === '') {
        return {
          ...newMessagingFormState,
          textValid: false
        }
      }

      return {
        ...newMessagingFormState,
        textValid: true
      }
    })
  }, [messagingFormState.text.message])

  return (
    <MessagingFormContext.Provider
      value={{
        ...messagingFormState,
        messagingFormState,

        _handleSelectedTypeMessageElementChange,
        _handleChannelSelectionElementToggle,
        _handleMessagingFormTextInputChange
      }}
    >
      { children }
    </MessagingFormContext.Provider>
  )
}
