import { UserEmail } from '@contexts-mooc-users/domain/value-objects/UserEmail'
import { EmailMother } from '@test-contexts-shared/domain/EmailMother'

class UserEmailMother {
  static create(value: string): UserEmail {
    return new UserEmail(value)
  }

  static random(): UserEmail {
    return this.create(EmailMother.random())
  }
}

export { UserEmailMother }
