import { MotherCreator } from '@test-contexts-shared/domain/MotherCreator'

class NameMother {
  static random(): string {
    return MotherCreator.random().person.firstName()
  }
}

export { NameMother }
