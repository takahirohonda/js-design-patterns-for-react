export const sum = (n: number): number => {
  if (n === 0) {
    return 0
  }
  return n + sum(n - 1)
}

export const fibonacci = (n: number): number => {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
