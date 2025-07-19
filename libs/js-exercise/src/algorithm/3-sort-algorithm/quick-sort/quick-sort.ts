export const quickSort = (array: number[]) => {
  if (array.length <= 1) {
    return array
  }

  const pivotIndex = Math.floor(array.length / 2)
  const left = []
  const right = []

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) {
      continue
    }
    if (array[i] >= array[pivotIndex]) {
      right.push(array[i])
    } else {
      left.push(array[i])
    }
  }
  return [...quickSort(left), array[pivotIndex], ...quickSort(right)]
}

// v2 need to validate
export const quickSortV2 = (array: number[]): number[] => {
  if (array.length < 2) return array

  const pivot = array[0]
  const left = array.slice(1).filter((el) => el <= pivot)
  const right = array.slice(1).filter((el) => el > pivot)

  return [...quickSortV2(left), pivot, ...quickSortV2(right)]
}

// using middle a s a pivot

export const quickSortV3 = (array: number[]): number[] => {
  if (array.length < 2) return array

  // random pivot might be better in some case... const pivotIndex = Math.floor(Math.random() * array.length);
  const pivotIndex = Math.floor(array.length / 2)
  const pivot = array[pivotIndex]

  const left = array.filter((_, i) => i !== pivotIndex && array[i] <= pivot)
  const right = array.filter((_, i) => i !== pivotIndex && array[i] > pivot)

  return [...quickSortV2(left), pivot, ...quickSortV2(right)]
}

// more memory efficient version of the first one..

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
