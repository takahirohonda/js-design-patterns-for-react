// Box is a functor https://en.wikipedia.org/wiki/Functor_(functional_programming)
export const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x), // just passing the value to the function
  inspect: `Box(${x})`,
})
