import { stringToTitleCase } from './titlecase'

describe('stringToTitleCase', () => {
  describe('basic functionality', () => {
    it('should convert single word to title case', () => {
      expect(stringToTitleCase('hello')).toBe('Hello')
      expect(stringToTitleCase('world')).toBe('World')
      expect(stringToTitleCase('javascript')).toBe('Javascript')
    })

    it('should convert multiple words to title case', () => {
      expect(stringToTitleCase('hello world')).toBe('Hello World')
      expect(stringToTitleCase('the quick brown fox')).toBe(
        'The Quick Brown Fox'
      )
      expect(stringToTitleCase('javascript is awesome')).toBe(
        'Javascript Is Awesome'
      )
    })

    it('should handle already capitalized words', () => {
      expect(stringToTitleCase('Hello World')).toBe('Hello World')
      expect(stringToTitleCase('HELLO WORLD')).toBe('Hello World')
      expect(stringToTitleCase('HeLLo WoRLd')).toBe('Hello World')
    })
  })

  describe('edge cases', () => {
    it('should handle empty string', () => {
      expect(stringToTitleCase('')).toBe('')
    })

    it('should handle single character', () => {
      expect(stringToTitleCase('a')).toBe('A')
      expect(stringToTitleCase('z')).toBe('Z')
      expect(stringToTitleCase('A')).toBe('A')
    })

    it('should handle strings with only spaces', () => {
      expect(stringToTitleCase(' ')).toBe(' ')
      expect(stringToTitleCase('   ')).toBe('   ')
    })
  })

  describe('whitespace handling', () => {
    it('should preserve single spaces between words', () => {
      expect(stringToTitleCase('hello world')).toBe('Hello World')
    })

    it('should preserve multiple spaces between words', () => {
      expect(stringToTitleCase('hello  world')).toBe('Hello  World')
      expect(stringToTitleCase('hello   world')).toBe('Hello   World')
    })

    it('should preserve leading spaces', () => {
      expect(stringToTitleCase(' hello world')).toBe(' Hello World')
      expect(stringToTitleCase('  hello world')).toBe('  Hello World')
    })

    it('should preserve trailing spaces', () => {
      expect(stringToTitleCase('hello world ')).toBe('Hello World ')
      expect(stringToTitleCase('hello world  ')).toBe('Hello World  ')
    })

    it('should handle tabs and other whitespace characters', () => {
      expect(stringToTitleCase('hello\tworld')).toBe('Hello\tWorld')
      expect(stringToTitleCase('hello\nworld')).toBe('Hello\nWorld')
      expect(stringToTitleCase('hello\r\nworld')).toBe('Hello\r\nWorld')
    })
  })

  describe('special characters and punctuation', () => {
    it('should handle words with apostrophes', () => {
      expect(stringToTitleCase("don't stop believing")).toBe(
        "Don't Stop Believing"
      )
      expect(stringToTitleCase("it's a beautiful day")).toBe(
        "It's A Beautiful Day"
      )
      expect(stringToTitleCase("we're going home")).toBe("We're Going Home")
    })

    it('should handle words with hyphens', () => {
      expect(stringToTitleCase('well-known author')).toBe('Well-Known Author')
      expect(stringToTitleCase('state-of-the-art technology')).toBe(
        'State-Of-The-Art Technology'
      )
      expect(stringToTitleCase('twenty-five years old')).toBe(
        'Twenty-Five Years Old'
      )
    })

    it('should handle punctuation marks', () => {
      expect(stringToTitleCase('hello, world!')).toBe('Hello, World!')
      expect(stringToTitleCase('what? no way!')).toBe('What? No Way!')
      expect(stringToTitleCase('yes; that is correct.')).toBe(
        'Yes; That Is Correct.'
      )
    })

    it('should handle words with numbers', () => {
      expect(stringToTitleCase('chapter 1 introduction')).toBe(
        'Chapter 1 Introduction'
      )
      expect(stringToTitleCase('top 10 movies of 2023')).toBe(
        'Top 10 Movies Of 2023'
      )
      expect(stringToTitleCase('ios 15 features')).toBe('Ios 15 Features')
    })
  })

  describe('mixed case scenarios', () => {
    it('should handle all uppercase strings', () => {
      expect(stringToTitleCase('HELLO WORLD')).toBe('Hello World')
      expect(stringToTitleCase('THIS IS A TEST')).toBe('This Is A Test')
    })

    it('should handle all lowercase strings', () => {
      expect(stringToTitleCase('hello world')).toBe('Hello World')
      expect(stringToTitleCase('this is a test')).toBe('This Is A Test')
    })

    it('should handle camelCase strings', () => {
      expect(stringToTitleCase('camelCase string')).toBe('Camelcase String')
      expect(stringToTitleCase('firstName lastName')).toBe('Firstname Lastname')
    })

    it('should handle snake_case strings', () => {
      expect(stringToTitleCase('snake_case string')).toBe('Snake_case String')
      expect(stringToTitleCase('first_name last_name')).toBe(
        'First_name Last_name'
      )
    })
  })

  describe('longer sentences and paragraphs', () => {
    it('should handle long sentences', () => {
      const input = 'the quick brown fox jumps over the lazy dog'
      const expected = 'The Quick Brown Fox Jumps Over The Lazy Dog'
      expect(stringToTitleCase(input)).toBe(expected)
    })

    it('should handle sentences with multiple punctuation', () => {
      const input = 'hello world! how are you today? i am fine, thank you.'
      const expected = 'Hello World! How Are You Today? I Am Fine, Thank You.'
      expect(stringToTitleCase(input)).toBe(expected)
    })
  })

  describe('unicode and international characters', () => {
    it('should handle accented characters', () => {
      expect(stringToTitleCase('café au lait')).toBe('Café Au Lait')
      expect(stringToTitleCase('naïve approach')).toBe('Naïve Approach')
      expect(stringToTitleCase('résumé writing')).toBe('Résumé Writing')
    })

    it('should handle non-Latin characters if supported', () => {
      // These tests might need adjustment based on implementation
      expect(stringToTitleCase('привет мир')).toBe('Привет Мир') // Russian
      expect(stringToTitleCase('こんにちは 世界')).toBe('こんにちは 世界') // Japanese
    })
  })

  describe('performance and stress tests', () => {
    it('should handle very long strings', () => {
      const longString = 'word '.repeat(1000).trim()
      const result = stringToTitleCase(longString)
      expect(result).toMatch(/^Word( Word)*$/)
      expect(result?.split(' ').length).toBe(1000)
    })

    it('should handle strings with many spaces', () => {
      const spacedString = 'a' + ' '.repeat(100) + 'b'
      const result = stringToTitleCase(spacedString)
      expect(result).toBe('A' + ' '.repeat(100) + 'B')
    })
  })

  describe('type safety', () => {
    it('should handle string input correctly', () => {
      expect(() => stringToTitleCase('valid string')).not.toThrow()
    })

    // Note: These test runtime behavior for invalid inputs
    it('should handle undefined gracefully in runtime', () => {
      expect(() => stringToTitleCase(undefined as unknown as string)).toThrow()
    })

    it('should handle null gracefully in runtime', () => {
      expect(() => stringToTitleCase(null as unknown as string)).toThrow()
    })
  })
})
