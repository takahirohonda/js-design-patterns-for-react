import { bubbleSort, optimisedBubbleSort } from './bubble-sort'

describe('Bubble Sort', () => {
  it('should do the bubble sort correctly', () => {
    const input = [6, 3, 2, 1, 5, 8, 9]
    const expected = [1, 2, 3, 5, 6, 8, 9]
    expect(bubbleSort(input)).toEqual(expected)
  })

  it('should do the bubble sort correctly with optimised version', () => {
    const input = [6, 3, 2, 1, 5, 8, 9]
    const expected = [1, 2, 3, 5, 6, 8, 9]
    expect(optimisedBubbleSort(input)).toEqual(expected)
  })

  describe('More Scenarios', () => {
    it('should sort an array of numbers in ascending order', () => {
      expect(optimisedBubbleSort([5, 3, 8, 1, 2])).toEqual([1, 2, 3, 5, 8])
    })

    it('should return an empty array when given an empty array', () => {
      expect(optimisedBubbleSort([])).toEqual([])
    })

    it('should handle an array with one element', () => {
      expect(optimisedBubbleSort([42])).toEqual([42])
    })

    it('should handle an already sorted array', () => {
      expect(optimisedBubbleSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
    })

    it('should handle an array sorted in descending order', () => {
      expect(optimisedBubbleSort([9, 7, 5, 3, 1])).toEqual([1, 3, 5, 7, 9])
    })

    it('should not modify the original array', () => {
      const originalArray = [4, 2, 7, 1]
      const copy = [...originalArray]
      optimisedBubbleSort(originalArray)
      expect(originalArray).toEqual(copy)
    })

    it('should handle an array with duplicate elements', () => {
      expect(optimisedBubbleSort([4, 2, 2, 8, 5, 2, 1])).toEqual([
        1, 2, 2, 2, 4, 5, 8,
      ])
    })
  })
})
