export const reverseLetterNumberRemain = (str: string) => {
  if (!/[a-zA-Z]/.test(str) || str === '') {
    return str
  }

  const strArray = str.split('')
  const transformedArray = [...strArray]

  const reversedArrayLetterOnly = strArray
    .filter((arrayElem) => /[a-zA-Z]/.test(arrayElem))
    .reverse()

  console.log(
    `checking strArray & reversedArrayLetterOnly: ${strArray}, ${reversedArrayLetterOnly}`
  )

  for (let i = 0; i < strArray.length; i++) {
    if (/[a-zA-Z]/.test(strArray[i])) {
      transformedArray[i] = reversedArrayLetterOnly[0]
      reversedArrayLetterOnly.splice(0, 1)
    }
  }

  return transformedArray.join('')
}
