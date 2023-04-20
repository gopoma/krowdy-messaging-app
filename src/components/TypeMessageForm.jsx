import { useContext } from 'react'
import { useModalStore } from '../hooks'
import { MessagingFormContext } from '../context/MessagingFormContext'
import { LinkedListContext } from '../context/LinkedListContext'
import { MessagingFormButtonsWrapper, MessagingFormInputsWrapper, MessagingFormSelectionInputWrapper, MessagingFormTitle } from './'

export const TypeMessageForm = () => {
  const { closeModal } = useModalStore()
  const { selectedTypeMessage, _handleSelectedTypeMessageElementChange } = useContext(MessagingFormContext)
  const { _handleGoNext } = useContext(LinkedListContext)

  const _handleCancelButtonClick = () => {
    closeModal()
  }

  const _handleNextButtonClick = () => {
    _handleGoNext()
  }

  return (
    <>
      <MessagingFormTitle title='Selección del tipo de mensaje' />

      <MessagingFormInputsWrapper>
        <MessagingFormSelectionInputWrapper>
          <input
            type='radio'
            name='messageType'
            value='invitation'
            id='invitation'
            checked={selectedTypeMessage === 'invitation'}
            onChange={_handleSelectedTypeMessageElementChange('invitation')}
            className='border border-slate-400'
          />
          <label
            htmlFor='invitation'
            className='text-lg text-slate-400'
          >
            Invitación
          </label>
        </MessagingFormSelectionInputWrapper>
        <MessagingFormSelectionInputWrapper>
          <input
            type='radio'
            name='messageType'
            value='reminder'
            id='reminder'
            checked={selectedTypeMessage === 'reminder'}
            onChange={_handleSelectedTypeMessageElementChange('reminder')}
            className='border border-slate-400'
          />
          <label
            htmlFor='reminder'
            className='text-lg text-slate-400'
          >
            Recordatorio de proceso
          </label>
        </MessagingFormSelectionInputWrapper>
        <MessagingFormSelectionInputWrapper>
          <input
            type='radio'
            name='messageType'
            value='custom'
            id='custom'
            checked={selectedTypeMessage === 'custom'}
            onChange={_handleSelectedTypeMessageElementChange('custom')}
            className='border border-slate-400'
          />
          <label
            htmlFor='custom'
            className='text-lg text-slate-400'
          >
            Personalizado
          </label>
        </MessagingFormSelectionInputWrapper>
      </MessagingFormInputsWrapper>

      <MessagingFormButtonsWrapper>
        <button
          className='border border-blue-400 py-2 px-3 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors'
          onClick={ _handleCancelButtonClick }
        >
          Cancelar
        </button>
        <button
          onClick={ _handleNextButtonClick }
          disabled={ selectedTypeMessage === '' }
          className='border border-blue-400 bg-blue-400 hover:bg-blue-600 transition-colors text-white py-2 px-3 disabled:border-blue-200 disabled:bg-blue-200 disabled:cursor-not-allowed'
        >
          Siguiente
        </button>
      </MessagingFormButtonsWrapper>
    </>
  )
}
