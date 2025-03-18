# Cause a stack overflow...

Why This Doesn't Cause a Stack Overflow:

```ts
const functionWithNoReturn = () => {
  const a = 'hello'
  return a
}

const blowStackMemory = () => {
  while (true) {
    functionWithNoReturn()
  }
}

blowStackMemory()
```

Function Call Doesn't Grow the Stack.

The functionWithNoReturn function returns a string ('hello') and does not involve recursion or deeply nested function calls.
The function completes execution and its stack frame is removed before the next iteration.
While Loop Runs Indefinitely

while (true) keeps calling functionWithNoReturn(), but each call is independent.
Since functionWithNoReturn() does not recurse, the call stack remains shallow.

- The CPU will run at 100% utilization because the loop never exits.
- Memory usage may increase slightly due to minor optimizations and JIT compilation overhead, but it won't cause a stack overflow.

If you want to cause a stack overflow, you need deep recursion without a base case, like this:

```ts
const recursiveFunction = () => {
  return recursiveFunction() // Infinite recursion
}

recursiveFunction()
```
