import { useContext, useEffect } from 'react'
import { LinkedListContext } from '../context/LinkedListContext'
import { MessagingFormContext } from '../context/MessagingFormContext'
import {
  MessagingFormTitle,
  MessagingFormInputsWrapper,
  MessagingFormButtonsWrapper,
  MessagingFormSelectionInputWrapper
} from './'

const channels = ['email', 'text', 'whatsapp']
const forbiddenActivatorsMapping = {
  email: 2,
  text: 3,
  whatsapp: 4
}

export const ChannelsForm = () => {
  const {
    _handleAddForbiddenPosition,
    _handleDeleteForbiddenPosition,
    _handleGoBack,
    _handleGoNext
  } = useContext(LinkedListContext)
  const { selectedChannels, _handleChannelSelectionElementToggle } = useContext(MessagingFormContext)

  useEffect(() => {
    channels.forEach((channel) => {
      if (selectedChannels.has(channel)) {
        _handleDeleteForbiddenPosition(forbiddenActivatorsMapping[channel])
      } else {
        _handleAddForbiddenPosition(forbiddenActivatorsMapping[channel])
      }
    })
  }, [selectedChannels])

  const _handleGoBackButtonClick = () => {
    _handleGoBack()
  }

  const _handleNextButtonClick = () => {
    _handleGoNext()
  }

  return (
    <>
      <MessagingFormTitle title='Selección de canales' />

      <MessagingFormInputsWrapper>
        <MessagingFormSelectionInputWrapper>
          <input
            type='checkbox'
            id='email'
            checked={selectedChannels.has('email')}
            onChange={_handleChannelSelectionElementToggle('email')}
            className='w-4 h-4 border border-slate-400'
          />
          <label
            htmlFor='email'
            className='text-lg text-slate-400'
          >
            Correo electrónico
          </label>
        </MessagingFormSelectionInputWrapper>
        <MessagingFormSelectionInputWrapper>
          <input
            type='checkbox'
            id='text'
            checked={selectedChannels.has('text')}
            onChange={_handleChannelSelectionElementToggle('text')}
            className='w-4 h-4 border border-slate-400'
          />
          <label
            htmlFor='text'
            className='text-lg text-slate-400'
          >
            Mensaje de texto
          </label>
        </MessagingFormSelectionInputWrapper>
        <MessagingFormSelectionInputWrapper>
          <input
            type='checkbox'
            id='whatsapp'
            checked={selectedChannels.has('whatsapp')}
            onChange={_handleChannelSelectionElementToggle('whatsapp')}
            className='w-4 h-4 border border-slate-400'
          />
          <label
            htmlFor='whatsapp'
            className='text-lg text-slate-400'
          >
            Whatsapp
          </label>
        </MessagingFormSelectionInputWrapper>
      </MessagingFormInputsWrapper>

      <MessagingFormButtonsWrapper>
        <button
          className='border border-blue-400 py-2 px-3 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors'
          onClick={ _handleGoBackButtonClick }
        >
          Atrás
        </button>
        <button
          onClick={ _handleNextButtonClick }
          disabled={ selectedChannels.size === 0 }
          className='border border-blue-400 bg-blue-400 hover:bg-blue-600 transition-colors text-white py-2 px-3 disabled:border-blue-200 disabled:bg-blue-200 disabled:cursor-not-allowed'
        >
          Siguiente
        </button>
      </MessagingFormButtonsWrapper>
    </>
  )
}
