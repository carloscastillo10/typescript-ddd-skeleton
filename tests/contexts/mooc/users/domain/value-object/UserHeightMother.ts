import { UserHeight } from '@contexts-mooc-users/domain/value-objects/UserHeight'
import { FloatMother } from '@test-contexts-shared/domain/FloatMother'

class UserHeightMother {
  static create(value: number): UserHeight {
    return new UserHeight(value)
  }

  static random(): UserHeight {
    return this.create(FloatMother.random({ minNumber: 0.1, maxNumber: 2.0 }))
  }
}

export { UserHeightMother }
