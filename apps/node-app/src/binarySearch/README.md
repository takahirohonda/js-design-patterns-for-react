# Binary Search

Binary search is a search algorithm to find the position of a target value within a sorted array.

**Example**

In the array below, find the position of 67:

[2, 3, 5, 14, 34, 67, 75, 85, 95]

Big O

```ts
export const binarySearch = (array: number[], target: number) => {
  let maxIndex = array.length - 1
  let minIndex = 0

  do {
    const targetIndex = Math.floor((maxIndex + minIndex) / 2)
    if (array[targetIndex] === target) {
      return targetIndex
    } else if (maxIndex === minIndex) {
      return -1
    } else if (array[targetIndex] < target) {
      minIndex = targetIndex + 1
    } else if (array[targetIndex] > target) {
      maxIndex = targetIndex
    }
  } while (minIndex < maxIndex + 1)
}
```

This one is better

```ts
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
```
