import { useEffect } from 'react'
import { Layout } from '../layouts'
import { useModalStore, useReceiversStore, useUsersStore } from '../hooks'

export const MessagingPage = () => {
  const { users, startLoadingUsers } = useUsersStore()
  const { receivers, hasReceivers, toggleReceiver } = useReceiversStore()
  const { openModal } = useModalStore()

  useEffect(() => {
    startLoadingUsers()
  }, [])

  const _handleToggle = (toggledUser) => () => {
    toggleReceiver(toggledUser)
  }

  const _handleSendMessageElementClick = () => {
    openModal()
  }

  return (
    <Layout>
      <h1 className='text-3xl font-bold py-4 text-center'>Aplicación de Mensajería</h1>

      <section>
        {
          users.map((user) => (
            <article
              key={ user.id }
              onClick={_handleToggle(user)}
              className='flex gap-4 items-center p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer'
            >
              <section>
                <input
                  type='checkbox'
                  onChange={_handleToggle(user)}
                  checked={ receivers.some((receiver) => receiver.id === user.id) }
                  className='w-4 h-4'
                />
              </section>
              <section className='text-xl'>
                { user.fullname }
              </section>
            </article>
          ))
        }
      </section>

      {
        (hasReceivers) && <button
          onClick={_handleSendMessageElementClick}
          className='fixed bottom-4 right-4 px-3 py-2 bg-blue-600 hover:bg-blue-800 transition-colors text-white font-bold'
        >
          Enviar mensaje
        </button>
      }
    </Layout>
  )
}
