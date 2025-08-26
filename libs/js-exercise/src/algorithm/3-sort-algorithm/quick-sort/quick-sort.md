# Quick Sort

## Algorithm Summary

1. Pick a pivot element.
2. Partition the array so elements less than the pivot go to the left, and greater one go to the right.
3. Recursively sorting the left and right sub-arrays.

`[0     P        N]`
`[0  p1 p   p2   N]`

Complexity -> `O(N x logN)`

```ts
;[9, 8, 7, 6, 5, 4, 3]

const pivot = Math.floor(array.length / 2) // 3
const rightArray = []
const leftArray = []

for (let i = 0; i > 0; i++) {
  if (array[i] >= array[pivot]) {
    rightArray.push[array[i]]
  } else {
    leftArray.push[array[i]]
  }
}
```
