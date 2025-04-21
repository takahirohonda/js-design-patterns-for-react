export const composeWith2Functions = (f, g) => (x) => f(g(x))

export const pipeWith2Functions = (f, g) => (x) => g(f(x))

const toUpper = (str) => str.toUpperCase()

const exclaim = (str) => str + '!'

const first = (xs) => xs[0]

const shout = composeWith2Functions(exclaim, toUpper)

const shoutFirst = composeWith2Functions(
  composeWith2Functions(first, exclaim),
  toUpper
)
