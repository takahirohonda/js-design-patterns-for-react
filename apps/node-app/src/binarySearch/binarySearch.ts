export const binarySearch = (array: number[], target: number) => {
  let maxIndex = array.length - 1
  let minIndex = 0

  do {
    const targetIndex = Math.floor((maxIndex + minIndex) / 2)
    if (array[targetIndex] === target) {
      return targetIndex
    } else if (array[targetIndex] < target) {
      minIndex = targetIndex + 1
    } else if (array[targetIndex] > target) {
      maxIndex = targetIndex
    } else {
      return -1
    }
  } while (minIndex <= array.length - 1 && maxIndex >= 0)
}
