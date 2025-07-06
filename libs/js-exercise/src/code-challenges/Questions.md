# Code Challenges Examples

## 1. Basic

1. Reverse the string.

2. Find out if a string is a palindrome.

```js
const str1 = 'Ahmed'
const str2 = 'demha'
console.log(palindrome(str1, str2)) // Output: true
```

3. Find the most frequently occurring character.

```js
const input = 'AAABBBXCCCCCDEE'
console.log(mostFrequentChar(input)) // Output: C
```

4. JS code challenge examples

https://jscodechallenges.vercel.app/interview_questions/faq_js

5. JS Challenges

https://programiz.pro/community-challenges/javascript

6. JSCodebox

https://jscodebox.com/

7. codewars

# 7-1 Bug In the Apple

You're given a 2D array called apple, which contains rows of strings. Each string represents either an "A" (Apple) or a "B" (Bug in the Apple).

There is exactly one "B" somewhere in the array — no more, no less.
Your task is to find the location of this "B".

Input:

```js
const apple = [
  ['A', 'A', 'A'],
  ['A', 'B', 'A'],
  ['A', 'A', 'A'],
]
```

output -> `[1, 1]`

# 7-2.

Given a length, an offset, and a list, slide a window of that length, moving by that offset every step, over the list, returning a list of lists.

```js
for 2, 1, [0,1,2,3,4] return [ [0,1], [1,2], [2,3], [3,4] ]
for 2, 2, [0,1,2,3,4] return [ [0,1], [2,3] ]
for 2, 3, [0,1,2,3,4] return [ [0,1], [3,4] ]
```

8. leetcode

https://leetcode.com/problems/longest-substring-without-repeating-characters/description/

## 8-4. Median of Two Sorted Arrays

Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be `O(log (m+n))`.

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.

Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.

Constraints:

nums1.length == m
nums2.length == n
0 <= m <= 1000
0 <= n <= 1000
1 <= m + n <= 2000
-106 <= nums1[i], nums2[i] <= 106
