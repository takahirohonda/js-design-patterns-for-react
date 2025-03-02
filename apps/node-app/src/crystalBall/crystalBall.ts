// Determine the highest point where you can drop a crystal ball without breaking it in the input array.
// Input is an array of height [1, 10, 100, 120, 200]. The breaking point is 130. You only have 2 crystal balls.
// Therefore the function should return 120.
export const crystalBall = (heightArray: number[], breakingPoint: number) => {
  const increment = Math.floor(Math.sqrt(heightArray.length - 1))
  let minIndex = 0
  let maxIndex = increment

  do {
    console.log(`checking minIndex: ${minIndex}`)
    console.log(`checking maxIndex: ${maxIndex}`)

    if (heightArray[maxIndex] === breakingPoint) {
      return maxIndex
    } else if (heightArray[minIndex] === breakingPoint) {
      return minIndex
    } else if (heightArray[maxIndex] < breakingPoint) {
      console.log('breaking point is bigger than maxIndex')
      minIndex = maxIndex
      maxIndex = maxIndex + increment
    } else if (heightArray[maxIndex] > breakingPoint) {
      console.log('breaking point is smaller than maxIndex')
      console.log(`target breaking point is: ${breakingPoint}`)
      for (let i = minIndex; i < maxIndex; i++) {
        if (heightArray[i] === breakingPoint) {
          return i
        }
      }
      return -1
    }
  } while (maxIndex < heightArray.length)

  return -1
}
