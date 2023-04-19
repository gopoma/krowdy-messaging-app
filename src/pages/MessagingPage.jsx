import { useMemo, useState } from 'react'
import { Layout } from '../layouts/Layout'
import { users as usersMock } from '../mocks'

export const MessagingPage = () => {
  const [users, setUsers] = useState(usersMock)
  const hasUsersToSendMessages = useMemo(() => {
    const selectedUsers = users.filter((user) => user.selected)

    return selectedUsers.length !== 0
  }, [users])

  const _handleSelectionToggle = (currentToggledUser) => () => {
    const usersWithToggledOne = users.map((user) => {
      if (user.id === currentToggledUser.id) {
        return {
          ...user,
          selected: !user.selected
        }
      }

      return { ...user }
    })

    setUsers(usersWithToggledOne)
  }

  return (
    <Layout>
      <h1 className='text-3xl font-bold py-4 text-center'>Aplicación de Mensajería</h1>

      <section>
        {
          users.map((user) => (
            <article
              key={ user.id }
              onClick={_handleSelectionToggle(user)}
              className='flex gap-4 p-4 bg-slate-200 hover:bg-slate-300 cursor-pointer'
            >
              <section>
                <input
                  type='checkbox'
                  onChange={_handleSelectionToggle(user)}
                  checked={Boolean(user.selected)}
                />
              </section>
              <section>
                { user.fullname }
              </section>
            </article>
          ))
        }
      </section>

      {
        (hasUsersToSendMessages) && <button
          onClick={() => {}}
          className='fixed bottom-4 right-4 px-3 py-2 bg-blue-600 hover:bg-blue-800 transition-colors text-white font-bold'
        >
          Enviar mensaje
        </button>
      }
    </Layout>
  )
}
