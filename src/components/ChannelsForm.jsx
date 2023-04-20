import { useState } from 'react'

export const ChannelsForm = () => {
  const [position, setPosition] = useState(1)
  const [selectedChannels, setSelectedChannels] = useState(new Set())

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

  return (
    <>
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
          onClick={_handleToggleSelectedChannel('text')}
        >
          <input
            type='checkbox'
            id='text'
            checked={selectedChannels.has('text')}
            onChange={_handleToggleSelectedChannel('text')}
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
    </>
  )
}
