import { UserWeightLessThanAllowed } from '@contexts-mooc-users/domain/UserWeightLessThanAllowed'
import { IntValueObject } from '@contexts-shared-domain/value-object/IntValueObject'

class UserWeight extends IntValueObject {
  constructor(weight: number) {
    super(weight)
    this.ensureWeightIsAboveThanZeroCentimeters(weight)
  }

  private ensureWeightIsAboveThanZeroCentimeters(weight: number): void {
    if (weight <= 0) {
      throw new UserWeightLessThanAllowed(`The User Weight <${weight}> is less than 0 centimeters`)
    }
  }
}

export { UserWeight }
