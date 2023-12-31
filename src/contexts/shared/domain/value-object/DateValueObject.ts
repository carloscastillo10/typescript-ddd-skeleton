import { InvalidArgumentError } from '../exceptions/InvalidArgumentError'

const DATE_REGEX = /^(0[1-9]|[1-2]\d|3[01])(\/)(0[1-9]|1[012])\2(\d{4})$/
const currentYear: number = new Date().getFullYear()

abstract class DateValueObject {
  readonly value: string

  constructor(value: string) {
    this.value = value
  }

  /**
   * Check that the date is in the dd/mm/yyyy format
   * Check that the days are not greater than 31
   * Check that the months are not greater than 12
   * Check that the days are not greater than the days of the month
   * Check that the year is not greater than the current year
   * @param date : string
   */
  private ensureIsValidDate(date: string): void {
    if (!DATE_REGEX.test(date)) {
      throw new InvalidArgumentError(`The date <${date}> is an invalid date, the expected format is dd/mm/yyyy`)
    }

    const [day, month, year] = date.split('/').map(value => +value)
    const daysOfMonth = new Date(year, month, 0).getDate()

    if (day > daysOfMonth) {
      throw new InvalidArgumentError(`The date <${date}> is an invalid date`)
    }

    if (year > currentYear) {
      throw new InvalidArgumentError(`The date <${date}> is an invalid date`)
    }
  }

  toString(): string {
    return this.value
  }
}

export { DateValueObject }
