import { StringValueObject } from '@contexts-shared-domain/value-object/StringValueObject'

class UserPhone extends StringValueObject {
  constructor(phone: string) {
    super(phone)
  }
}

export { UserPhone }
