import { UserId } from '@contexts-mooc-shared/users/UserId'
import { CreateUserRequest } from '@contexts-mooc-users/application/CreateUserRequest'
import { User } from '@contexts-mooc-users/domain/User'
import { UserRepository } from '@contexts-mooc-users/domain/UserRepository'
import { UserBirthdate } from '@contexts-mooc-users/domain/value-objects/UserBirthdate'
import { UserEmail } from '@contexts-mooc-users/domain/value-objects/UserEmail'
import { UserHeight } from '@contexts-mooc-users/domain/value-objects/UserHeight'
import { UserLastname } from '@contexts-mooc-users/domain/value-objects/UserLastname'
import { UserName } from '@contexts-mooc-users/domain/value-objects/UserName'
import { UserPassword } from '@contexts-mooc-users/domain/value-objects/UserPassword'
import { UserPhone } from '@contexts-mooc-users/domain/value-objects/UserPhone'
import { UserWeight } from '@contexts-mooc-users/domain/value-objects/UserWeight'

class UserCreator {
  private readonly repository: UserRepository

  constructor(repository: UserRepository) {
    this.repository = repository
  }

  async run(request: CreateUserRequest): Promise<void> {
    const user = new User(
      new UserId(request.id),
      new UserName(request.name),
      new UserLastname(request.lastname),
      new UserEmail(request.email),
      new UserPassword(request.password),
      new UserPhone(request.phone),
      new UserBirthdate(request.birthdate),
      new UserHeight(request.height),
      new UserWeight(request.weight),
    )

    return await this.repository.save(user)
  }
}

export { UserCreator }
