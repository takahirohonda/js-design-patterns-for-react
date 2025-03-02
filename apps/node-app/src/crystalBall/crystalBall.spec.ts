import { crystalBall } from './crystalBall'

describe('crystalBall', () => {
  it('should give us correct index', () => {
    const array = [2, 3, 5, 14, 34, 67, 75, 85, 95]
    const target = 67
    const result = crystalBall(array, target)
    expect(result).toBe(5)
  })

  it.each<{
    breakingPoint: number
    expectedIndex: number
  }>([
    { breakingPoint: 2, expectedIndex: 0 },
    { breakingPoint: 3, expectedIndex: 1 },
    { breakingPoint: 5, expectedIndex: 2 },
    { breakingPoint: 14, expectedIndex: 3 },
    { breakingPoint: 34, expectedIndex: 4 },
    { breakingPoint: 67, expectedIndex: 5 },
    { breakingPoint: 75, expectedIndex: 6 },
    { breakingPoint: 85, expectedIndex: 7 },
    { breakingPoint: 95, expectedIndex: 8 },
    { breakingPoint: 33, expectedIndex: -1 },
  ])(
    'returns $expectedCopy when breakingPoint is $breakingPoint',
    ({ breakingPoint, expectedIndex }) => {
      const array = [2, 3, 5, 14, 34, 67, 75, 85, 95]
      const result = crystalBall(array, breakingPoint)
      console.log(
        `Checking result with breakingPoint = ${breakingPoint}: ${result}`
      )
      expect(result).toBe(expectedIndex)
    }
  )
})
