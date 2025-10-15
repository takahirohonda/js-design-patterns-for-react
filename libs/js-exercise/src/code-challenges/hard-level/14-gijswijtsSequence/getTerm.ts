export const getTerm = (n: number) => {
  if (n < 0) throw new Error('N has to be an integer')

  if (n <= 2) return 0

  const maxBlockToCheck = Math.trunc(n - 1 / 2)

  if (n > 1) {
    const array = [1]
    for (let i = 1; i < n; i++) {
      //
    }
  }
}
