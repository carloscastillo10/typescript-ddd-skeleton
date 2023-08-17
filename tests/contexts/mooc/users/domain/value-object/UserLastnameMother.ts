import { UserLastname } from '@contexts-mooc-users/domain/value-objects/UserLastname'
import { LastnameMother } from '@test-contexts-shared/domain/LastnameMother'

class UserLastnameMother {
  static create(value: string): UserLastname {
    return new UserLastname(value)
  }

  static random(): UserLastname {
    return this.create(LastnameMother.random())
  }
}

export { UserLastnameMother }
