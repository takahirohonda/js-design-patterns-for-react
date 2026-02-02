Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).

 

Example 1:

Input: nums1 = [1,3], nums2 = [2]
Output: 2.00000
Explanation: merged array = [1,2,3] and median is 2.
Example 2:

Input: nums1 = [1,2], nums2 = [3,4]
Output: 2.50000
Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


## When the array length is even...

When the number of observations is even, the `median` is the average of the two middle values.

## Mistakes that I made from doing this...

In my first attempt, I had the sort function without any callback thinking it's gonna sort it in ascending order. Apparently JS's sort function is lexicographic, not numeric. Therefore, I need to always add the callback function as:

```js
sort((a, b) -> a - b) // ascending order
```

1) Set removes duplicates (wrong for median)

My initial solutions had this:

```js
const sortedMergedArray = [...new Set([...nums1, ...nums2])].sort()
```

Median must be computed on the full multiset of values.
Using new Set(...) deletes repeated numbers, which changes the length and the middle.

In your particular test arrays there are no duplicates, so this isn’t what causes 4.5 here, but it will fail other tests (and LeetCode allows duplicates).