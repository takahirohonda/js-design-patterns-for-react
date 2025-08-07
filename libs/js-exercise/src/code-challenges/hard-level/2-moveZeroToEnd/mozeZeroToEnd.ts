export const moveZeroToEnd = (arr: number[]) => {
  return [...arr.filter((n) => n !== 0), ...arr.filter((n) => n === 0)]
}
