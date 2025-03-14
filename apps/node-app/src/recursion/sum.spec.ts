import { sum } from './sum'

describe('sum', () => {
  it('should add number 1 to 4 correctly', () => {
    expect(sum(4)).toBe(10)
  })
  it('should add number 1 to 12 correctly', () => {
    expect(sum(12)).toBe(78)
  })
})
