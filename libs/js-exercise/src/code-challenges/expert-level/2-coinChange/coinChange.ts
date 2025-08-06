export const coinChange = (coins: number[], target: number) => {
  if (target <= 0) {
    return -1
  }

  let reminder = target
  let totalCoinCount = 0
  const sortedCoins = coins.toSorted((a, b) => b - a)

  for (let i = 0; i < coins.length; i++) {
    if (sortedCoins[i] <= reminder) {
      totalCoinCount += Math.trunc(reminder / sortedCoins[i])
      reminder %= sortedCoins[i]
      console.log(`checking: ${sortedCoins[i]}, ${totalCoinCount}, ${reminder}`)
      if (reminder === 0) {
        return totalCoinCount
      }
    }
  }
  return -1
}
