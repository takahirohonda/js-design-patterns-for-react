import { ginortSOrder } from './ginortSOrder'

describe('ginortSOrder', () => {
  const input1 = 'Sorting4321'
  const expected1 = 'ginortS1324'
  it('should sort strings correctly', () => {
    expect(ginortSOrder(input1)).toBe(expected1)
  })

  it('checking some js code', () => {
    const testString = 'aY786sdfC'
    const newArray = testString
      .split('')
      .filter((s) => s.match(/[a-z]/))
      .toSorted()
  })
})
