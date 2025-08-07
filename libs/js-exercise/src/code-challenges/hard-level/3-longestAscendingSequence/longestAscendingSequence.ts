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
  // TODO: Implement the function
  let longest: number[] = []
  let tempArray: number[] = []
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < arr[i + 1]) {
      if (tempArray.length === 0) {
        tempArray.push(...[arr[i], arr[i + 1]])
      } else {
        tempArray.push(...[arr[i + 1]])
      }
    } else {
      if (tempArray.length >= longest.length) {
        longest = tempArray
      }
      tempArray = []
    }
  }
  return longest.length > 0 ? longest : [arr[0]]
}
