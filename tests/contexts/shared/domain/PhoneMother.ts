import { MotherCreator } from '@test-contexts-shared/domain/MotherCreator'

class PhoneMother {
  static random(): string {
    return MotherCreator.random().phone.number('+593 9########')
  }
}

export { PhoneMother }
