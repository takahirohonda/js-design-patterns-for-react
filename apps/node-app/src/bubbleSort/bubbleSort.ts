export const bubbleSort = (array: number[]) => {
  const sortedArray = [...array]
  for (let i = 0; i < sortedArray.length; i++) {
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        ;[sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ]
      }
    }
  }
  return sortedArray
}
