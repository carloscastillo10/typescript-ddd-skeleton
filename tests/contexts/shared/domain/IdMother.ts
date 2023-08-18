import { MotherCreator } from '@test-contexts-shared/domain/MotherCreator'

class IdMother {
  static random(): string {
    return MotherCreator.random().database.mongodbObjectId()
  }
}

export { IdMother }
