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

  const _handleSelectedTypeMessageElementChange = (messageType) => () => {
    setMessagingFormState((prevMessagingFormState) => {
      const newMessagingFormState = structuredClone(prevMessagingFormState)

      return {
        ...newMessagingFormState,
        selectedTypeMessage: messageType
      }
    })
  }

  useEffect(() => {
    setMessagingFormState((prevMessagingFormState) => {
      const newMessagingFormState = structuredClone(prevMessagingFormState)

      const { selectedTypeMessage } = newMessagingFormState

      switch (selectedTypeMessage) {
        case 'invitation': {
          const message = 'Hola [userName], hemos visto tu perfil y nos parece interesante. Encuentra más información aquí: [Link]'

          return {
            ...newMessagingFormState,
            email: {
              subject: 'Invitación a proceso',
              message
            },
            text: {
              message
            },
            whatsapp: {
              message
            }
          }
        }
        case 'reminder': {
          const message = 'Hola [userName] nos gustaría recordarte que tienes pendiente un proceso. Entra aquí para continuar [Link]'

          return {
            ...newMessagingFormState,
            email: {
              subject: 'Recordatorio de proceso',
              message
            },
            text: {
              message
            },
            whatsapp: {
              message
            }
          }
        }
        default: {
          return {
            ...newMessagingFormState,
            email: {
              subject: '',
              message: ''
            },
            text: {
              message: ''
            },
            whatsapp: {
              message: ''
            }
          }
        }
      }
    })
  }, [messagingFormState.selectedTypeMessage])

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

  useEffect(() => {
    setMessagingFormState((prevMessagingFormState) => {
      const newMessagingFormState = structuredClone(prevMessagingFormState)

      const { whatsapp: { message } } = newMessagingFormState

      if (message.trim() === '') {
        return {
          ...newMessagingFormState,
          whatsappValid: false
        }
      }

      return {
        ...newMessagingFormState,
        whatsappValid: true
      }
    })
  }, [messagingFormState.whatsapp.message])

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
