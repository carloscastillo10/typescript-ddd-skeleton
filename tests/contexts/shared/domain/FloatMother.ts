import { MotherCreator } from '@test-contexts-shared/domain/MotherCreator'

class FloatMother {
  static random({ minNumber, maxNumber }: { minNumber: number; maxNumber: number }): number {
    return +MotherCreator.random().number.float({ min: minNumber, max: maxNumber }).toFixed(2)
  }
}

export { FloatMother }
