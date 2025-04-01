type BinaryNode<T> = {
  value: T
  right?: BinaryNode<T>
  left?: BinaryNode<T>
}

const walk = (node: BinaryNode<number> | undefined, path: number[]) => {
  if (!node.left) {
    return path
  }
  path.push(node.left.value)

  if (!node.right) {
    return path
  }
  path.push(node.right.value)

  walk(node.left, path)
  walk(node.right, path)

  return path
}

export const breadthFirstBinaryWalk = (rootNode: BinaryNode<number>) => {
  return walk(rootNode, [rootNode.value])
}
