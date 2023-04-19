import { onLoadUsers } from '../store'
import { useAppDispatch, useAppSelector } from './useStore.js'
import { UsersService } from '../services'

const usersServ = new UsersService()

export const useUsersStore = () => {
  const dispatch = useAppDispatch()
  const { users } = useAppSelector((state) => state.users)

  const startLoadingUsers = async () => {
    try {
      const users = await usersServ.getAll()

      dispatch(onLoadUsers(users))
    } catch (error) {
      console.log('Error cargando usuarios')
      console.log(error)
    }
  }

  return {
    users,

    startLoadingUsers
  }
}
