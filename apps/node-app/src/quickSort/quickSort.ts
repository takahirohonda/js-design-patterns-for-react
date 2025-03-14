export const quickSort = (arr: number[]) => {
  if (arr.length <= 1) {
    return arr
  }

  const pivotIndex = Math.floor(arr.length / 2)
  const pivot = arr[pivotIndex]
  const left = []
  const right = []

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue
    }
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

export const quickSortInPlace = (
  arr: number[],
  left = 0,
  right = arr.length - 1
) => {
  if (left >= right) return

  const pivotIndex = partition(arr, left, right)
  quickSortInPlace(arr, left, pivotIndex - 1) // Sort left half
  quickSortInPlace(arr, pivotIndex + 1, right) // Sort right half
}

function partition(arr, left, right) {
  const pivotIndex = Math.floor((left + right) / 2)
  const pivot = arr[pivotIndex]

  // Move pivot to the right
  ;[arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]

  let partitionIndex = left
  for (let i = left; i < right; i++) {
    if (arr[i] < pivot) {
      ;[arr[i], arr[partitionIndex]] = [arr[partitionIndex], arr[i]]
      partitionIndex++
    }
  }

  // Swap pivot back to its final place
  ;[arr[partitionIndex], arr[right]] = [arr[right], arr[partitionIndex]]

  return partitionIndex
}
