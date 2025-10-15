import { isPronic } from './checkPronic'

describe('isPronic', () => {
  describe('Known pronic numbers', () => {
    it('should return true for known pronic numbers', () => {
      // First few pronic numbers: 0, 2, 6, 12, 20, 30, 42, 56, 72, 90, 110, 132...
      expect(isPronic(0)).toBe(true) // 0 * 1 = 0
      expect(isPronic(2)).toBe(true) // 1 * 2 = 2
      expect(isPronic(6)).toBe(true) // 2 * 3 = 6
      expect(isPronic(12)).toBe(true) // 3 * 4 = 12
      expect(isPronic(20)).toBe(true) // 4 * 5 = 20
      expect(isPronic(30)).toBe(true) // 5 * 6 = 30
      expect(isPronic(42)).toBe(true) // 6 * 7 = 42
      expect(isPronic(56)).toBe(true) // 7 * 8 = 56
      expect(isPronic(72)).toBe(true) // 8 * 9 = 72
      expect(isPronic(90)).toBe(true) // 9 * 10 = 90
      expect(isPronic(110)).toBe(true) // 10 * 11 = 110
      expect(isPronic(132)).toBe(true) // 11 * 12 = 132
    })

    it('should return true for larger pronic numbers', () => {
      expect(isPronic(156)).toBe(true) // 12 * 13 = 156
      expect(isPronic(182)).toBe(true) // 13 * 14 = 182
      expect(isPronic(210)).toBe(true) // 14 * 15 = 210
      expect(isPronic(240)).toBe(true) // 15 * 16 = 240
      expect(isPronic(272)).toBe(true) // 16 * 17 = 272
      expect(isPronic(306)).toBe(true) // 17 * 18 = 306
      expect(isPronic(342)).toBe(true) // 18 * 19 = 342
      expect(isPronic(380)).toBe(true) // 19 * 20 = 380
    })

    it('should return true for very large pronic numbers', () => {
      expect(isPronic(9900)).toBe(true) // 99 * 100 = 9900
      expect(isPronic(10100)).toBe(true) // 100 * 101 = 10100
      expect(isPronic(999000)).toBe(true) // 999 * 1000 = 999000
    })
  })

  describe('Non-pronic numbers', () => {
    it('should return false for numbers that are not pronic', () => {
      expect(isPronic(1)).toBe(false)
      expect(isPronic(3)).toBe(false)
      expect(isPronic(4)).toBe(false)
      expect(isPronic(5)).toBe(false)
      expect(isPronic(7)).toBe(false)
      expect(isPronic(8)).toBe(false)
      expect(isPronic(9)).toBe(false)
      expect(isPronic(10)).toBe(false)
      expect(isPronic(11)).toBe(false)
    })

    it('should return false for numbers close to pronic numbers', () => {
      expect(isPronic(41)).toBe(false) // 42 - 1
      expect(isPronic(43)).toBe(false) // 42 + 1
      expect(isPronic(71)).toBe(false) // 72 - 1
      expect(isPronic(73)).toBe(false) // 72 + 1
      expect(isPronic(89)).toBe(false) // 90 - 1
      expect(isPronic(91)).toBe(false) // 90 + 1
    })

    it('should return false for prime numbers', () => {
      expect(isPronic(7)).toBe(false)
      expect(isPronic(11)).toBe(false)
      expect(isPronic(13)).toBe(false)
      expect(isPronic(17)).toBe(false)
      expect(isPronic(19)).toBe(false)
      expect(isPronic(23)).toBe(false)
    })

    it('should return false for perfect squares', () => {
      expect(isPronic(4)).toBe(false) // 2²
      expect(isPronic(9)).toBe(false) // 3²
      expect(isPronic(16)).toBe(false) // 4²
      expect(isPronic(25)).toBe(false) // 5²
      expect(isPronic(36)).toBe(false) // 6²
      expect(isPronic(49)).toBe(false) // 7²
      expect(isPronic(64)).toBe(false) // 8²
      expect(isPronic(81)).toBe(false) // 9²
      expect(isPronic(100)).toBe(false) // 10²
    })
  })

  describe('Edge cases', () => {
    it('should handle zero correctly', () => {
      expect(isPronic(0)).toBe(true) // 0 * 1 = 0
    })

    it('should handle negative numbers', () => {
      expect(isPronic(-1)).toBe(false)
      expect(isPronic(-2)).toBe(false)
      expect(isPronic(-6)).toBe(false)
      expect(isPronic(-12)).toBe(false)
      expect(isPronic(-42)).toBe(false)
    })

    it('should handle very large numbers', () => {
      expect(isPronic(999000)).toBe(true) // 999 * 1000 = 999000
      expect(isPronic(999001)).toBe(false) // Not pronic
      expect(isPronic(99990000)).toBe(true) // 9999 * 10000 = 99990000
      expect(isPronic(9999900000)).toBe(true) // 99999 * 100000 = 9999900000
    })
  })

  describe('Input validation', () => {
    it('should throw error for non-integer numbers', () => {
      expect(() => isPronic(3.14)).toThrow('the number has to be an integer')
      expect(() => isPronic(2.5)).toThrow('the number has to be an integer')
      expect(() => isPronic(0.1)).toThrow('the number has to be an integer')
      expect(() => isPronic(-2.7)).toThrow('the number has to be an integer')
    })

    it('should throw error for NaN', () => {
      expect(() => isPronic(NaN)).toThrow('the number has to be an integer')
    })

    it('should throw error for Infinity', () => {
      expect(() => isPronic(Infinity)).toThrow(
        'the number has to be an integer'
      )
      expect(() => isPronic(-Infinity)).toThrow(
        'the number has to be an integer'
      )
    })

    it('should handle valid integers without throwing', () => {
      expect(() => isPronic(0)).not.toThrow()
      expect(() => isPronic(42)).not.toThrow()
      expect(() => isPronic(-5)).not.toThrow()
      expect(() => isPronic(1000)).not.toThrow()
    })
  })

  describe('Mathematical properties', () => {
    it('should verify the mathematical definition n = k(k+1)', () => {
      // Test that known pronic numbers satisfy n = k(k+1)
      const testCases = [
        { n: 0, k: 0 }, // 0 * 1 = 0
        { n: 2, k: 1 }, // 1 * 2 = 2
        { n: 6, k: 2 }, // 2 * 3 = 6
        { n: 12, k: 3 }, // 3 * 4 = 12
        { n: 20, k: 4 }, // 4 * 5 = 20
        { n: 30, k: 5 }, // 5 * 6 = 30
        { n: 42, k: 6 }, // 6 * 7 = 42
        { n: 56, k: 7 }, // 7 * 8 = 56
        { n: 72, k: 8 }, // 8 * 9 = 72
        { n: 90, k: 9 }, // 9 * 10 = 90
      ]

      testCases.forEach(({ n, k }) => {
        expect(k * (k + 1)).toBe(n)
        expect(isPronic(n)).toBe(true)
      })
    })

    it('should follow the pattern that pronic numbers are always even (except 0)', () => {
      const pronicNumbers = [2, 6, 12, 20, 30, 42, 56, 72, 90, 110, 132, 156]

      pronicNumbers.forEach((num) => {
        expect(num % 2).toBe(0) // All should be even
        expect(isPronic(num)).toBe(true)
      })
    })

    it('should verify that consecutive pronic numbers have specific differences', () => {
      // Difference between consecutive pronic numbers follows pattern: 2, 4, 6, 8, 10, 12, ...
      const pronicNumbers = [0, 2, 6, 12, 20, 30, 42, 56, 72, 90, 110]

      for (let i = 1; i < pronicNumbers.length; i++) {
        const difference = pronicNumbers[i] - pronicNumbers[i - 1]
        const expectedDifference = 2 * i
        expect(difference).toBe(expectedDifference)
      }
    })
  })

  describe('Performance', () => {
    it('should handle large numbers efficiently', () => {
      const startTime = Date.now()

      // Test with some large numbers
      const largeNumbers = [999000, 1000000, 1002001, 9999000, 10000000]

      largeNumbers.forEach((num) => {
        isPronic(num)
      })

      const endTime = Date.now()
      expect(endTime - startTime).toBeLessThan(50) // Should be very fast
    })

    it('should be consistent across multiple calls', () => {
      const testNumbers = [42, 43, 72, 73, 90, 91]

      testNumbers.forEach((num) => {
        const result1 = isPronic(num)
        const result2 = isPronic(num)
        const result3 = isPronic(num)

        expect(result1).toBe(result2)
        expect(result2).toBe(result3)
      })
    })
  })

  describe('Return type validation', () => {
    it('should always return a boolean', () => {
      expect(typeof isPronic(42)).toBe('boolean')
      expect(typeof isPronic(43)).toBe('boolean')
      expect(typeof isPronic(0)).toBe('boolean')
      expect(typeof isPronic(-5)).toBe('boolean')
    })

    it('should return exactly true or false', () => {
      expect(isPronic(42)).toBe(true)
      expect(isPronic(43)).toBe(false)
      expect([true, false]).toContain(isPronic(100))
    })
  })
})
