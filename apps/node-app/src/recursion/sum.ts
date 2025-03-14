export const sum = (n: number) => {
  if (n === 1) {
    return n
  }

  return n + sum(n - 1)
}
