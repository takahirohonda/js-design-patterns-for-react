const areSameType = (a: unknown, b: unknown) => typeof a === typeof b

export const areEqual = (a: unknown, b: unknown) => {
  if (!areSameType(a, b)) {
    return false
  }

  return JSON.stringify(a) === JSON.stringify(b)
}
