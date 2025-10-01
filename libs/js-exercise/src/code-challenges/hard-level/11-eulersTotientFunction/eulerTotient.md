# Write a function to calculate Euler's Totient function.

## Instructions

Euler's Totient function counts the number of integers between 1 and n (inclusive), where each number and n only share 1 as common factor (divisor).

## Example

For `n = 8`,

8 and 1 share only 1 as a common factor.
8 and 3 share only 1 as a common factor.
8 and 5 share only 1 as a common factor.
8 and 7 share only 1 as a common factor.

There are 4 numbers that share 1 as a common factor with 8. Hence, the Euler's Totient function for n = 8 is 4.

For `n = 10`

the result should be:

`4`

Reason:

- From `1 to n = 10`, `1, 3, 7, and 9` only share 1 as a common factor with 10. So, `Euler's Totient function for 10` is `4`.

# Hint

2 different ways to create an array sequence from a number...

```ts
const createSequence = (n) => Array.from({ length: n }, (_, i) => i + 1)
const createSequence = (n) => [...Array(n).keys()].map((i) => i + 1)
```
