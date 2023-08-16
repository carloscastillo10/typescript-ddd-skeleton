import { StringValueObject } from '@contexts-shared-domain/value-object/StringValueObject'

class UserName extends StringValueObject {
  constructor(name: string) {
    super(name)
  }
}

export { UserName }
