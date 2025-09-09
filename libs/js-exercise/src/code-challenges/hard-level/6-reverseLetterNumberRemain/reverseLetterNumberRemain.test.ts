import { reverseLetterNumberRemain } from './reverseLetterNumberRemain'

describe('reverseLetterNumberRemain', () => {
  it('should reverse only the letters and keep numbers in place (example 1)', () => {
    expect(reverseLetterNumberRemain('H2SO4')).toBe('O2SH4')
  })

  it('should reverse only the letters and keep numbers in place (example 2)', () => {
    expect(reverseLetterNumberRemain('a1b2c3d4')).toBe('d1c2b3a4')
  })

  it('should handle mixed letters and numbers', () => {
    expect(reverseLetterNumberRemain('w7xy3z')).toBe('z7yx3w')
    expect(reverseLetterNumberRemain('A1B2C3')).toBe('C1B2A3')
  })

  it('should handle strings with no numbers', () => {
    expect(reverseLetterNumberRemain('abcd')).toBe('dcba')
    expect(reverseLetterNumberRemain('XYZ')).toBe('ZYX')
  })

  it('should handle strings with no letters', () => {
    expect(reverseLetterNumberRemain('1234')).toBe('1234')
    expect(reverseLetterNumberRemain('9')).toBe('9')
  })

  it('should handle empty string', () => {
    expect(reverseLetterNumberRemain('')).toBe('')
  })
})
