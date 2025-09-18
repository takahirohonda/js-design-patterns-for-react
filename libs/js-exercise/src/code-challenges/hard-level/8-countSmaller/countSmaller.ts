export const countSmaller = (num: number[]) => {
  const newArray: number[] = []
  const lastArrayIndex = num.length - 1
  for (let i = 0; i <= lastArrayIndex; i++) {
    const currentArrayElement = num[i]
    const searchArray = num.slice(i, lastArrayIndex + 1)
    const totalSmallerNumber = searchArray.reduce((prev, current) => {
      if (currentArrayElement > current) {
        return prev + 1
      }
      return prev
    }, 0)
    newArray.push(totalSmallerNumber)
  }

  return newArray
}
