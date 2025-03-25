# Recursion

The key to write a recursion algorithm is:

(1) Find out base cases to stop the recursion.
(2) Find out the logic to recurse.

## Maze Solver

[
`##########E#`,
`# `,
`##S#########`,
]

<- # ->

**Base Case**

1. When it's a wall.
2. When it's off the map.
3. When it's the end.
4. If it goes to the tile where it's been.

**Recursive logic**

Try to go all the directions.

# How do recursions work?

```js
const tryThis = (n) => {
  if (n === 0) {
    console.log(`n in the if condition: ${n}`)
    return n
  }
  console.log(`current n is: ${n}`)
  return n + tryThis(n - 1)
}

console.log(`the output of my recursion is: ${tryThis(10)}`)
```

```bash
current n is: 10 -> this is the first fiction call tryThis(10)
current n is: 9  -> tryThis(9)
current n is: 8
current n is: 7
current n is: 6
current n is: 5
current n is: 4
current n is: 3
current n is: 2
current n is: 1
the output of my recursion is: 55
```

JavaScript manages function calls using a call `stack` (LIFO: Last In, First Out). Every function call is pushed onto the stack, and when a function completes, it's popped off the stack.

Once it reaches the end of the recursion when n === 0 and returns `0`, the stack will start executing the function in th `LIFO` order. The total sum accumulates as the stack unwinds.

```js
tryThis(1) → 1 + tryThis(0) = 1 + 0 = 1
tryThis(2) → 2 + tryThis(1) = 2 + 1 = 3
tryThis(3) → 3 + tryThis(2) = 3 + 3 = 6
tryThis(4) → 4 + tryThis(3) = 4 + 6 = 10
tryThis(5) → 5 + tryThis(4) = 5 + 10 = 15
tryThis(6) → 6 + tryThis(5) = 6 + 15 = 21
tryThis(7) → 7 + tryThis(6) = 7 + 21 = 28
tryThis(8) → 8 + tryThis(7) = 8 + 28 = 36
tryThis(9) → 9 + tryThis(8) = 9 + 36 = 45
tryThis(10) → 10 + tryThis(9) = 10 + 45 = 55
```
