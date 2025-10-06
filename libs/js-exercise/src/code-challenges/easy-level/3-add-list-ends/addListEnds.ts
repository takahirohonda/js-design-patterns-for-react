/*
 * Add first and last element of an array and return a value
 * [10, 20, 30] -> 40
 * [1, 2, 3, 4, 5, 6] -> 7
 * */

export const addListEnds = (arr: number[]) => {
  return arr[0] + arr[arr.length - 1]
}
