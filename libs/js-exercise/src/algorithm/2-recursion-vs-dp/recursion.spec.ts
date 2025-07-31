import { sum } from './recursion'

describe('recursion', () => {
  it('should sum up numbers', () => {
    // 100 + 1 * (100 / 2)
    expect(sum(100)).toBe(5050)
  })
})
