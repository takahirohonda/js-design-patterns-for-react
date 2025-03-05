export const getExecutionDuration = (fn: () => void) => {
  const start = Date.now()
  fn()
  return Date.now() - start
}

const a: number[] = []

export const unshift = (size: number) => {
  for (let i = 0; i < size; ++i) {
    a.unshift(Math.random())
  }
}
