import { bubbleSort } from './bubbleSort'

describe('bubbleSort', () => {
  it('should sort an array of numbers in ascending order', () => {
    expect(bubbleSort([5, 3, 8, 1, 2])).toEqual([1, 2, 3, 5, 8])
  })

  it('should return an empty array when given an empty array', () => {
    expect(bubbleSort([])).toEqual([])
  })

  it('should handle an array with one element', () => {
    expect(bubbleSort([42])).toEqual([42])
  })

  it('should handle an already sorted array', () => {
    expect(bubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  it('should handle an array sorted in descending order', () => {
    expect(bubbleSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9])
  })

  it('should not modify the original array', () => {
    const originalArray = [4, 2, 7, 1]
    const copy = [...originalArray]
    bubbleSort(originalArray)
    expect(originalArray).toEqual(copy)
  })

  it('should handle an array with duplicate elements', () => {
    expect(bubbleSort([4, 2, 2, 8, 5, 2, 1])).toEqual([1, 2, 2, 2, 4, 5, 8])
  })
})
