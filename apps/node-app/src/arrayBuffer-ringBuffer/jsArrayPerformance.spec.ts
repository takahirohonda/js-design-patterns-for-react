import { getExecutionDuration, unshift } from './jsArrayPerformance'

describe('Empirically deducing JS array algorithm', () => {
  it('test', () => {
    const sizeArray = [10, 100, 1000, 10000, 100000]

    sizeArray.forEach((size) => {
      console.log(getExecutionDuration(() => unshift(size)))
    })

    expect(1 + 1).toBe(2)
  })
})
