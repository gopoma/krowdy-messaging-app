import { useContext } from 'react'
import { MessagingFormContext } from '../context/MessagingFormContext'
import { LinkedListContext } from '../context/LinkedListContext'
import { useModalStore } from '../hooks'

export const TypeMessageForm = () => {
  const { closeModal } = useModalStore()
  const { selectedTypeMessage, _handleSelectedTypeMessageElementChange } = useContext(MessagingFormContext)
  const { _handleGoNext } = useContext(LinkedListContext)

  const _handleChange = (messageType) => () => {
    _handleSelectedTypeMessageElementChange(messageType)
  }

  const _handleCancelButtonClick = () => {
    closeModal()
  }

  const _handleNextButtonClick = () => {
    _handleGoNext()
  }

  return (
    <>
      <h3 className='text-2xl font-bold'>Selección del tipo de mensaje</h3>

      <section className='flex flex-col gap-2'>
        <div
          onClick={_handleChange('invitation')}
          className='border border-slate-400 p-2 flex gap-2 items-center'
        >
          <input
            type='radio'
            name='messageType'
            value='invitation'
            id='invitation'
            checked={selectedTypeMessage === 'invitation'}
            onChange={_handleChange('invitation')}
            className='border border-slate-400'
          />
          <label
            htmlFor='invitation'
            className='text-lg text-slate-400'
          >
            Invitación
          </label>
        </div>
        <div
          onClick={_handleChange('reminder')}
          className='border border-slate-400 p-2 flex gap-2 items-center'
        >
          <input
            type='radio'
            name='messageType'
            value='reminder'
            id='reminder'
            checked={selectedTypeMessage === 'reminder'}
            onChange={_handleChange('reminder')}
            className='border border-slate-400'
          />
          <label
            htmlFor='reminder'
            className='text-lg text-slate-400'
          >
            Recordatorio de proceso
          </label>
        </div>
        <div
          onClick={_handleChange('custom')}
          className='border border-slate-400 p-2 flex gap-2 items-center'
        >
          <input
            type='radio'
            name='messageType'
            value='custom'
            id='custom'
            checked={selectedTypeMessage === 'custom'}
            onChange={_handleChange('custom')}
            className='border border-slate-400'
          />
          <label
            htmlFor='custom'
            className='text-lg text-slate-400'
          >
            Personalizado
          </label>
        </div>
      </section>

      <section className='flex justify-end gap-2'>
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
      </section>
    </>
  )
}
