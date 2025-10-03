/*
 * Insert dashes between each digit
 * 2345 -> "2-3-4-5"
 * */

export const dashingNumbers = (num: number) => {
  if (Number.isNaN(num)) {
    throw new Error('NaN is not supported')
  } else if (num === Infinity || num === -Infinity) {
    throw new Error('Infinity is not supported')
  } else if (!Number.isInteger(num)) {
    throw new Error('Non integer is not supported')
  } else if (num < 0) {
    throw new Error('Negative number is not supported')
  }
  // implement
  return num.toString().split('').join('-')
}

// alternatively isInteger can cover Infinity & NaN, so we can remove first 2
export const dashingNumbers2 = (num: number) => {
  if (!Number.isInteger(num)) {
    throw new Error('Non integer is not supported')
  } else if (num < 0) {
    throw new Error('Negative number is not supported')
  }
  // implement
  return num.toString().split('').join('-')
}
