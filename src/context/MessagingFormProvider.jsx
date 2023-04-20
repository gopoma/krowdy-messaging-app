import { useState } from 'react'
import { MessagingFormContext } from './MessagingFormContext'

const initialState = {
  selectedTypeMessage: '',
  selectedChannels: []
}

export const MessagingFormProvider = ({ children }) => {
  const [messagingFormState, setMessagingFormState] = useState(initialState)

  const _handleSelectedTypeMessageElementChange = (messageType) => {
    setMessagingFormState((prevMessagingFormState) => {
      const newMessagingFormState = structuredClone(prevMessagingFormState)

      return {
        ...newMessagingFormState,
        selectedTypeMessage: messageType
      }
    })
  }

  return (
    <MessagingFormContext.Provider
      value={{
        ...messagingFormState,
        messagingFormState,

        _handleSelectedTypeMessageElementChange
      }}
    >
      { children }
    </MessagingFormContext.Provider>
  )
}
