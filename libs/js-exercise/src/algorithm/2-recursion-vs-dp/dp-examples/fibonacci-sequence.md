# Fibonacci sequence

## Problem

Write a function to find out nth Fibonacci sequence number:

```js
fibonacci(8) // should return 21
```

- Commonly, the Fibonacci sequence is 0-indexed.

- when n = 8, find out the 8th number in the Fibonacci sequence (0-indexed).

`0, 1, 1, 2, 3, 5, 8, 13, 21`

The rule of fibonacci is:

```bash
F(0) = 0
F(1) = 1
F(n) = F(n-1) + F(n-2)
```

```bash
F(2) = F(1) + F(0) = 1 + 0 = 1
F(3) = F(2) + F(1) = 1 + 1 = 2
F(4) = F(3) + F(2) = 2 + 1 = 3
F(5) = F(4) + F(3) = 3 + 2 = 5
```
