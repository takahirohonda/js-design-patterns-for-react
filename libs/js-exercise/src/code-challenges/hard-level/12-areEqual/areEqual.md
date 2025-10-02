# Write a function to check if two elements are strictly equal.

## Instructions

Two elements are said to be strictly equal if they have the same value and the same data type.

- "apple" and "apple" are equal because both are strings with the same value.

- "53" and 53 are not equal because they have different data types ("53" is a string and 53 is a number).

- `[1, 2, 3]` and `[3, 2, 1]` are not equal because the arrays have the same elements but in different orders.
  Suppose the input elements are either numbers, strings or arrays. Return true if they are strictly equal or else return false.

## Example

Input:

obj1 = "abc"
obj2 = "abc"

Output: true

Reason: The two strings "abc" and "abc" are equal, so the expected output is true.

Input:

obj1 = [1, 2, 3]
obj2 = [1, 3, 2]

Output: false

Reason: The two arrays [1, 2, 3] and [1, 3, 2] are equal because although they have the same elements their orders are different.

# Potential issues for my solutions...

⚠️ Potential issues:

typeof null → returns "object", so it could behave oddly with null inputs.

```ts
areEqual(null, null) // true (ok)
areEqual(null, {}) // false (ok, but relies on JSON.stringify behavior)
```

JSON.stringify quirks

Objects with different key order stringify differently in some cases:

```ts
JSON.stringify({ a: 1, b: 2 }) === JSON.stringify({ b: 2, a: 1 })
// false, even though shallow equality would say true
```

(But since the problem only allows numbers, strings, arrays — not objects — you’re fine here.)

Array edge cases

Sparse arrays behave weirdly:

```ts
JSON.stringify([1, , 3]) // "[1,null,3]"
```

But probably not relevant unless your test includes these.

```ts
// my solutions

// no need to do JSON.stringify because the problem states:
// Suppose the input elements are either numbers, strings or arrays.
const areSameType = (a: unknown, b: unknown) => typeof a === typeof b

export const areEqual = (a: unknown, b: unknown) => {
  if (!areSameType(a, b)) {
    return false
  }

  return JSON.stringify(a) === JSON.stringify(b)
}

// refactored
export const areEqual = (a: unknown, b: unknown): boolean => {
  if (typeof a !== typeof b) return false

  if (typeof a === 'string' || typeof a === 'number') {
    return a === b
  }

  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    return a.every((val, i) => val === b[i])
  }

  return false
}
```
