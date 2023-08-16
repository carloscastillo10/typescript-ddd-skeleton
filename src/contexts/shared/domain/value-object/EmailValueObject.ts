import { InvalidArgumentError } from './InvalidArgumentError'

abstract class EmailValueObject {
  readonly value: string
  private readonly emailRegex: RegExp

  constructor(value: string) {
    this.emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
    this.ensureIsValidEmail(value)
    this.value = value
  }

  private ensureIsValidEmail(email: string): void {
    if (!this.emailRegex.test(email)) {
      throw new InvalidArgumentError(`The <${email}> is an invalid e-mail`)
    }
  }

  toString(): string {
    return this.value
  }
}

export { EmailValueObject }
