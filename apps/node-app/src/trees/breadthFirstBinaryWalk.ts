type BinaryNode<T> = {
  value: T
  right?: BinaryNode<T>
  left?: BinaryNode<T>
}

const walk = (node: BinaryNode<number> | undefined, path: number[]) => {
  const q = [node]

  while (q.length) {
    const curr = q.shift() as BinaryNode<number> | undefined | null
    if (!curr) {
      continue
    }
    path.push(curr.value)

    q.push(curr.left)
    q.push(curr.right)
  }

  return path
}

export const breadthFirstBinaryWalk = (rootNode: BinaryNode<number>) => {
  return walk(rootNode, [])
}
