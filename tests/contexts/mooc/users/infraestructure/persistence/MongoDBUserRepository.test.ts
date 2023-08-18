import { container } from '@apps-mooc-backend/dependency-injection'
import { UserRepository } from '@contexts-mooc-users/domain/UserRepository'
import { UserMother } from '@test-contexts-mooc/users/domain/UserMother'
import { EnvironmentArranger } from '@test-contexts-shared/infraestructure/arranger/EnvironmentArranger'

const repository: UserRepository = container.get('UserRepository')
const environmentArranger: Promise<EnvironmentArranger> = container.get('EnvironmentArranger')

beforeEach(async () => {
  await (await environmentArranger).arrange() // Clean database
})

afterAll(async () => {
  await (await environmentArranger).arrange()
  await (await environmentArranger).close() // Close connection
})

describe('UserRepository', () => {
  describe('#save', () => {
    it('should save a user', async () => {
      const user = UserMother.random()
      await repository.save(user)
    })
  })
})
