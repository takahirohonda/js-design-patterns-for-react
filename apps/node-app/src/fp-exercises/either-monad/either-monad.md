# Either Monad

The Either monad in JavaScript is a pattern for handling computations that can result in one of two possible outcomes.

- Typically used for success or failure as an alternative to try/catch blocks for error handling.
- The Either monad has two subtypes, Left and Right. Right usually represents a successful computation, while Left signifies a failure or error.
- [monads](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>) are the way to structure computations as a sequence of steps.
- https://blog.logrocket.com/javascript-either-monad-error-handling/

## Exercise 1

```js
const findColor = (name) =>
  ({ red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }[name])

const res = findColor('red').toUpperCase()
// This will error. We can use either monad pattern to handle error.
const res = findColor('redd').toUpperCase()
```

We need to update the function to pass the test below.

```ts
describe('Either Monad Exercise', () => {
  const data = { red: '#ff4444', blue: '#3b5998', yellow: '#fff68f' }
  const findColor = (name) => data[name].toUpperCase()

  it('should return unexpected_error when it cannot find key', () => {
    expect(findColor('red')).toBe('#FF4444')

    // this will fail
    expect(findColor('redd')).toBe('unexpected_error')
  })
})
```

## Exercise 2

Rewrite this with either monad

```ts
const fs = require('fs')

const getPort = () => {
  try {
    const str = fs.readFileSync('config.json')
    const config = JSON.parse(str)
    return config.port
  } catch (e) {
    return 3000
  }
}

const result = getPort()

console.log(result)
```
