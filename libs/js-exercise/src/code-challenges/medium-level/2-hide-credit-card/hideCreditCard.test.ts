import { hideCreditCard } from './hideCreditCard'

describe('hideCreditCard', () => {
  describe('Basic functionality', () => {
    it('should hide first 12 digits of a 16-digit card number', () => {
      expect(hideCreditCard('1234567890123456')).toBe('************3456')
    })

    it('should show last 4 digits clearly', () => {
      expect(hideCreditCard('1111222233334444')).toBe('************4444')
    })

    it('should handle different 16-digit combinations', () => {
      expect(hideCreditCard('9999888877776666')).toBe('************6666')
      expect(hideCreditCard('0000111122223333')).toBe('************3333')
    })
  })

  describe('Formatted card numbers', () => {
    it('should preserve spaces in card number format', () => {
      expect(hideCreditCard('1234 5678 9012 3456')).toBe('**** **** **** 3456')
    })

    it('should preserve dashes in card number format', () => {
      expect(hideCreditCard('1234-5678-9012-3456')).toBe('****-****-****-3456')
    })

    it('should preserve mixed formatting', () => {
      expect(hideCreditCard('1234 5678-9012 3456')).toBe('**** ****-**** 3456')
    })

    it('should handle irregular spacing', () => {
      expect(hideCreditCard('12 3456 789 012 3456')).toBe(
        '** **** *** *** 3456'
      )
    })
  })

  describe('Edge cases', () => {
    it('should return original string if less than 4 digits', () => {
      expect(hideCreditCard('123')).toBe('123')
      expect(hideCreditCard('12')).toBe('12')
      expect(hideCreditCard('1')).toBe('1')
    })

    it('should handle exactly 4 digits', () => {
      expect(hideCreditCard('1234')).toBe('1234')
    })

    it('should handle 5 digits', () => {
      expect(hideCreditCard('12345')).toBe('*2345')
    })

    it('should handle empty string', () => {
      expect(hideCreditCard('')).toBe('')
    })

    it('should handle string with no digits', () => {
      expect(hideCreditCard('abcd-efgh-ijkl')).toBe('abcd-efgh-ijkl')
    })

    it('should handle mixed alphanumeric strings', () => {
      expect(hideCreditCard('abc123def456')).toBe('abc**3def456')
    })
  })

  describe('Real-world card number formats', () => {
    it('should handle Visa format (4xxx xxxx xxxx xxxx)', () => {
      expect(hideCreditCard('4532 1234 5678 9012')).toBe('**** **** **** 9012')
    })

    it('should handle MasterCard format (5xxx xxxx xxxx xxxx)', () => {
      expect(hideCreditCard('5555 4444 3333 2222')).toBe('**** **** **** 2222')
    })

    it('should handle American Express format (3xxx xxxxxx xxxxx)', () => {
      expect(hideCreditCard('3782 822463 10005')).toBe('**** ****** *0005')
    })

    it('should handle Discover format', () => {
      expect(hideCreditCard('6011 1111 1111 1117')).toBe('**** **** **** 1117')
    })

    it('should handle no spaces format', () => {
      expect(hideCreditCard('4532123456789012')).toBe('************9012')
    })
  })

  describe('Special characters and formatting', () => {
    it('should preserve dots as separators', () => {
      expect(hideCreditCard('1234.5678.9012.3456')).toBe('****.****.****.3456')
    })

    it('should preserve underscores', () => {
      expect(hideCreditCard('1234_5678_9012_3456')).toBe('****_****_****_3456')
    })

    it('should handle parentheses', () => {
      expect(hideCreditCard('(1234) 5678 9012 3456')).toBe(
        '(****) **** **** 3456'
      )
    })

    it('should handle multiple consecutive spaces', () => {
      expect(hideCreditCard('1234  5678   9012    3456')).toBe(
        '****  ****   ****    3456'
      )
    })
  })

  describe('Input validation and error handling', () => {
    it('should handle very long card numbers', () => {
      const longCard = '12345678901234567890'
      expect(hideCreditCard(longCard)).toBe('****************7890')
    })

    it('should handle card numbers with leading/trailing spaces', () => {
      expect(hideCreditCard(' 1234 5678 9012 3456 ')).toBe(
        ' **** **** **** 3456 '
      )
    })

    it('should handle newlines and tabs', () => {
      expect(hideCreditCard('1234\n5678\t9012 3456')).toBe(
        '****\n****\t**** 3456'
      )
    })
  })

  describe('Performance and consistency', () => {
    it('should return consistent results for the same input', () => {
      const cardNumber = '1234 5678 9012 3456'
      const result1 = hideCreditCard(cardNumber)
      const result2 = hideCreditCard(cardNumber)
      const result3 = hideCreditCard(cardNumber)

      expect(result1).toBe(result2)
      expect(result2).toBe(result3)
      expect(result1).toBe('**** **** **** 3456')
    })

    it('should not mutate the original string', () => {
      const original = '1234 5678 9012 3456'
      const originalCopy = original

      hideCreditCard(original)

      expect(original).toBe(originalCopy)
      expect(original).toBe('1234 5678 9012 3456')
    })

    it('should handle multiple calls efficiently', () => {
      const cardNumbers = [
        '1234567890123456',
        '4532 1234 5678 9012',
        '5555-4444-3333-2222',
        '3782 822463 10005',
      ]

      const startTime = Date.now()
      cardNumbers.forEach((card) => {
        for (let i = 0; i < 100; i++) {
          hideCreditCard(card)
        }
      })
      const endTime = Date.now()

      expect(endTime - startTime).toBeLessThan(100) // Should complete quickly
    })
  })

  describe('Security considerations', () => {
    it('should never expose more than last 4 digits', () => {
      const testCases = [
        '1234567890123456',
        '1111222233334444',
        '9999888877776666',
        '0000111122223333',
      ]

      testCases.forEach((cardNumber) => {
        const result = hideCreditCard(cardNumber)
        const visibleDigits = result.replace(/[^0-9]/g, '').slice(-4)
        const originalLastFour = cardNumber.slice(-4)
        expect(visibleDigits).toBe(originalLastFour)
      })
    })

    it('should mask all but last 4 digits regardless of format', () => {
      const formats = [
        '1234567890123456',
        '1234 5678 9012 3456',
        '1234-5678-9012-3456',
        '1234.5678.9012.3456',
      ]

      formats.forEach((cardNumber) => {
        const result = hideCreditCard(cardNumber)
        const allDigits = result.replace(/[^0-9*]/g, '')
        const asteriskCount = (allDigits.match(/\*/g) || []).length
        const digitCount = (allDigits.match(/[0-9]/g) || []).length

        expect(digitCount).toBe(4) // Only last 4 should be visible
        expect(asteriskCount).toBe(12) // First 12 should be masked
      })
    })
  })

  describe('Type safety', () => {
    it('should return a string', () => {
      const result = hideCreditCard('1234567890123456')
      expect(typeof result).toBe('string')
    })

    it('should handle various string inputs', () => {
      expect(() => hideCreditCard('1234567890123456')).not.toThrow()
      expect(() => hideCreditCard('')).not.toThrow()
      expect(() => hideCreditCard('abc')).not.toThrow()
    })
  })
})
