import { MotherCreator } from '@test-contexts-shared/domain/MotherCreator'

class EmailMother {
  static random(): string {
    return MotherCreator.random().internet.email()
  }
}

export { EmailMother }
