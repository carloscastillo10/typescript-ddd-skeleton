import { validate } from 'email-validator'
import { InvalidArgumentError } from './InvalidArgumentError'

abstract class EmailValueObject {
  readonly value: string

  constructor(value: string) {
    this.ensureIsValidEmail(value)
    this.value = value
  }

  private ensureIsValidEmail(email: string): void {
    if (!validate(email)) {
      throw new InvalidArgumentError(`The <${email}> is an invalid e-mail`)
    }
  }

  toString(): string {
    return this.value
  }
}

export { EmailValueObject }
