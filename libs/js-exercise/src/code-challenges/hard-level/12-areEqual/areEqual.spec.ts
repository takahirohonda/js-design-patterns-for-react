import { areEqual } from './areEqual'

describe('areEqual', () => {
  describe('string comparisons', () => {
    it('should return true for identical strings', () => {
      expect(areEqual('abc', 'abc')).toBe(true)
      expect(areEqual('apple', 'apple')).toBe(true)
      expect(areEqual('', '')).toBe(true)
      expect(areEqual('123', '123')).toBe(true)
    })

    it('should return false for different strings', () => {
      expect(areEqual('abc', 'def')).toBe(false)
      expect(areEqual('apple', 'orange')).toBe(false)
      expect(areEqual('ABC', 'abc')).toBe(false) // case sensitive
      expect(areEqual('hello', 'hello ')).toBe(false) // trailing space
    })

    it('should return false when comparing string with other types', () => {
      expect(areEqual('53', 53)).toBe(false)
      expect(areEqual('true', true)).toBe(false)
      expect(areEqual('null', null)).toBe(false)
      expect(areEqual('undefined', undefined)).toBe(false)
      expect(areEqual('123', [1, 2, 3])).toBe(false)
    })
  })

  describe('number comparisons', () => {
    it('should return true for identical numbers', () => {
      expect(areEqual(53, 53)).toBe(true)
      expect(areEqual(0, 0)).toBe(true)
      expect(areEqual(-1, -1)).toBe(true)
      expect(areEqual(3.14, 3.14)).toBe(true)
      expect(areEqual(NaN, NaN)).toBe(true)
    })

    it('should return false for different numbers', () => {
      expect(areEqual(53, 54)).toBe(false)
      expect(areEqual(0, 1)).toBe(false)
      expect(areEqual(-1, 1)).toBe(false)
      expect(areEqual(3.14, 3.15)).toBe(false)
    })

    it('should return false when comparing number with other types', () => {
      expect(areEqual(53, '53')).toBe(false)
      expect(areEqual(1, true)).toBe(false)
      expect(areEqual(0, false)).toBe(false)
      expect(areEqual(0, null)).toBe(false)
      expect(areEqual(123, [1, 2, 3])).toBe(false)
    })
  })

  describe('array comparisons', () => {
    it('should return true for identical arrays in same order', () => {
      expect(areEqual([1, 2, 3], [1, 2, 3])).toBe(true)
      expect(areEqual([], [])).toBe(true)
      expect(areEqual([1], [1])).toBe(true)
      expect(areEqual(['a', 'b'], ['a', 'b'])).toBe(true)
      expect(areEqual([1, 'a', 3], [1, 'a', 3])).toBe(true)
    })

    it('should return false for arrays with same elements but different order', () => {
      expect(areEqual([1, 2, 3], [3, 2, 1])).toBe(false)
      expect(areEqual([1, 2, 3], [1, 3, 2])).toBe(false)
      expect(areEqual(['a', 'b'], ['b', 'a'])).toBe(false)
    })

    it('should return false for arrays with different elements', () => {
      expect(areEqual([1, 2, 3], [1, 2, 4])).toBe(false)
      expect(areEqual([1, 2], [1, 2, 3])).toBe(false)
      expect(areEqual([1, 2, 3], [1, 2])).toBe(false)
      expect(areEqual(['a', 'b'], ['a', 'c'])).toBe(false)
    })

    it('should return false for arrays with different lengths', () => {
      expect(areEqual([1], [1, 2])).toBe(false)
      expect(areEqual([1, 2, 3], [1, 2])).toBe(false)
      expect(areEqual([], [1])).toBe(false)
    })

    it('should return false when comparing array with other types', () => {
      expect(areEqual([1, 2, 3], '123')).toBe(false)
      expect(areEqual([1], 1)).toBe(false)
      expect(areEqual([], null)).toBe(false)
      expect(areEqual([true], true)).toBe(false)
    })

    it('should handle arrays with mixed data types', () => {
      expect(areEqual([1, '2', 3], [1, '2', 3])).toBe(true)
      expect(areEqual([1, '2', 3], [1, 2, 3])).toBe(false) // "2" vs 2
      expect(areEqual([null, undefined], [null, undefined])).toBe(true)
    })
  })

  describe('edge cases and special values', () => {
    it('should handle null values', () => {
      expect(areEqual(null, null)).toBe(true)
      expect(areEqual(null, undefined)).toBe(false)
      expect(areEqual(null, 0)).toBe(false)
      expect(areEqual(null, '')).toBe(false)
    })

    it('should handle undefined values', () => {
      expect(areEqual(undefined, undefined)).toBe(true)
      expect(areEqual(undefined, null)).toBe(false)
      expect(areEqual(undefined, 0)).toBe(false)
      expect(areEqual(undefined, '')).toBe(false)
    })

    it('should handle boolean values', () => {
      expect(areEqual(true, true)).toBe(true)
      expect(areEqual(false, false)).toBe(true)
      expect(areEqual(true, false)).toBe(false)
      expect(areEqual(true, 1)).toBe(false)
      expect(areEqual(false, 0)).toBe(false)
    })

    it('should handle NaN correctly', () => {
      expect(areEqual(NaN, NaN)).toBe(true)
      expect(areEqual(NaN, undefined)).toBe(false)
      expect(areEqual(NaN, null)).toBe(false)
    })
  })

  describe('nested arrays', () => {
    it('should handle nested arrays correctly', () => {
      expect(
        areEqual(
          [
            [1, 2],
            [3, 4],
          ],
          [
            [1, 2],
            [3, 4],
          ]
        )
      ).toBe(true)
      expect(
        areEqual(
          [
            [1, 2],
            [3, 4],
          ],
          [
            [1, 2],
            [4, 3],
          ]
        )
      ).toBe(false)
      expect(areEqual([1, [2, 3]], [1, [2, 3]])).toBe(true)
      expect(areEqual([1, [2, 3]], [1, [3, 2]])).toBe(false)
    })

    it('should handle deeply nested structures', () => {
      expect(areEqual([1, [2, [3, 4]]], [1, [2, [3, 4]]])).toBe(true)
      expect(areEqual([1, [2, [3, 4]]], [1, [2, [4, 3]]])).toBe(false)
    })
  })

  describe('type coercion should not occur', () => {
    it('should not coerce types during comparison', () => {
      expect(areEqual('0', 0)).toBe(false)
      expect(areEqual('false', false)).toBe(false)
      expect(areEqual('true', true)).toBe(false)
      expect(areEqual('', 0)).toBe(false)
      expect(areEqual([], '')).toBe(false)
      expect(areEqual([0], 0)).toBe(false)
    })
  })
})
