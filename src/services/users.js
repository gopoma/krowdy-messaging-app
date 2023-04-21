import { users } from '../mocks'
import { sleep } from '../helpers'

export class UsersService {
  async getAll () {
    await sleep(750)

    return Promise.resolve(users)
  }
}
