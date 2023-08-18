import { UserId } from '@contexts-mooc-shared/domain/users/UserId'
import { User } from '@contexts-mooc-users/domain/User'
import { Nullable } from '@contexts-shared-domain/Nullable'

export interface UserRepository {
  save: (user: User) => Promise<void>
  list: () => Promise<User[]> | Promise<void>
  find: (id: UserId) => Promise<Nullable<User>> | Promise<void>
  update: (id: UserId, user: User) => Promise<void>
  delete: (id: UserId) => Promise<void>
}
