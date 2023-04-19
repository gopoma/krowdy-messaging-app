import { useState } from 'react'
import { TemplateModal } from './TemplateModal'
import { useModalStore } from '../hooks/useModalStore'

export const CustomModal = () => {
  const [position, setPosition] = useState(1)
  const { closeModal } = useModalStore()
  const [selectedMessageType, setSelectedMessageType] = useState('')
  const [selectedChannels, setSelectedChannels] = useState(new Set())

  const _handleGoNext = () => {
    setPosition((prevPosition) => {
      return (prevPosition === 5) ? 5 : prevPosition + 1
    })
  }

  const _handleGoBack = () => {
    setPosition((prevPosition) => {
      return (prevPosition === 0) ? 0 : prevPosition - 1
    })
  }

  const _handleSelectedMessateTypeChange = (messageType) => () => {
    setSelectedMessageType(messageType)
  }

  const _handleToggleSelectedChannel = (channel) => () => {
    setSelectedChannels((prevSelectedChannels) => {
      const tmp = new Set(prevSelectedChannels)

      if (tmp.has(channel)) {
        tmp.delete(channel)
      } else {
        tmp.add(channel)
      }

      return new Set(tmp)
    })
  }

  const _handleCloseModal = () => {
    closeModal()
  }

  let component

  switch (position) {
    case 1: {
      component = (
        <>
          <section className='p-4 flex flex-col gap-4'>
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
                onClick={ _handleCloseModal }
              >
                Cancelar
              </button>
              <button
                onClick={_handleGoNext}
                disabled={selectedMessageType === ''}
                className='border border-blue-400 bg-blue-400 hover:bg-blue-600 transition-colors text-white py-2 px-3 disabled:border-blue-200 disabled:bg-blue-200 disabled:cursor-not-allowed'
              >
                Siguiente
              </button>
            </section>
          </section>
        </>
      )
      break
    }
    case 2: {
      component = <>
        <section className='p-4 flex flex-col gap-4'>
          <h3>Selección de canales</h3>
          <section>
            <div
              onClick={_handleToggleSelectedChannel('email')}
            >
              <input
                type='checkbox'
                id='email'
                checked={selectedChannels.has('email')}
                onChange={_handleToggleSelectedChannel('email')}
              />
              <label>Correo electrónico</label>
            </div>
            <div
              onClick={_handleToggleSelectedChannel('textMessage')}
            >
              <input
                type='checkbox'
                id='textMessage'
                checked={selectedChannels.has('textMessage')}
                onChange={_handleToggleSelectedChannel('textMessage')}
              />
              <label htmlFor='textMessage'>Mensaje de texto</label>
            </div>
            <div
              onClick={_handleToggleSelectedChannel('whatsapp')}
            >
              <input
                type='checkbox'
                id='whatsapp'
                checked={selectedChannels.has('whatsapp')}
                onChange={_handleToggleSelectedChannel('whatsapp')}
              />
              <label htmlFor='whatsapp'>Whatsapp</label>
            </div>
          </section>
          <section className='flex justify-end gap-2'>
            <button
              onClick={_handleGoBack}
              className='px-3 py-2 bg-slate-400'
            >
              Atrás
            </button>
            <button
              disabled={selectedChannels.size === 0}
              onClick={_handleGoNext}
              className='px-3 py-2 bg-slate-400 disabled:bg-black disabled:text-white disabled:cursor-not-allowed'
            >
              Siguiente
            </button>
          </section>
        </section>
      </>
      break
    }
    case 3: {
      component = <>
        <section>
          <button onClick={_handleGoBack}>Go to 3</button>
          <button onClick={_handleGoNext}>Go to 4</button>
        </section>
      </>
      break
    }
    case 4: {
      component = <>
        <section>
          <button onClick={_handleGoBack}>Go to 4</button>
          <button onClick={_handleGoNext}>Go to 5</button>
        </section>
      </>
      break
    }
    case 5: {
      component = <>
        <section>
          <button onClick={_handleGoBack}>Go to 4</button>
          <button onClick={_handleGoNext}>Nothing happens</button>
        </section>
      </>
      break
    }
  }

  return (
    <TemplateModal>
      { component }
    </TemplateModal>
  )
}
