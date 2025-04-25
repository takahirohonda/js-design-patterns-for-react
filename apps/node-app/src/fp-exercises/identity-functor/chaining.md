# Chaining

Dot chain them

```js
const nextCharForNumberString = (str) => {
  const trimmed = str.trim()
  const number = parseInt(trimmed)
  const nextNumber = new Number(number + 1)
  return String.fromCharCode(nextNumber)
}
```

# Exercise

```ts
// Ex1: Using Box, refactor moneyToFloat to be unnested.
// =========================
const moneyToFloat = (str) => parseFloat(str.replace(/\$/, ''))

QUnit.test('Ex1: moneyToFloat', (assert) => {
  assert.equal(String(moneyToFloat('$5.00')), 5)
})

// Ex2: Using Box, refactor percentToFloat to remove assignment
// =========================
const percentToFloat = (str) => {
  const float = parseFloat(str.replace(/%/, ''))
  return float * 0.01
}

QUnit.test('Ex2: percentToFloat', (assert) => {
  assert.equal(String(percentToFloat('20%')), 0.2)
})

// Ex3: Using Box, refactor applyDiscount (hint: each variable introduces a new Box)
// =========================
const applyDiscount = (price, discount) => {
  const cents = moneyToFloat(price)
  const savings = percentToFloat(discount)
  return cents - cents * savings
}

QUnit.test('Ex3: Apply discount', (assert) => {
  assert.equal(String(applyDiscount('$5.00', '20%')), 4)
})
```
