export const returnSpiral = (matrix: number[][]) => {
  const { newMatrix, spiralArray } = goAroundMatrix(matrix)
  let remainingMatrix = newMatrix
  const outputArray = [...spiralArray]
  while (remainingMatrix.length > 0) {
    const { newMatrix, spiralArray } = goAroundMatrix(remainingMatrix)
    remainingMatrix = newMatrix
    outputArray.push(...spiralArray)
  }

  return outputArray.join(' ')
}

function goAroundMatrix(matrix: number[][]) {
  const spiralArray: number[] = []
  const appendArray: number[] = []
  const newMatrix: number[][] = []
  for (let i = 0; i < matrix.length; i++) {
    const targetArray = matrix[i]
    if (i === 0) {
      spiralArray.push(...targetArray)
      continue
    }
    if (i === matrix.length - 1) {
      spiralArray.push(...[...targetArray].reverse())
      continue
    } else {
      const remainingArray: number[] = []
      for (let j = 0; j < targetArray.length; j++) {
        if (j === targetArray.length - 1) {
          spiralArray.push(targetArray[j])
        } else if (j === 0) {
          appendArray.push(targetArray[j])
        } else {
          remainingArray.push(targetArray[j])
        }
      }
      newMatrix.push(remainingArray)
    }
  }
  spiralArray.push(...appendArray.reverse())

  return {
    spiralArray,
    newMatrix,
  }
}
