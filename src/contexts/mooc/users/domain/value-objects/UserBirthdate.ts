import { UserAgeLessThanAllowed } from '@contexts-mooc-users/domain/exceptions/UserAgeLessThanAllowed'
import { DateValueObject } from '@contexts-shared-domain/value-object/DateValueObject'

const currentDate: Date = new Date()

class UserBirthdate extends DateValueObject {
  constructor(birthdate: string) {
    super(birthdate)
    this.ensureAgeIsAboveThanSevenYears(birthdate)
  }

  private ensureAgeIsAboveThanSevenYears(birthdate: string): void {
    const age = this.calculateAge(birthdate)
    if (age < 7) {
      throw new UserAgeLessThanAllowed(`The User Age <${age}> is less than 7 years`)
    }
  }

  private calculateAge(birthdate: string): number {
    const [birthDay, birthMonth, birthYear] = birthdate.split('/').map(value => +value)
    const day: number = currentDate.getDate()
    let month: number = currentDate.getMonth() + 1
    let year: number = currentDate.getFullYear()

    if (birthDay > day) {
      month -= 1
    }

    if (birthMonth > month) {
      year -= 1
    }

    return year - birthYear
  }
}

export { UserBirthdate }
