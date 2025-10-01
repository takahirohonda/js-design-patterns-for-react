const hasOneFactorFromArray = (targetNum: number, numberArray: number[]) => {
  let total = 0
  for (let i = 0; i < numberArray.length; i++) {
    if (targetNum < numberArray[i]) {
      break
    } else if (targetNum % numberArray[i] === 0) {
      total += 1
    }
  }

  return total === 1
}

export const eulerTotient = (n: number) => {
  if (n <= 0) {
    throw new Error('Input has to be a positive integer')
  }
  const eluerTotientNum = []

  const sequenceArray = [...Array(n).keys()].map((n) => n + 1)

  const factorForN = sequenceArray
    .map((number) => {
      if (n % number === 0) {
        return number
      }
    })
    .filter((num) => num !== undefined)

  sequenceArray.forEach((number) => {
    if (hasOneFactorFromArray(number, factorForN)) {
      eluerTotientNum.push(number)
    }
  })

  return eluerTotientNum.length
}
