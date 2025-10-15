import { hideCreditCard } from './hideCreditCard'

describe('hideCreditCard', () => {
  describe('Basic functionality for 16-digit cards', () => {
    it('should hide first 12 digits and show last 4', () => {
      expect(hideCreditCard('1234567890123456')).toBe('************3456')
    })

    it('should work with different digit patterns', () => {
      expect(hideCreditCard('1111222233334444')).toBe('************4444')
      expect(hideCreditCard('9999888877776666')).toBe('************6666')
      expect(hideCreditCard('0000111122223333')).toBe('************3333')
    })

    it('should handle all zeros', () => {
      expect(hideCreditCard('0000000000000000')).toBe('************0000')
    })

    it('should handle all nines', () => {
      expect(hideCreditCard('9999999999999999')).toBe('************9999')
    })
  })

  describe('Real credit card patterns', () => {
    it('should work with Visa-like patterns (4xxx)', () => {
      expect(hideCreditCard('4532123456789012')).toBe('************9012')
    })

    it('should work with MasterCard-like patterns (5xxx)', () => {
      expect(hideCreditCard('5555444433332222')).toBe('************2222')
    })

    it('should work with Discover-like patterns (6xxx)', () => {
      expect(hideCreditCard('6011111111111117')).toBe('************1117')
    })
  })

  describe('Sequential and pattern testing', () => {
    it('should handle ascending sequences', () => {
      expect(hideCreditCard('1234567890123456')).toBe('************3456')
      expect(hideCreditCard('0123456789012345')).toBe('************2345')
    })

    it('should handle descending sequences', () => {
      expect(hideCreditCard('9876543210987654')).toBe('************7654')
    })

    it('should handle alternating patterns', () => {
      expect(hideCreditCard('1010101010101010')).toBe('************1010')
      expect(hideCreditCard('1212121212121212')).toBe('************1212')
    })

    it('should handle repeated digits', () => {
      expect(hideCreditCard('1111111111111111')).toBe('************1111')
      expect(hideCreditCard('2222222222222222')).toBe('************2222')
      expect(hideCreditCard('3333333333333333')).toBe('************3333')
    })
  })

  describe('Last 4 digits validation', () => {
    it('should always show exactly the last 4 digits', () => {
      const testCases = [
        { input: '1234567890123456', lastFour: '3456' },
        { input: '9999888877776666', lastFour: '6666' },
        { input: '0000111122223333', lastFour: '3333' },
        { input: '4532987654321098', lastFour: '1098' },
        { input: '1111000099998888', lastFour: '8888' },
      ]

      testCases.forEach(({ input, lastFour }) => {
        const result = hideCreditCard(input)
        expect(result.slice(-4)).toBe(lastFour)
        expect(result.slice(0, -4)).toBe('*'.repeat(12))
      })
    })
  })

  describe('Asterisk masking validation', () => {
    it('should always have exactly 12 asterisks', () => {
      const testCases = [
        '1234567890123456',
        '0000000000000000',
        '9999999999999999',
        '1111222233334444',
        '4532123456789012',
      ]

      testCases.forEach((cardNumber) => {
        const result = hideCreditCard(cardNumber)
        const asteriskCount = (result.match(/\*/g) || []).length
        expect(asteriskCount).toBe(12)
      })
    })

    it('should have exactly 16 characters total', () => {
      const testCases = [
        '1234567890123456',
        '0000000000000000',
        '9999999999999999',
        '1111222233334444',
      ]

      testCases.forEach((cardNumber) => {
        const result = hideCreditCard(cardNumber)
        expect(result).toHaveLength(16)
      })
    })
  })

  describe('Performance and consistency', () => {
    it('should return consistent results', () => {
      const cardNumber = '1234567890123456'
      const result1 = hideCreditCard(cardNumber)
      const result2 = hideCreditCard(cardNumber)
      const result3 = hideCreditCard(cardNumber)

      expect(result1).toBe(result2)
      expect(result2).toBe(result3)
      expect(result1).toBe('************3456')
    })

    it('should not mutate the input', () => {
      const original = '1234567890123456'
      const copy = original

      hideCreditCard(original)

      expect(original).toBe(copy)
    })

    it('should handle multiple calls efficiently', () => {
      const cardNumbers = [
        '1234567890123456',
        '4532123456789012',
        '5555444433332222',
        '6011111111111117',
      ]

      const startTime = Date.now()
      for (let i = 0; i < 1000; i++) {
        cardNumbers.forEach((card) => hideCreditCard(card))
      }
      const endTime = Date.now()

      expect(endTime - startTime).toBeLessThan(100)
    })
  })

  describe('Type safety', () => {
    it('should return a string', () => {
      const result = hideCreditCard('1234567890123456')
      expect(typeof result).toBe('string')
    })

    it('should work with string literals', () => {
      expect(hideCreditCard('4532123456789012')).toBe('************9012')
    })
  })
})
