import { validateCrn } from './crnValidator'

describe('validateCrn', () => {
  it('should return true for valid CRNs with 8 digits', () => {
    expect(validateCrn('12345678')).toBe(true)
  })

  it('should return true for valid CRNs with 2 letters followed by 6 digits', () => {
    expect(validateCrn('AB123456')).toBe(true)
  })

  it('should return false for invalid CRNs with less than 8 characters', () => {
    expect(validateCrn('1234567')).toBe(false)
  })

  it('should return false for invalid CRNs with more than 8 characters', () => {
    expect(validateCrn('123456789')).toBe(false)
  })

  it('should return false for invalid CRNs with incorrect format', () => {
    expect(validateCrn('A1234567')).toBe(false)
    expect(validateCrn('AB12345C')).toBe(false)
  })
})
