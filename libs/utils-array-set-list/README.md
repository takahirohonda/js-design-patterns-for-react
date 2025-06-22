# Array, Set, List

[JavaScript Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)

1. Remove duplicate elements from an array

```ts
const numbers = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5]

const dedupedNumbers = [...new Set(numbers)]
```
