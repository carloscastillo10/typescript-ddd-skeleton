import { UserId } from '@contexts-mooc-shared/domain/users/UserId'
import { User } from '@contexts-mooc-users/domain/User'
import { UserRepository } from '@contexts-mooc-users/domain/UserRepository'
import { MongoDBRepository } from '@contexts-shared-infraestructure/persistence/mongodb/MongoDBRepository'

class MongoDBUserRepository extends MongoDBRepository<User> implements UserRepository {
  async save(user: User): Promise<void> {
    return await this.persist(user)
  }

  async list(): Promise<void> {
    //
  }

  async find(id: UserId): Promise<void> {
    //
  }

  async update(id: UserId, user: User): Promise<void> {
    //
  }

  async delete(id: UserId): Promise<void> {
    //
  }

  protected collectionName(): string {
    return 'users'
  }
}

export { MongoDBUserRepository }
