import * as _ from 'ramda'

function formatMoney(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

describe('Exercising compose with ramda', () => {
  const CARS = [
    {
      name: 'Ferrari FF',
      horsepower: 660,
      dollar_value: 700000,
      in_stock: true,
    },
    {
      name: 'Spyker C12 Zagato',
      horsepower: 650,
      dollar_value: 648000,
      in_stock: false,
    },
    {
      name: 'Jaguar XKR-S',
      horsepower: 550,
      dollar_value: 132000,
      in_stock: false,
    },
    { name: 'Audi R8', horsepower: 525, dollar_value: 114200, in_stock: false },
    {
      name: 'Aston Martin One-77',
      horsepower: 750,
      dollar_value: 1850000,
      in_stock: true,
    },
    {
      name: 'Pagani Huayra',
      horsepower: 700,
      dollar_value: 1300000,
      in_stock: false,
    },
  ]

  it('Ex1: isLastInStock - use _.compose() to rewrite the function below. Hint: _.prop() is curried.', () => {
    const isLastInStock = (cars) => {
      const reversed_cars = _.last(cars)
      return _.prop('in_stock', reversed_cars)
    }
    expect(isLastInStock(CARS)).toBe(false)

    // Answer
    const isLastInStockComposed = _.compose(_.prop('in_stock'), _.last)
    expect(isLastInStockComposed(CARS)).toBe(false)
  })

  it('Ex2: nameOfFirstCar', () => {
    // use _.compose(), _.prop() and _.head() to retrieve the name of the first car
    expect(_.compose(_.prop('name'), _.head)(CARS)).toBe('Ferrari FF')
  })

  it('Ex3: averageDollarValue', () => {
    // Use the helper function _average to refactor averageDollarValue as a composition
    const _average = function (xs) {
      return _.reduce(_.add, 0, xs) / xs.length
    } // <- leave be

    const averageDollarValue_ = function (cars) {
      const dollar_values = _.map(_.prop('dollar_value'), cars)
      return _average(dollar_values)
    }

    const averageDollarValue = function (cars) {
      const dollar_values = _.map(function (c) {
        return c.dollar_value
      }, cars)
      return _average(dollar_values)
    }

    expect(averageDollarValue(CARS)).toBe(790700)

    // Answer
    const refactoredFn = _.compose(_average, _.map(_.prop('dollar_value')))

    expect(refactoredFn(CARS)).toBe(790700)
  })

  it('Ex 4: sanitizeNames', () => {
    // Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored names: e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].

    const _underscore = _.replace(/\W+/g, '_') //<-- use this to sanitize

    // Answer
    expect(
      _.map(_.compose(_.toLower, _underscore, _.prop('name')))(CARS)
    ).toEqual([
      'ferrari_ff',
      'spyker_c12_zagato',
      'jaguar_xkr_s',
      'audi_r8',
      'aston_martin_one_77',
      'pagani_huayra',
    ])
  })

  it('Bonus 1: availablePrices', () => {
    // Refactor availablePrices with compose.

    const availablePrices = function (cars) {
      const available_cars = _.filter(_.prop('in_stock'), cars)
      return available_cars.map((x) => formatMoney(x.dollar_value)).join(', ')
    }

    expect(availablePrices(CARS)).toEqual('$700,000.00, $1,850,000.00')

    // Answer
    const availablePricesComposed = _.compose(
      _.join(', '),
      _.map(_.compose(formatMoney, _.prop('dollar_value'))),
      _.filter(_.prop('in_stock'))
    )
    expect(availablePricesComposed(CARS)).toEqual('$700,000.00, $1,850,000.00')
  })

  it('Bonus 2: fastestCar', () => {
    // Refactor to pointfree.

    const fastestCar = function (cars) {
      const sorted = _.sortBy((car) => car.horsepower, cars)
      const fastest = _.last(sorted)
      return fastest.name + ' is the fastest'
    }

    expect(fastestCar(CARS)).toEqual('Aston Martin One-77 is the fastest')

    // Answer
    const formatOutput = _.curry((str) => str + ' is the fastest')
    const fastestCarComposed = _.compose(
      formatOutput,
      _.prop('name'),
      _.last,
      _.sortBy(_.prop('horsepower'))
    )
    expect(fastestCarComposed(CARS)).toEqual(
      'Aston Martin One-77 is the fastest'
    )
  })
})
