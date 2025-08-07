import { moveZeroToEnd } from './mozeZeroToEnd'

describe('moveZeroToEnd', () => {
  it('should move all zeros to the end while maintaining relative order of non-zero elements', () => {
    const input = [0, 1, 0, 3, 12]
    const expected = [1, 3, 12, 0, 0]
    expect(moveZeroToEnd(input)).toEqual(expected)
  })

  it('should handle array with no zeros', () => {
    const input = [1, 2, 3, 4, 5]
    const expected = [1, 2, 3, 4, 5]
    expect(moveZeroToEnd(input)).toEqual(expected)
  })

  it('should handle array with all zeros', () => {
    const input = [0, 0, 0, 0]
    const expected = [0, 0, 0, 0]
    expect(moveZeroToEnd(input)).toEqual(expected)
  })

  it('should handle array with zeros at the beginning', () => {
    const input = [0, 0, 1, 2, 3]
    const expected = [1, 2, 3, 0, 0]
    expect(moveZeroToEnd(input)).toEqual(expected)
  })

  it('should handle array with zeros at the end', () => {
    const input = [1, 2, 3, 0, 0]
    const expected = [1, 2, 3, 0, 0]
    expect(moveZeroToEnd(input)).toEqual(expected)
  })

  it('should handle array with alternating zeros and non-zeros', () => {
    const input = [1, 0, 2, 0, 3, 0, 4]
    const expected = [1, 2, 3, 4, 0, 0, 0]
    expect(moveZeroToEnd(input)).toEqual(expected)
  })

  it('should handle single element array with zero', () => {
    const input = [0]
    const expected = [0]
    expect(moveZeroToEnd(input)).toEqual(expected)
  })

  it('should handle single element array with non-zero', () => {
    const input = [5]
    const expected = [5]
    expect(moveZeroToEnd(input)).toEqual(expected)
  })

  it('should handle empty array', () => {
    const input: number[] = []
    const expected: number[] = []
    expect(moveZeroToEnd(input)).toEqual(expected)
  })

  it('should handle array with negative numbers and zeros', () => {
    const input = [-1, 0, -2, 0, 3]
    const expected = [-1, -2, 3, 0, 0]
    expect(moveZeroToEnd(input)).toEqual(expected)
  })

  it('should handle array with large numbers', () => {
    const input = [1000000, 0, 999999, 0, 123456]
    const expected = [1000000, 999999, 123456, 0, 0]
    expect(moveZeroToEnd(input)).toEqual(expected)
  })

  it('should not mutate the original array', () => {
    const input = [0, 1, 0, 3, 12]
    const original = [...input]
    moveZeroToEnd(input)
    expect(input).toEqual(original)
  })
})
