import { useContext } from 'react'
import { MessagingFormContext } from '../context/MessagingFormContext'
import { LinkedListContext } from '../context/LinkedListContext'
import {
  MessagingFormButtonsWrapper,
  MessagingFormInputsWrapper,
  MessagingFormTitle
} from './'

export const EmailForm = () => {
  const {
    email: { subject, message },
    emailValid,
    _handleMessagingFormTextInputChange
  } = useContext(MessagingFormContext)

  const {
    lastPositionReached,
    _handleGoBack,
    _handleGoNext
  } = useContext(LinkedListContext)

  const _handleGoBackButtonClick = () => {
    _handleGoBack()
  }

  const _handleNextButtonClick = () => {
    _handleGoNext()
  }

  return (
    <>
      <MessagingFormTitle title='Correo Electrónico' />

      <MessagingFormInputsWrapper>
        <section className='flex flex-col gap-2'>
          <label className='text-xl font-light'>Asunto</label>
          <input
            type='text'
            placeholder='Escribe...'
            className='border border-slate-400 rounded p-2 text-xl'
            name='subject'
            value={subject}
            onChange={_handleMessagingFormTextInputChange('email')}
          />
        </section>
        <section className='flex flex-col gap-2 text-xl'>
          <label className='text-xl font-light'>Mensaje</label>
          <textarea
            placeholder='Escribe...'
            rows={4}
            className='w-full border border-slate-400 rounded p-2'
            name='message'
            value={message}
            onChange={_handleMessagingFormTextInputChange('email')}
          ></textarea>
        </section>
      </MessagingFormInputsWrapper>

      <MessagingFormButtonsWrapper>
        <button
          className='border border-blue-400 py-2 px-3 text-blue-400 hover:bg-blue-400 hover:text-white transition-colors'
          onClick={ _handleGoBackButtonClick }
        >
          Atrás
        </button>
        {
          lastPositionReached
            ? <button
                onClick={ () => console.log('Enviar') }
                disabled={ !emailValid }
                className='border border-blue-400 bg-blue-400 hover:bg-blue-600 transition-colors text-white py-2 px-3 disabled:border-blue-200 disabled:bg-blue-200 disabled:cursor-not-allowed'
              >
                Enviar
              </button>
            : <button
                onClick={ _handleNextButtonClick }
                disabled={ !emailValid }
                className='border border-blue-400 bg-blue-400 hover:bg-blue-600 transition-colors text-white py-2 px-3 disabled:border-blue-200 disabled:bg-blue-200 disabled:cursor-not-allowed'
              >
                Siguiente
              </button>
        }
      </MessagingFormButtonsWrapper>
    </>
  )
}
