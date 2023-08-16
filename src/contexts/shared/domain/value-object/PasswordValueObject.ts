import { compare, hash } from 'bcrypt'

abstract class PasswordValueObject {
  readonly value: string | Promise<string>

  constructor(value: string) {
    this.value = this.encrypt(value)
  }

  private async encrypt(value: string): Promise<string> {
    return await hash(value, 10)
  }

  async equalsTo(other: PasswordValueObject): Promise<boolean> {
    return await compare(other.value as string, this.value as string)
  }

  toString(): string | Promise<string> {
    return this.value
  }
}

export { PasswordValueObject }
