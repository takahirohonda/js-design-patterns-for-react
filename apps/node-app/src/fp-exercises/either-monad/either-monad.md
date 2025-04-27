# Either Monad

The Either monad in JavaScript is a pattern for handling computations that can result in one of two possible outcomes.

- Typically used for success or failure as an alternative to try/catch blocks for error handling.
- The Either monad has two subtypes, Left and Right. Right usually represents a successful computation, while Left signifies a failure or error.
- [monads](<https://en.wikipedia.org/wiki/Monad_(functional_programming)>) are the way to structure computations as a sequence of steps.
- https://blog.logrocket.com/javascript-either-monad-error-handling/

## Intro Exercise 1

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

## Intro Exercise 2

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

# More exercises

```ts
const DB_REGEX = /postgres:\/\/([^:]+):([^@]+)@.*?\/(.+)$/i

// Exercise: Either
// Goal: Refactor each example using Either
// Bonus: no curlies
// =========================

// Ex1: Refactor streetName to use Either instead of nested if's
// =========================
const street = (user) => {
  const address = user.address

  if (address) {
    return address.street
  } else {
    return 'no street'
  }
}

QUnit.test('Ex1: street', (assert) => {
  const user = { address: { street: { name: 'Willow' } } }
  assert.deepEqual(street(user), { name: 'Willow' })
  assert.equal(street({}), 'no street')
})

// Ex1: Refactor streetName to use Either instead of nested if's
// =========================
const streetName = (user) => {
  const address = user.address

  if (address) {
    const street = address.street

    if (street) {
      return street.name
    }
  }

  return 'no street'
}

QUnit.test('Ex1: streetName', (assert) => {
  const user = { address: { street: { name: 'Willow' } } }
  assert.equal(streetName(user), 'Willow')
  assert.equal(streetName({}), 'no street')
  assert.equal(streetName({ address: { street: null } }), 'no street')
})

// Ex2: Refactor parseDbUrl to return an Either instead of try/catch
// =========================
const parseDbUrl = (cfg) => {
  try {
    const c = JSON.parse(cfg) // throws if it can't parse
    return c.url.match(DB_REGEX)
  } catch (e) {
    return null
  }
}

QUnit.test('Ex1: parseDbUrl', (assert) => {
  const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}'
  assert.equal(parseDbUrl(config)[1], 'sally')
  assert.equal(parseDbUrl(), null)
})

// Ex3: Using Either and the functions above, refactor startApp
// =========================
const startApp = (cfg) => {
  const parsed = parseDbUrl(cfg)

  if (parsed) {
    const [_, user, password, db] = parsed
    return `starting ${db}, ${user}, ${password}`
  } else {
    return "can't get config"
  }
}

QUnit.test('Ex3: startApp', (assert) => {
  const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}'
  assert.equal(String(startApp(config)), 'starting mydb, sally, muppets')
  assert.equal(String(startApp()), "can't get config")
})
```
