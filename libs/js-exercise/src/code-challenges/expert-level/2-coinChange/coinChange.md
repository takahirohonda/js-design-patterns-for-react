# Coin Change

Instructions
Given a set of coins and a target money, compute the fewest number of coins needed to make up that amount.

For example, consider you have coins worth `[3, 2, 1]` and the target amount is `6`.

Here, the fewest number of coins needed to make up the amount 6 would be `two: one 3-coin and one 3-coin, totalling two 3-coin pieces`.

Return the minimum number of coins needed to make up the given amount. If it's not possible, return `-1`.

For example, if the available coins were `[5, 7]` and the target amount was `1`, you would not be able to make that amount with the given coins.

So the expected output here would be `-1`.

Example
For this input

```ts
coins = [1, 2, 5]
amount = 11
```

the result should be: 3
Reason: We can use two 5s with one 1 to make up 11.

Example
For this input

```ts
coins = [1, 6, 10]
amount = 12
```

the result should be: 2
Reason: The minimum number of coins needed to make 12 is 2 (using coins 6 + 6).

# Terminlogy

```js
dividend ÷ divisor = quotient ... remainder
```

| Term          | Value | Meaning                                                                                          |
| ------------- | ----- | ------------------------------------------------------------------------------------------------ |
| **Dividend**  | 17    | The number being divided                                                                         |
| **Divisor**   | 5     | The number you are dividing by                                                                   |
| **Quotient**  | 3     | The result of division **without** the remainder (17 ÷ 5 = 3.4 → floor to 3 if integer division) |
| **Remainder** | 2     | The part left over after division (17 - 5×3 = 2)                                                 |
| **Modulo**    | 2     | Similar to remainder, but always non-negative if defined that way                                |

## Better approach

✅ Solution: Use Dynamic Programming (DP)
Here's a corrected coinChange function using bottom-up DP:

```ts
export const coinChange = (coins: number[], target: number): number => {
  if (target < 0) return -1
  if (target === 0) return 0

  const dp = new Array(target + 1).fill(Infinity)
  dp[0] = 0

  for (let amount = 1; amount <= target; amount++) {
    for (const coin of coins) {
      if (amount - coin >= 0) {
        dp[amount] = Math.min(dp[amount], dp[amount - coin] + 1)
      }
    }
  }

  return dp[target] === Infinity ? -1 : dp[target]
}
```

✅ Why DP Works:
It tries all combinations of coins up to the target.

Guarantees minimum coins regardless of coin values.

Time Complexity: O(n \* target) (where n = number of coin types)
