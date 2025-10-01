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
