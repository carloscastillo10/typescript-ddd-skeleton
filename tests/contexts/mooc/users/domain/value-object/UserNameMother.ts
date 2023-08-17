import { UserName } from '@contexts-mooc-users/domain/value-objects/UserName'
import { NameMother } from '@test-contexts-shared/domain/NameMother'

class UserNameMother {
  static create(value: string): UserName {
    return new UserName(value)
  }

  static random(): UserName {
    return this.create(NameMother.random())
  }
}

export { UserNameMother }
