import { replaceSmily } from './replaceSmiley'

describe('replaceSmily', () => {
  describe('Basic functionality', () => {
    it('should replace a single smiley face', () => {
      expect(replaceSmily('Hello :)')).toBe('Hello :(')
    })

    it('should replace multiple smiley faces', () => {
      expect(replaceSmily('Hello :) and goodbye :)')).toBe(
        'Hello :( and goodbye :('
      )
    })

    it('should return the same string if no smiley faces are present', () => {
      expect(replaceSmily('Hello world')).toBe('Hello world')
    })

    it('should handle empty string', () => {
      expect(replaceSmily('')).toBe('')
    })
  })

  describe('Multiple occurrences', () => {
    it('should replace all occurrences in a string with many smileys', () => {
      expect(replaceSmily(':) :) :) :)')).toBe(':( :( :( :(')
    })

    it('should replace smileys at different positions', () => {
      expect(replaceSmily(':) Hello :) world :)')).toBe(':( Hello :( world :(')
    })

    it('should handle consecutive smileys', () => {
      expect(replaceSmily('Happy :):):)')).toBe('Happy :(:(:(')
    })

    it('should handle smileys with various spacing', () => {
      expect(replaceSmily(':)   :)    :)')).toBe(':(   :(    :(')
    })
  })

  describe('Edge cases with similar patterns', () => {
    it('should not replace sad faces', () => {
      expect(replaceSmily('Already sad :(')).toBe('Already sad :(')
    })

    it('should not replace partial patterns', () => {
      expect(replaceSmily('Just a colon : or parenthesis )')).toBe(
        'Just a colon : or parenthesis )'
      )
    })

    it('should handle mixed emotions correctly', () => {
      expect(replaceSmily('Happy :) but also sad :( and happy again :)')).toBe(
        'Happy :( but also sad :( and happy again :('
      )
    })

    it('should replace :) even within other patterns like (:)', () => {
      expect(replaceSmily('Reversed (:)')).toBe('Reversed (:(')
    })

    it('should handle smileys with different characters nearby', () => {
      expect(replaceSmily('Text:)more')).toBe('Text:(more')
      expect(replaceSmily('!:)!')).toBe('!:(!')
      expect(replaceSmily('.:).')).toBe('.:(.')
    })
  })

  describe('Complex scenarios', () => {
    it('should handle long text with multiple smileys', () => {
      const input =
        'Today was great :) I had lunch :) then went shopping :) and came home :)'
      const expected =
        'Today was great :( I had lunch :( then went shopping :( and came home :('
      expect(replaceSmily(input)).toBe(expected)
    })

    it('should handle text with no spaces around smileys', () => {
      expect(replaceSmily('word:)word:)word')).toBe('word:(word:(word')
    })

    it('should handle smileys at string boundaries', () => {
      expect(replaceSmily(':)')).toBe(':(')
      expect(replaceSmily('text :)')).toBe('text :(')
      expect(replaceSmily(':) text')).toBe(':( text')
    })

    it('should handle newlines and special characters', () => {
      expect(replaceSmily('Line 1 :)\nLine 2 :)')).toBe('Line 1 :(\nLine 2 :(')
      expect(replaceSmily('Tab\t:)\tTab')).toBe('Tab\t:(\tTab')
    })
  })

  describe('Performance and consistency', () => {
    it('should return consistent results for the same input', () => {
      const input = 'Test :) string :)'
      const result1 = replaceSmily(input)
      const result2 = replaceSmily(input)
      const result3 = replaceSmily(input)

      expect(result1).toBe(result2)
      expect(result2).toBe(result3)
      expect(result1).toBe('Test :( string :(')
    })

    it('should handle large strings with many smileys efficiently', () => {
      const manySmileys = ':) '.repeat(1000).trim() // 1000 smileys
      const expectedResult = ':( '.repeat(1000).trim()

      const startTime = Date.now()
      const result = replaceSmily(manySmileys)
      const endTime = Date.now()

      expect(result).toBe(expectedResult)
      expect(endTime - startTime).toBeLessThan(100) // Should complete quickly
    })

    it('should not mutate the original string', () => {
      const original = 'Hello :) world'
      const originalCopy = original

      replaceSmily(original)

      expect(original).toBe(originalCopy)
      expect(original).toBe('Hello :) world')
    })
  })

  describe('Type safety and input validation', () => {
    it('should handle strings with only smileys', () => {
      expect(replaceSmily(':):):)')).toBe(':(:(:(')
    })

    it('should handle single character strings', () => {
      expect(replaceSmily(':')).toBe(':')
      expect(replaceSmily(')')).toBe(')')
    })

    it('should handle strings with escaped characters', () => {
      expect(replaceSmily('Test \\:) and :)')).toBe('Test \\:( and :(')
    })
  })

  describe('Real-world usage scenarios', () => {
    it('should work with chat messages', () => {
      expect(replaceSmily('Hey there :) How are you doing :)')).toBe(
        'Hey there :( How are you doing :('
      )
    })

    it('should work with social media posts', () => {
      expect(replaceSmily('Great day today :) #happy :) #blessed')).toBe(
        'Great day today :( #happy :( #blessed'
      )
    })

    it('should work with email signatures', () => {
      expect(replaceSmily('Best regards :)\nJohn Doe')).toBe(
        'Best regards :(\nJohn Doe'
      )
    })

    it('should preserve other emoticons', () => {
      expect(replaceSmily('Happy :) Wink ;) Sad :( Surprised :O')).toBe(
        'Happy :( Wink ;) Sad :( Surprised :O'
      )
    })
  })
})
