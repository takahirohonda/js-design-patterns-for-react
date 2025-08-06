import { diariumNumber } from './diariumNumber'

describe('diariumNumber', () => {
  describe('Known Diarium Numbers', () => {
    it('should identify 89 as a Diarium number', () => {
      // 8^1 + 9^2 = 8 + 81 = 89
      expect(diariumNumber(89)).toBe('Disarium')
    })

    it('should identify 175 as a Diarium number', () => {
      // 1^1 + 7^2 + 5^3 = 1 + 49 + 125 = 175
      expect(diariumNumber(175)).toBe('Disarium')
    })

    it('should identify 518 as a Diarium number', () => {
      // 5^1 + 1^2 + 8^3 = 5 + 1 + 512 = 518
      expect(diariumNumber(518)).toBe('Disarium')
    })

    it('should identify 598 as a Diarium number', () => {
      // 5^1 + 9^2 + 8^3 = 5 + 81 + 512 = 598
      expect(diariumNumber(598)).toBe('Disarium')
    })

    it('should identify 1306 as a Diarium number', () => {
      // 1^1 + 3^2 + 0^3 + 6^4 = 1 + 9 + 0 + 1296 = 1306
      expect(diariumNumber(1306)).toBe('Disarium')
    })
  })

  describe('Non-Diarium Numbers', () => {
    it('should identify 123 as not a Diarium number', () => {
      // 1^1 + 2^2 + 3^3 = 1 + 4 + 27 = 32 ≠ 123
      expect(diariumNumber(123)).toBe('Not Disarium')
    })

    it('should identify 456 as not a Diarium number', () => {
      // 4^1 + 5^2 + 6^3 = 4 + 25 + 216 = 245 ≠ 456
      expect(diariumNumber(456)).toBe('Not Disarium')
    })

    it('should identify 100 as not a Diarium number', () => {
      // 1^1 + 0^2 + 0^3 = 1 + 0 + 0 = 1 ≠ 100
      expect(diariumNumber(100)).toBe('Not Disarium')
    })

    it('should identify 999 as not a Diarium number', () => {
      // 9^1 + 9^2 + 9^3 = 9 + 81 + 729 = 819 ≠ 999
      expect(diariumNumber(999)).toBe('Not Disarium')
    })
  })

  describe('Single Digit Numbers', () => {
    it('should identify 1 as a Diarium number', () => {
      // 1^1 = 1
      expect(diariumNumber(1)).toBe('Disarium')
    })

    it('should identify 2 as a Diarium number', () => {
      // 2^1 = 2
      expect(diariumNumber(2)).toBe('Disarium')
    })

    it('should identify 9 as a Diarium number', () => {
      // 9^1 = 9
      expect(diariumNumber(9)).toBe('Disarium')
    })
  })

  describe('Two Digit Numbers', () => {
    it('should identify 10 as not a Diarium number', () => {
      // 1^1 + 0^2 = 1 + 0 = 1 ≠ 10
      expect(diariumNumber(10)).toBe('Not Disarium')
    })

    it('should identify 11 as not a Diarium number', () => {
      // 1^1 + 1^2 = 1 + 1 = 2 ≠ 11
      expect(diariumNumber(11)).toBe('Not Disarium')
    })

    it('should identify 12 as not a Diarium number', () => {
      // 1^1 + 2^2 = 1 + 4 = 5 ≠ 12
      expect(diariumNumber(12)).toBe('Not Disarium')
    })

    it('should identify 13 as not a Diarium number', () => {
      // 1^1 + 3^2 = 1 + 9 = 10 ≠ 13
      expect(diariumNumber(13)).toBe('Not Disarium')
    })

    it('should identify 14 as not a Diarium number', () => {
      // 1^1 + 4^2 = 1 + 16 = 17 ≠ 14
      expect(diariumNumber(14)).toBe('Not Disarium')
    })

    it('should identify 15 as not a Diarium number', () => {
      // 1^1 + 5^2 = 1 + 25 = 26 ≠ 15
      expect(diariumNumber(15)).toBe('Not Disarium')
    })

    it('should identify 16 as not a Diarium number', () => {
      // 1^1 + 6^2 = 1 + 36 = 37 ≠ 16
      expect(diariumNumber(16)).toBe('Not Disarium')
    })

    it('should identify 17 as not a Diarium number', () => {
      // 1^1 + 7^2 = 1 + 49 = 50 ≠ 17
      expect(diariumNumber(17)).toBe('Not Disarium')
    })

    it('should identify 18 as not a Diarium number', () => {
      // 1^1 + 8^2 = 1 + 64 = 65 ≠ 18
      expect(diariumNumber(18)).toBe('Not Disarium')
    })

    it('should identify 19 as not a Diarium number', () => {
      // 1^1 + 9^2 = 1 + 81 = 82 ≠ 19
      expect(diariumNumber(19)).toBe('Not Disarium')
    })
  })

  describe('Edge Cases', () => {
    it('should handle 0 correctly', () => {
      // 0^1 = 0
      expect(diariumNumber(0)).toBe('Disarium')
    })

    it('should handle numbers with leading zeros (as strings)', () => {
      // This tests the function's robustness
      expect(diariumNumber(100)).toBe('Not Disarium')
    })

    it('should handle large numbers', () => {
      // 1^1 + 2^2 + 3^3 + 4^4 + 5^5 = 1 + 4 + 27 + 256 + 3125 = 3413
      expect(diariumNumber(12345)).toBe('Not Disarium')
    })
  })

  describe('Mathematical Verification', () => {
    it('should correctly calculate 89 = 8^1 + 9^2', () => {
      const result = diariumNumber(89)
      expect(result).toBe('Disarium')
    })

    it('should correctly calculate 175 = 1^1 + 7^2 + 5^3', () => {
      const result = diariumNumber(175)
      expect(result).toBe('Disarium')
    })

    it('should correctly calculate 518 = 5^1 + 1^2 + 8^3', () => {
      const result = diariumNumber(518)
      expect(result).toBe('Disarium')
    })

    it('should correctly calculate 598 = 5^1 + 9^2 + 8^3', () => {
      const result = diariumNumber(598)
      expect(result).toBe('Disarium')
    })

    it('should correctly calculate 1306 = 1^1 + 3^2 + 0^3 + 6^4', () => {
      const result = diariumNumber(1306)
      expect(result).toBe('Disarium')
    })
  })

  describe('Common Non-Diarium Numbers', () => {
    it('should identify common numbers as not Diarium', () => {
      expect(diariumNumber(100)).toBe('Not Disarium')
      expect(diariumNumber(200)).toBe('Not Disarium')
      expect(diariumNumber(500)).toBe('Not Disarium')
      expect(diariumNumber(1000)).toBe('Not Disarium')
    })

    it('should identify sequential numbers as not Diarium', () => {
      expect(diariumNumber(123)).toBe('Not Disarium')
      expect(diariumNumber(234)).toBe('Not Disarium')
      expect(diariumNumber(345)).toBe('Not Disarium')
      expect(diariumNumber(456)).toBe('Not Disarium')
    })
  })
})
