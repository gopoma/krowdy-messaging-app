import { useState } from 'react'
import { useModalStore } from '../hooks'

export const TypeMessageForm = () => {
  const { closeModal } = useModalStore()
  const [selectedMessageType, setSelectedMessageType] = useState('')

  const _handleSelectedMessateTypeChange = (messageType) => () => {
    setSelectedMessageType(messageType)
  }

  const _handleCancelButtonClick = () => {
    closeModal()
  }

  const _handleNextButtonClick = () => {

  }

  return (
    <>
      <h3 className='text-2xl font-bold'>Selección del tipo de mensaje</h3>

      <section className='flex flex-col gap-2'>
        <div
          onClick={_handleSelectedMessateTypeChange('invitation')}
          className='border border-slate-400 p-2 flex gap-2 items-center'
        >
          <input
            type='radio'
            name='messageType'
            value='invitation'
            id='invitation'
            checked={selectedMessageType === 'invitation'}
            onChange={_handleSelectedMessateTypeChange('invitation')}
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
          onClick={_handleSelectedMessateTypeChange('reminder')}
          className='border border-slate-400 p-2 flex gap-2 items-center'
        >
          <input
            type='radio'
            name='messageType'
            value='reminder'
            id='reminder'
            checked={selectedMessageType === 'reminder'}
            onChange={_handleSelectedMessateTypeChange('reminder')}
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
          onClick={_handleSelectedMessateTypeChange('custom')}
          className='border border-slate-400 p-2 flex gap-2 items-center'
        >
          <input
            type='radio'
            name='messageType'
            value='custom'
            id='custom'
            checked={selectedMessageType === 'custom'}
            onChange={_handleSelectedMessateTypeChange('custom')}
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
          disabled={ selectedMessageType === '' }
          className='border border-blue-400 bg-blue-400 hover:bg-blue-600 transition-colors text-white py-2 px-3 disabled:border-blue-200 disabled:bg-blue-200 disabled:cursor-not-allowed'
        >
          Siguiente
        </button>
      </section>
    </>
  )
}
