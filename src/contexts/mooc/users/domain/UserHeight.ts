import { UserHeightLessThanAllowed } from '@contexts-mooc-users/domain/UserHeightLessThanAllowed'
import { IntValueObject } from '@contexts-shared-domain/value-object/IntValueObject'

class UserHeight extends IntValueObject {
  constructor(height: number) {
    super(height)
    this.ensureHeightIsAboveThanZeroCentimeters(height)
  }

  private ensureHeightIsAboveThanZeroCentimeters(height: number): void {
    if (height <= 0) {
      throw new UserHeightLessThanAllowed(`The User Height <${height}> is less than 0 centimeters`)
    }
  }
}

export { UserHeight }
