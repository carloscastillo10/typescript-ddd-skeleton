import { MotherCreator } from '@test-contexts-shared/domain/MotherCreator'

class DateMother {
  static random({ fromDate, toDate }: { fromDate: string; toDate: string }): string {
    const randomDate = MotherCreator.random()
      .date.between({
        from: fromDate,
        to: toDate,
      })
      .toLocaleString('en-US')

    return randomDate.split(',')[0].split('/').join('/')
  }
}

export { DateMother }
