import { UserId } from '@contexts-mooc-shared/domain/users/UserId'
import { User } from '@contexts-mooc-users/domain/User'
import { UserRepository } from '@contexts-mooc-users/domain/UserRepository'
import { UserSchema } from '@contexts-mooc-users/infraestructure/persistence/UserSchema'
import { MongoDBRepository } from '@contexts-shared-infraestructure/persistence/mongodb/MongoDBRepository'
import { Schema } from 'mongoose'

class MongoDBUserRepository extends MongoDBRepository<User> implements UserRepository {
  async save(user: User): Promise<void> {
    return await this.persist(user.id.value, user)
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

  protected modelName(): string {
    return 'users'
  }

  protected schema(): Schema<User> {
    return UserSchema
  }
}

export { MongoDBUserRepository }
