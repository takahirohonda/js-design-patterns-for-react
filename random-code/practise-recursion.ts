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
// O(2ⁿ) (very slow as n grows) -> iterative version is faster.
export const fibonacci = (n: number) => {
  if (n <= 1) {
    return n
  }

  return fibonacci(n - 1) + fibonacci(n - 2)
}

// fibonacci(0) returns 0

// fibonacci(1) returns 1

// fibonacci(n) returns the sum of the two previous Fibonacci numbers
