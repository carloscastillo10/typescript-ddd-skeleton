import { MotherCreator } from '@test-contexts-shared/domain/MotherCreator'

class PasswordMother {
  static random(): string {
    return MotherCreator.random().internet.password()
  }
}

export { PasswordMother }
