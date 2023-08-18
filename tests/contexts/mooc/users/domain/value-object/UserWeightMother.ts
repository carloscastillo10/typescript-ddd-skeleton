import { UserWeight } from '@contexts-mooc-users/domain/value-objects/UserWeight'
import { FloatMother } from '@test-contexts-shared/domain/FloatMother'

class UserWeightMother {
  static create(value: number): UserWeight {
    return new UserWeight(value)
  }

  static random(): UserWeight {
    return this.create(FloatMother.random({ minNumber: 20, maxNumber: 200 }))
  }
}

export { UserWeightMother }
