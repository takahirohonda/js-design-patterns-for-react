import { getDaysFromGivenMonth } from './calendar.utils'

describe('calendar.utils', () => {
  describe('getDaysFromGivenMonth', () => {
    it.each([
      [2024, 0, 31], // January (month 0) of 2024 has 31 days
      [2024, 1, 29], // February (month 1) of 2024 has 29 days (Leap Year)
      [2024, 2, 31], // March (month 2) has 31 days
      [2024, 3, 30], // April (month 3) has 30 days
      [2024, 4, 31], // May (month 4) has 31 days
      [2024, 5, 30], // June (month 5) has 30 days
      [2024, 6, 31], // July (month 6) has 31 days
      [2024, 7, 31], // August (month 7) has 31 days
      [2024, 8, 30], // September (month 8) has 30 days
      [2024, 9, 31], // October (month 9) has 31 days
      [2024, 10, 30], // November (month 10) has 30 days
      [2024, 11, 31], // December (month 11) has 31 days
    ])(
      'should return correct number of days for %d-%d',
      (year, month, expectedDays) => {
        const result = getDaysFromGivenMonth(year, month)
        expect(result).toBe(expectedDays)
      }
    )
  })
})
