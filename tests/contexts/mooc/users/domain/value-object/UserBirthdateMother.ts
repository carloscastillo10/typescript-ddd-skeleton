import { UserBirthdate } from '@contexts-mooc-users/domain/value-objects/UserBirthdate'
import { DateMother } from '@test-contexts-shared/domain/DateMother'

class UserBirthdateMother {
  static create(value: string): UserBirthdate {
    return new UserBirthdate(value)
  }

  static random(): UserBirthdate {
    return this.create(DateMother.random({ fromDate: '1997-01-01', toDate: '2015-12-31' }))
  }
}

export { UserBirthdateMother }
