# nextPermutation

## Write a function to find the next greater permutation of the given array.

Instructions
A permutation is a rearrangement of the items in an array.

For example, given [100, 200, 50], its permutations are [100, 50, 200], [200, 100, 50], [200, 50, 100], [50, 100, 200], and [50, 200, 100].

The next greater permutation of an array is defined as the immediate next arrangement of its elements that is greater than the current arrangement when compared in numerical order.

From above array [100, 200, 50], arranging its permutations in ascending order gives us [50, 100, 200] → [100, 50, 200] → [100, 200, 50] → [200, 50, 100] → [200, 100, 50].

Here, the next greater permutation after [100, 200, 50] is [200, 50, 100], which is our expected result.

Given an array nums, return its next greater permutation by comparing the ascending order of the elements.

Example
For this input

nums[] = [10, 20, 30]
the result should be:

[10, 30, 20]
Reason: The permutations of the array [10, 20, 30] include [10, 20, 30], [10, 30, 20], [20, 10, 30], [20, 30, 10], [30, 10, 20], and [30, 20, 10]. Among these, the next greater permutation after [10, 20, 30] in ascending order is [10, 30, 20].

# explanation

## Generate all permutations of [1, 3, 2]

We list them and sort using the rule above:

[1, 2, 3] → starts with 1,2… so this is the smallest

[1, 3, 2] → still starts with 1,…, but 3 comes after 2

[2, 1, 3] → now the first number is 2, bigger than 1

[2, 3, 1] → first 2, second 3 → comes after 2,1,…

[3, 1, 2] → first 3 → larger than anything starting with 2

[3, 2, 1] → first 3, then 2 → comes after 3,1,…

So the ascending order is exactly that list.
