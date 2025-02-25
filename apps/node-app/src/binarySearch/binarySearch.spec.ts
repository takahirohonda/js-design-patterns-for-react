import { binarySearch } from './binarySearch'

describe('binarySearch', () => {
  it('should give us correct index', () => {
    const array = [2, 3, 5, 14, 34, 67, 75, 85, 95]
    const target = 2
    const result = binarySearch(array, target)
    expect(result).toBe(0)
  })

  it.each<{
    target: number
    expectedIndex: number
  }>([
    { target: 2, expectedIndex: 0 },
    { target: 3, expectedIndex: 1 },
    { target: 5, expectedIndex: 2 },
    { target: 14, expectedIndex: 3 },
    { target: 34, expectedIndex: 4 },
    { target: 67, expectedIndex: 5 },
    { target: 75, expectedIndex: 6 },
    { target: 85, expectedIndex: 7 },
    { target: 95, expectedIndex: 8 },
    { target: 33, expectedIndex: -1 },
  ])(
    'returns $expectedCopy when target is $target',
    ({ target, expectedIndex }) => {
      const array = [2, 3, 5, 14, 34, 67, 75, 85, 95]
      const result = binarySearch(array, target)
      console.log(`Checking result with target = ${target}: ${result}`)
      expect(result).toBe(expectedIndex)
    }
  )
})
