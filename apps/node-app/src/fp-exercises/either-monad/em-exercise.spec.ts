import { fromNullable, tryCatch } from './left-right'

describe('Either Monad Exercise', () => {
  const DB_REGEX = /postgres:\/\/([^:]+):([^@]+)@.*?\/(.+)$/i

  const parseDbUrl = (cfg) => {
    try {
      const c = JSON.parse(cfg) // throws if it can't parse
      return c.url.match(DB_REGEX)
    } catch (e) {
      return null
    }
  }
  it('Ex1: Refactor streetName to use Either instead of nested if', () => {
    const user = { address: { street: { name: 'Willow' } } }
    const userWithStreetNull = { address: { street: null } }

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

    expect(streetName(user)).toBe('Willow')
    expect(streetName({})).toBe('no street')
    expect(streetName(userWithStreetNull)).toBe('no street')

    // answer
    const getAddress = (user) => fromNullable(user.address)
    const getStreet = (address) => fromNullable(address.street)

    const getStreetName = (user) =>
      getAddress(user)
        .chain((x) => getStreet(x))
        .chain((x) => fromNullable(x.name))
        .fold(
          () => 'no street',
          (x) => x
        )

    expect(getStreetName(user)).toBe('Willow')
    expect(getStreetName({})).toBe('no street')
    expect(getStreetName(userWithStreetNull)).toBe('no street')
  })

  it('Ex2: Refactor parseDbUrl to return an Either instead of try/catch', () => {
    const parseDbUrl = (cfg) => {
      try {
        const c = JSON.parse(cfg) // throws if it can't parse
        return c.url.match(DB_REGEX)
      } catch (e) {
        return null
      }
    }
    const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}'

    expect(parseDbUrl(config)[1]).toBe('sally')
    expect(parseDbUrl('config')).toBe(null)

    // Answer
    const parseDbUrlFn = (cfg) =>
      tryCatch(() => JSON.parse(cfg))
        .map((c) => c.url.match(DB_REGEX))
        .fold(
          () => null,
          (x) => x
        )

    expect(parseDbUrlFn(config)[1]).toBe('sally')
    expect(parseDbUrlFn('config')).toBe(null)
  })

  it('Ex3: Using Either and the functions above, refactor startApp', () => {
    const config = '{"url": "postgres://sally:muppets@localhost:5432/mydb"}'
    const startApp = (cfg) => {
      const parsed = parseDbUrl(cfg)

      if (parsed) {
        const [_, user, password, db] = parsed
        return `starting ${db}, ${user}, ${password}`
      } else {
        return "can't get config"
      }
    }

    expect(String(startApp(config))).toBe('starting mydb, sally, muppets')
    expect(String(startApp(''))).toBe("can't get config")

    // Answer
    const parse = (cfg) => tryCatch(() => JSON.parse(cfg))
    const getValues = (parsed) =>
      tryCatch(() => {
        const [_, user, password, db] = parsed
        return `starting ${db}, ${user}, ${password}`
      })
    const startAppFn = (cfg) =>
      parse(cfg)
        .map((c) => c.url.match(DB_REGEX))
        .chain((parsed) => getValues(parsed))
        .fold(
          () => "can't get config",
          (x) => x
        )
    expect(String(startAppFn(config))).toBe('starting mydb, sally, muppets')
    expect(String(startAppFn(''))).toBe("can't get config")
  })
})
