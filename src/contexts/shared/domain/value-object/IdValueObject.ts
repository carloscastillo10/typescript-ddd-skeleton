import { InvalidArgumentError } from '@contexts-shared-domain/exceptions/InvalidArgumentError'
import { ObjectId } from 'bson'
abstract class IdValueObject {
  readonly value: string

  constructor(value: string) {
    this.ensureIsValidId(value)
    this.value = value
  }

  private ensureIsValidId(id: string): void {
    if (!ObjectId.isValid(id)) {
      throw new InvalidArgumentError(`The id <${id}> is not allowed`)
    }
  }

  toString(): string {
    return this.value
  }
}

export { IdValueObject }
