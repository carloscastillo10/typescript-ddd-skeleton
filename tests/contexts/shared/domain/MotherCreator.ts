import { Faker, faker } from '@faker-js/faker'

class MotherCreator {
  static random(): Faker {
    return faker
  }
}

export { MotherCreator }
