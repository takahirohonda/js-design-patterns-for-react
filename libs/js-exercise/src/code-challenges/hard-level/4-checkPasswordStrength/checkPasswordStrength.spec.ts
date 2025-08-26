import { checkPasswordStrength } from './checkPasswordStrength'

describe('checkPasswordStrength', () => {
  it('should return Strong for a strong password', () => {
    expect(checkPasswordStrength('StrongPwd1!')).toBe('Strong')
    expect(checkPasswordStrength('Passw0rd!')).toBe('Strong')
    expect(checkPasswordStrength('A1b2c3d4!')).toBe('Strong')
  })

  it('should return Medium for a medium password', () => {
    expect(checkPasswordStrength('Passpass123')).toBe('Medium')
    expect(checkPasswordStrength('abc123')).toBe('Medium')
    expect(checkPasswordStrength('A1b2c3')).toBe('Medium')
  })

  it('should return Weak for a weak password', () => {
    expect(checkPasswordStrength('weakpwd')).toBe('Weak')
    expect(checkPasswordStrength('pass')).toBe('Weak')
    expect(checkPasswordStrength('12345')).toBe('Weak')
    expect(checkPasswordStrength('')).toBe('Weak')
  })
})
