import { Box } from './Box'
import * as R from 'ramda'

describe('Functor exercise', () => {
  const moneyToFloat = (str) => parseFloat(str.replace(/\$/, ''))
  const percentToFloat = (str) => {
    const float = parseFloat(str.replace(/%/, ''))
    return float * 0.01
  }

  it('Ex1: Using Box, refactor moneyToFloat to be unnested.', () => {
    expect(moneyToFloat('$5.00')).toBe(5)

    // Answer
    expect(
      Box('$5.00')
        .map((x) => x.replace(/\$/, ''))
        .fold((x) => parseFloat(x))
    ).toBe(5)
  })
  it('Ex2: Using Box, refactor percentToFloat to remove assignment', () => {
    expect(percentToFloat('20%')).toBe(0.2)

    // Answer
    expect(
      Box('20%')
        .map((x) => x.replace(/%/, ''))
        .fold((x) => x * 0.01)
    ).toBe(0.2)
  })
  it('Ex3: Apply discount', () => {
    const applyDiscount = (price, discount) => {
      const cents = moneyToFloat(price)
      const savings = percentToFloat(discount)
      return cents - cents * savings
    }

    expect(applyDiscount('$5.00', '20%')).toBe(4)

    // Answer
    const formatDollar = (x) =>
      Box(x)
        .map((x) => x.replace(/\$/, ''))
        .fold((x) => parseFloat(x))

    const formatToFloat = (y) =>
      Box(y)
        .map((x) => x.replace(/%/, ''))
        .fold((x) => x * 0.01)

    const calculate = (x, y) => x - x * y

    expect(calculate(formatDollar('$5.00'), formatToFloat('20%'))).toBe(4)

    // this is better
    const chainedApplyDiscount = (price, discount) =>
      // chain will flatten the function like Box(Box(x)), also called flat map.
      Box(formatDollar(price)).chain((cents) =>
        Box(formatToFloat(discount)).fold((savings) => cents - cents * savings)
      )

    expect(chainedApplyDiscount('$5.00', '20%')).toBe(4)
  })
})
