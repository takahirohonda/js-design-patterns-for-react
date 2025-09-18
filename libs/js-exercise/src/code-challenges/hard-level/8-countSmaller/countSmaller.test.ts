import { countSmaller } from './countSmaller'

describe('countSmaller', () => {
  it('should return the correct counts for the example [5, 2, 6, 1]', () => {
    expect(countSmaller([5, 2, 6, 1])).toEqual([2, 1, 1, 0])
  })

  it('should return the correct counts for the example [8, 6, 5, 9, 4, 2]', () => {
    expect(countSmaller([8, 6, 5, 9, 4, 2])).toEqual([4, 3, 2, 2, 1, 0])
  })

  it('should handle an array with all increasing numbers', () => {
    expect(countSmaller([1, 2, 3, 4])).toEqual([0, 0, 0, 0])
  })

  it('should handle an array with all decreasing numbers', () => {
    expect(countSmaller([4, 3, 2, 1])).toEqual([3, 2, 1, 0])
  })

  it('should handle an array with duplicates', () => {
    expect(countSmaller([5, 2, 2, 6, 1])).toEqual([3, 1, 1, 1, 0])
  })

  it('should handle an array with one element', () => {
    expect(countSmaller([7])).toEqual([0])
  })

  it('should handle an empty array', () => {
    expect(countSmaller([])).toEqual([])
  })
})
