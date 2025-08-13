/**
 * Find the longest ascending sequence in an array.
 * An ascending sequence is a series of numbers where each number is greater than the preceding one.
 *
 * @param arr - The input array of numbers
 * @returns The longest ascending sequence as an array
 *
 * @example
 * longestAscendingSequence([1, 3, 2, 4, 6]) // returns [2, 4, 6]
 * longestAscendingSequence([1, 2, 3, 4, 5]) // returns [1, 2, 3, 4, 5]
 * longestAscendingSequence([5, 4, 3, 2, 1]) // returns [5]
 */
export const longestAscendingSequence = (arr: number[]): number[] => {
  const newArray: number[][] = []
  let tempArray: number[] = []
  let longestIndex = 0

  // check for empty array, array with one element, array with all the same element
  if (arr.length < 1) {
    return arr
  }

  const map = new Map()
  arr.forEach((elem, index) => map.set(elem, index))

  if (map.size === 1) {
    return [arr[0]]
  }

  tempArray.push(arr[0])
  let counter = 1
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i + 1] > arr[i]) {
      counter += 1
      tempArray.push(arr[i + 1])
    } else {
      newArray.push(tempArray)
      tempArray = [arr[i + 1]]
      if (newArray[longestIndex].length < counter) {
        longestIndex = newArray.length - 1
      }
      counter = 1
    }
  }

  return newArray[longestIndex]
}
