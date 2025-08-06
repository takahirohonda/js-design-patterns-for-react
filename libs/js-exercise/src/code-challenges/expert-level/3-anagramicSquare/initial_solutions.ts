// My initial solutions

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

// this can be improved like this... but still not as good
export const anagramicSquare2 = (n: number) => {
  const startArray = n.toString().split('')
  const numberLength = startArray.length

  let perfectSquareCount = isPerfectSquare(n) ? 1 : 0
  const seen = new Set<number>() // avoid re-checking the same number

  // helper: swap two elements in an array copy
  const swap = (arr: string[], i: number, j: number) => {
    const copy = [...arr]
    ;[copy[i], copy[j]] = [copy[j], copy[i]]
    return copy
  }

  // generate all permutations recursively
  const permute = (arr: string[], l: number) => {
    if (l === numberLength - 1) {
      const num = makeNumberFromArray(arr)
      if (!seen.has(num)) {
        seen.add(num)
        if (isPerfectSquare(num)) {
          perfectSquareCount++
          if (perfectSquareCount >= 2) return true
        }
      }
      return false
    }
    for (let i = l; i < numberLength; i++) {
      const swapped = swap(arr, l, i)
      if (permute(swapped, l + 1)) return true // early exit if found
    }
    return false
  }

  return permute(startArray, 0)
}
