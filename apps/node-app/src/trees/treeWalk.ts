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

  // pre
  path.push(curr.value)

  // recurse
  walk(curr.left, path)
  walk(curr.right, path)

  // post
  return path
}

export const preOrderSearch = (head: BinaryNode<number>): number[] => {
  return walk(head, [])
}
