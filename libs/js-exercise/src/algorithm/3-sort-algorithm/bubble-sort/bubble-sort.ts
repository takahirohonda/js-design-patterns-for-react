export const bubbleSort = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j]
        array[j] = array[j + 1]
        array[j + 1] = temp
      }
    }
  }
  return array
}

// this is better because it implement early exit...
export const optimisedBubbleSort = (array: number[]) => {
  // it's better to create a shallow copy and not to mutate the original array
  const sortedArray = [...array]
  for (let i = 0; i < sortedArray.length; i++) {
    let swapped = false
    for (let j = 0; j < sortedArray.length - i - 1; j++) {
      if (sortedArray[j] > sortedArray[j + 1]) {
        ;[sortedArray[j], sortedArray[j + 1]] = [
          sortedArray[j + 1],
          sortedArray[j],
        ]
        swapped = true
      }
    }

    // early exit if no swap because the array is already sorted
    if (!swapped) {
      break
    }
  }
  return sortedArray
}
