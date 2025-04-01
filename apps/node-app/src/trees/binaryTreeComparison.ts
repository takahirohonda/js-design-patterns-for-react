type BinaryNode<T> = {
  value: T
  right?: BinaryNode<T>
  left?: BinaryNode<T>
}
export const binaryTreeComparison = <T>(
  a: BinaryNode<T> | null,
  b: BinaryNode<T> | null
): boolean => {
  if (!a && !b) {
    return true
  }

  if (a?.value !== b?.value) {
    return false
  }

  return (
    binaryTreeComparison(a?.left, b?.left) &&
    binaryTreeComparison(a?.right, b?.right)
  )
}
