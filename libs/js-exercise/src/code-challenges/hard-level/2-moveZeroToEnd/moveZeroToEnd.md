# Move zero to end

Move all zeros to the end of the array while maintaining the relative order of the non-zero elements.

`[0, 1, 0, 3, 12]` -> `[1, 3, 12, 0, 0]`

Note that non-zero elements maintain the order like [1, 3, 12]

## Solutions

Mine is ok, but not most efficient because I do filter twice...

More efficient ones

1. In-place two pointer method

Time: O(n)
Space: O(1) (works in-place)
Passes: 1 full loop + a short fill loop

```ts
export const moveZeroToEnd = (arr: number[]) => {
  let insertPos = 0

  // Move non-zero values forward
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      arr[insertPos++] = arr[i]
    }
  }

  // Fill the rest with zeros
  while (insertPos < arr.length) {
    arr[insertPos++] = 0
  }

  return arr
}
```

2. SIngle-pass with reduce (not-in-place)

```ts
export const moveZeroToEnd = (arr: number[]) =>
  arr.reduce<number[]>((acc, n) => (n === 0 ? [...acc, 0] : [n, ...acc]), [])
```
