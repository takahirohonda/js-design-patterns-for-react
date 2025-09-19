Write a function to find the smallest positive integer congruence.
JS
Difficulty: Hard
Challenge XP: 60
Instructions
The smallest positive integer congruence is the least positive integer that, when divided by each element of a given array, yields specific remainders.

These remainders exactly match the elements in a corresponding second array.

For instance, given nums = [30, 40, 50] and

rems = [20, 30, 10], 110 is the smallest positive integer congruence as:

110 % 30 = 20
110 % 40 = 30
110 % 50 = 10
Thus, the smallest positive integer congruence is 110.

Return the smallest positive integer congruence for the given two arrays nums and rems.

Example
For this input

nums[] = [2, 3, 5]
rems[] = [1, 2, 4]
the result should be:

29
Reason: 29 is the smallest positive integer congruence as:

29 % 2 = 1
29 % 3 = 2
29 % 5 = 4
main.js

Run

123
function findMinX(nums, rems) {

}
Test Cases
