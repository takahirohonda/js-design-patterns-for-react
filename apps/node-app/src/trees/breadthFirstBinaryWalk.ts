type BinaryNode<T> = {
  value: T
  right?: BinaryNode<T>
  left?: BinaryNode<T>
}

const walk = (node: BinaryNode<number> | undefined, path: number[]) => {
  path.push(node.value)

  if (!node) {
    return path
  }

  walk(node.left, path)

  if (!node.right) {
    return path
  }

  walk(node.right, path)
  return path
}

export const breadthFirstBinaryWalk = (rootNode: BinaryNode<number>) => {
  return walk(rootNode, [])
}
