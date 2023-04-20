import { useState } from 'react'
import { MessagingFormContext } from './MessagingFormContext'

const initialState = {
  selectedTypeMessage: '',
  selectedChannels: new Set()
}

export const MessagingFormProvider = ({ children }) => {
  const [messagingFormState, setMessagingFormState] = useState(initialState)
  console.log(messagingFormState)

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

  return (
    <MessagingFormContext.Provider
      value={{
        ...messagingFormState,
        messagingFormState,

        _handleSelectedTypeMessageElementChange,
        _handleChannelSelectionElementToggle
      }}
    >
      { children }
    </MessagingFormContext.Provider>
  )
}
