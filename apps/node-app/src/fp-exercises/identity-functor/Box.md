## Box vs Chain

## Implementation

chain and fold do the same thing mechanically

- They both just apply `f` to `x`

Meaning (this is the important part)

- chain expects: `f :: a → Box(b)`
- fold expects: `f :: a → b`

```js
export const Box = (x) => ({
  map: (f) => Box(f(x)),
  chain: (f) => f(x),
  fold: (f) => f(x),
})
```

Mental model:

- map = transform
- chain = transform + flatten

In js,

```js
array.map(f) // [[...]]
array.flatMap(f) // [...]
```

Example:

```js
const half = (x) => (x % 2 === 0 ? Box(x / 2) : Box(0))

Box(8).map(half) // Box(Box(4)) 😬

Box(8).chain(half) // Box(4) ✅
```
