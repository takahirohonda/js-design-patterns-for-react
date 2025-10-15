/*
 * A pronic number is a product of two consecutive integers.
 * 42 is a pronic number because it is obtained by multiplying two
 * consecutive numbers (6 * 7 = 42)
 * Return true if the input is a pronic number, otherwise false
 */

export const isPronic = (num: number): boolean => {
  // Validate input
  if (!Number.isInteger(num)) {
    throw new Error('the number has to be an integer')
  }

  // Handle edge cases
  if (num < 0) return false // Pronic numbers are non-negative
  if (num === 0) return true // 0 = 0 * 1
  if (num === 1) return false // 1 is not pronic (no two consecutive integers multiply to 1)

  // Efficient approach: check if sqrt(num) * (sqrt(num) + 1) = num
  // Only need to check up to sqrt(num) since we're looking for consecutive integers
  const sqrtNum = Math.sqrt(num)
  const floorSqrt = Math.floor(sqrtNum)

  // Check if floorSqrt * (floorSqrt + 1) equals num
  return floorSqrt * (floorSqrt + 1) === num
}
