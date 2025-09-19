import { alienOrder } from './alienLanguageChar'

describe('alienLanguageChar', () => {
  it('should return the correct order for the example 1', () => {
    expect(alienOrder(['ba', 'cb', 'cd', 'ad'])).toBe('cbad')
  })

  it('should return the correct order for the example 2', () => {
    expect(alienOrder(['wrt', 'wrf', 'er', 'ett', 'rftt'])).toBe('wertf')
  })

  it('should handle a single word', () => {
    expect(alienOrder(['abc'])).toBe('abc')
  })

  it('should handle words with one character', () => {
    expect(alienOrder(['a', 'b', 'c'])).toBe('abc')
  })

  it('should handle words with repeated characters', () => {
    expect(alienOrder(['aa', 'ab', 'ac'])).toBe('abc')
  })

  it('should handle empty input', () => {
    expect(alienOrder([])).toBe('')
  })
})
