import { coinChange } from './coinChange'

describe('coinChange', () => {
  it.each([
    [[3, 2, 1], 6, 2],
    [[5, 7], 1, -1],
    [[1, 2, 5], 11, 3],
    [[1, 6, 10], 12, 2],
  ])(
    'should return correct answer when the input is %s, target is: %i',
    (input, target, expected) => {
      expect(coinChange(input, target)).toBe(expected)
    }
  )
})
