type BinaryNode<T> = {
  value: T
  right?: BinaryNode<T>
  left?: BinaryNode<T>
}

const walk = (node: BinaryNode<number>) => {
  const path = []

  path.push(node)

  if (!node.left) {
    return path
  }

  if (!node.right) {
    walk(node.left)
    return path
  }

  walk(node.left)
  return path
}

const breadthFirstBinaryWalk = () => {}
