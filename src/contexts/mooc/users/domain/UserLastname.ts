import { StringValueObject } from '@contexts-shared-domain/value-object/StringValueObject'

class UserLastname extends StringValueObject {
  constructor(lastname: string) {
    super(lastname)
  }
}

export { UserLastname }
