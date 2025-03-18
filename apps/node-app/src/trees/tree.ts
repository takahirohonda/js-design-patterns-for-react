type BinaryNode<T> = {
  value: T
  right?: BinaryNode<T>
  left?: BinaryNode<T>
}

export const walk = (
  curr: BinaryNode<number> | undefined,
  path: number[]
): number[] => {
  if (!curr) {
    return path
  }

  path.push(curr.value)
}

export const preOrderSearch = (head: BinaryNode<number>): number[] => {
  return walk(head, [])
}
