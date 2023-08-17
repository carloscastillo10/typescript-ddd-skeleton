import { UserId } from '@contexts-mooc-shared/domain/users/UserId'
import { IdMother } from '@test-contexts-shared/domain/IdMother'

class UserIdMother {
  static create(value: string): UserId {
    return new UserId(value)
  }

  static random(): UserId {
    return this.create(IdMother.random())
  }
}

export { UserIdMother }
