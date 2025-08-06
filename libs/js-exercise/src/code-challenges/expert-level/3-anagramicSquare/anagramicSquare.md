# Anagramic Square

Some perfect square number have anagrams that are also perfect square numbers. An anagram is a number that is formed by rearranging the digits of another number.

`169` & `196` are perfect squares.

`13 ^ 2 = 169`
`14 ^ 2 = 196`

## Need to know

```js
Math.log2() // -> will be a perfect integer for a perfect square number. Otherwise, it returns a decimal number.
Number.isInteger() // -> check to see if a number is integer or not.
```

## My thinking...

1. We create an array of all the possible integer combos.
2. Check to see if the perfect square count becomes more than 2.

```
[1, 2, 3]
[2, 1, 3]
[2, 3, 1]
[3, 2, 1]
```

1 + 2 + 1

## Feedback

My initial solution won't cover all the permutations.

I have to think this as a tree. My initial solution is walking only on one branch. I have to think this as a tree

```
      [1,2,3]
     /   |   \
 [2,1,3] ...  ...
```

## Options

### 1. Brute-force with permutation pruning (Best for small numbers)

Steps:

Generate all permutations of the digits of n.

Remove duplicates (via a Set).

For each permutation:

Skip if it starts with 0 (invalid leading zero number).

Check if it’s a perfect square (using Math.sqrt + integer check).

Stop early if you find ≥ 2 perfect squares.

where d = number of digits.
✅ Very easy to implement and debug.
❌ Explodes for large d.

### 2. Precompute possible perfect squares (Best for many queries)

Steps:

Find the range of numbers that have the same digit length as n.

Generate all perfect squares in that range.

For each perfect square:

Compare its digit multiset (sorted string) with that of n.

If they match, it’s an anagramic square.

Complexity:
𝑂(𝑑!⋅𝑑) where d = number of digits.

Complexity: Depends on how many squares are in the range — much faster than d!.
✅ Great if you have many numbers to check.
❌ Requires extra storage or recomputation for each digit length.

### 3. Digit frequency comparison (Best general approach)

Instead of permuting, just:

Compute a frequency map (or sorted string) of digits in n.

Iterate over all perfect squares in the possible range.

Compare the frequency maps — if they match, that’s a valid anagramic square.

✅ Much faster for bigger numbers.
❌ Requires generating candidate perfect squares.

```ts
const isPerfectSquare = (n: number) => Number.isInteger(Math.sqrt(n))

const getDigitSignature = (n: number): string =>
  n.toString().split('').sort().join('')

export const anagramicSquare = (n: number): boolean => {
  const targetSig = getDigitSignature(n)
  const len = n.toString().length

  // Find range of perfect squares with the same digit length
  const min = Math.ceil(Math.sqrt(10 ** (len - 1)))
  const max = Math.floor(Math.sqrt(10 ** len - 1))

  let perfectSquareCount = 0

  for (let i = min; i <= max; i++) {
    const square = i * i
    if (getDigitSignature(square) === targetSig) {
      perfectSquareCount++
      if (perfectSquareCount >= 2) return true // at least two perfect squares match
    }
  }

  return false
}
```
