import { nextPermutation } from './nextPermutation'

describe('nextPermutation', () => {
  it('should return the next greater permutation for simple increasing arrays', () => {
    expect(nextPermutation([10, 20, 30])).toEqual([10, 30, 20])
    expect(nextPermutation([1, 2, 3])).toEqual([1, 3, 2])
    expect(nextPermutation([1, 2, 3, 4])).toEqual([1, 2, 4, 3])
    expect(nextPermutation([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 5, 4])
  })

  it('should wrap around to the smallest permutation if already the largest', () => {
    expect(nextPermutation([3, 2, 1])).toEqual([1, 2, 3])
    expect(nextPermutation([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5])
  })

  it('should work for arrays in the middle of permutation order', () => {
    expect(nextPermutation([1, 3, 2])).toEqual([2, 1, 3])
    expect(nextPermutation([2, 3, 1])).toEqual([3, 1, 2])
    expect(nextPermutation([2, 1, 3])).toEqual([2, 3, 1])
    expect(nextPermutation([1, 5, 1])).toEqual([5, 1, 1])
  })

  it('should handle duplicate values correctly', () => {
    expect(nextPermutation([1, 1, 5])).toEqual([1, 5, 1])
    expect(nextPermutation([2, 2, 3])).toEqual([3, 2, 2])
    expect(nextPermutation([3, 3, 2, 2])).toEqual([2, 2, 3, 3])
  })

  it('should handle small arrays (edge cases)', () => {
    expect(nextPermutation([1])).toEqual([1])
    expect(nextPermutation([1, 2])).toEqual([2, 1])
    expect(nextPermutation([2, 1])).toEqual([1, 2])
  })

  it('should handle larger non-trivial cases', () => {
    expect(nextPermutation([1, 4, 3, 2])).toEqual([2, 1, 3, 4])
    expect(nextPermutation([1, 4, 2, 3])).toEqual([1, 4, 3, 2])
    expect(nextPermutation([2, 3, 6, 5, 4])).toEqual([2, 4, 3, 5, 6])
  })
})
