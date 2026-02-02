export const findMedianSortedArrays = (
  nums1: number[],
  nums2: number[]
): number => {
  const sortedMergedArray = [...nums1, ...nums2].sort((a, b) => a - b)
  const arrayLength = sortedMergedArray.length
  const quotientOfArrayLength = Math.floor(arrayLength / 2)
  if (arrayLength % 2 === 0) {
    return (
      (sortedMergedArray[quotientOfArrayLength - 1] +
        sortedMergedArray[quotientOfArrayLength]) /
      2
    )
  } else {
    return sortedMergedArray[quotientOfArrayLength]
  }
}
