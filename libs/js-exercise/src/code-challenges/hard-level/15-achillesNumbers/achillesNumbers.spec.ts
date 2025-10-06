import { achilliesNumber } from './achilliesNumber'

describe('achilliesNumber', () => {
  describe('Known Achilles Numbers', () => {
    it('should return "Achilles" for 72 (2^3 * 3^2)', () => {
      expect(achilliesNumber(72)).toBe('Achilles')
    })

    it('should return "Achilles" for 108 (2^2 * 3^3)', () => {
      expect(achilliesNumber(108)).toBe('Achilles')
    })

    it('should return "Achilles" for 200 (2^3 * 5^2)', () => {
      expect(achilliesNumber(200)).toBe('Achilles')
    })

    it('should return "Achilles" for 288 (2^5 * 3^2)', () => {
      expect(achilliesNumber(288)).toBe('Achilles')
    })

    it('should return "Achilles" for 392 (2^3 * 7^2)', () => {
      expect(achilliesNumber(392)).toBe('Achilles')
    })

    it('should return "Achilles" for 500 (2^2 * 5^3)', () => {
      expect(achilliesNumber(500)).toBe('Achilles')
    })

    it('should return "Achilles" for 675 (3^3 * 5^2)', () => {
      expect(achilliesNumber(675)).toBe('Achilles')
    })
  })

  describe('Perfect Powers (Not Achilles)', () => {
    it('should return "Not Achilles" for 16 (2^4 = 2^4)', () => {
      expect(achilliesNumber(16)).toBe('Not Achilles')
    })

    it('should return "Not Achilles" for 64 (2^6 = 4^3 = 8^2)', () => {
      expect(achilliesNumber(64)).toBe('Not Achilles')
    })

    it('should return "Not Achilles" for 81 (3^4)', () => {
      expect(achilliesNumber(81)).toBe('Not Achilles')
    })

    it('should return "Not Achilles" for 125 (5^3)', () => {
      expect(achilliesNumber(125)).toBe('Not Achilles')
    })

    it('should return "Not Achilles" for 243 (3^5)', () => {
      expect(achilliesNumber(243)).toBe('Not Achilles')
    })

    it('should return "Not Achilles" for 32 (2^5)', () => {
      expect(achilliesNumber(32)).toBe('Not Achilles')
    })

    it('should return "Not Achilles" for 729 (3^6 = 9^3 = 27^2)', () => {
      expect(achilliesNumber(729)).toBe('Not Achilles')
    })
  })

  describe('Numbers with exponent 1 (Not Achilles)', () => {
    it('should return "Not Achilles" for prime numbers', () => {
      expect(achilliesNumber(7)).toBe('Not Achilles')
      expect(achilliesNumber(11)).toBe('Not Achilles')
      expect(achilliesNumber(13)).toBe('Not Achilles')
      expect(achilliesNumber(17)).toBe('Not Achilles')
    })

    it('should return "Not Achilles" for numbers with any prime factor having exponent 1', () => {
      expect(achilliesNumber(6)).toBe('Not Achilles') // 2^1 * 3^1
      expect(achilliesNumber(10)).toBe('Not Achilles') // 2^1 * 5^1
      expect(achilliesNumber(14)).toBe('Not Achilles') // 2^1 * 7^1
      expect(achilliesNumber(15)).toBe('Not Achilles') // 3^1 * 5^1
      expect(achilliesNumber(21)).toBe('Not Achilles') // 3^1 * 7^1
      expect(achilliesNumber(22)).toBe('Not Achilles') // 2^1 * 11^1
    })

    it('should return "Not Achilles" for numbers with mixed exponents (some = 1)', () => {
      expect(achilliesNumber(18)).toBe('Not Achilles') // 2^1 * 3^2
      expect(achilliesNumber(24)).toBe('Not Achilles') // 2^3 * 3^1
      expect(achilliesNumber(50)).toBe('Not Achilles') // 2^1 * 5^2
      expect(achilliesNumber(75)).toBe('Not Achilles') // 3^1 * 5^2
    })
  })

  describe('Edge Cases', () => {
    it('should return "Not Achilles" for 1', () => {
      expect(achilliesNumber(1)).toBe('Not Achilles')
    })

    it('should return "Not Achilles" for small perfect squares', () => {
      expect(achilliesNumber(4)).toBe('Not Achilles') // 2^2
      expect(achilliesNumber(9)).toBe('Not Achilles') // 3^2
      expect(achilliesNumber(25)).toBe('Not Achilles') // 5^2
      expect(achilliesNumber(49)).toBe('Not Achilles') // 7^2
    })

    it('should return "Not Achilles" for small perfect cubes', () => {
      expect(achilliesNumber(8)).toBe('Not Achilles') // 2^3
      expect(achilliesNumber(27)).toBe('Not Achilles') // 3^3
    })
  })

  describe('Larger Achilles Numbers', () => {
    it('should return "Achilles" for larger known Achilles numbers', () => {
      expect(achilliesNumber(432)).toBe('Achilles') // 2^4 * 3^3
      expect(achilliesNumber(648)).toBe('Achilles') // 2^3 * 3^4
      expect(achilliesNumber(800)).toBe('Achilles') // 2^5 * 5^2
      expect(achilliesNumber(864)).toBe('Achilles') // 2^5 * 3^3
      expect(achilliesNumber(968)).toBe('Achilles') // 2^3 * 11^2
    })
  })

  describe('Performance and Consistency', () => {
    it('should return consistent results for the same input', () => {
      const testNumbers = [72, 108, 16, 64, 200, 125]

      testNumbers.forEach((num) => {
        const result1 = achilliesNumber(num)
        const result2 = achilliesNumber(num)
        const result3 = achilliesNumber(num)

        expect(result1).toBe(result2)
        expect(result2).toBe(result3)
        expect(['Achilles', 'Not Achilles']).toContain(result1)
      })
    })

    it('should handle moderate-sized numbers efficiently', () => {
      const startTime = Date.now()

      // Test a range of numbers
      for (let i = 100; i <= 1000; i += 50) {
        achilliesNumber(i)
      }

      const endTime = Date.now()

      // Should complete within reasonable time (less than 1 second)
      expect(endTime - startTime).toBeLessThan(1000)
    })
  })

  describe('Input Validation', () => {
    it('should handle positive integers', () => {
      expect(() => achilliesNumber(1)).not.toThrow()
      expect(() => achilliesNumber(72)).not.toThrow()
      expect(() => achilliesNumber(1000)).not.toThrow()
    })

    it('should only return valid responses', () => {
      const testNumbers = [1, 4, 8, 16, 72, 108, 125, 200, 288, 500]

      testNumbers.forEach((num) => {
        const result = achilliesNumber(num)
        expect(['Achilles', 'Not Achilles']).toContain(result)
      })
    })
  })

  describe('Mathematical Properties Validation', () => {
    it('should correctly identify numbers where all prime factors have exponent >= 2 but not perfect powers', () => {
      // These numbers have all exponents >= 2 but are not perfect powers
      const achillesNumbers = [
        72, 108, 200, 288, 392, 500, 675, 432, 648, 800, 864,
      ]

      achillesNumbers.forEach((num) => {
        expect(achilliesNumber(num)).toBe('Achilles')
      })
    })

    it('should correctly identify perfect powers (even with high exponents)', () => {
      // These are perfect powers: can be expressed as m^k where k > 1
      const perfectPowers = [
        4, 8, 9, 16, 25, 27, 32, 49, 64, 81, 125, 243, 256, 343, 512, 625, 729,
        1024,
      ]

      perfectPowers.forEach((num) => {
        expect(achilliesNumber(num)).toBe('Not Achilles')
      })
    })

    it('should correctly identify numbers with any exponent = 1', () => {
      // These numbers have at least one prime factor with exponent 1
      const nonAchilles = [
        6, 10, 12, 14, 15, 18, 20, 21, 22, 24, 28, 30, 33, 34, 35, 38, 39, 40,
        44, 45, 46, 48, 50,
      ]

      nonAchilles.forEach((num) => {
        expect(achilliesNumber(num)).toBe('Not Achilles')
      })
    })
  })

  describe('Boundary Cases', () => {
    it('should handle the first few Achilles numbers correctly', () => {
      // First few Achilles numbers in sequence
      const firstAchilles = [72, 108, 200, 288, 392, 432, 500, 648, 675, 800]

      firstAchilles.forEach((num) => {
        expect(achilliesNumber(num)).toBe('Achilles')
      })
    })

    it('should handle numbers that are close to but not Achilles numbers', () => {
      expect(achilliesNumber(71)).toBe('Not Achilles') // 71 is prime
      expect(achilliesNumber(73)).toBe('Not Achilles') // 73 is prime
      expect(achilliesNumber(107)).toBe('Not Achilles') // 107 is prime
      expect(achilliesNumber(109)).toBe('Not Achilles') // 109 is prime
    })
  })
})
