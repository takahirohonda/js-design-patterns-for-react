# Functor

Functor is a design pattern that enables to apply a function to values inside a generic type without changing the structure of the generic type... ???? <- this is the wikipedia definition (https://en.wikipedia.org/wiki/Functor_(functional_programming))

Ok, think about JS map

```js
const array = [1, 2, 3]

const newArray = array.map((num) => num * 2)
```

Applying a function to values inside a generic type (array of number) without changing the structure of the generic type (return value would still be an array of number).

In progress... read this: https://dev.to/mpodlasin/functional-programming-in-js-functor-monad-s-little-brother-3053

# Definition from ChatGPT

This one is easier to understand...

A functor is a thing you can map over while preserving structure and obeying the laws.

## Common functors we already use

| Type      | Why it’s a functor       |
| --------- | ------------------------ |
| `Array`   | `map` over elements      |
| `Promise` | `.then` ≈ `map`          |
| `Maybe`   | map only if value exists |
| `Either`  | map only on Right        |
| `Box`     | map over value           |
