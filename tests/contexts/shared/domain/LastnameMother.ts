import { MotherCreator } from '@test-contexts-shared/domain/MotherCreator'

class LastnameMother {
  static random(): string {
    return MotherCreator.random().person.lastName()
  }
}

export { LastnameMother }
