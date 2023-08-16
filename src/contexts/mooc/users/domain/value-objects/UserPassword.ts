import { PasswordValueObject } from '@contexts-shared-domain/value-object/PasswordValueObject'

class UserPassword extends PasswordValueObject {
  constructor(password: string) {
    super(password)
  }
}

export { UserPassword }
