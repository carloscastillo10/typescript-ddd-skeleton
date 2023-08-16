import { EmailValueObject } from '@contexts-shared-domain/value-object/EmailValueObject'

class UserEmail extends EmailValueObject {
  constructor(email: string) {
    super(email)
  }
}

export { UserEmail }
