# 8. Write a function to find the count of smaller numbers after each number in an array.

Given an array nums, return a new array where each element is the count of smaller elements to the right of the corresponding element in nums.

For example, given `[8, 6, 5, 9, 4, 2]`, the elements of the new array will be:

1st element is count (smaller elements to the right of 8) = count (6, 5, 4, 2) = 4
2nd element is count (smaller elements to the right of 6) = count (5, 4, 2) = 3
3rd element is count (smaller elements to the right of 5) = coun t(4, 2) = 2
4th element is count (smaller elements to the right of 4) = count (2) = 1
5th element is count (smaller elements to the right of 9) = count (4, 2) = 2
6th element is count (smaller elements to the right of 2) = count () = 0
Thus, the new array is [4, 3, 2, 1, 2, 0].

Example
For this input

nums[] = [5, 2, 6, 1]
the result should be:

[2, 1, 1, 0]
Reason: Here,

1st element is count (smaller elements to the right of 5) = count (2, 1) = 2
2nd element is count (smaller elements to the right of 2) = count (1) = 1
3rd element is count (smaller elements to the right of 6) = coun t(1) = 1
4th element is count (smaller elements to the right of 1) = count () = 0
Thus, the new array is [2, 1, 1, 0].

## Note

`num.slice(i, lastArrayIndex)` does not include the last element (since slice stops before the end index). It should be `slice(i, lastArrayIndex + 1)`.
