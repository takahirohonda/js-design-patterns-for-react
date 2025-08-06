# Find Longest Domino Chain

## Problem Description

Given an array of dominoes where each domino is represented as `[a, b]` where `a` and `b` are numbers, find the length of the longest chain that can be formed by connecting dominoes. Two dominoes can be connected if the second number of one domino matches the first number of the next domino.

## Rules

- A domino chain is valid if each domino connects to the next one
- Connection rule: `domino[i][1] === domino[i+1][0]`
- You can rotate dominoes (swap the numbers) to make connections
- The goal is to find the longest possible chain length

## Examples

### Example 1:

```typescript
Input: [[1, 2], [2, 3], [3, 4], [4, 5]]
Output: 4
Explanation: All dominoes can be connected in sequence: 1-2-3-4-5
```

### Example 2:

```typescript
Input: [[1, 2], [2, 1], [1, 3], [3, 4]]
Output: 4
Explanation: Can form chain: 1-2-1-3-4 (using rotation for [2,1])
```

### Example 3:

```typescript
Input: [[1, 2], [3, 4], [5, 6]]
Output: 1
Explanation: No dominoes can be connected, so longest chain is 1
```

### Example 4:

```typescript
Input: [[1, 2], [2, 3], [3, 1], [1, 4]]
Output: 4
Explanation: Can form chain: 1-2-3-1-4
```

## Approach

### Brute Force Approach:

1. Generate all possible permutations of dominoes
2. For each permutation, try all possible orientations (original or rotated)
3. Find the longest valid chain in each permutation
4. Return the maximum length found

### Optimized Approach:

1. Use backtracking/DFS to explore all possible chains
2. For each domino, try both orientations
3. Keep track of the longest chain found so far
4. Use memoization to avoid redundant calculations

## Algorithm Steps:

1. Start with an empty chain
2. For each domino, try adding it to the current chain:
   - Try original orientation
   - Try rotated orientation
3. If the domino can be connected, recursively try to add more dominoes
4. Keep track of the maximum chain length found
5. Backtrack and try different combinations

## Time Complexity

- Brute Force: O(n! \* 2^n) where n is the number of dominoes
- Optimized: O(2^n) with memoization

## Space Complexity

- O(n) for the recursion stack

## Edge Cases to Consider:

- Empty array
- Single domino
- No possible connections
- All dominoes can be connected
- Circular chains
- Duplicate dominoes

## Test Cases to Cover:

1. Empty array → 0
2. Single domino → 1
3. No connections possible → 1
4. All dominoes connectable → n
5. Mixed scenarios with some connections
6. Circular chains
7. Large arrays (performance testing)
