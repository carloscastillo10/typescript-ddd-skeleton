import { MotherCreator } from '@test-contexts/shared/domain/MotherCreator'

class ObjectIdMother {
  static random(): string {
    return MotherCreator.random().database.mongodbObjectId()
  }
}

export { ObjectIdMother }
