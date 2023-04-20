import { useContext } from 'react'
import { LinkedListContext } from '../context/LinkedListContext'
import {
  MessagingFormButtonsWrapper,
  MessagingFormInputsWrapper,
  MessagingFormTitle
} from './'

export const EmailForm = () => {
  const {
    lastPositionReached,
    _handleGoBack,
    _handleGoNext
  } = useContext(LinkedListContext)

  console.log(lastPositionReached)

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
          />
        </section>
        <section className='flex flex-col gap-2 text-xl'>
          <label className='text-xl font-light'>Mensaje</label>
          <textarea
            placeholder='Escribe...'
            rows={4}
            className='w-full border border-slate-400 rounded p-2'
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
                disabled={ true }
                className='border border-blue-400 bg-blue-400 hover:bg-blue-600 transition-colors text-white py-2 px-3 disabled:border-blue-200 disabled:bg-blue-200 disabled:cursor-not-allowed'
              >
                Enviar
              </button>
            : <button
                onClick={ _handleNextButtonClick }
                disabled={ false }
                className='border border-blue-400 bg-blue-400 hover:bg-blue-600 transition-colors text-white py-2 px-3 disabled:border-blue-200 disabled:bg-blue-200 disabled:cursor-not-allowed'
              >
                Siguiente
              </button>
        }
      </MessagingFormButtonsWrapper>
    </>
  )
}
