const isPerfectSquare = (n: number) => Number.isInteger(Math.sqrt(n))

const makeNumberFromArray = (arr: string[]): number => parseInt(arr.join(''))

const isArrayNumberPerfectSquare = (arr: string[]) =>
  isPerfectSquare(makeNumberFromArray(arr))

export const anagramicSquare = (n: number) => {
  const startArray = n.toString().split('')
  const numberLength = startArray.length
  let perfectSquareCount: number = isPerfectSquare(n) ? 1 : 0
  let currentArray = startArray

  for (let i = 0; i < numberLength; i++) {
    for (let j = 0; j < numberLength - i - 1; j++) {
      const newNumberArray = [
        ...currentArray.slice(0, j),
        currentArray[j + 1],
        currentArray[j],
        ...currentArray.slice(j + 2, numberLength),
      ]

      console.log(`current position: i = ${i}, j = ${j}`)
      console.log(`currentArray: ${currentArray}`)
      console.log(`newNumberArray: ${newNumberArray}`)
      console.log(`perfectSquareCount: ${perfectSquareCount}`)
      console.log(
        `check makeNumberFromArray: ${makeNumberFromArray(newNumberArray)}`
      )
      console.log(
        `check isPerfectSquare: ${isPerfectSquare(
          makeNumberFromArray(newNumberArray)
        )}`
      )

      if (isArrayNumberPerfectSquare(newNumberArray)) {
        perfectSquareCount += 1
        if (perfectSquareCount >= 2) {
          return true
        }
      }

      currentArray = newNumberArray
    }
  }

  return false
}
