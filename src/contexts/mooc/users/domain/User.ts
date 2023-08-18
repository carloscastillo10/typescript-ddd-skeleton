import { UserId } from '@contexts-mooc-shared/domain/users/UserId'
import { UserBirthdate } from '@contexts-mooc-users/domain/value-objects/UserBirthdate'
import { UserEmail } from '@contexts-mooc-users/domain/value-objects/UserEmail'
import { UserHeight } from '@contexts-mooc-users/domain/value-objects/UserHeight'
import { UserLastname } from '@contexts-mooc-users/domain/value-objects/UserLastname'
import { UserName } from '@contexts-mooc-users/domain/value-objects/UserName'
import { UserPassword } from '@contexts-mooc-users/domain/value-objects/UserPassword'
import { UserPhone } from '@contexts-mooc-users/domain/value-objects/UserPhone'
import { UserWeight } from '@contexts-mooc-users/domain/value-objects/UserWeight'
import { AggregateRoot } from '@contexts-shared-domain/AggregateRoot'

class User extends AggregateRoot {
  readonly id: UserId
  readonly name: UserName
  readonly lastname: UserLastname
  readonly email: UserEmail
  password: UserPassword
  readonly phone: UserPhone
  readonly birthdate: UserBirthdate
  readonly height: UserHeight
  readonly weight: UserWeight

  constructor(id: UserId, name: UserName, lastname: UserLastname, email: UserEmail, password: UserPassword, phone: UserPhone, birthdate: UserBirthdate, height: UserHeight, weight: UserWeight) {
    super()
    this.id = id
    this.name = name
    this.lastname = lastname
    this.email = email
    this.password = password
    this.phone = phone
    this.birthdate = birthdate
    this.height = height
    this.weight = weight
  }

  static fromPrimitives(plainData: { id: string; name: string; lastname: string; email: string; password: string; phone: string; birthdate: string; height: number; weight: number }): User {
    return new User(
      new UserId(plainData.id),
      new UserName(plainData.name),
      new UserLastname(plainData.lastname),
      new UserEmail(plainData.email),
      new UserPassword(plainData.password),
      new UserPhone(plainData.phone),
      new UserBirthdate(plainData.birthdate),
      new UserHeight(plainData.height),
      new UserWeight(plainData.weight),
    )
  }

  toPrimitives(): object {
    return {
      id: this.id.value,
      name: this.name.value,
      lastname: this.lastname.value,
      email: this.email.value,
      password: this.password.value,
      phone: this.phone.value,
      birthdate: this.birthdate.value,
      height: this.height.value,
      weight: this.weight.value,
    }
  }
}

export { User }
