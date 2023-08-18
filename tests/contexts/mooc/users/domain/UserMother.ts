import { UserId } from '@contexts-mooc-shared/domain/users/UserId'
import { CreateUserRequest } from '@contexts-mooc-users/application/CreateUserRequest'
import { User } from '@contexts-mooc-users/domain/User'
import { UserBirthdate } from '@contexts-mooc-users/domain/value-objects/UserBirthdate'
import { UserEmail } from '@contexts-mooc-users/domain/value-objects/UserEmail'
import { UserHeight } from '@contexts-mooc-users/domain/value-objects/UserHeight'
import { UserLastname } from '@contexts-mooc-users/domain/value-objects/UserLastname'
import { UserName } from '@contexts-mooc-users/domain/value-objects/UserName'
import { UserPassword } from '@contexts-mooc-users/domain/value-objects/UserPassword'
import { UserPhone } from '@contexts-mooc-users/domain/value-objects/UserPhone'
import { UserWeight } from '@contexts-mooc-users/domain/value-objects/UserWeight'
import { UserIdMother } from '@test-contexts-mooc/shared/domain/users/UserIdMother'
import { UserBirthdateMother } from '@test-contexts-mooc/users/domain/value-object/UserBirthdateMother'
import { UserEmailMother } from '@test-contexts-mooc/users/domain/value-object/UserEmailMother'
import { UserHeightMother } from '@test-contexts-mooc/users/domain/value-object/UserHeightMother'
import { UserLastnameMother } from '@test-contexts-mooc/users/domain/value-object/UserLastnameMother'
import { UserNameMother } from '@test-contexts-mooc/users/domain/value-object/UserNameMother'
import { UserPasswordMother } from '@test-contexts-mooc/users/domain/value-object/UserPasswordMother'
import { UserPhoneMother } from '@test-contexts-mooc/users/domain/value-object/UserPhoneMother'
import { UserWeightMother } from '@test-contexts-mooc/users/domain/value-object/UserWeightMother'

class UserMother {
  static create(
    id: UserId,
    name: UserName,
    lastname: UserLastname,
    email: UserEmail,
    password: UserPassword,
    phone: UserPhone,
    birthdate: UserBirthdate,
    height: UserHeight,
    weight: UserWeight,
  ): User {
    return new User(id, name, lastname, email, password, phone, birthdate, height, weight)
  }

  static fromRequest(request: CreateUserRequest): User {
    return this.create(
      UserIdMother.create(request.id),
      UserNameMother.create(request.name),
      UserLastnameMother.create(request.lastname),
      UserEmailMother.create(request.email),
      UserPasswordMother.create(request.password),
      UserPhoneMother.create(request.phone),
      UserBirthdateMother.create(request.birthdate),
      UserHeightMother.create(request.height),
      UserWeightMother.create(request.weight),
    )
  }

  static random(): User {
    return this.create(
      UserIdMother.random(),
      UserNameMother.random(),
      UserLastnameMother.random(),
      UserEmailMother.random(),
      UserPasswordMother.random(),
      UserPhoneMother.random(),
      UserBirthdateMother.random(),
      UserHeightMother.random(),
      UserWeightMother.random(),
    )
  }
}

export { UserMother }
