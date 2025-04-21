export const Box = (x) => ({
  map: (f) => Box(f(x)),
  fold: (f) => f(x), // just passing the value to the function
  inspect: `Box(${x})`,
})
