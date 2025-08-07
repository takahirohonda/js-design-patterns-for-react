export const diariumNumber = (n: number) => {
  const array = n
    .toString()
    .split('')
    .map((str) => parseInt(str, 10))

  const added = array.reduce((acc, num, index) => {
    return acc + Math.pow(num, index + 1)
  }, 0)

  return added === n ? 'Disarium' : 'Not Disarium'
}
