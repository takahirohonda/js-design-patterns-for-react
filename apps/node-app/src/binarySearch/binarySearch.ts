export const binarySearch = (array: number[], target: number) => {
  let maxIndex = array.length
  let minIndex = 0

  do {
    const targetIndex = Math.floor(minIndex + (maxIndex - minIndex) / 2)
    if (array[targetIndex] === target) {
      return targetIndex
    } else if (array[targetIndex] < target) {
      minIndex = targetIndex + 1
    } else if (array[targetIndex] > target) {
      maxIndex = targetIndex
    }
  } while (minIndex < maxIndex)
  return -1
}
