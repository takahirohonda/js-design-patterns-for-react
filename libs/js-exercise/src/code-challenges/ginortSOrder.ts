export const ginortSOrder = (input: string) => {
  const inputArray = input.split('')
  return [
    ...inputArray.filter((s) => s.match(/[a-z]/)).toSorted(),
    ...inputArray.filter((s) => s.match(/[A-Z]/)).toSorted(),
    ...inputArray.filter((s) => s.match(/[13579]/)).toSorted(),
    ...inputArray.filter((s) => s.match(/[02468]/)).toSorted(),
  ].join('')
}
