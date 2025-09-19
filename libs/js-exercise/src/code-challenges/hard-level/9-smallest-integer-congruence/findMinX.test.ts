import { findMinX } from './findMinX'

describe('findMinX', () => {
  it('should return 29 for nums = [2, 3, 5] and rems = [1, 2, 4]', () => {
    expect(findMinX([2, 3, 5], [1, 2, 4])).toBe(29)
  })

  it('should return 110 for nums = [30, 40, 50] and rems = [20, 30, 10]', () => {
    expect(findMinX([30, 40, 50], [20, 30, 10])).toBe(110)
  })

  it('should return 0 for nums = [1] and rems = [0]', () => {
    expect(findMinX([1], [0])).toBe(0)
  })

  it('should return 1 for nums = [2] and rems = [1]', () => {
    expect(findMinX([2], [1])).toBe(1)
  })

  it('should return 23 for nums = [3, 4, 5] and rems = [2, 3, 3]', () => {
    expect(findMinX([3, 4, 5], [2, 3, 3])).toBe(23)
  })

  it('should handle empty arrays', () => {
    expect(findMinX([], [])).toBe(undefined)
  })
})
