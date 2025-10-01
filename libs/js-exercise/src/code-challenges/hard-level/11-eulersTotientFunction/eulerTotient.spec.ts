import { eulerTotient } from './eulerTotient'

describe('eulerTotient', () => {
  describe('basic examples from problem description', () => {
    it('should return 4 for n = 8', () => {
      // Numbers 1, 3, 5, 7 are coprime with 8
      expect(eulerTotient(8)).toBe(4)
    })

    it('should return 4 for n = 10', () => {
      // Numbers 1, 3, 7, 9 are coprime with 10
      expect(eulerTotient(10)).toBe(4)
    })
  })

  describe('edge cases', () => {
    it('should return 1 for n = 1', () => {
      // Only 1 is coprime with 1
      expect(eulerTotient(1)).toBe(1)
    })

    it('should return 1 for n = 2', () => {
      // Only 1 is coprime with 2
      expect(eulerTotient(2)).toBe(1)
    })
  })

  describe('prime numbers', () => {
    it('should return n-1 for prime numbers', () => {
      // For prime p, φ(p) = p - 1
      expect(eulerTotient(3)).toBe(2) // 1, 2
      expect(eulerTotient(5)).toBe(4) // 1, 2, 3, 4
      expect(eulerTotient(7)).toBe(6) // 1, 2, 3, 4, 5, 6
      expect(eulerTotient(11)).toBe(10)
      expect(eulerTotient(13)).toBe(12)
    })
  })

  describe('powers of primes', () => {
    it('should handle powers of 2', () => {
      expect(eulerTotient(4)).toBe(2) // 1, 3
      expect(eulerTotient(16)).toBe(8) // φ(2^4) = 2^4 - 2^3 = 8
    })

    it('should handle powers of 3', () => {
      expect(eulerTotient(9)).toBe(6) // φ(3^2) = 3^2 - 3^1 = 6
      expect(eulerTotient(27)).toBe(18) // φ(3^3) = 3^3 - 3^2 = 18
    })
  })

  describe('composite numbers', () => {
    it('should handle small composite numbers', () => {
      expect(eulerTotient(6)).toBe(2) // 1, 5 are coprime with 6
      expect(eulerTotient(12)).toBe(4) // 1, 5, 7, 11 are coprime with 12
      expect(eulerTotient(15)).toBe(8) // 1, 2, 4, 7, 8, 11, 13, 14
      expect(eulerTotient(20)).toBe(8) // 1, 3, 7, 9, 11, 13, 17, 19
    })

    it('should handle larger composite numbers', () => {
      expect(eulerTotient(24)).toBe(8)
      expect(eulerTotient(30)).toBe(8)
      expect(eulerTotient(36)).toBe(12)
    })
  })

  describe('multiplicative property', () => {
    it('should satisfy φ(mn) = φ(m)φ(n) for coprime m and n', () => {
      // φ(3) = 2, φ(5) = 4, so φ(15) should equal φ(3) * φ(5) = 8
      const phi3 = eulerTotient(3)
      const phi5 = eulerTotient(5)
      const phi15 = eulerTotient(15)
      expect(phi15).toBe(phi3 * phi5)

      // φ(7) = 6, φ(11) = 10, so φ(77) should equal φ(7) * φ(11) = 60
      const phi7 = eulerTotient(7)
      const phi11 = eulerTotient(11)
      const phi77 = eulerTotient(77)
      expect(phi77).toBe(phi7 * phi11)
    })
  })

  describe('input validation', () => {
    it('should handle zero appropriately', () => {
      expect(() => eulerTotient(0)).toThrow()
    })

    it('should handle negative numbers appropriately', () => {
      expect(() => eulerTotient(-1)).toThrow()
      expect(() => eulerTotient(-10)).toThrow()
    })

    it('should handle non-integer inputs appropriately', () => {
      expect(() => eulerTotient(3.5)).toThrow()
      expect(() => eulerTotient(Math.PI)).toThrow()
    })
  })
})
