export const getExecutionDuration = (fn: () => void) => {
  const start = Date.now()
  fn()
  return Date.now() - start
}

const a: number[] = []

export const unshift = (size: number) => {
  for (let i = 0; i < size; ++i) {
    // unshift adds the argument value to the beginning,
    // and returns a new length of the array
    a.unshift(Math.random())
  }
}

export const shift = (size: number) => {
  for (let i = 0; i < size; ++i) {
    // shift removes the first element from an array
    // and returns a new array
    a.shift()
  }
}

export const push = (size: number) => {
  for (let i = 0; i < size; ++i) {
    a.push(Math.random())
  }
}

export const pop = (size: number) => {
  for (let i = 0; i < size; ++i) {
    a.pop()
  }
}

export const get = (idx: number) => {
  return a[idx]
}
