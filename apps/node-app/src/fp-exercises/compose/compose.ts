export const composeWith2Functions = (f, g) => (x) => f(g(x))

export const pipeWith2Functions = (f, g) => (x) => g(f(x))

const toUpper = (str) => str.toUpperCase()

const exclaim = (str) => str + '!'

const first = (xs) => xs[0]

export const shout = composeWith2Functions(exclaim, toUpper)

export const shoutFirst = composeWith2Functions(
  composeWith2Functions(first, exclaim),
  toUpper
)

export const compose = (...fns) => {
  return (x) => fns.reduceRight((acc, fn) => fn(acc), x)
}

export const pipe = (...fns) => {
  return (x) => fns.reduce((acc, fn) => fn(acc), x)
}
