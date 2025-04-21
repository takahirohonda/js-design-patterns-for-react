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
