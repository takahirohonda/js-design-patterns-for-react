export const sum = (sumTo: number) => {
  if (sumTo === 0) {
    return 0
  }
  return sumTo + sum(sumTo - 1)
}

export const factorial = (value: number) => {
  if (value <= 1) {
    return 1
  }

  return value * factorial(value - 1)
}

// Write a recursive function to find the nth number in the Fibonacci sequence.
