import { UserId } from '@contexts-mooc-shared/domain/users/UserId'
import { User } from '@contexts-mooc-users/domain/User'
import { UserRepository } from '@contexts-mooc-users/domain/UserRepository'

class UserRepositoryMook implements UserRepository {
  private readonly saveMook: jest.Mock
  private readonly listMook: jest.Mock
  private readonly findMook: jest.Mock
  private readonly updateMook: jest.Mock
  private readonly deleteMook: jest.Mock

  constructor() {
    this.saveMook = jest.fn()
    this.listMook = jest.fn()
    this.findMook = jest.fn()
    this.updateMook = jest.fn()
    this.deleteMook = jest.fn()
  }

  async save(user: User): Promise<void> {
    await this.saveMook(user)
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

  assertSaveHaveBeenCalledWith(expectedUser: User): void {
    expect(this.saveMook).toHaveBeenCalledWith(expectedUser)
  }
}

export { UserRepositoryMook }
