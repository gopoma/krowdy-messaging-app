import { users } from '../mocks'

const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, [ms])
  })
}

export class UsersService {
  async getAll () {
    await sleep(750)

    return Promise.resolve(users)
  }
}
