import { UserId } from '@contexts-mooc-shared/users/UserId'
import { User } from '@contexts-mooc-users/domain/User'

export interface UserRepository {
  save: (user: User) => Promise<void>
  list: () => Promise<User[]>
  find: (id: UserId) => Promise<User | undefined>
  update: (id: UserId, user: User) => Promise<void>
  delete: (id: UserId) => Promise<void>
}
