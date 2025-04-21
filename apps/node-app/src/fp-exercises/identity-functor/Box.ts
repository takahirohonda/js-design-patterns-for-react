export const Box = (x) => ({
  map: (f) => Box(f(x)),
  inspect: `Box(${x})`,
})
