import { useContext } from 'react'
import { LinkedListContext } from '../context/LinkedListContext'
import { MessagingFormButtonsWrapper, MessagingFormTitle } from './'

export const TextMessageForm = () => {
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
      <MessagingFormTitle title='Mensaje de Texto' />

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
