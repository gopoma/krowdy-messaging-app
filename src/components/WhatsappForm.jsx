import { useContext } from 'react'
import { MessagingFormContext } from '../context/MessagingFormContext'
import { LinkedListContext } from '../context/LinkedListContext'
import { MessagingFormButtonsWrapper, MessagingFormInputsWrapper, MessagingFormTitle } from './'

export const WhatsappForm = () => {
  const {
    whatsapp: { message },
    whatsappValid,
    _handleMessagingFormTextInputChange
  } = useContext(MessagingFormContext)
  const { _handleGoBack } = useContext(LinkedListContext)

  const _handleGoBackButtonClick = () => {
    _handleGoBack()
  }

  return (
    <>
      <MessagingFormTitle title='Whatsapp' />

      <MessagingFormInputsWrapper>
        <section className='flex flex-col gap-2 text-xl'>
          <label className='text-xl font-light'>Mensaje</label>
          <textarea
            placeholder='Escribe...'
            rows={4}
            className='w-full border border-slate-400 rounded p-2'
            name='message'
            value={ message }
            onChange={_handleMessagingFormTextInputChange('whatsapp')}
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
        <button
          onClick={ () => console.log('Enviar') }
          disabled={ !whatsappValid }
          className='border border-blue-400 bg-blue-400 hover:bg-blue-600 transition-colors text-white py-2 px-3 disabled:border-blue-200 disabled:bg-blue-200 disabled:cursor-not-allowed'
        >
          Enviar
        </button>
      </MessagingFormButtonsWrapper>
    </>
  )
}
