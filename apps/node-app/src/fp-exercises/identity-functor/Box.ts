// Box is a functor https://en.wikipedia.org/wiki/Functor_(functional_programming)
// this is a factory function to return box. If we return its self, we can chain.
export const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x), // just passing the value to the function
  inspect: `Box(${x})`,

  // adding chain also called flatMap
  chain: (f) => f(x),
})

// we can use Box to write compose function
export const compose = (f, g) => (x) => Box(x).map(f).map(g)

// Writing chain (or can be called flat map)
