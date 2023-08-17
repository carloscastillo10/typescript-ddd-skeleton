import { compareSync, hashSync } from 'bcrypt'

abstract class PasswordValueObject {
  readonly value: string

  constructor(value: string) {
    this.value = this.encrypt(value)
  }

  private encrypt(value: string): string {
    return hashSync(value, 10)
  }

  equalsTo(other: PasswordValueObject): boolean {
    return compareSync(other.value, this.value)
  }

  toString(): string {
    return this.value
  }
}

export { PasswordValueObject }
