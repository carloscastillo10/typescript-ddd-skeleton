import { UserCreator } from '@contexts-mooc-users/application/UserCreator'
import { UserRepositoryMook } from '@test-contexts-mooc/users/__mooks__/UserRepositoryMook'
import { CreateUserRequestMother } from '@test-contexts-mooc/users/application/CreateUserRequestMother'
import { UserMother } from '@test-contexts-mooc/users/domain/UserMother'

let repository: UserRepositoryMook
let creator: UserCreator

beforeEach(() => {
  repository = new UserRepositoryMook()
  creator = new UserCreator(repository)
})

describe('UserCreator', () => {
  it('should create a valid user', async () => {
    const request = CreateUserRequestMother.random()
    const user = UserMother.fromRequest(request)

    await creator.run(request)

    repository.assertSaveHaveBeenCalledWith(user)
  })
})
