import { dashingNumbers } from './dashingNumbers'

describe('dashingNumbers', () => {
  describe('basic functionality', () => {
    it('should insert dashes between digits for multi-digit numbers', () => {
      expect(dashingNumbers(2345)).toBe('2-3-4-5')
      expect(dashingNumbers(123)).toBe('1-2-3')
      expect(dashingNumbers(987654321)).toBe('9-8-7-6-5-4-3-2-1')
    })

    it('should handle single digit numbers', () => {
      expect(dashingNumbers(0)).toBe('0')
      expect(dashingNumbers(1)).toBe('1')
      expect(dashingNumbers(5)).toBe('5')
      expect(dashingNumbers(9)).toBe('9')
    })

    it('should handle two digit numbers', () => {
      expect(dashingNumbers(10)).toBe('1-0')
      expect(dashingNumbers(25)).toBe('2-5')
      expect(dashingNumbers(99)).toBe('9-9')
    })
  })

  describe('negative numbers - should throw errors', () => {
    it('should throw error for negative single digit numbers', () => {
      expect(() => dashingNumbers(-1)).toThrow(
        'Negative number is not supported'
      )
      expect(() => dashingNumbers(-5)).toThrow(
        'Negative number is not supported'
      )
      expect(() => dashingNumbers(-9)).toThrow(
        'Negative number is not supported'
      )
    })

    it('should throw error for negative multi-digit numbers', () => {
      expect(() => dashingNumbers(-123)).toThrow(
        'Negative number is not supported'
      )
      expect(() => dashingNumbers(-2345)).toThrow(
        'Negative number is not supported'
      )
      expect(() => dashingNumbers(-9876)).toThrow(
        'Negative number is not supported'
      )
    })

    it('should throw error for negative two digit numbers', () => {
      expect(() => dashingNumbers(-10)).toThrow(
        'Negative number is not supported'
      )
      expect(() => dashingNumbers(-25)).toThrow(
        'Negative number is not supported'
      )
      expect(() => dashingNumbers(-99)).toThrow(
        'Negative number is not supported'
      )
    })
  })

  describe('numbers with zeros', () => {
    it('should handle numbers with zeros in the middle', () => {
      expect(dashingNumbers(1023)).toBe('1-0-2-3')
      expect(dashingNumbers(2004)).toBe('2-0-0-4')
      expect(dashingNumbers(10203)).toBe('1-0-2-0-3')
    })

    it('should handle numbers starting with zero (after conversion)', () => {
      // Note: Numbers like 0123 would be treated as 123 in JavaScript
      expect(dashingNumbers(1000)).toBe('1-0-0-0')
      expect(dashingNumbers(1001)).toBe('1-0-0-1')
    })

    it('should handle numbers ending with zeros', () => {
      expect(dashingNumbers(120)).toBe('1-2-0')
      expect(dashingNumbers(1200)).toBe('1-2-0-0')
      expect(dashingNumbers(12000)).toBe('1-2-0-0-0')
    })
  })

  describe('large numbers', () => {
    it('should handle large positive numbers', () => {
      expect(dashingNumbers(1234567890)).toBe('1-2-3-4-5-6-7-8-9-0')
      expect(dashingNumbers(9876543210)).toBe('9-8-7-6-5-4-3-2-1-0')
    })

    it('should throw error for large negative numbers', () => {
      expect(() => dashingNumbers(-1234567890)).toThrow(
        'Negative number is not supported'
      )
      expect(() => dashingNumbers(-9876543210)).toThrow(
        'Negative number is not supported'
      )
    })

    it('should handle very large numbers within JavaScript safe integer range', () => {
      const maxSafeInt = Number.MAX_SAFE_INTEGER // 9007199254740991
      const result = dashingNumbers(maxSafeInt)
      expect(result).toBe('9-0-0-7-1-9-9-2-5-4-7-4-0-9-9-1')
    })

    it('should throw error for very small negative numbers', () => {
      const minSafeInt = Number.MIN_SAFE_INTEGER // -9007199254740991
      expect(() => dashingNumbers(minSafeInt)).toThrow(
        'Negative number is not supported'
      )
    })
  })

  describe('edge cases', () => {
    it('should handle zero correctly', () => {
      expect(dashingNumbers(0)).toBe('0')
    })

    it('should handle repeated digits', () => {
      expect(dashingNumbers(111)).toBe('1-1-1')
      expect(dashingNumbers(222)).toBe('2-2-2')
      expect(dashingNumbers(7777)).toBe('7-7-7-7')
      expect(dashingNumbers(1111111)).toBe('1-1-1-1-1-1-1')
    })

    it('should handle alternating patterns', () => {
      expect(dashingNumbers(1212)).toBe('1-2-1-2')
      expect(dashingNumbers(1010)).toBe('1-0-1-0')
      expect(dashingNumbers(909090)).toBe('9-0-9-0-9-0')
    })
  })

  describe('mathematical constants and common numbers', () => {
    it('should handle powers of 10', () => {
      expect(dashingNumbers(10)).toBe('1-0')
      expect(dashingNumbers(100)).toBe('1-0-0')
      expect(dashingNumbers(1000)).toBe('1-0-0-0')
      expect(dashingNumbers(10000)).toBe('1-0-0-0-0')
    })

    it('should handle factorial results', () => {
      expect(dashingNumbers(24)).toBe('2-4') // 4!
      expect(dashingNumbers(120)).toBe('1-2-0') // 5!
      expect(dashingNumbers(720)).toBe('7-2-0') // 6!
    })

    it('should handle perfect squares', () => {
      expect(dashingNumbers(16)).toBe('1-6') // 4²
      expect(dashingNumbers(25)).toBe('2-5') // 5²
      expect(dashingNumbers(144)).toBe('1-4-4') // 12²
    })
  })

  describe('return type validation', () => {
    it('should always return a string for valid inputs', () => {
      expect(typeof dashingNumbers(123)).toBe('string')
      expect(typeof dashingNumbers(0)).toBe('string')
      expect(typeof dashingNumbers(456)).toBe('string')
    })

    it('should return string with correct dash pattern', () => {
      const result = dashingNumbers(12345)
      expect(result).toMatch(/^\d(-\d)*$/) // Pattern: digit, then (dash-digit)*
    })

    it('should not have leading or trailing dashes', () => {
      expect(dashingNumbers(123)).not.toMatch(/^.*-$/) // No trailing dash
      expect(dashingNumbers(123)).not.toMatch(/^-/) // No leading dash for positive numbers
      expect(dashingNumbers(123)).toMatch(/^\d/) // Should start with digit
    })
  })

  describe('input validation edge cases', () => {
    it('should throw error for decimal numbers', () => {
      expect(() => dashingNumbers(12.34)).toThrow(
        'Non integer is not supported'
      )
      expect(() => dashingNumbers(99.99)).toThrow(
        'Non integer is not supported'
      )
    })

    it('should throw error for floating point numbers', () => {
      expect(() => dashingNumbers(3.14159)).toThrow(
        'Non integer is not supported'
      )
      expect(() => dashingNumbers(-2.718)).toThrow(
        'Non integer is not supported'
      )
    })

    it('should throw error for special number values', () => {
      expect(() => dashingNumbers(NaN)).toThrow('NaN is not supported')
      expect(() => dashingNumbers(Infinity)).toThrow(
        'Infinity is not supported'
      )
      expect(() => dashingNumbers(-Infinity)).toThrow(
        'Infinity is not supported'
      )
    })
  })

  describe('performance tests', () => {
    it('should handle numbers with many digits efficiently', () => {
      const largeNumber = 123456789012345
      const result = dashingNumbers(largeNumber)
      expect(result.split('-').length).toBeGreaterThan(10)
      expect(result).toMatch(/^\d(-\d)*$/)
    })
  })
})
