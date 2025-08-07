import { longestAscendingSequence } from './longestAscendingSequence'

describe('longestAscendingSequence', () => {
  it('should find the longest ascending sequence from the example', () => {
    const input = [1, 3, 2, 4, 6]
    const expected = [2, 4, 6]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle a fully ascending array', () => {
    const input = [1, 2, 3, 4, 5]
    const expected = [1, 2, 3, 4, 5]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle a fully descending array', () => {
    const input = [5, 4, 3, 2, 1]
    const expected = [5]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with all same numbers', () => {
    const input = [2, 2, 2, 2, 2]
    const expected = [2]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle single element array', () => {
    const input = [5]
    const expected = [5]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle empty array', () => {
    const input: number[] = []
    const expected: number[] = []
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with two elements in ascending order', () => {
    const input = [1, 3]
    const expected = [1, 3]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with two elements in descending order', () => {
    const input = [3, 1]
    const expected = [3]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with multiple ascending sequences', () => {
    const input = [1, 3, 2, 4, 6, 5, 7, 8]
    const expected = [2, 4, 6]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with negative numbers', () => {
    const input = [-3, -1, -2, 0, 2, 1, 3]
    const expected = [-2, 0, 2]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with mixed positive and negative numbers', () => {
    const input = [-5, -3, -1, 0, 2, 4, 3, 5]
    const expected = [-5, -3, -1, 0, 2, 4]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with large numbers', () => {
    const input = [1000, 2000, 1500, 2500, 3000, 2501, 3001]
    const expected = [1500, 2500, 3000]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with decimal numbers', () => {
    const input = [1.5, 2.5, 1.8, 3.2, 2.9, 4.1]
    const expected = [1.8, 3.2]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with repeated ascending sequences', () => {
    const input = [1, 2, 3, 1, 2, 3, 4, 1, 2]
    const expected = [1, 2, 3, 4]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with zeros', () => {
    const input = [0, 1, 0, 2, 0, 3, 4]
    const expected = [0, 2]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with all zeros', () => {
    const input = [0, 0, 0, 0]
    const expected = [0]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should not mutate the original array', () => {
    const input = [1, 3, 2, 4, 6]
    const original = [...input]
    longestAscendingSequence(input)
    expect(input).toEqual(original)
  })

  it('should handle array with very long ascending sequence', () => {
    const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3]
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with ascending sequence at the end', () => {
    const input = [5, 4, 3, 2, 1, 2, 3, 4, 5]
    const expected = [1, 2, 3, 4, 5]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })

  it('should handle array with ascending sequence in the middle', () => {
    const input = [5, 4, 1, 2, 3, 4, 5, 3, 2]
    const expected = [1, 2, 3, 4, 5]
    expect(longestAscendingSequence(input)).toEqual(expected)
  })
})
