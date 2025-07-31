# Recursion

How does it work?

```ts
export const fibonacci = (n: number): number => {
  if (n <= 1) {
    return n
  }
  return fibonacci(n - 1) + fibonacci(n - 2)
}
```

Base case is when `n <= 1`.

fibonacci(5)

-> fibonacci(4) + fibonacci(3)

-> fibonacci(3) + fibonacci(2)
-> fibonacci(2) + fibonacci(1) -> 1 + 1 + 1 + 1 + 4
-> fibonacci(1) + fibonacci(0)

fibonacci(4) is 3 because it becomes fibonacci(3) + fibonacci(2)
fibonacci(3) is 2 because it becomes fibonacci(2) + fibonacci(1)
fibonacci(2) is 1 because it becomes fibonacci(1) + fibonacci(0)

fibonacci(3) -> 2
fibonacci(2) -> 1
