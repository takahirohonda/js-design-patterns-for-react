import { addListEnds } from './addListEnds'

describe('addListEnds', () => {
  describe('Basic functionality', () => {
    it('should add first and last elements of a 3-element array', () => {
      expect(addListEnds([10, 20, 30])).toBe(40)
    })

    it('should add first and last elements of a 6-element array', () => {
      expect(addListEnds([1, 2, 3, 4, 5, 6])).toBe(7)
    })

    it('should add first and last elements of a 2-element array', () => {
      expect(addListEnds([5, 15])).toBe(20)
    })

    it('should return double the value for single-element array', () => {
      expect(addListEnds([7])).toBe(14)
    })
  })

  describe('Various array sizes', () => {
    it('should work with arrays of different lengths', () => {
      expect(addListEnds([1, 2])).toBe(3)
      expect(addListEnds([1, 2, 3])).toBe(4)
      expect(addListEnds([1, 2, 3, 4])).toBe(5)
      expect(addListEnds([1, 2, 3, 4, 5])).toBe(6)
    })

    it('should work with larger arrays', () => {
      expect(addListEnds([10, 20, 30, 40, 50, 60, 70])).toBe(80)
      expect(addListEnds([100, 200, 300, 400, 500])).toBe(600)
    })
  })

  describe('Different number types', () => {
    it('should work with negative numbers', () => {
      expect(addListEnds([-5, 0, 5])).toBe(0)
      expect(addListEnds([-10, -20, -30])).toBe(-40)
      expect(addListEnds([-1, 2, 3, 4, -5])).toBe(-6)
    })

    it('should work with decimal numbers', () => {
      expect(addListEnds([1.5, 2.5, 3.5])).toBe(5)
      expect(addListEnds([0.1, 0.2, 0.3, 0.4])).toBeCloseTo(0.5, 10)
      expect(addListEnds([2.7, 1.8, 3.3])).toBeCloseTo(6, 10)
    })

    it('should work with zero values', () => {
      expect(addListEnds([0, 1, 2, 3, 0])).toBe(0)
      expect(addListEnds([0, 0, 0])).toBe(0)
      expect(addListEnds([0])).toBe(0)
    })

    it('should work with mixed positive and negative numbers', () => {
      expect(addListEnds([-10, 5, 0, -3, 15])).toBe(5)
      expect(addListEnds([100, -50, 25, -200])).toBe(-100)
    })
  })

  describe('Edge cases and patterns', () => {
    it('should ignore middle elements regardless of their values', () => {
      expect(addListEnds([1, 999, 888, 777, 2])).toBe(3)
      expect(addListEnds([5, 0, 0, 0, 0, 0, 10])).toBe(15)
    })

    it('should work when first and last elements are the same', () => {
      expect(addListEnds([7, 1, 2, 3, 7])).toBe(14)
      expect(addListEnds([0, 5, 10, 0])).toBe(0)
      expect(addListEnds([42, 42])).toBe(84)
    })

    it('should work with arrays containing very large numbers', () => {
      expect(addListEnds([1000000, 1, 2, 3, 2000000])).toBe(3000000)
      expect(addListEnds([Number.MAX_SAFE_INTEGER - 1, 0, 1])).toBe(
        Number.MAX_SAFE_INTEGER
      )
    })

    it('should work with arrays containing very small numbers', () => {
      expect(addListEnds([0.0001, 0.5, 0.9999])).toBeCloseTo(1, 4)
      expect(addListEnds([-0.0001, 0, 0.0001])).toBe(0)
    })
  })

  describe('Type and return value validation', () => {
    it('should return a number', () => {
      const result = addListEnds([1, 2, 3])
      expect(typeof result).toBe('number')
    })

    it('should return finite numbers for finite inputs', () => {
      expect(Number.isFinite(addListEnds([1, 2, 3]))).toBe(true)
      expect(Number.isFinite(addListEnds([0, 100]))).toBe(true)
      expect(Number.isFinite(addListEnds([-50, 50]))).toBe(true)
    })
  })

  describe('Mathematical properties', () => {
    it('should be commutative for two-element arrays', () => {
      expect(addListEnds([5, 10])).toBe(addListEnds([10, 5]))
      expect(addListEnds([3, 7])).toBe(addListEnds([7, 3]))
    })

    it('should satisfy addition properties', () => {
      const arr1 = [10, 2, 3, 4, 20]
      const arr2 = [5, 7, 8, 9, 15]

      // First + last of arr1, plus first + last of arr2
      const expected = 10 + 20 + (5 + 15)
      const actual = addListEnds(arr1) + addListEnds(arr2)

      expect(actual).toBe(expected)
      expect(actual).toBe(50)
    })
  })

  describe('Consistency and reliability', () => {
    it('should return consistent results for the same input', () => {
      const testArray = [1, 2, 3, 4, 5]
      const result1 = addListEnds(testArray)
      const result2 = addListEnds(testArray)
      const result3 = addListEnds(testArray)

      expect(result1).toBe(result2)
      expect(result2).toBe(result3)
      expect(result1).toBe(6)
    })

    it('should not modify the input array', () => {
      const originalArray = [1, 2, 3, 4, 5]
      const arrayBefore = [...originalArray]

      addListEnds(originalArray)

      expect(originalArray).toEqual(arrayBefore)
    })
  })
})
