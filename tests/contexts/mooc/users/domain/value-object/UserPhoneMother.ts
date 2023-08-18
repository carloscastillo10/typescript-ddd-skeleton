import { UserPhone } from '@contexts-mooc-users/domain/value-objects/UserPhone'
import { PhoneMother } from '@test-contexts-shared/domain/PhoneMother'

class UserPhoneMother {
  static create(value: string): UserPhone {
    return new UserPhone(value)
  }

  static random(): UserPhone {
    return this.create(PhoneMother.random())
  }
}

export { UserPhoneMother }
