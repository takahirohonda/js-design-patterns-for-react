import {
  getExecutionDuration,
  pop,
  push,
  shift,
  unshift,
} from './jsArrayPerformance'

describe('Empirically deducing JS array algorithm', () => {
  const unshiftPerformance = []
  const shiftPerformance = []
  const pushPerformance = []
  const popPerformance = []

  afterEach(() => {
    console.log('Performance for unshift operation')
    console.log(JSON.stringify(unshiftPerformance))
    console.log(`shift performance: ${JSON.stringify(shiftPerformance)}`)
    console.log(`push performance: ${JSON.stringify(pushPerformance)}`)
    console.log(`pop performance: ${JSON.stringify(popPerformance)}`)
  })

  it('test', () => {
    const sizeArray = [10, 100, 1000, 10000, 100000]
    // const sizeArray2 = [10, 100, 1000, 10000, 100000, 1_000_000, 10_000_000]
    sizeArray.forEach((size) => {
      unshiftPerformance.push({
        size: size,
        time: getExecutionDuration(() => unshift(size)),
      })
    })

    sizeArray.forEach((size) => {
      shiftPerformance.push({
        size: size,
        time: getExecutionDuration(() => shift(size)),
      })
    })

    sizeArray.forEach((size) => {
      pushPerformance.push({
        size: size,
        time: getExecutionDuration(() => push(size)),
      })
    })

    sizeArray.forEach((size) => {
      popPerformance.push({
        size: size,
        time: getExecutionDuration(() => pop(size)),
      })
    })

    expect(1 + 1).toBe(2)
  })
})
