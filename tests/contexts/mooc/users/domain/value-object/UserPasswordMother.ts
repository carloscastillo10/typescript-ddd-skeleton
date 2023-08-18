import { UserPassword } from '@contexts-mooc-users/domain/value-objects/UserPassword'
import { PasswordMother } from '@test-contexts-shared/domain/PasswordMother'

class UserPasswordMother {
  static create(value: string): UserPassword {
    return new UserPassword(value)
  }

  static random(): UserPassword {
    return this.create(PasswordMother.random())
  }
}

export { UserPasswordMother }
